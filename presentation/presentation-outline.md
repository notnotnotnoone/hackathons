# Presentation draft — for leader review

**Owner:** kevin, incident response. This is an assisted draft, not a submitted presentation and not an approved utility order.
**Updated:** 2026-10-15 12:32 PDT (UTC−07:00)
**Evidence:** I-001 through I-006, Mission Overview, Instructions, Schedule, and the judging-criteria photo. Drive rechecked at 12:32 PDT: thirteen files.
**Use:** Walk-up answer for judges, and a short oral if the team is selected. A criteria photo is now in the Drive folder. Duration and submission method are still unpublished. Do not present this until the leader accepts the wording.

Options and tradeoffs stay in [investigation/kevin-response.md](../investigation/kevin-response.md). The timeline stays in [investigation/team3.md](../investigation/team3.md). The evidence limits stay in [investigation/codex-evidence-analyst.md](../investigation/codex-evidence-analyst.md).

## Finding in one sentence

Much of Whoville is showing no voltage on a freezing morning, the operations screen disagrees with itself, and the SCADA host's logging was stopped after a privileged login. That login is not proof the login caused the blackout.

## Walk-up version

Residents are without power and heat. Twelve of 18 feeders show zero power and zero voltage. Four still show load, including two that the screen marks offline. The Medical District shows voltage and no load, so someone has to check that facility in person. Just after midnight, a contractor login, two failed `su` attempts, a root-targeted `sudo` by `adminelk`, and a logging stop happened on `whoville-scada`. Logging was off at the time of the 8:43 a.m. screen if the clocks match. No line in the recovered screenshot operates a breaker. We hold remote switching, preserve the host and the backup, and we do not tell the city this was a confirmed cyberattack.

## If the team is selected to present

Aim for about four minutes. Cut to the walk-up version if the slot is shorter.

### 1. What we were asked

Find what the evidence supports, separate life safety from the cause, and say what Hydro Siber should do next. The mission says the utility does not know the cause. We still do not.

### 2. What the grid screen shows

Source: I-001, Dec 25, 2026, 8:43:12 a.m. System state DEGRADED. Row times are labeled PST.

| Group | Feeders | Reading | What we do with it |
|---|---|---|---|
| Treat as dark until a crew confirms | FDR-01, FDR-02, FDR-06, FDR-09–FDR-17 | OFFLINE, 0.0 MW, 0.0 kV | Welfare checks and warming. North, West, and Ridge stations have no voltage in this set |
| Keep in service until local gear agrees | FDR-04, FDR-05, FDR-08, FDR-18 | Voltage about 13.5–13.9 kV and load from 8.4 to 14.2 MW | FDR-04 and FDR-08 are labeled OFFLINE anyway. Do not open them from that label |
| Check on site before trusting the label | FDR-03 Downtown, FDR-07 Medical District | ONLINE, 0.0 MW, voltage about 13.7–13.8 kV | Zero load is not proof the customers are dark, and it is not proof a hospital is powered |

The footer says 17/18 offline and 1/18 online. The status column says 14 offline and 4 online. The warning on the same screen says reported state does not match observed power flow. The footer is not a switching order.

### 3. What the recovered log shows

Source: I-002, screenshot of `_logsrecovered.txt`, host `whoville-scada`. Year and zone are not in the log lines. Order below assumes one clock.

| Time | Visible entry | Limit |
|---|---|---|
| Dec 24, 5:22:43 p.m. | Password accepted for `sally.admin.cpc` from `183.229.57.190` | Authorization unknown. Session closed at 5:46 p.m. |
| Dec 24, about 5:20 p.m. | Clipped accepted-password line for `hoovey.admin.cpc` | Bottom line is cut off. Do not rely on a source address from that line |
| Dec 24, 5:58:20 p.m. | `hoovey.admin.cpc` session closed, `sshd[2189]` | Evidence reread and this chat agree. An earlier timeline line said 2182 |
| Dec 24, 11:59:02 p.m. then Dec 25, 12:00:36 a.m. | One failed password, then a success, for `max.contr.maint` from `89.46.57.27` | One failure is not brute force |
| Dec 25, 12:01:51 and 12:03:03 a.m. | Two `su` authentication failures | The lines do not name the user |
| Dec 25, 12:05:14 a.m. | `adminelk` sudo of `/usr/bin/su` as root, directory `/etc`, terminal `pts/0` | This does not by itself prove a finished root shell or name the person |
| Dec 25, 12:05:58 a.m. | `rsyslogd` exits on signal 15 | A stop request. Sender unknown |
| Dec 25, 11:03:15 a.m. | `rsyslogd` starts | Header says recovered at 11:00 a.m. Those two times still need an explanation |

There is no shown session that ties `max.contr.maint` to `adminelk`. There is no breaker command. Missing logs are not evidence that a breaker moved.

### 4. Response, in incident order

| Phase | Do now | Leave for later |
|---|---|---|
| Identify | Keep this screenshot. Compare it with relay and local substation records. Call the four account owners on known numbers | Naming an actor or a cause |
| Contain | Welfare checks for the twelve dark feeders. In-person power check at the Medical District, then Downtown. Hold remote switching from `whoville-scada`. Copy the backup, then keep it from being changed. Leave the host powered on | Disabling the contractor login until those calls are done. Any public line until the leader approves it |
| Eradicate | Nothing yet | Password changes, key removal, and a rebuild, after an image and after the field state is known |
| Recover | Keep the feeders that still show load in service. Restore the dark areas from local indications | Declaring the grid normal from this dashboard |
| Learn | Record which screen counts were wrong and that logging could be stopped | A full lessons report before the outage is stable |

