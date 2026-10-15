"use strict";
const REPO = "https://github.com/notnotnotnoone/hackathons";
const RAW = "https://raw.githubusercontent.com/notnotnotnoone/hackathons/main/";
const $ = id => document.getElementById(id);
function text(tag, value, className) {
  const node = document.createElement(tag);
  node.textContent = value == null || value === "" ? "Not reported" : String(value);
  if (className) node.className = className;
  return node;
}
function sourceLink(path, label) {
  const a = text("a", label || "Source notes ↗");
  const url = new URL(path, REPO + "/blob/main/");
  a.href = url.origin === "https://github.com" && url.pathname.startsWith("/notnotnotnoone/hackathons/") ? url.href : REPO;
  return a;
}
function stamp(value) {
  if (!value) return "No update recorded";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Update time needs correction" :
    new Intl.DateTimeFormat("en-CA", {month:"short",day:"numeric",hour:"numeric",minute:"2-digit",timeZone:"America/Vancouver",timeZoneName:"short"}).format(date);
}
function pill(value) {
  const s = String(value || "Not reported");
  const cls = /^(done|reviewed|ready)$/i.test(s) ? "good" : /wait|help|blocked|review/i.test(s) ? "wait" : /working|investigating/i.test(s) ? "active" : "";
  return text("span", s, "pill " + cls);
}
function validateProgress(p) {
  if (!p || p.schemaVersion !== 1 || !p.latestInject || !p.updatedAt || Number.isNaN(Date.parse(p.updatedAt))) throw new Error("Invalid progress metadata");
  for (const key of ["assessment","workstreams","actions","milestones"]) {
    if (!Array.isArray(p[key])) throw new Error("Missing " + key);
  }
  if (p.assessment.length !== 6) throw new Error("Assessment must have six parts");
  if (!p.latestInject.checkedAt || Number.isNaN(Date.parse(p.latestInject.checkedAt))) throw new Error("Missing evidence-check time");
  return p;
}
function parseHumans(raw) {
  const sections = raw.split(/^={5,}\s*$/m);
  const roster = [
    {key:/^LEADER\s*-/i,name:"Leader",role:"Lead Cybersecurity Investigator"},
    {key:/^GRETSKY\s*-/i,name:"gretsky",role:"Evidence investigator · suggested"},
    {key:/^KHERION\s*-/i,name:"kherion",role:"Timeline analyst · suggested"},
    {key:/^KEVIN\s*-/i,name:"kevin",role:"Incident response analyst · suggested"}
  ];
  return roster.map(member => {
    const section = sections.find(part => member.key.test(part.trim()));
    const fields = {};
    if (section) for (const line of section.split(/\r?\n/)) {
      const i = line.indexOf(":");
      if (i > 0) fields[line.slice(0,i).trim()] = line.slice(i+1).trim();
    }
    return {name:member.name,role:fields.Role || (fields["Suggested role"] ? fields["Suggested role"] + " · suggested" : member.role),fields};
  });
}
function renderPeople(raw) {
  const nodes = parseHumans(raw).map(member => {
    const card = text("article", "", "person");
    card.replaceChildren(text("h3",member.name),text("p",member.role,"role"),pill(member.fields.Status));
    const dl = document.createElement("dl");
    for (const [label,key] of [["Working on","Working on"],["Finished / handoff","Finished / handoff link"],["Next step","Next step"],["Needs help","Need help with"]]) {
      dl.append(text("dt",label),text("dd",member.fields[key]));
    }
    card.append(dl,text("p",member.fields["Updated at (date, time, zone)"] || "No personal update recorded","meta"));
    return card;
  });
  $("people-grid").replaceChildren(...nodes);
  $("human-raw").textContent = raw;
}
function renderProgress(p) {
  $("inject-state").textContent = p.latestInject.state;
  $("inject-note").textContent = p.latestInject.id + " · " + p.latestInject.title + ". " + p.latestInject.note;
  $("inject-time").textContent = "Evidence checked: " + stamp(p.latestInject.checkedAt);
  $("reviewed-at").textContent = "Progress updated: " + stamp(p.updatedAt) + " · " + p.updatedBy;
  $("milestones").replaceChildren(...p.milestones.map(m => {
    const card = text("article","","milestone");
    card.replaceChildren(pill(m.status),text("strong",m.label),text("p",m.note));
    return card;
  }));
  $("assessment").replaceChildren(...p.assessment.map(a => {
    const row = text("article","","finding");
    row.replaceChildren(text("h3",a.label),text("p",a.text),sourceLink(a.source));
    return row;
  }));
  $("action-list").replaceChildren(...p.actions.map(a => {
    const row = text("article","","action"),body = document.createElement("div");
    body.append(text("h3",a.title),pill(a.status),text("p","Owner: " + a.owner));
    row.replaceChildren(text("span",a.id,"action-id"),body);
    return row;
  }));
  $("agents").replaceChildren(...p.workstreams.map(a => {
    const card=text("article","","agent"),head=document.createElement("header");
    head.append(text("h3",a.name),pill(a.status));
    card.replaceChildren(head,text("p","Updated: " + stamp(a.updatedAt),"meta"));
    for (const [label,key] of [["Completed","completed"],["Next","next"],["Needs","blocker"]]) {
      const line=document.createElement("p");line.append(text("strong",label + ": "),document.createTextNode(a[key] || "Not reported"));card.append(line);
    }
    card.append(sourceLink(a.source));return card;
  }));
}
async function loadText(url) {
  const response = await fetch(url, {cache:"no-store",signal:AbortSignal.timeout(12000)});
  if (!response.ok) throw new Error("HTTP " + response.status);
  return response.text();
}
let busy = false;
let progressLoaded = false;
let humansLoaded = false;
async function refresh() {
  if (busy) return;
  busy = true;
  $("refresh").disabled = true;
  const warnings=[];
  try {
    const results = await Promise.allSettled([
      loadText(RAW + "docs/progress.json").then(body => validateProgress(JSON.parse(body))),
      loadText(RAW + "human-status.txt")
    ]);
    if (results[0].status === "fulfilled") {renderProgress(results[0].value);progressLoaded=true;}
    else {
      warnings.push("Could not refresh progress from GitHub.");
      if (!progressLoaded) {
        try {renderProgress(validateProgress(JSON.parse(await loadText("./progress.json"))));progressLoaded=true;warnings.push("Showing the last deployed snapshot.");}
        catch { $("inject-state").textContent="Progress unavailable";warnings.push("Open the GitHub README for the latest handoff.");}
      } else warnings.push("Previous progress remains displayed.");
    }
    if (results[1].status === "fulfilled") {renderPeople(results[1].value);humansLoaded=true;}
    else {
      warnings.push("Could not refresh human statuses. Use the plaintext link to check directly.");
      if (!humansLoaded) {
        $("people-grid").replaceChildren(text("p","Human statuses unavailable; open the plaintext file.","muted"));
        $("human-raw").textContent="The plaintext file could not be loaded.";
      }
    }
    const checked = stamp(new Date().toISOString());
    $("connection").textContent = (warnings.length ? "Refresh incomplete · " : "Fetched from GitHub · ") + checked;
    $("error").hidden = !warnings.length;
    $("error").textContent=warnings.join(" ");
  } finally {busy=false;$("refresh").disabled=false;}
}
$("refresh").addEventListener("click",refresh);
setInterval(() => {if($("auto").checked && !document.hidden) refresh();},60000);
refresh();
