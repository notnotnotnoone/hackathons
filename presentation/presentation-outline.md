# Final presentation — Whoville blackout

**Owner:** kevin, incident response, with assistance. Built for the whole team to present.
**Status:** Final draft for leader approval. Not submitted. Not an approved utility order.
**Updated:** 2026-10-15 13:12 PDT (UTC−07:00). Inject 8 added to the walk-up. Inject 7 stays in the main sections.
**Evidence:** I-001 through I-008 (four images for I-004), Mission Overview, Instructions, Schedule, and Presentation Criteria.jpg (PC-001). Drive checked at 13:12 PDT: fifteen files, including Inject 8.
**Format known so far:** Instructions say judges walk around to every team at 1:45 PM and pick the top five; the schedule shows finalist presentations from 2:10 PM. No length, slide rule, or submission method is published. This file therefore has a 60-second walk-up and a five-minute finalist version.

Earlier drafts (10:55 to 12:32 PDT, with one addendum per inject) are in the git history of this file. Per-inject detail and the option table stay in [investigation/kevin-response.md](../investigation/kevin-response.md). The row-by-row timeline is in [investigation/team3.md](../investigation/team3.md); evidence limits are in [investigation/codex-evidence-analyst.md](../investigation/codex-evidence-analyst.md).

## 60-second walk-up

> On Christmas morning, 12 of Whoville's 18 feeders show no voltage, residents say they have no heat, and the utility's own screen contradicts itself. A second picture at the same minute is labeled a simulated view, not an engineering drawing, and its counts do not match. It marks the water plant offline and the hospital on backup generators. We do not switch from either screen, and we do not quote its customer count in public. Our working hypothesis — the one we investigate first — is an intrusion that began with a pirated-game download. We can show the pieces but not the links between them. On December 24 a work browser downloaded a "Tomodachi Life FREE" zip and a program called `ryujinxx.exe`. The same browser profile viewed a "Not secure" free-game site offering that game. A desktop folder with the zip's name holds `setup.exe` and an 82 KB program whose name reads "N0T stealing credentials". We did not open either. On the evening of December 24 a Google alert reports a new sign-in to `maxwafoone@gmail.com` from Mount Crumpit. Just before midnight the contractor account `max.contr.maint` fails once and then logs in to the SCADA host with a password. Two `su` attempts fail, `adminelk` runs `sudo su` as root, and 44 seconds later the logging service is stopped. We cannot show that the download ran, whose computer it was, or any command that opened a breaker. So we act on safety first, contain without destroying evidence, and tell the public only what we know: the power is out, here is how to stay safe, and the cause is under investigation.

## Five-minute finalist version

Proposed speakers follow the team roles. The leader confirms or changes them.

| Time | Speaker (proposed) | Section | Judging criterion |
|---|---|---|---|
| 0:00–0:30 | Leader | What happened and what we recommend | All |
| 0:30–1:45 | Gretzky (evidence) | What the evidence shows, and the breach hypothesis | 1. Technical analysis and threat detection |
| 1:45–2:30 | Kherion (timeline) | Timeline and affected systems | 5. Communication and reporting (internal report) |
| 2:30–3:45 | Kevin (response) | Response plan and data at risk | 2. Incident response strategy; 3. Data integrity and risk |
| 3:45–4:30 | Kevin, then Leader | Long-term fixes and the public statement | 4. Security recommendations; 5. Communication and reporting (public) |
| 4:30–5:00 | Leader | What would change our mind; how we worked | 6. Teamwork and critical thinking |

### 1. Technical analysis and threat detection

**The grid screen (I-001, Dec 25, 2026, 08:43:12 a.m., state DEGRADED, row times labelled PST)**

| Group | Feeders | Reading | Meaning for the response |
|---|---|---|---|
| Dark | FDR-01, 02, 06, 09–17 (12 feeders) | OFFLINE, 0.0 MW, 0.0 kV | Treat as no power until a crew confirms otherwise. All of North, West, and Ridge stations are in this group |
| Carrying load | FDR-04, 05, 08, 18 | 8.4–14.2 MW at 13.5–13.9 kV | FDR-04 and FDR-08 are labelled OFFLINE while carrying load. Do not open them because of the label |
| Uncertain | FDR-03 Downtown, FDR-07 Medical District | ONLINE, 0.0 MW, 13.7–13.8 kV | Voltage with no load. Customers may be dark. Check on site |