### 5. Lines that are ready, and lines that are not

Ready for the leader to approve as public wording:

> Many areas of Whoville are without power and heat. Crews are checking substations, including medical facilities. The cause is under investigation. Check on neighbors and use a known warming site.

Not ready:

- “A cyberattack caused the blackout.”
- “Seventeen of 18 feeders are down.”
- “The hospital is dark” or “the hospital has power.”
- Any account name, address, or claim about who sent signal 15.

### 6. What would change the briefing

- A relay or local event showing a breaker operation during the logging gap.
- An out-of-band answer that the midnight login and the `adminelk` command were approved maintenance.
- A crew report on the Medical District.
- A new inject. None was in the Drive folder at 10:55 PDT.

## Draft submission against the known requirements

Instructions say three hours to review, build the presentation as you go, and use the last hour to finalize. Judging on the schedule is 1:45 p.m., with no date or time zone. This draft does not set a deadline.

| Submission gate | This draft |
|---|---|
| Answers the known prompt: what happened, and what to do | Yes, within the evidence |
| Meets a confirmed rubric, length, format, and deadline | No. Those requirements have not been published |
| Claims cite evidence IDs | Yes |
| Separates observation, source claim, and hypothesis | Yes |
| Covers alternatives, safety, and tradeoffs | Yes. The option table is in investigation/kevin-response.md |
| Leader approved this exact version | No |

## Inject 3 addendum — 2026-10-15 11:05 PDT

Add this only if a judge asks what arrived after the first draft. Do not add it to the public paragraph.

Inject 3 is a screenshot of an email titled Security alert. It displays Wed, Dec 24, 10:12 PM, with no year and no zone, and claims a new Google sign-in from Mount Crumpit for `maxwafoone@gmail.com`. Mount Crumpit is also the FDR-15 service area, which at 08:42:40 PST showed 0.0 MW and 0.0 kV. The screen has no IP and no separate sign-in time. The button was not opened.

Say this: the name and the place are leads for an out-of-band call. They are not proof that this Google user is `max.contr.maint`, and they are not proof that the sign-in caused the outage. The header says Wednesday. December 24, 2026 was a Thursday, and the email states no year.

Leave the public paragraph as written. R-11 in [investigation/kevin-response.md](../investigation/kevin-response.md) is the account action: ask, do not click, do not reset yet.

## Inject 4 addendum — 2026-10-15 11:18 PDT

Four resident posts. Use them as reports of what people are saying. Do not read the usernames as confirmed identities.

- At 8:47 a.m. and 9:01 a.m. on Dec 25, 2026, posts say nothing turns on and a person is freezing at home. That is the same morning as the 8:43 a.m. dashboard.
- A West Ridge comment matches FDR-02, which showed zero voltage. “Central,” “east valley,” and “Riverdale” are not feeder names on that screen. Check those reports too.
- One reply says the person is using a neighbour’s generator. Do not add a generator sentence unless the leader accepts it.
- Do not repeat the post that says the clock is ticking, tells people to run to the store, and hopes they make it out alive.
- One comment guesses the outage is everywhere and says they are not sure. Four feeders were still showing load at 8:43 a.m.

The public paragraph stays the same unless the leader adds the generator line.

## Inject 5 addendum — 2026-10-15 12:02 PDT

Say this only if asked what the newest screen shows.

It is Chrome download history on a browser the page says is managed by an organization. December 24, 2026 lists `Tomodachi Life FREE.zip`, `ryujinxx.exe`, `December Schedule.pdf`, and `Logs.txt`. Older files are marked deleted. The screen has no user, no computer name, and no sign that a file was opened.

Do not call this the cause. Do not name the executable in a public line. Do not clear the history.

## Inject 6 addendum — 2026-10-15 12:32 PDT

Say this only if asked what the newest screen shows.

It is a page titled FreeGameDownloads. The address bar says “Not secure” and shows `5freedownloads.com/tomodachi/free/c`, then cuts off. The logo says Tomodachi Life, Living the Dream, and there is a Download button. That game name is the same name on the zip in the December 24 download list. The page does not show a click, a saved file, or a computer name.

Do not click Download. Do not call the site the cause. Do not add it to the public paragraph.

## Judging-criteria photo — 2026-10-15 12:32 PDT

[Presentation Criteria.jpg](https://drive.google.com/file/d/1aF2OWNdCtQQq7PKXtBt9cm4pke95WU1h/view) is a phone photo. The title is Young Defenders of the North Judging Criteria. The phone clock reads 10:56, with no date or zone. Six headings are 5 points each:

1. Technical analysis and threat detection.
2. Incident response strategy.
3. Data integrity and risk assessment.
4. Security recommendations and longer-term defense.
5. Communication and reporting.
6. Teamwork, presentation, and critical thinking.

The bullets mention telecom gear, a university link, and academic records. Use those bullets as the score sheet. Do not state them as things that happened in Whoville. For this incident, “data at risk” means the operations picture, the recovered log, and the download list, not student records. Duration is still not on this photo.

## Message for Team Leader

> Inject 6 is a download page, not proof a file was saved or run. Please do not approve clicking Download, fetching that address, or naming the site in public. The criteria photo can shape the oral. Please still accept or edit the public paragraph before anyone says it. Please do not approve a malware announcement, a SCADA reboot, or switching from the 17/18 footer.
