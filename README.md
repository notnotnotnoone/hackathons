# Young Defenders — Team Command Center

**Whoville / Hydro Siber blackout investigation**

**[Open the progress website](https://notnotnotnoone.github.io/hackathons/)** · [Agent website-update instructions](AGENTS.md) · [Website data](docs/progress.json)

[Current assessment](#current-assessment) · [Team status](#team-status) · [Next actions](#next-actions) · [Evidence and injects](#evidence-and-injects) · [Requirements](#challenge-requirements) · [How to update](#how-to-update)

**[Human team status](human-status.txt)** · **[Shared Google Drive](https://drive.google.com/drive/folders/1tpag2T6jptGhCC7E2tKtuZbTXLQ9B-Mj)** · **[Master timeline](investigation/team3.md)** · **[Evidence analysis](investigation/codex-evidence-analyst.md)** · **[Response options](investigation/kevin-response.md)** · **[Presentation draft](presentation/presentation-outline.md)** · **[Analyst work logs](archive/status.md)** · **[Previous README / assessment history](archive/readme-before-lead-sync.md)**

## Repository structure

```text
README.md          Investigation hub and navigation
AGENTS.md          Shared agent instructions
human-status.txt   Personal team updates
investigation/     Evidence, timeline and response notes
handoffs/          Teammate handoff snapshots
presentation/      Presentation draft
archive/           Historical status and previous README
docs/              GitHub Pages website and progress data
```

## At a glance

| Item | Current position |
|---|---|
| Latest inject | **Inject 8 — grid operations map: 92,430 customers out, hospital on backup generators, water treatment offline. Reviewed by the evidence desk (about 13:02 PDT), response (13:06–13:12 PDT) and timeline (13:06 PDT)** |
| Investigation | **Active. Blackout cause and unauthorized activity remain unconfirmed.** |
| Latest published analyst updates reviewed | Evidence desk through 13:05 PDT; timeline through 13:06 PDT; response through 13:12 PDT, October 15, 2026 |
| Lead reconciliation | The lead's numbered assessment was last reconciled at 10:34 PDT (Injects 1–2). At Kevin's request, the response chat reconciled the assessment below through Inject 8 at 13:12 PDT. The leader has not reviewed that version and may revise it. |
| Drive coverage | Fifteen files at about 13:02 PDT (evidence desk): Injects 1–8, including four Inject 4 images, plus Instructions, Schedule, Mission Overview, and Presentation Criteria.jpg. The evidence desk calls Inject 8 the final labelled inject. |
| Review coverage | Evidence desk, timeline and response reviewed every inject through Inject 8. The response chat re-checked all originals against the repo at 12:45–13:06 PDT; see [Sync audit](#sync-audit--2026-10-15-1312-pdt). The lead's personal review is not assumed. |
| Remaining intake gaps | Presentation length and format, submission method, explicit deadline, event time zone, and AI/sharing rules. The rubric is known from PC-001: six criteria, 5 points each. Its telecom and university examples are not Whoville facts |
| Submission | **Final presentation ready for leader approval:** [presentation/presentation-outline.md](presentation/presentation-outline.md), mapped to the six criteria, with Inject 8 in the main sections (13:12 PDT). The evidence desk's Inject 8 addendum is kept at the end. Not approved and not submitted |
| Participant presence | Gretzky (10:49), Kherion (10:50) and Kevin (10:51) confirmed in human-status.txt. The leader's personal status was last updated at 11:01 PDT. |
| Next priority | **Before 1:45 PM judging:** leader approves the presentation and the public statement, and confirms speakers. Safety: hospital generator fuel and the water treatment plant. Investigation: breaker and relay history for 00:05:58–11:03:15 and 06:31–08:43, the computer behind I-005–I-007, and account-owner calls |

**What changed:** The assessment, event sequence, contradictions, team table, actions, register and requirements below now cover Injects 1–8. Earlier wording is kept in git history and in the collapsed lead assessment.

## Sync audit — 2026-10-15 13:12 PDT

Kevin asked the response chat to check every repository file against the Drive originals without assuming any of it was right. Each item below was re-checked against the saved original images.

**Corrected in the response files, presentation, and progress data**

| Item | Was | Is | Basis |
|---|---|---|---|
| I-002 Hoovey login address | `104.227.236.191` in the response note; unresolved in the timeline | `104.237.236.191`; full line Dec 24 17:20:02, `sshd[1994]` | Clipped digits compared with the screenshot's own fully visible digits |
| I-006 domain | `5freedownloads.com`, "cuts off" (response) | `5freeedownloads.com/tomodachi/free/c`, three e's, not cut off | Zoomed address bar. The evidence desk was right |
| I-007 first filename | `NOTstea1n…` with a letter O (all three desks) | `N0Tstea1nG?CredEntials.exe` with a zero. The character after G is I or l | Compared with the zeros in "2026" and "10:39" on the same screen |
| PC-001 | "phone photo" (response) | Phone screenshot of a Drive viewer | Status bar, title bar, Drive and Share buttons |
| progress.json assessment | Described Injects 1–3 ("leader is working on Inject 3") | Reconciled through Inject 7 | This audit |
| I-008 SUB-01 SCADA status | Degraded (evidence log) | Degraded on the map, **Online** in the table on the same screen | Zoomed map label and table row |
| I-008 customer change | "comparison period not shown" (evidence log) | "▲14% (and rising)" | Zoomed header |
| Website role labels | Gretzky and Kherion shown as "suggested" | "confirmed" when the plaintext file has a filled-in "Role confirmed" field | docs/app.js |

**New observations (inferences, not events)**

- I-005 and I-006 toolbars are pixel-identical, so the download list and the lure page come from the same Chrome profile.
- All three accepted SSH logins on `whoville-scada` come from publicly routable addresses.
- `adminelk`'s `sudo` ran on `pts/0`. If the visible lines are complete, the contractor session was the only one open then.
- `sudo[1802]` is lower than the process IDs logged minutes earlier (2296, 2599, 2618).
- The backup cron text `(opt/backup/scada/dump.sh) > /dev/null/2.%1)` would normally fail if literal, so recent backups may not exist.
- "Wed, Dec 24" fits 2025, not 2026. I-005 explicitly says December 24, 2026.
- I-008: SUB-03 Central reads "Online" in SCADA at 0 MW while its note says "SCADA shows offline" and customers there report outages. Together with I-001 FDR-03 and the I-004 "central" post, this is the clearest sign the operators' view is wrong.
- I-008: the earliest problem time on any screen is SUB-07 telemetry loss at 06:31, 6 h 25 min after rsyslog stopped.
- I-008: Mount Crumpit, the I-003 sign-in location, is also where the Crumpit Generating Station is shown.
- The Reddit poster in "central" reports no power while all Central Station feeders show voltage. FDR-03 Downtown shows 0.0 MW, which fits customers being dark.

**Flagged for the owning desk (not edited here)**

- [investigation/team3.md](investigation/team3.md): header still says Updated 11:01 PDT. "whobrisubris" should be `whobrishubris`, as in the screenshot. The Hoovey bottom row can now carry 17:20:02 and `104.237.236.191`.
- [investigation/codex-evidence-analyst.md](investigation/codex-evidence-analyst.md): header still says "Injects 1, 2 and 3 reviewed" and 11:02 PDT. The I-006 section escapes its backticks, so code formatting shows as literal backticks. "Central Whoville" overstates the post's "I live in central". "Mayor-branded" overstates a handle that reads `notyourmayor_`.

## Team handoff — 2026-10-15 10:41 PDT (UTC-07:00), historical

The user of the evidence chat explicitly confirmed presence; recorded in [human-status.txt](human-status.txt) without guessing a roster name. This update shares new information through GitHub; it does not establish that teammates have read it.

**Completed:** Inject 1/2 visual evidence analysis, combined timeline published by timeline support, Instructions/Mission Overview text review, complete Schedule visual review, and evidence-desk native-resolution recheck of log transcription differences. No Inject 3 appeared in the latest Drive listing.

**Still open:** full source logs/provenance, maintenance/account/IP authorization, session links, reason for logging stop, physical outage/service confirmation, clocks, dashboard logic, requirements/rubric, and presentation preparation/approval.

**Proposed handoffs (not accepted assignments):** timeline support to reconcile PID/script spelling and clocks; response support has drafted options in [investigation/kevin-response.md](investigation/kevin-response.md), and Medical District service still needs a field check; leader to confirm requirements and review R-01–R-10 before any external message; evidence desk to correlate later injects and evaluate full records when available. Kevin confirmed the Member 4 status at 10:51 PDT. The leader's personal status is still unreported.

**Assessment:** Access and logging activity are priority leads; cyberattack, actor identity, and blackout causation remain unconfirmed.


## Gretzky evidence update — Inject 3 — 2026-10-15 11:03 PDT (UTC-07:00)

**Source:** [Inject 3](https://drive.google.com/file/d/1iQa1Y2u0vdNfuVin0ejEClH4pdJv0KUL/view), I-003 / E-003; [full evidence analysis](investigation/codex-evidence-analyst.md#i-003--e-003--google-sign-in-alert-screenshot).

- Visually reviewed the original-resolution screenshot. Email displays Google / no-reply@accounts.google.com and claims a new sign-in for maxwafoone@gmail.com from Mount Crumpit. Displayed email time: Wed, Dec 24, 10:12 PM; year/zone absent.
- Possible connections: max.contr.maint in Inject 2 and Mount Crumpit / FDR-15 in Inject 1. These are leads, not proven identity or causation; Inject 3 has no source IP.
- Displayed sender and URL cannot authenticate an email or reveal the actual button target. Phishing and unauthorized access are unconfirmed; the owner has not said whether they recognized the sign-in.
- Calendar caveat: Dec 24, 2026 was Thursday, not the displayed Wednesday. Preserve raw dates; do not assume alignment or infer another year.
- Status: evidence through Inject 3 reviewed. Six files were listed in Drive around 11:01 PDT. Open questions are tracked for later injects; Gretzky does not need to obtain inaccessible records.
- Proposed handoff: timeline to preserve clock/year uncertainty; leader to consider this account-access lead in the presentation. No email link was opened and no account or utility action taken.

## Current assessment

**Coverage:** Reconciled through Inject 8 by Kevin's response chat at Kevin's request, 13:12 PDT. It draws on the published evidence, timeline and response logs and a fresh check of every original. The leader has not reviewed this version and may revise it. The lead's Injects 1–2 assessment is kept below.

1. **Situation:** At Dec 25, 2026, 08:43 the grid map shows 92,430 customers without power and rising, the hospital on backup generators, the water treatment plant offline and the transit hub on partial power (I-008). The distribution screen is DEGRADED: 12 of 18 feeders show 0.0 MW and 0.0 kV, four carry load, and two show voltage with no load, Downtown and the Medical District. Residents report no power and no heat at 8:47 and 9:01 a.m. (I-001, I-004). The cause is not established.
2. **New findings:** The SCADA host log shows password SSH logins from three public addresses. The contractor account logs in at midnight after one failure, two `su` attempts fail, `adminelk` runs `sudo su` as root, and rsyslog stops 44 seconds later (I-002). A Google new-sign-in alert from Mount Crumpit names `maxwafoone@gmail.com` (I-003). One managed Chrome profile downloaded `Tomodachi Life FREE.zip` and `ryujinxx.exe` on Dec 24, 2026 and viewed a Not secure `5freeedownloads.com` game page (I-005, I-006). A desktop folder with the zip's name holds `N0Tstea1nG?CredEntials.exe` (82 KB) and `setup.exe` (I-007). The grid map shows SUB-03 Central "Online" at 0 MW with customer outage reports, SUB-07 blind since 06:31, and alerts from 07:32 (I-008).
3. **Leading hypotheses:** The working hypothesis to investigate first runs as follows. A pirated-game lure delivered a credential stealer. Stolen contractor credentials reached the SCADA host. Privileges were raised, logging was stopped, and the grid or its monitoring was then affected. Each step is shown on its own; the links between them are not. Confidence in the full chain is low to moderate. Alternatives remain: approved maintenance plus an unrelated equipment or supply failure, a monitoring or communications fault, or unrelated personal downloads. **A cyberattack as the cause of the blackout is not established.**
4. **Contradictions:** Footer 17/1 vs table 14/4 vs six feeders with voltage vs four with flow. FDR-04 and FDR-08 are OFFLINE with load. The 11:00 recovery note conflicts with the 11:03:15 restart. "Wed, Dec 24" conflicts with Dec 24, 2026 being a Thursday. `sudo[1802]` is lower than the IDs logged before it. In I-008, SUB-03 is Online with a note saying offline, SUB-01 is Degraded on the map and Online in the table, the same 8:43 is PST in I-001 and PDT in I-008, and 26 feeder statuses do not match 18 feeders. August file dates vs a December download is not necessarily a contradiction.
5. **Recommended action:** Life safety first: confirm hospital generator fuel, tell the water utility and fire services the treatment plant shows offline, then welfare checks and warming for the dark areas and the resident-named places, then in-person checks of the Medical District and Downtown. Hold remote switching from `whoville-scada` and operate locally. Image the SCADA host and copy the backup before changes, and do not reboot first. Call the four account owners on known numbers, then disable the contractor's remote password login and block `89.46.57.27`. Identify the computer behind I-005–I-007, keep it powered on but off the network, and do not open the files. Issue a public statement only after leader approval. See the [presentation](presentation/presentation-outline.md) and the [response options](investigation/kevin-response.md).
6. **Critical unknowns:** breaker and relay history for 00:05:58–11:03:15 and 06:31–08:43; hospital fuel and water status on the ground; how SUB substations map to FDR feeders; whose computer and Chrome profile; whether any file ran; authorization of the four accounts; who sent signal 15; the year and zone of I-002 and I-003; presentation length, format and submission method.

**Interpretation limits:** One failed password followed by success does not establish brute force. The sudo entry does not by itself prove a successful root shell. Signal 15 does not prove malicious log suppression. Timing alone does not connect different accounts or prove blackout causation. Filenames are not proof that a file ran. IP and account strings are correlation leads, not confirmed malicious indicators.

<details>
<summary>Lead assessment for Injects 1–2 (lead reconciliation, 10:34 PDT), kept for history</summary>

1. **Situation:** The mission describes widespread electricity and heating loss in winter. Inject 1 shows degraded distribution monitoring; Inject 2 adds recovered host logs from `whoville-scada`. Neither source independently establishes the initiating blackout cause.
2. **New findings:** The analysts transcribe a failed then accepted login for `max.contr.maint` from `89.46.57.27`, two `su` authentication failures, `adminelk` invoking `/usr/bin/su` through sudo with `USER=root`, and rsyslog exiting 44 seconds later. This makes access, privilege use, and logging interruption priority investigative leads.
3. **Leading hypotheses:** For the access/logging sequence, unauthorized account or privilege misuse and authorized maintenance are competing explanations; current evidence cannot defensibly rank them as the blackout cause. For dashboard discrepancies, stale data, communication/display faults, equipment/measurement faults, and deliberate manipulation remain alternatives. Equipment failure, human error, and environmental/supply disruption remain open blackout explanations. **A cyberattack is not yet established.**
4. **Contradictions:** Inject 1 table counts are 14 OFFLINE / 4 ONLINE versus footer counts of 17 / 1; FDR-04 and FDR-08 show OFFLINE with nonzero flow. Inject 2's 11:00 AM recovery annotation conflicts with a Dec 25 11:03:15 restart if date and clocks match. Analyst transcriptions also differ on one PID and backup-command formatting; see below.
5. **Recommended action:** Seek original complete logs, approved maintenance/account/IP baselines, session and audit linkage, and the reason/sender for the logging stop. Independently verify Medical District service and switch/measurement state. Prepare the presentation as findings develop; obtain leader approval before submission or operational action.
6. **Critical unknowns:** Authorization, account-to-session linkage, log year/time zone, recovery provenance, continuous logging coverage, actual outage onset and scope, causal connection to SCADA control actions, and official judging constraints.

**Interpretation limits:** One failed password followed by success does not establish brute force. The sudo entry does not by itself prove a successful root shell. Signal 15 does not prove malicious log suppression. Timing alone does not connect different accounts or prove blackout causation. IP/account strings are correlation leads, not confirmed malicious IOCs. No Cyber Kill Chain progression is established.

</details>

### Key event sequence

Incident times below are scenario times, separate from October 15 team work times. I-002 and I-003 omit the year and zone, so cross-source order assumes the clocks agree. The row-by-row timeline is in [investigation/team3.md](investigation/team3.md).

| Raw source time | Reported observation | Source |
|---|---|---|
| Dec 24, 2026; no clock time | Chrome download group: `Tomodachi Life FREE.zip`, `ryujinxx.exe`, `December Schedule.pdf`, `Logs.txt`; browser "managed by your organization" | I-005 |
| No time shown | FreeGameDownloads page, `5freeedownloads.com/tomodachi/free/c`, Not secure, Download button; same Chrome profile as I-005 | I-006 |
| 8/12/2026 10:39 AM; date modified, not an event time | Desktop > Tomodachi Life FREE: `N0Tstea1nG?CredEntials.exe` (82 KB), `setup.exe` (2 KB) | I-007 |
| Dec 24 17:20:02 | Accepted password for `hoovey.admin.cpc` from `104.237.236.191`, `sshd[1994]`; bottom line clipped | I-002 |
| Dec 24 17:22:43 | Accepted password for `sally.admin.cpc` from `183.229.57.190`; authorization unknown | I-002 |
| Dec 24 17:30:38 | Root cron `(opt/backup/scada/dump.sh) > /dev/null/2.%1)` as displayed | I-002 |
| Dec 24 17:46:00 / 17:58:20 | sally and hoovey sessions closed (`sshd[2123]`, `sshd[2189]`) | I-002 |
| Wed, Dec 24, 10:12 PM; no year or zone | Google alert: new sign-in from Mount Crumpit for `maxwafoone@gmail.com` | I-003 |
| Dec 24 23:59:02 → Dec 25 00:00:36 | One failed then accepted password for `max.contr.maint` from `89.46.57.27` | I-002 |
| Dec 25 00:01:51 / 00:03:03 | Two `su` authentication failures; initiating user not shown | I-002 |
| Dec 25 00:05:14 | `adminelk` sudo `/usr/bin/su`, `USER=root`, `pts/0`, `/etc` | I-002 |
| Dec 25 00:05:58 | rsyslog exit on signal 15; cause and sender unknown | I-002 |
| 06:31 (alert clock, no date) | SUB-07 Riverdale telemetry lost | I-008 |
| 07:32–08:41 (alert clocks) | Six alerts: SUB-05 mismatch; SUB-03 loss of output to the Industrial Zone; water treatment plant offline; North Heights voltage anomalies; SUB-07 unverified; Central District customer reports | I-008 |
| Dec 25, 2026 08:42:12–08:43:03 PST | Feeder readings; FDR-04 and FDR-08 OFFLINE with nonzero MW and kV | I-001 |
| Dec 25, 2026 08:43:12 AM; header zone unstated | DEGRADED dashboard and inconsistent summary counts | I-001 |
| Dec 25, 2026 8:43 AM PDT | Grid map: 92,430 customers out and rising; hospital on backup generators; water treatment offline | I-008 |
| Dec 25, 2026 8:47 AM / 9:01 AM; zone unstated | Resident posts: "nothing turns on"; "freezing to death in my house" | I-004 |
| 11:00 AM; Dec 25 11:03:15 | Recovery annotation; rsyslog start | I-002 |

### Contradictions to resolve

| Issue | What is established in published analyses | Required check |
|---|---|---|
| Table versus footer | 14/4 versus 17/1; six feeders have voltage and four carry load, matching neither | Raw dashboard inputs, count definitions, refresh timing |
| OFFLINE with flow | FDR-04: 12.8 MW / 13.6 kV; FDR-08: 9.6 MW / 13.5 kV | Independent equipment readings and switch state |
| Recovery versus restart | 11:00 AM annotation versus 11:03:15 log entry | Recovery date, rounding, collection process, clock offsets |
| Weekday versus year | I-003 "Wed, Dec 24"; Dec 24, 2026 is a Thursday; Wednesday fits 2025. I-005 says December 24, 2026 | Original email headers; keep both raw dates |
| sudo process ID | `sudo[1802]` at 00:05:14 is lower than `sshd[2296]`, `su[2599]`, `su[2618]` before it | Original log; wrap-around, container, edited line, or exercise formatting |
| August files versus December download | I-007 date modified 8/12/2026 10:39 AM; I-005 download Dec 24, 2026 | Not necessarily a contradiction: zips usually keep original modified dates |
| SUB-03 Central (I-008) | SCADA Online and field Unconfirmed at 0 MW; note says "SCADA shows offline"; customer reports at 08:41 | Crew reading at the substation |
| SUB-01 North Heights (I-008) | Map: SCADA Degraded. Table: SCADA Online | Raw SCADA point values |
| Zone labels | I-001 rows PST; I-008 header PDT for the same 8:43 a.m.; daylight time does not apply in December | Clock configuration of both systems |
| Feeder scope | I-008: 26 feeder statuses (12/5/6/3); I-001: 18 feeders. SUB IDs are not FDR IDs | Asset inventory and topology |
| Hoovey session-close PID | Resolved: `sshd[2189]` (timeline corrected at 10:50 PDT) | None |
| Backup script transcription | Resolved: `opt/backup/scada/dump.sh` without a leading slash; the redirect text needs the original | Original text |
| Hoovey login address | Resolved 13:05 PDT: `104.237.236.191` (response had 104.227) | Original text preferred; line clipped |
| I-006 domain | Resolved: `5freeedownloads.com`, three e's | None |

Zero MW with nonzero voltage on FDR-03/FDR-07 needs operating context; it is not automatically inconsistent or malicious.

## Team status

**People: update [human-status.txt](human-status.txt).** It is the single place for each person's current task, completed work, next step, blocker, and update time. Everyone uses the same account, so sign entries with your team name. Unreported status does not imply inactivity.

| Team member | Role |
|---|---|
| You — Leader | Lead Cybersecurity Investigator |
| gretsky — Member 2 | Evidence investigator; confirmed by Gretzky at 10:49 PDT |
| kherion — Member 3 | Timeline analyst; confirmed by Kherion at 10:50 PDT |
| kevin — Member 4 | Incident response analyst, confirmed 10:51 PDT |

Members 2–4 confirmed their roles in the plaintext file. Shared-account commits do not establish which person used an analyst chat.

### AI analyst workstreams

| Workstream | Recorded progress | Next handoff |
|---|---|---|
| Lead support | Reconciled published Inject 1–2 handoffs and organized the hub (last 10:34 PDT); leader status Working on Inject 3 at 11:01 PDT | Approve the final presentation and public statement before 1:45 PM |
| Timeline support (Kherion) | Injects 1–8 reviewed; [master timeline](investigation/team3.md) latest update 13:06 PDT | Clocks, provenance; header date and one handle spelling flagged in the sync audit |
| Evidence desk (Gretzky) | Injects 1–8 and PC-001 reviewed; [evidence notes](investigation/codex-evidence-analyst.md) latest update 13:05 PDT; [handoff](handoffs/gretzky-handoff.md) | Full records, authorization, cross-source verification |
| Response support (Kevin) | Injects 1–8 reviewed; repo sync audit and final rubric-mapped presentation at 13:05–13:12 PDT | Leader approves the presentation and public statement; confirms speakers |

**Chat visibility:** The available app listing exposed this lead chat and the related “Hackathon Crash Course” chat. The latter contains role/setup messages, with assistant content only exposed as reference placeholders. The separate evidence/timeline chats were not exposed in that listing; their committed handoffs were reviewed instead. This is not a claim that every same-account chat has been read. No messages were sent to other chats.

## Next actions

Owners below are proposed workstreams, not claims that a named teammate has accepted a task.

| Priority / ID | Action | Proposed owner | Done when |
|---|---|---|---|
| **Now / A-001** | Rubric known from PC-001 (six criteria, 5 points each). Still confirm presentation length and format, submission method, explicit deadline, event zone, and AI/sharing rules | Leader + team | Remaining official requirements recorded |
| **Now / A-002** | Update [human-status.txt](human-status.txt) and confirm your role | All members | Each member's latest work, blocker, and update time are recorded |
| **High / A-003** | Obtain complete original recovered logs, collection details, and account/maintenance approvals; explain dashboard count/flow mismatch | Evidence desk | Source completeness, authorization, and telemetry discrepancies assessed |
| **High / A-004** | Verify Medical District service, switch states, and independent measurements; reconcile source clocks. Safety priority and option comparison drafted in [investigation/kevin-response.md](investigation/kevin-response.md); field verification is still open | Response + timeline | Safety assessment and clock basis supported by evidence |
| **High / A-005** | Correlate SSH, sudo/su, process ancestry, service manager, audit and SCADA command records | Evidence + timeline | Session links and logging-stop reason established or explicitly unresolved |
| **High / A-006** | Evidence desk native-resolution reread supports PID 2189 and script spelling without leading slash; response OCR agrees. Timeline handoff still needs reconciliation; exact redirection requires original text | Evidence + timeline | Shared notes reconciled with correction history; original text checked when supplied |
| **Now / A-007** | Final presentation written and mapped to the six criteria: [presentation/presentation-outline.md](presentation/presentation-outline.md). Leader review is open | Response + leader | Leader accepts the exact version, or edits it, before 1:45 PM |
| **Now / A-008** | Approve, edit or reject the public statement; confirm speakers; practise the 60-second walk-up once | Leader + team | Decision recorded in human-status.txt before judging |
| **High / A-009** | Identify the computer and Chrome profile behind I-005–I-007; keep it powered on and off the network; do not open the files | Response + evidence | Owner and host named, or explicitly unknown |

## Evidence and injects

Drive originals remain the source material. The register below indexes them; it does not authenticate their contents. This lead sync adopts the evidence desk's **E-002** for Inject 2; timeline-local collection aliases are not additional shared IDs.

| ID / material | Source | Review state / location |
|---|---|---|
| **I-008 — grid operations map** | [Inject 8](https://drive.google.com/file/d/1-gc6iqIzCkryqRweTdYDUH0TLYf4cuM5/view) | Evidence desk (about 13:02 PDT) and response (13:06 PDT) reviewed; [evidence](investigation/codex-evidence-analyst.md#i-008--e-008--final-grid-operations-map), [response](investigation/kevin-response.md#i-008-response--2026-10-15-1312-pdt). Simulated view, not an engineering single-line. SUB-01 and SUB-03 statuses contradict themselves |
| **I-007 — desktop folder** | [Inject 7](https://drive.google.com/file/d/1swqAROKb7An3qeNk3noP8o9pOQ00C63C/view) | Evidence desk, timeline and response reviewed 12:47–12:51 PDT; [evidence](investigation/codex-evidence-analyst.md#i-007--e-007--new-file-explorer-evidence), [timeline](investigation/team3.md#inject-7--windows-folder-contents-i-007--2026-10-15-1247-pdt), [response](investigation/kevin-response.md#i-007-response--2026-10-15-1249-pdt). First filename starts `N0T` with a zero |
| **I-006 — FreeGameDownloads page** | [Inject 6](https://drive.google.com/file/d/1pRAe1brGsL_7PGZZ_B4xY-3mKlikQmIw/view) | Evidence desk and response reviewed; [evidence](investigation/codex-evidence-analyst.md#i-006--e-006--freegamedownloads-browser-screenshot), [response](investigation/kevin-response.md#i-006-response--2026-10-15-1232-pdt). Domain `5freeedownloads.com`, three e's. Same Chrome profile as I-005 |
| **Judging criteria photo** | [Presentation Criteria.jpg](https://drive.google.com/file/d/1aF2OWNdCtQQq7PKXtBt9cm4pke95WU1h/view) | PC-001. Evidence desk and response reviewed. Phone screenshot of a Drive viewer. Six criteria, 5 points each. Example wording is not Whoville evidence |
| **I-005 — Chrome download history** | [Inject 5](https://drive.google.com/file/d/1MR7QpdHrDBFiORdyDPr1D4jA5iqbZyjy/view) | Evidence desk and response reviewed; [evidence](investigation/codex-evidence-analyst.md#i-005--e-005--chrome-download-history-screenshot), [response](investigation/kevin-response.md#i-005-response--2026-10-15-1202-pdt). Filenames are not proof a file ran |
| **I-004 — four resident posts** | [Reddit-style](https://drive.google.com/file/d/1CUNuPYSCE9y9prf1uCUYhjlMU9K1_WAm/view), [9:01 a.m. tweet](https://drive.google.com/file/d/1XN9CpCFTRhB8AuFq9e_RgGDRfUK5cAIL/view), [advice post](https://drive.google.com/file/d/1a2gAJlOUtpwflgsO99Zex6_nqia_a_CA/view), [8:47 a.m. tweet](https://drive.google.com/file/d/1fAsOH6POqtOg9kaey9DQqxxYqrmyYScE/view) | Evidence desk, timeline and response reviewed; [evidence](investigation/codex-evidence-analyst.md#i-004--e-004--community-outage-posts-and-public-advice), [response](investigation/kevin-response.md#i-004-response--2026-10-15-1118-pdt). Posts are claims, not confirmed identities or a cause |
| **I-003 / E-003 — Google sign-in alert screenshot** | [Inject 3](https://drive.google.com/file/d/1iQa1Y2u0vdNfuVin0ejEClH4pdJv0KUL/view) | Evidence desk, timeline and response reviewed; [findings and limits](investigation/codex-evidence-analyst.md#i-003--e-003--google-sign-in-alert-screenshot); authenticity, authorization and account links unconfirmed |
| **I-001 / E-001 — distribution dashboard** | [Inject 1](https://drive.google.com/file/d/1AHluXwG8ne_K1KfKtUmcuQq0oamum46p/view) | Analysts visually reviewed; [evidence notes](investigation/codex-evidence-analyst.md#i-001--e-001--inject-1-review), [master timeline](investigation/team3.md#updated-timeline) |
| **I-002 / E-002 — recovered SCADA logs screenshot** | [Inject 2](https://drive.google.com/file/d/1MCgSzKr_hXeddiMRyeHfcDiRR4_k9u51/view) | Analysts visually reviewed; cropped screenshot, original text absent from current listing; [detailed findings](investigation/codex-evidence-analyst.md#important-findings); [response options](investigation/kevin-response.md) |
| Instructions | [PDF](https://drive.google.com/file/d/1G-lUTUJ4UZskPRoqscOQGws27nFlLr2W/view) | Evidence desk and lead sync checked extracted text; duplicated characters in extraction |
| Mission Overview | [PDF](https://drive.google.com/file/d/1DLBUDgcRvDuI3U80JKUTrM3kXnUGv61z/view) | Evidence desk and lead sync checked extracted text; scenario context |
| Schedule | [PDF](https://drive.google.com/file/d/1WC0S3vKC0HR8sd2lQq1gzcs9qh7fcjSC/view) | Evidence desk visually reviewed the full page at 10:40 PDT; [transcribed schedule and limits](investigation/codex-evidence-analyst.md#schedule-visual-review-completed). Response chat OCR agrees. No zone on the page |

No external research is used in this assessment. Download hashes reported by timeline support track its copies; no hash or source authenticity is independently verified by this lead sync. Inject receipt times and inject-specific deadlines were not fully recorded.

## Challenge requirements

Direct text extraction of Instructions supports these working requirements, consistent with the evidence desk's reading. Confirm the displayed times visually with the organizer; duplicated extraction characters have been normalized.

| Requirement | Recorded position |
|---|---|
| Investigation window | Three hours to review scenario and injects |
| Presentation preparation | Build as you go; use the last hour to finalize. If judging at 1:45 PM is the end point, the last hour began about 12:45 PM (calculation only) |
| Judging | Instructions and visually reviewed Schedule indicate **1:45 PM** judging walkthrough / top five selected. Schedule also displays 2:10 PM finalist presentations and 2:45 PM top three announcement. Event date/zone unstated |
| Published start / deadline | Schedule displays 10:15 AM Hackathon Begins; no event date/time zone or explicit submission deadline. Three hours later is 1:15 PM by calculation only; reconcile with 1:45 PM judging before using a deadline |
| Rubric / scoring weights | PC-001 (Presentation Criteria.jpg): 1. Technical analysis and threat detection; 2. Incident response strategy; 3. Data integrity and risk assessment; 4. Security recommendations and long-term defense; 5. Communication and reporting; 6. Teamwork, presentation and critical thinking. 5 points each, 30 total. Telecom and university examples are not Whoville facts |
| Presentation duration, format, submission method | Not established |
| AI, research, and sharing rules | Not established |
| Presentation draft / approval / receipt | Final draft at [presentation/presentation-outline.md](presentation/presentation-outline.md), 13:05 PDT. No leader approval or submission confirmation recorded |

### Submission gate

- [ ] Answers the actual prompt and each official rubric criterion.
- [ ] Meets the confirmed deadline, format, length, and presentation requirements.
- [ ] Significant claims cite evidence IDs and exact source locations.
- [ ] Distinguishes source claims, observations, inference, hypotheses, and outside research.
- [ ] Addresses alternatives, contradictions, confidence, public safety, and response tradeoffs.
- [ ] Leader approves the exact final version; authorized submitter records confirmation.

## How to update

**Progress website:** Agents read [AGENTS.md](AGENTS.md), update their source log, then update their own workstream in [docs/progress.json](docs/progress.json). Set actual update times and retain teammates' entries. The site reads committed data and [human-status.txt](human-status.txt) every two minutes while visible; it does not check Drive itself. People continue editing the plaintext file. For normal progress updates, do not edit HTML/CSS/JS. Refresh the page after committing and verify the shown time.

1. **Team members:** Open [human-status.txt](human-status.txt), click the pencil, and edit only your own section. Write your status, current task, finished work or handoff link, next step, help needed, and date/time/zone. Update after an inject, completed task, blocker, or task change.
2. **Roles:** Confirm suggested roles in that file. Use plain language and one status: Ready, Working, Need help, Waiting, or Done. Leave unknown progress as “Not reported.”
3. **AI analysts:** Keep detailed findings in your existing analyst log, with evidence IDs, exact locations, limitations, corrections, and a dated handoff. Do not present AI work as a person's completed work or change another person's status without their report. Label proposed human updates as drafts until the person confirms.
4. **Lead:** Use the plaintext file for personal progress and the analyst logs for investigation progress. Reconcile findings into this README's assessment, actions, and coverage time. Check recent commits as well as status dates before concluding someone is inactive.
5. **New inject:** Assign the next I-/E- IDs, link its original, record receipt separately from scenario time, and update the evidence index and assessment.
6. **Shared account:** Refresh and fetch the current version before editing, preserve others' changes, and commit with your name, for example `kevin: update human status`. Handoffs should name the recipient and link the finding or draft. GitHub history retains prior updates.
7. **Approval:** Investigation and draft preparation do not authorize utility changes, external communications, or competition submissions.

<details>
<summary>Copyable six-part update</summary>

```text
Member / workstream:
Updated at / time zone:
Injects / evidence / exact locations:
1. Situation:
2. New findings:
3. Leading hypotheses and confidence:
4. Contradictions:
5. Recommended action / owner / checkpoint:
6. Critical unknowns:
```

</details>

<details>
<summary>Reference and history</summary>

- [Master timeline and timeline leader handoff](investigation/team3.md)
- [Evidence findings, limitations, and evidence leader handoff](investigation/codex-evidence-analyst.md)
- [Incident response options and leader handoff](investigation/kevin-response.md)
- [Presentation draft for leader review](presentation/presentation-outline.md)
- [Analyst work logs](archive/status.md) — some older sections refer to four files / Inject 1; prefer each file's latest dated update.
- [Pre-reorganization README](archive/readme-before-lead-sync.md) — retains initial assessment, earlier register entries, role handoffs, and operating guidance. Historical statements are not current status.
- [Commit history](https://github.com/notnotnotnoone/hackathons/commits/main/) — inspect alongside signed logs when checking progress.

</details>

This repository is public. Keep original evidence in Drive and follow official sharing rules. This is a checked snapshot, not an automatically synchronized dashboard.

**Accuracy before confidence. Unknown means unknown.**

## Kherion timeline handoff — Inject 3

Timeline support downloaded and visually reviewed I-003/E-003. The alert message displays Wed Dec 24 10:12 PM (year/zone unstated), claims a new sign-in for maxwafoone@gmail.com from Mount Crumpit, and does not provide the exact sign-in timestamp or source IP. Weekday versus scenario-year alignment needs clarification; account-name and location similarities do not establish identity or blackout causation. [Full sourced timeline update and six-part assessment](investigation/team3.md#inject-3-update--2026-10-15-1101-pdt). Earlier assessments remain preserved; leader reconciliation may supersede them explicitly.

## Kevin response handoff — Inject 3

Response support reviewed the same screenshot at 11:05 PDT. Life safety and the public paragraph stay as written. R-11 asks the contractor contact, out of band, whether `maxwafoone@gmail.com` and the Mount Crumpit sign-in are theirs. Do not click the button in the screenshot and do not reset that Google account from this image. [Response note](investigation/kevin-response.md#i-003-response--2026-10-15-1105-pdt). [Presentation addendum](presentation/presentation-outline.md#inject-3-addendum--2026-10-15-1105-pdt).

## Gretzky evidence update — Inject 4 — 2026-10-15 11:18 PDT (UTC-07:00)

**Sources:** Four Drive screenshots, grouped as I-004 / E-004a–d: [Reddit thread](https://drive.google.com/file/d/1CUNuPYSCE9y9prf1uCUYhjlMU9K1_WAm/view), [Mayor-branded X post](https://drive.google.com/file/d/1XN9CpCFTRhB8AuFq9e_RgGDRfUK5cAIL/view), [Facebook advice post](https://drive.google.com/file/d/1a2gAJlOUtpwflgsO99Zex6_nqia_a_CA/view), and [X post](https://drive.google.com/file/d/1fAsOH6POqtOg9kaey9DQqxxYqrmyYScE/view). See the [full evidence analysis](investigation/codex-evidence-analyst.md#i-004--e-004--community-outage-posts-and-public-advice).

- The Reddit comments mention outage/heating problems in East Valley, West Ridge, and Riverdale; the post itself asks where else power is out. Its time is relative (“1h”) and the screenshot status bar reads 11:34.
- The Mayor-branded X screenshot says the poster is cold and asks if power is out; it displays Dec 25, 2026, 9:01 AM. A reply mentions using a neighbor’s generator.
- Another X post says “nothing turns on,” displayed Dec 25, 2026, 8:47 AM. Neither X screenshot shows a time zone or permalink.
- A Facebook post uses urgent survival language and advises, among other things, burying food in snow and running to a store for water. The displayed time is relative (“23m”); identity, source, and accuracy are unknown. Do not repeat its advice as official guidance without checking an authoritative source.
- These are social-media claims, not independent feeder measurements. They do not establish exact outage scope, prove a cyberattack, or connect public posts to the SCADA activity. Preserve provenance, time-zone, account-identity, and location uncertainty.

**Suspicious activity:** No screenshot shows a login, utility command, malicious link, or direct cyber action. The urgent advice is a public-safety/misinformation lead, not proof of coordinated manipulation or malicious intent.

**Missing information:** Original post links/platform records, absolute times and zones, account and location authentication, independent outage confirmation, and the advice source.

**Message for Team Leader:**

> Inject 4 contains four social-media screenshots reporting power/heating problems in Central Whoville, East Valley, West Ridge, and Riverdale; two X screenshots display Dec 25, 2026 at 8:47 and 9:01 AM, while Reddit/Facebook times are relative. They are public claims, not independent feeder measurements, and their time zones and account identities are unverified. One Facebook post gives urgent household advice, including burying food in snow and going to a store for water; please check any response against official safety guidance before repeating it. The posts do not establish a cyberattack or explain the blackout.

**Assessment boundary:** This evidence-desk handoff updates the Inject 4 source findings. The lead’s six-part incident assessment was last reconciled separately; cyberattack, actor identity, and blackout causation remain unconfirmed.

## Kevin response handoff — Inject 4

At 11:18 PDT the Drive folder had four Inject 4 images. They are resident reports of a power and heat outage. West Ridge matches dark feeder FDR-02. Riverdale, east valley, and “central” are not on the feeder table. Timed posts are 8:47 a.m. and 9:01 a.m. on Dec 25, 2026. Do not repost the survival advice. The public paragraph is unchanged; a generator sentence is optional and needs the leader. [Response note](investigation/kevin-response.md#i-004-response--2026-10-15-1118-pdt). [Presentation addendum](presentation/presentation-outline.md#inject-4-addendum--2026-10-15-1118-pdt).

## Kevin response handoff — Inject 5

At 12:02 PDT the folder included a Chrome download-history screenshot. December 24, 2026 lists `Tomodachi Life FREE.zip`, `ryujinxx.exe`, `December Schedule.pdf`, and `Logs.txt`. The page says the browser is managed by an organization. It does not name the user or the computer, and it does not show that a file ran. Do not clear the history and do not run the files. The public paragraph is unchanged. [Response note](investigation/kevin-response.md#i-005-response--2026-10-15-1202-pdt). [Presentation addendum](presentation/presentation-outline.md#inject-5-addendum--2026-10-15-1202-pdt).

## Gretzky evidence handoff — Inject 5 — 2026-10-15 12:06 PDT

**Source:** [I-005 / E-005 Chrome download-history screenshot](https://drive.google.com/file/d/1MR7QpdHrDBFiORdyDPr1D4jA5iqbZyjy/view). **Full evidence report:** [Inject 5 findings, source-time limitations, hypotheses, and leader message](investigation/codex-evidence-analyst.md#i-005--e-005--chrome-download-history-screenshot). **Updated handoff:** [Gretzky](handoffs/gretzky-handoff.md#inject-5--i-005--e-005--new-evidence-handoff).

The screenshot groups `Tomodachi Life FREE.zip`, `ryujinxx.exe`, `December Schedule.pdf`, and `Logs.txt` under **December 24, 2026**. Chrome states that the browser is managed by an organization. The executable name resembles Ryujinx with an extra `x`; this suggests an origin-and-execution check, **not** a demonstrated malicious file. Neither file contents nor exact download times, source URLs, host/user mapping, execution, or SCADA relationships are shown. I-002 and I-003 clocks and account links remain unresolved. No blackout-causation or attacker attribution claim is supported.

**Next:** Timeline may correlate any later source times if exact event records arrive; the leader can use the cautious one-paragraph finding above. Keep the incident assessment and Kevin's public paragraph unmodified pending leader reconciliation and approval. The screenshot was reviewed, but no download URLs or files shown inside Chrome's history were opened or executed. No competition submission was made.

## Kevin response handoff — Inject 6

At 12:32 PDT the folder included a FreeGameDownloads screenshot and Presentation Criteria.jpg. The address bar shows “Not secure” and the text `5freeedownloads.com/tomodachi/free/c` (corrected at 12:50 PDT: three e's, not cut off). A Tomodachi Life logo and a Download button are on the page. That game name matches the zip on the Inject 5 list. The page does not show a click, a saved file, or a computer. Do not click Download. The criteria photo has six headings at 5 points each; its telecom and university examples are not Whoville evidence. The public paragraph is unchanged. [Response note](investigation/kevin-response.md#i-006-response--2026-10-15-1232-pdt). [Presentation addendum](presentation/presentation-outline.md#inject-6-addendum--2026-10-15-1232-pdt).


## Gretzky evidence handoff — Inject 6 — 2026-10-15 12:39 PDT

**New evidence:** [I-006 screenshot](https://drive.google.com/file/d/1pRAe1brGsL_7PGZZ_B4xY-3mKlikQmIw/view) and [Presentation Criteria.jpg](https://drive.google.com/file/d/1aF2OWNdCtQQq7PKXtBt9cm4pke95WU1h). **Detailed documentation:** [I-006 observations, cross-inject pattern matrix, missing links and criteria review](investigation/codex-evidence-analyst.md#i-006--e-006--freegamedownloads-browser-screenshot). **Teammate handoff:** [Gretzky Inject 6](handoffs/gretzky-handoff.md#inject-6--i-006--e-006--evidence-and-criteria-update).

- Chrome shows **FreeGameDownloads**, **Not secure**, Tomodachi Life artwork, a Download area and visible address text `5freeedownloads.com/tomodachi/free/c`. Zoomed review supports **three e's after fr**, correcting the competing two-e transcription in the response note. This is one image, not evidence of two visited sites.
- That game theme matches the `Tomodachi Life FREE.zip` entry in Inject 5's Dec 24, 2026 Chrome download history. It is **a meaningful correlation lead**, not evidence that this website actually served the ZIP, `ryujinxx.exe` executed, a credential was compromised, SCADA was reached, or the blackout was caused by cyber activity. E-006 has no visit timestamp or identified device/user.
- The new judging image shows **six categories of five points (30 total)**: technical analysis/threat detection; incident response; data integrity/risk; security hardening; communication/reporting; teamwork/presentation/critical thinking. Several criteria explicitly describe **telecom/university integration and academic records**, which conflict with this Whoville electricity/heating scenario. Seek organizer confirmation before claiming the rubric applies or inventing unrelated impacts.
- Evidence desk status is **reviewed through Inject 6**. Leader-controlled briefing and presentation still require explicit approval. No suspicious site was visited, downloaded file opened, utility operated, public statement sent or competition submission made.

**Message for team leader:** The strongest new line of inquiry is a possible game-themed download lure linking I-006 page imagery to I-005 ZIP naming. Confirm host/browser identity, actual file origins, exact timestamps and any executable/process records if the organizers supply them; until then this is a conditional hypothesis. Confirm whether the 30-point criteria image is applicable. [Full evidence and limits](investigation/codex-evidence-analyst.md#i-006--e-006--freegamedownloads-browser-screenshot).

## Kevin response handoff — Inject 7

At 12:49 PDT the folder included a File Explorer screenshot. The window is a folder named Tomodachi Life FREE on a desktop. The breadcrumb shows a cloud icon and the words Start backup. Two applications are listed, both dated 8/12/2026 10:39 AM: a name read as `N0Tstea1nG?CredEntials.exe` at 82 KB (zero after the N; the character after G is I or l), and `setup.exe` at 2 KB. The folder name matches the Inject 5 zip. The date does not match December 24. Neither file was opened. Do not run them. The public paragraph is unchanged. [Response note](investigation/kevin-response.md#i-007-response--2026-10-15-1249-pdt). [Presentation](presentation/presentation-outline.md).


## Gretzky evidence update — Inject 7 — 2026-10-15 12:51 PDT

**Source:** [Inject 7 screenshot](https://drive.google.com/file/d/1swqAROKb7An3qeNk3noP8o9pOQ00C63C/view). **Full evidence review:** [E-007](investigation/codex-evidence-analyst.md#i-007--e-007--new-file-explorer-evidence). **Member handoff:** [Gretzky through Inject 7](handoffs/gretzky-handoff.md#inject-7--i-007--e-007--evidence-handoff).

The screenshot shows **Desktop > Tomodachi Life FREE** with **two Windows Application entries**: an **82 KB executable with a credential-related name** and **`setup.exe` (2 KB)**. Both display **Aug 12, 2026, 10:39 AM** under **Date modified**, with no time zone. The first filename's ambiguous glyphs were transcribed slightly differently by the evidence and response desks; preserve the original screenshot as the authoritative reference.

**Cross-inject pattern:** I-005 shows `Tomodachi Life FREE.zip` in a Dec 24, 2026 download group. I-006 shows a similarly themed webpage. I-007 shows applications in a folder with the same name. This supports a **plausible software-download lead**, but not verified ZIP extraction, common browser/device ownership, file execution, credential access, SCADA compromise or outage causation. The August **file modification** dates cannot be substituted for December download or infection times.

**Next evidence needed if supplied:** Original ZIP listing, source URLs, file identity/hash, process activity, user and host mapping, and any independently verified utility-control event. Existing public safety priorities and presentation-approval gate remain unchanged. No executable was run, utility operated or external message submitted.

## Kevin response handoff — Inject 8

Inject 8 is the utility's grid map at 8:43 a.m.: 92,430 customers out and rising, the hospital on backup generators, and water treatment offline. SUB-03 Central reads "Online" in SCADA at 0 MW while customers there report outages, and SUB-01 is Degraded on the map but Online in the table. The first problem time is 06:31, 6 h 25 min after logging stopped. Still no breaker command or cause. Response: confirm hospital fuel, tell the water utility and fire services, send crews to SUB-03 and SUB-07, and keep the existing holds. Public paragraph unchanged; no customer count and no water advice unless the city confirms it. [Response note](investigation/kevin-response.md#i-008-response--2026-10-15-1312-pdt). [Presentation](presentation/presentation-outline.md).

## Gretzky final evidence handoff — Inject 8 — 2026-10-15 13:05 PDT

**Original:** [Hydro Siber regional grid map](https://drive.google.com/file/d/1-gc6iqIzCkryqRweTdYDUH0TLYf4cuM5/view). **Detailed I-008 findings:** [Evidence desk](investigation/codex-evidence-analyst.md#i-008--e-008--final-grid-operations-map). **Gretzky handoff:** [Final operational brief](handoffs/gretzky-handoff.md#inject-8--i-008--e-008--final-operational-handoff). **Presentation:** [Inject 8 addendum for leader approval](presentation/presentation-outline.md#final-inject-8--evidence-desk-addendum-for-leader-approval).

The final labelled Inject 8 is a **simulated** Hydro Siber operations map headed **Dec 25, 2026, 8:43 AM (PDT)**. It reports **92,430 customers without power (+14%)**, total demand **1,240 MW (-18% vs forecast)**, and **12 online / 5 degraded / 6 offline / 3 telemetry-unverified** feeder categories. The screenshot identifies the **hospital as partially powered with backup generators, water treatment as offline, and transit as partially powered**, alongside six alert rows from 07:32 through 08:41. These are displayed values, not independent field verification.

**Internal contradiction:** SUB-03 Central shows **SCADA Online / Field Unconfirmed**, but its note says **"SCADA shows offline"**. SUB-07 Riverdale shows **Unverified/Unverified** with a stated telemetry loss since 06:31. SUB-05 Hillsdale Park is **Offline/Offline**, while an earlier 07:32 alert described a mismatch; this difference may reflect historical state rather than simultaneous disagreement. SUB-01 and SUB-02 are degraded; SUB-04 and SUB-06 are online.

**Cross-inject limit:** E-008's **SUB identifiers are not the FDR feeder IDs** from E-001; the aggregate 26 categories cannot be equated with the 18-row earlier dashboard. E-001 analyses recorded PST row timestamps while E-008's December header says PDT. Residents' neighborhood names in I-004 overlap mapped areas but do not authenticate telemetry. Suspicious SCADA authentication/logging events (I-002) and the possible game-download path (I-005–I-007) remain unconnected to a validated control action or outage causation.

**Action for leader:** Incorporate the updated customer/service impact and these limits in the judging script; prioritize verified hospital/water and field-power conditions, retain the evidence, and do not declare an attacker or cyber cause. No utility operation, public release or competition submission has been authorized by this evidence-desk update. Kevin's main presentation was reconciled through Inject 7; the added Inject 8 material is **for leader approval**, not a claim that the lead has reviewed it.

## Kevin sync audit and final presentation — 2026-10-15 13:12 PDT

At Kevin's request, the response chat checked every repository file against the Drive originals, without assuming any of it was right. The corrections, new observations, and items flagged for the owning desks are in [Sync audit](#sync-audit--2026-10-15-1312-pdt). The assessment above is reconciled through Inject 8, pending the leader. The [final presentation](presentation/presentation-outline.md) maps all eight injects to the six judging criteria. It has a 60-second walk-up, a five-minute finalist version with proposed speakers, a public statement for approval, and judge Q&A. No utility command, external message, or competition submission was made.