The footer says 17 offline and 1 online. The table says 14 and 4. Six feeders have voltage, and four carry load. None of those counts agree, and the screen itself warns that reported states do not match observed power flow. **We cannot trust the operations picture.** Whether that comes from a fault or from manipulation is unknown.

**The SCADA host (I-002, screenshot of `_logsrecovered.txt` from `whoville-scada`; no year or zone in the lines)**

- Dec 24, 17:20 and 17:22: `hoovey.admin.cpc` and `sally.admin.cpc` log in with passwords from `104.237.236.191` and `183.229.57.190`. Both sessions close by 17:58.
- 23:59:02, then 00:00:36: one failed and then one accepted password for the contractor account `max.contr.maint` from `89.46.57.27`.
- 00:01:51 and 00:03:03: two `su` authentication failures. The lines do not name the user.
- 00:05:14: `adminelk` runs `sudo /usr/bin/su` with `USER=root`, from `/etc`, on terminal `pts/0`.
- 00:05:58: `rsyslogd` exits on signal 15. The next logged line is a restart at 11:03:15.

What we noticed beyond the raw lines (each is an inference, labelled as such):

- **All three accepted logins use passwords from publicly routable addresses.** None is in a private range. Whatever the sessions were, the SCADA host appears to accept password SSH from outside addresses. That is a weakness regardless of who logged in.
- **`pts/0` probably ties `adminelk` to the contractor session.** If the visible lines are complete, the contractor session was the only one open at 00:05:14, and Linux reuses the lowest free terminal number. The log does not show a successful switch to `adminelk`.
- **The `sudo` process ID is out of order.** `sudo[1802]` is lower than `sshd[2296]`, `su[2599]`, and `su[2618]` logged minutes earlier, although Linux normally assigns rising IDs to new processes. Possible explanations are wrap-around, a container, an edited line, or exercise formatting. We flag it as a question, not as proof of tampering.
- **The backup job may not work.** At 17:30:38, root's cron runs `opt/backup/scada/dump.sh` with no leading slash and an output redirect shown as `> /dev/null/2.%1`. If that text is literal, the redirect is not valid and the job may never have written a backup. That matters for recovery.

**The breach hypothesis (I-003, I-005, I-006)**

| Step | Evidence | Confidence the step happened | Gap |
|---|---|---|---|
| A lure page offers the game | I-006: "FreeGameDownloads", `5freeedownloads.com/tomodachi/free/c` (three e's), marked Not secure, with a Download button | High that the page was viewed. Nothing shows when | No visit time, user, or computer |
| A work browser downloads it | I-005: managed Chrome, Dec 24, 2026: `Tomodachi Life FREE.zip`, `ryujinxx.exe`, `December Schedule.pdf`, `Logs.txt`. The browser toolbar (extensions and profile picture) is pixel-identical to I-006's, so both screens come from the same Chrome profile | High that the list shows this. High that I-005 and I-006 are the same profile | No source URL, no execution, no owner |
| The archive is unpacked | I-007: File Explorer, Desktop > Tomodachi Life FREE, 2 items: `N0Tstea1nG?CredEntials.exe` (82 KB; the character after G is I or l) and `setup.exe` (2 KB), both modified 8/12/2026 10:39 AM | Moderate. The folder name matches the zip | No computer or user shown. August modified dates are file metadata, which zips often keep. They are not the download date |
| A program runs and steals credentials | Nothing direct. The 82 KB file's name reads as "not stealing credentials", and `ryujinxx.exe` has one more x than the name of a known emulator (analyst background knowledge) | Low to moderate | No hash, no process record, no security alert |
| A personal account is accessed | I-003: alert of a new Google sign-in from Mount Crumpit for `maxwafoone@gmail.com`, Wed Dec 24, 10:12 PM. The Chrome profile picture in I-005 and I-006 is also an orange cartoon dog, similar to the Gmail avatar but a different image | Moderate that an alert was shown. Authenticity unknown. The avatar similarity is weak | Owner not asked. December 24, 2026 is a Thursday; Wednesday fits 2025 |
| The contractor account reaches the SCADA host | I-002: `max.contr.maint` fail then success from `89.46.57.27` | High that the log shows this | Authorization unknown. "max" in both names is not proof of one person |
| Privilege use and log stop | I-002: `su` failures, `adminelk` `sudo su`, rsyslog stopped 44 s later | High that the log shows this | No session link. Who sent signal 15 is unknown |
| The grid is affected | I-001 and I-004: dark feeders, contradictory screen, resident posts at 8:47 and 9:01 a.m. | High that the outage is real. Unknown that the intrusion caused it | No breaker command in any inject. Logging is blank from 00:05:58 to 11:03:15 |

**Alternatives we have not ruled out:** approved midnight maintenance combined with an unrelated equipment or supply failure; a monitoring or communications fault; personal downloads that have nothing to do with the outage.

**Framework labels for the hypothesis** (MITRE ATT&CK names, not evidence): User Execution of a malicious file (T1204.002), Credentials from Web Browsers (T1555.003), Valid Accounts (T1078), SSH (T1021.004), Sudo abuse (T1548.003), Impair Defenses (T1562), and for the grid Manipulation of View (T0832) and Loss of Availability (T0826). The suspected lateral movement is from an office browser, to a personal account, to the operational network using a contractor's credentials.

### 2. Timeline and affected systems (internal report)

| Scenario time, as displayed | Event | Source |
|---|---|---|
| Dec 24, 2026, no clock time | Downloads: game zip, `ryujinxx.exe`, schedule PDF, `Logs.txt` | I-005 |
| No time shown | FreeGameDownloads page for the same game, same Chrome profile as I-005 | I-006 |
| 8/12/2026 10:39 AM (file modified time, not an event time) | Desktop folder "Tomodachi Life FREE" with `N0Tstea1nG?CredEntials.exe` and `setup.exe` | I-007 |
| Dec 24, 17:20:02–17:58:20 | `hoovey.admin.cpc` and `sally.admin.cpc` sessions; root backup cron at 17:30:38 | I-002 |
| Wed Dec 24, 10:12 PM, no year | Google new-sign-in alert, Mount Crumpit, `maxwafoone@gmail.com` | I-003 |
| Dec 24, 23:59:02 → Dec 25, 00:05:58 | Contractor login, two `su` failures, `adminelk` sudo to root, logging stopped | I-002 |
| Dec 25, 2026, 08:42:12–08:43:12 | Dashboard DEGRADED: 12 dark feeders, contradictory labels and counts | I-001 |
| Dec 25, 2026, 08:47 and 09:01 | Residents: "nothing turns on", "freezing to death in my house" | I-004 |
| Relative times only | Reports from "central", East Valley, West Ridge, and Riverdale; a neighbour's generator in use; a viral "survival" post | I-004 |
| 11:00 AM and Dec 25, 11:03:15 | Logs recovered from a physical backup; rsyslog restarts | I-002 |

Order across sources assumes the clocks agree. I-002 and I-003 give no year or zone.

**Affected or involved systems:** `whoville-scada` (four named accounts plus root; about 11 hours without local logging); the Grid Operations Centre dashboard; 12 dark feeders and 2 uncertain ones; one organization-managed computer that has not been identified, which holds the I-007 folder if it is the same machine, and shows a personal OneDrive entry; one personal Google account; the backup server that held the recovered logs.

### 3. Incident response strategy

| Phase | Do now | Do next, once the precondition is met | Do not do |
|---|---|---|---|
| Identify | Keep every original. Pull relay and substation events for 00:05:58–11:03:15. Call the four account owners on known numbers. Identify whose computer and Chrome profile I-005, I-006, and I-007 came from | Analyse `ryujinxx.exe`, the zip, `setup.exe`, and the 82 KB program in an isolated lab, by authorized staff. Check the managed browser for saved passwords that match the four SCADA accounts | Click Download, fetch the site, or run any of the files |
| Contain | Welfare checks and warming for the 12 dark areas and the resident-named places. In-person check of the Medical District, then Downtown. Hold remote switching from `whoville-scada`. Run feeders from local, staffed control. Image the SCADA host and copy the backup before anything changes | After the calls: disable remote password login for `max.contr.maint`, block `89.46.57.27` at the perimeter, and take the identified computer off the network while it stays powered on | Reboot the SCADA host first. Switch feeders from the 17/18 footer. Disable every account at once and lock out the crews |
| Eradicate | Nothing until images exist and the field state is known | Rotate all SCADA and contractor credentials. Remove unknown keys, cron jobs, and accounts. Rebuild from a known-good image. The owner of `maxwafoone@gmail.com` secures it from a device they trust | Clean up before evidence is copied |
| Recover | Keep the four loaded feeders in service. Restore dark feeders from local indications | Trust the dashboard again only after it matches field readings feeder by feeder. Restart forwarded logging and confirm it arrives off the host | Declare the grid normal from this screen |
| Learn | Record each counting error and each transcription correction | Root-cause report once breaker history is known. Then the long-term fixes below | Publish a cause before it is proven |

**Root cause, honestly:** not yet known. The test that settles it is breaker and relay history for the logging gap. A remote command in that window points to the intrusion. No command, plus a field fault, points elsewhere.

### 4. Data integrity and risk

- **Tampering:** the recovered log says the originals were disabled, and rsyslog stopped 44 seconds after a root-targeted `sudo`. Local logs for about 11 hours cannot be trusted or are missing. The recovered copy has no hash or chain of custody.
- **Operations data:** the dashboard's labels and counts contradict its own measurements. Until field readings agree, the screen is a lead, not a fact.
- **Credentials:** possible exposure of the contractor's credentials and the Google account. That is a hypothesis.
- **Files that may have left or arrived:** `December Schedule.pdf` and `Logs.txt` were downloaded to the managed browser. Their contents and origin are unknown.
- **Persistence to look for:** new SSH keys, cron entries, accounts, or services on `whoville-scada`; `ryujinxx.exe`, `setup.exe`, the 82 KB program, and anything they installed on the computer.
- **Possible credential theft:** the 82 KB program's name reads as "not stealing credentials". If it ran, any password saved in that browser profile, including a work password, should be treated as stolen. That is a hypothesis until a lab result or a process record says otherwise.
- **Backups and restoration:** the root backup job's command looks malformed, so recent backups may not exist. Test a restore before relying on it.
- **Rubric wording:** the criteria photo mentions academic data and student records. There are none in the Whoville evidence. The equivalent sensitive data here is control-system telemetry, logs, credentials, and resident safety information.

### 5. Security recommendations and long-term defense

1. **Segmentation:** no direct SSH to the SCADA host from outside addresses. Use a monitored jump host with an allowlist, and keep office browsing off the control network.
2. **Authentication:** multi-factor and key-based SSH, with password login disabled. Contractor access should be named, approved for a set window, and expire automatically.
3. **Least privilege:** remove broad `sudo su` rights from `adminelk` and similar accounts, and alert on repeated `su` failures.
4. **Logging you cannot switch off quietly:** forward logs off the host in real time to write-once storage, alert when rsyslog stops, and record the year and zone in every line, synchronized by NTP. The clock gaps in this case made the investigation harder.
5. **Managed computers:** block executable downloads and unapproved software through browser policy, allow only approved applications, run endpoint detection, and train staff on "free game" lures.
6. **Monitoring integrity:** the dashboard should alarm when a status disagrees with flow, and operators need an independent way to read the feeders.
7. **Backups:** fix and test the backup job, keep an offline copy, and run restore drills.
8. **Ongoing:** vulnerability scanning, quarterly access reviews, and an outage exercise that includes warming sites and emergency services. The rubric's "telecom–university integration" example becomes third-party and contractor access here.

### 6. Communication

| Audience | When | What we can say |
|---|---|---|
| Emergency services | Now | Ask for on-site checks at medical facilities on FDR-07, and confirm hospital backup generation and fuel. Share the list of dark areas |
| Hydro Siber staff and crews | Now | Use local readings. No remote switching from `whoville-scada`. Do not touch the SCADA host or the identified computer |
| Account owners | Now, by known phone numbers | Were you working last night? Is this address yours? Is this Gmail account yours? |
| Residents | Now, then on a regular schedule the utility sets | The public statement below |
| Leadership, regulators, police, national cyber authority | Leader decision | Facts so far, including that unauthorized access is suspected and not confirmed |

**Public statement — for the leader to approve, edit, or reject**

> Many parts of Whoville are without power and heat this morning. Our crews are checking substations, starting with medical facilities. We do not yet know the cause, and we are investigating every possibility. Please check on your neighbours, especially older residents. Dress in layers. If your home gets too cold, go to a warming site: [locations confirmed by the city]. Use flashlights, not candles. Run generators only outdoors, away from doors and windows. Keep fridges and freezers closed, and avoid unnecessary travel. We will post our next update by [time set by Hydro Siber].

Why it is written this way:

- It answers the viral "survival" post (I-004c) without repeating it. Stay home instead of running to the store; keep the fridge closed instead of burying food in snow.
- The generator line responds to a resident who is already using a neighbour's generator (I-004b).
- "Avoid unnecessary travel" fits FDR-10 Transit Corridor showing no voltage.
- "Crews are checking" is only true once crews are actually sent. The warming sites and the update time are placeholders, because no inject names them.
- It says "investigating every possibility" instead of claiming or ruling out a cyberattack.

**Do not say:** "A cyberattack caused the blackout." "Malware from a game site caused it." "Seventeen of 18 feeders are down." "The hospital is dark" or "the hospital has power." Any account name, IP address, or the Gmail address.

## Questions judges may ask

- **Was it a cyberattack?** We can show suspicious access and logging being stopped on the SCADA host. We cannot yet show a command that opened a breaker. It is a likely security incident, and the cause of the outage is not yet proven. Breaker history for the logging gap would settle it.
- **Why not shut the SCADA system down?** Four feeders still carry load, and a reboot destroys evidence in memory. We stop remote switching and run from local control instead.
- **Why not disable every account right away?** That could lock out the people restoring power. We call first on known numbers, then cut the contractor's remote path.
- **What was the way in?** The leading candidate is the game zip and the misspelled emulator on a managed browser. The lure page comes from the same browser profile, and the Inject 7 desktop folder with the zip's name holds `setup.exe` and a program named like "not stealing credentials". The names support the lead. Nothing shows that a file ran.
- **The files say August 12 but the download says December 24. Is that a contradiction?** Not necessarily. Explorer shows the date modified, and zip files usually keep their contents' original modified dates. It is not when the zip was downloaded or opened.
- **Mount Crumpit — the Grinch?** Mount Crumpit is FDR-15's service area and the place named in the alert. We do not name an actor from a place name or a profile picture.
- **Why does the alert say Wednesday?** December 24, 2026 is a Thursday, and Wednesday fits 2025. The download history says 2026. We keep both raw dates instead of forcing them to agree.
- **What changed as injects arrived?** Injects 1 and 2 showed a broken screen and suspicious logins. Injects 3, 5, and 6 added a possible way in. Inject 7 shows two applications in a desktop folder with the zip's name, dated 8/12/2026 10:39 AM, which is not the December 24 download date. Inject 8 is a second 8:43 a.m. map, labeled simulated, with different counts, a water plant marked offline, and the hospital on backup power. Inject 4 confirmed that people were cold and that bad advice was spreading, which shaped the public statement.

## Critical thinking we can point to

- We rejected the dashboard's own summary count, which matches neither its table nor its measurements.
- We corrected our own transcriptions in public: process ID 2182 to 2189, the backup path with no leading slash, the Hoovey address `104.237.236.191` (an earlier note had 104.227), the site name `5freeedownloads` with three e's, and the Inject 7 name starting `N0T` with a zero.
- We tied I-005 and I-006 to one browser profile by comparing their toolbars, instead of relying on the shared game name.
- We kept the rubric's telecom and university examples out of our facts.
- We kept the weekday mismatch instead of guessing a year.

## Before 1:45 PM

- [ ] Leader approves this version, or edits it.
- [ ] Leader approves, edits, or rejects the public statement.
- [ ] Team confirms speakers and practises the 60-second version once.
- [ ] Ask the organizers about presentation length and format if anyone can.
- [ ] Recheck Drive for a new inject before walking in.

No utility command, external message, or competition submission was made.


## Final Inject 8 — Evidence desk addendum for leader approval (13:06 PDT)

**This is an evidence-desk addendum to Kevin's presentation, not independent leader approval.** It should be integrated into the 60-second and five-minute scripts before presenting. The existing seven-inject draft above remains historical until the team approves the exact revised wording. [Source: original I-008](https://drive.google.com/file/d/1-gc6iqIzCkryqRweTdYDUH0TLYf4cuM5/view) · [full I-008 evidence analysis](../investigation/codex-evidence-analyst.md#i-008--e-008--final-grid-operations-map).

### Recommended change to the spoken summary

> Final Inject 8 gives us a simulated Hydro Siber regional map dated Dec 25, 2026 at 8:43 AM, labelled PDT. It reports 92,430 customers without power and demand at 1,240 MW, down 18 percent from forecast. The hospital is on partial power with backup generators, water treatment is shown offline, and transit is partially powered. The displayed system includes 12 online, 5 degraded, 6 offline, and 3 unverified feeder statuses. Crucially, SUB-03 shows SCADA Online but field status Unconfirmed, while its note says SCADA shows offline; SUB-07 telemetry is unverified. The map is simulated, and the earlier feeder IDs are not directly interchangeable with these substation IDs. We have a strong picture of reported impacts but **still no verified cause or cyber-to-breaker command**. Our first response is to verify and protect critical services, preserve evidence, and restrict unsafe actions only through authorized operators.

### Operational evidence to add to the judging version

| Area | I-008 observed condition | Implication |
|---|---|---|
| System impact | 92,430 customers reportedly out (+14%), 1,240 MW demand (-18% vs forecast) | Quantifies the on-screen impact; denominator/baseline for customer change not shown |
| Critical services | Hospital partial, backup generators active; water treatment offline; transit partial; emergency services online | Prioritize independent hospital/water/welfare and generator checks |
| SUB-03 Central | SCADA Online; field Unconfirmed; 0 MW; 28,600 customers; note oddly says SCADA offline | **Internal contradiction**; don't order grid changes using one status field |
| SUB-05 Hillsdale Park | SCADA/Field Offline, 0 MW, 17,200 customers | Physical outage state still needs confirmation; 07:32 mismatch alert could describe a prior condition |
| SUB-07 Riverdale | SCADA/Field Unverified; 84 MW; 12,600 customers; telemetry loss since 06:31 | Telemetry uncertainty, not automatic proof of no power |
| SUB-01 and SUB-02 | Degraded/Degraded | Voltage/service concerns in North Heights and East Valley |
| SUB-04 and SUB-06 | Online/Online | These are substation IDs, **not** the FDR-04 and FDR-06 feeder IDs from Inject 1 |

**Alert sequence, as displayed:** 07:32 SUB-05 status mismatch; 07:41 SUB-03 output loss; 07:57 water treatment offline; 08:12 North Heights voltage anomalies; 08:36 SUB-07 telemetry unverified; 08:41 Central District customer reports. The dashboard headline reads **PDT** despite a December date; Inject 1 was described with **PST** readings. Keep raw times and do not assert synchronization.

**Important presentation correction:** The earlier 60-second opener says **12 of 18 feeders show no voltage**, based on Inject 1's row readings. That is an earlier screenshot-specific statement, not equivalent to Inject 8's **12 online / 5 degraded / 6 offline / 3 unverified** summary; the underlying asset counts are different and cannot be reconciled without an asset map. State the source explicitly rather than implying one snapshot corrected the other. Also avoid treating station MW figures (820 and 640) as actual measured generation.

### Likely judge questions

- **Did the final map prove the cyberattack?** No. It shows reported degradation, service disruption and unreliable/contradictory telemetry, not a successful malicious breaker command or attribution.
- **How many feeders were down?** Inject 1 and Inject 8 use different asset displays/count definitions. Report each separately; neither reconciles the other without topology and definitions.
- **What would you do first?** Verify hospital backups and water-treatment status with appropriate operators, support affected people, independently cross-check switch/relay states, and preserve forensic logs. Do not command switching based on contradictory screenshots.
- **What is the most serious risk?** Hospital continuity and offline water treatment, followed by unverified operational states. A cyber origin remains a competing hypothesis, not a finding.
- **Is the timestamp trustworthy?** The new screen displays December 25 and **PDT**. Prior readings were tagged **PST**. Treat cross-source timing as provisional.

**Approval gate:** Leader and response owner reconcile this addendum into the final spoken script before the 1:45 PM judging walkthrough. Presentation remains **not approved and not submitted** in the recorded materials.
