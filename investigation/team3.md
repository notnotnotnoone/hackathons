# Team 3 — Timeline & Intelligence

**Owner:** Kherion — Member 3, with Codex timeline support  
**Status:** Investigating  
**Updated:** 2026-10-15 11:01 PDT (UTC−07:00)

## Sources and scope

- **I-003 / E-003:** [Inject 3](https://drive.google.com/file/d/1iQa1Y2u0vdNfuVin0ejEClH4pdJv0KUL/view), Google security-alert screenshot. Downloaded and visually reviewed by timeline support. Folder checked October 15, 2026, about 11:01 PDT: six files. File size 800299 bytes; SHA-256 622F3056F02E2F11DA17BA7787E4391758B5B63B93824B79130ECE26C4081F26. Work/collection dates are not incident dates.

- **I-001 / E-001:** [Inject 1](https://drive.google.com/file/d/1AHluXwG8ne_K1KfKtUmcuQq0oamum46p/view), distribution dashboard, reviewed visually.
- **I-002:** [Inject 2](https://drive.google.com/file/d/1MCgSzKr_hXeddiMRyeHfcDiRR4_k9u51/view), PNG screenshot of _logsrecovered.txt, reviewed visually. Shared evidence-register ID remains to be assigned to avoid collisions.
- Five current Drive files downloaded. Instructions, Schedule, and Mission Overview are not yet independently read by this chat. The evidence desk's README reports reading Instructions and Mission Overview; that is a teammate report.
- Prior local source aliases E01–E04 were collection labels; they are not additional shared evidence IDs.

**Clock limitations:** I-001 header explicitly gives Dec 25, 2026; row updates explicitly label PST. I-002 syslog entries omit year and zone. Their association with the 2026 scenario is contextual, not an explicit log field. This table sorts raw displayed calendar times for investigation; it does not establish cross-system clock alignment or causal order. The recovery annotation has no explicit date and cannot be securely placed between logged events. Confidence describes visible source content, not authenticity, authorized activity, or physical grid state.

## Updated Timeline

| Time | Event | Source | Confidence |
|---|---|---|---|
| Dec 24, 17:20 (seconds clipped) | Partially clipped accepted-password entry for hoovey.admin.cpc; full bottom line requires original text. | I-002 / bottom visible row | Moderate; clipped |
| Dec 24, 17:22:43 | Accepted password for sally.admin.cpc from 183.229.57.190, port 22. | I-002 / sshd[2015] | High: visible text |
| Dec 24, 17:30:38 | Root cron invokes opt/backup/scada/dump.sh (literal screenshot spelling; corrected, see history); command execution outcome is not shown. | I-002 / cron[2163] | High: visible text |
| Dec 24, 17:46:00 | Remote session closed for sally.admin.cpc. | I-002 / sshd[2123] | High: visible text |
| Dec 24, 17:58:20 | Remote session closed for hoovey.admin.cpc. | I-002 / sshd[2189] (corrected, see history) | High: visible text |
| Wed, Dec 24, 10:12 PM (22:12); year/zone unstated | Security-alert email displayed at this time, claiming a new Google sign-in for maxwafoone@gmail.com from Mount Crumpit. This is the message display time, not a proven sign-in time; placement against other sources is conditional. | I-003 / E-003, message header and body | High: visible content; authenticity unverified |
| Dec 24, 23:59:02 | Failed password for max.contr.maint from 89.46.57.27, port 22. | I-002 / sshd[2204] | High: visible text |
| Dec 25, 00:00:36 | Accepted password for max.contr.maint from the same IP, port 22. | I-002 / sshd[2296] | High: visible text |
| Dec 25, 00:01:51 | su PAM authentication failure. | I-002 / su[2599] | High: visible text |
| Dec 25, 00:03:03 | Second su PAM authentication failure; invoking account not shown. | I-002 / su[2618] | High: visible text |
| Dec 25, 00:05:14 | sudo record: adminelk; TTY=pts/0; PWD=/etc; USER=root; COMMAND=/usr/bin/su. Successful root shell is not independently confirmed. | I-002 / sudo[1802] | High: visible text |
| Dec 25, 00:05:58 | rsyslogd reports exiting on signal 15; sender and reason unknown. | I-002 / rsyslogd x-pid=1036 | High: visible text |
| Dec 25, 08:42:12 PST | FDR-01: OFFLINE, 0.0 MW, 0.0 kV; telemetry update, not outage onset. | I-001 / FDR-01 | High: displayed reading |
| Dec 25, 08:42:14 PST | FDR-02: OFFLINE, 0.0 MW, 0.0 kV; telemetry update, not outage onset. | I-001 / FDR-02 | High: displayed reading |
| Dec 25, 08:42:16 PST | FDR-03: ONLINE, 0.0 MW, 13.8 kV; telemetry update, not outage onset. | I-001 / FDR-03 | High: displayed reading |
| Dec 25, 08:42:18 PST | FDR-04: OFFLINE, 12.8 MW, 13.6 kV; telemetry update, not outage onset. | I-001 / FDR-04 | High: displayed reading |
| Dec 25, 08:42:20 PST | FDR-05: ONLINE, 8.4 MW, 13.9 kV; telemetry update, not outage onset. | I-001 / FDR-05 | High: displayed reading |
| Dec 25, 08:42:22 PST | FDR-06: OFFLINE, 0.0 MW, 0.0 kV; telemetry update, not outage onset. | I-001 / FDR-06 | High: displayed reading |
| Dec 25, 08:42:24 PST | FDR-07: ONLINE, 0.0 MW, 13.7 kV; telemetry update, not outage onset. | I-001 / FDR-07 | High: displayed reading |
| Dec 25, 08:42:26 PST | FDR-08: OFFLINE, 9.6 MW, 13.5 kV; telemetry update, not outage onset. | I-001 / FDR-08 | High: displayed reading |
| Dec 25, 08:42:28 PST | FDR-09: OFFLINE, 0.0 MW, 0.0 kV; telemetry update, not outage onset. | I-001 / FDR-09 | High: displayed reading |
| Dec 25, 08:42:30 PST | FDR-10: OFFLINE, 0.0 MW, 0.0 kV; telemetry update, not outage onset. | I-001 / FDR-10 | High: displayed reading |
| Dec 25, 08:42:32 PST | FDR-11: OFFLINE, 0.0 MW, 0.0 kV; telemetry update, not outage onset. | I-001 / FDR-11 | High: displayed reading |
| Dec 25, 08:42:34 PST | FDR-12: OFFLINE, 0.0 MW, 0.0 kV; telemetry update, not outage onset. | I-001 / FDR-12 | High: displayed reading |
| Dec 25, 08:42:36 PST | FDR-13: OFFLINE, 0.0 MW, 0.0 kV; telemetry update, not outage onset. | I-001 / FDR-13 | High: displayed reading |
| Dec 25, 08:42:38 PST | FDR-14: OFFLINE, 0.0 MW, 0.0 kV; telemetry update, not outage onset. | I-001 / FDR-14 | High: displayed reading |
| Dec 25, 08:42:40 PST | FDR-15: OFFLINE, 0.0 MW, 0.0 kV; telemetry update, not outage onset. | I-001 / FDR-15 | High: displayed reading |
| Dec 25, 08:42:42 PST | FDR-16: OFFLINE, 0.0 MW, 0.0 kV; telemetry update, not outage onset. | I-001 / FDR-16 | High: displayed reading |
| Dec 25, 08:42:44 PST | FDR-17: OFFLINE, 0.0 MW, 0.0 kV; telemetry update, not outage onset. | I-001 / FDR-17 | High: displayed reading |
| Dec 25, 08:43:03 PST | FDR-18: ONLINE, 14.2 MW, 13.8 kV; telemetry update. | I-001 / FDR-18 | High: displayed reading |
| Dec 25, 08:43:12 AM; zone unknown | Dashboard shows DEGRADED and discrepancy warning. Table: 14 OFFLINE / 4 ONLINE; footer: 17 OFFLINE / 1 ONLINE. | I-001 / header, table, footer | High: displayed reading |
| 11:00 AM; date/zone not stated | Screenshot annotation claims logs recovered at this time; recovery is separate from logged event times. | I-002 / recovery note | High: source claim |
| Dec 25, 11:03:15; zone/year unstated | rsyslogd start entry, x-pid=3106. Not displayed in chronological order in the screenshot. | I-002 / first timestamped line | High: visible text |

## New Connections

- I-002 adds host whoville-scada and accounts max.contr.maint, adminelk, sally.admin.cpc, and hoovey.admin.cpc. Account strings do not establish the identity of the human operator.
- max.contr.maint has a failed then accepted-password entry from 89.46.57.27, separated by 94 seconds if the source clock is consistent. This establishes neither brute force nor unauthorized access.
- The successful login, two su failures, adminelk's root-targeted sudo record, and syslog exit form an investigative sequence. There is no shown session linkage proving the same person or account caused all entries.
- Logging disruption could explain missing operational evidence and could relate to I-001's monitoring inconsistencies. A direct link to dashboard changes or the blackout is unproven.
- The visible exit/start records bound a candidate logging interruption from Dec 25 00:05:58 to 11:03:15, but a cropped recovered screenshot cannot establish a continuous logging gap or exclude intervening records.

## Contradictions

- I-001's table/footer count mismatch and OFFLINE-with-nonzero-flow readings remain unresolved.
- I-002 claims recovery at 11:00 AM yet includes a Dec 25 11:03:15 start entry. If these refer to the same day and aligned clock, the entry follows the stated recovery time. Rounding, continued collection, clock mismatch, or an inaccurate annotation remain possible.
- The screenshot says original logs were disabled and recovered from a backup server at a physical location. This is a source assertion; the signal-15 exit alone does not prove deliberate malicious disabling.
- The screenshot places the later start entry before earlier records. Display order is not event order.

## Unanswered Questions

1. Obtain the original complete _logsrecovered.txt, including clipped rows, year, time zone, recovery date/time, and collection method.
2. Were these logins, root-targeted commands, and service stops authorized? Who owns each account and source IP?
3. Which session and authentication records connect adminelk's sudo entry to the preceding SSH activity, if any?
4. Who sent signal 15, and what did service-manager, audit, shell, and change records show?
5. Are there intervening log events, remote collectors, backup timestamps, or evidence of deletion?
6. Do SCADA command, relay/breaker, and independent field records connect these events to physical service loss or dashboard changes?
7. Confirm official challenge timing and the missing header/source time zones.

## Facts, hypotheses, and changes

- **Confirmed as visible source content:** the table values, account/IP strings, timestamps, authentication outcomes, sudo record, syslog exit/start, and recovery annotation.
- **Hypotheses:** authorized maintenance, account misuse, privilege abuse, deliberate logging interference, technical faults, and stale/inconsistent monitoring remain alternatives requiring corroboration.
- **Disproven explanations:** none established.
- **Explicit update to I-001 assessment:** the earlier screenshot contained no login or host-log evidence. I-002 now supplies such evidence. Cause and outage onset remain unconfirmed; the previous monitoring discrepancies have not been withdrawn.

## Message for Team Leader

> Inject 2 adds recovered SCADA log entries: a max.contr.maint login succeeds after one visible failure, followed by su failures, a root-targeted sudo record under adminelk, and a syslog exit at 00:05:58. The screenshot does not prove session linkage or malicious activity. A later 11:03:15 start entry conflicts with the 11:00 AM recovery note if clocks and date match. Request the complete original logs and clock/authorization records; the blackout cause remains unconfirmed.

## Work log

- Initial master timeline from I-001 preserved locally; all 18 row-update timestamps retained above.
- I-002 downloaded and visually analyzed; earlier findings retained and new uncertainty recorded.
- No utility commands or competition submission performed.
- Next: full log acquisition through later evidence, PDF review, clock reconciliation, and leader handoff.

## Presence and coordination update — 2026-10-15 10:40 PDT

- This chat's participant explicitly requested presence confirmation; recorded in [human-status.txt](../human-status.txt). Human name has not been supplied, so no named roster entry is attributed or changed.
- Timeline support remains active. I-001 and I-002 are reviewed; five files downloaded. Three PDF reviews by this timeline chat remain pending.
- Lead README now adopts E-002 for I-002 and links this file as the master timeline; the earlier unassigned-ID note above is superseded.
- Evidence desk's 10:40 update reports visual Schedule review and no new inject in its latest check. These are teammate reports, not a fresh Drive check by this chat.
- Transcription discrepancies are explicitly open: this timeline's Hoovey session-close PID 2182 versus evidence desk's native-resolution reading 2189; this timeline's leading slash on /opt/backup/scada/dump.sh versus evidence desk's reading without a leading slash. Treat the earlier PID and exact command spelling as provisional pending original text or independent reinspection. These differences do not establish new incident events.
- Blackout cause, authorization, account/session linkage, actual outage onset, and source clock alignment remain unresolved. No confirmed attack attribution or approved submission is recorded.

## Kherion identity and transcription reconciliation — 2026-10-15 10:50 PDT

- The participant directly identified themselves as Kherion. The earlier unnamed timeline participant record refers to Kherion, not an additional team member.
- Codex re-opened I-002/E-002 at original resolution. Corrected the Dec 24 17:58:20 row source PID from 2182 to **2189** and the Dec 24 17:30:38 command path from /opt/backup/scada/dump.sh to **opt/backup/scada/dump.sh**, preserving the literal lack of leading slash. Earlier transcription and disagreement are retained in this file's dated history. This resolves those two screenshot transcription differences (A-006); original command text/redirection and execution results remain unverified.
- Inject 2's shared source ID is E-002, as adopted by the lead.
- Next suggested human action: Kherion asks the leader/evidence desk for the complete recovered log text, source year/time zone, recovery timestamp provenance, and session-linking records. No external request has been sent by Codex.
- Next handoff: one concise presentation timeline distinguishing confirmed displayed records, uncertain session links, and actual outage onset (still unknown). Maintain I-001's explicit PST separately from I-002's unstated zone; do not calculate an exact cross-source interval.

## Inject 3 update — 2026-10-15 11:01 PDT

### Updated Timeline

| Time | Event | Source | Confidence |
|---|---|---|---|
| Wed, Dec 24, 10:12 PM; year and zone unstated | Message titled Security alert, visually labelled Google <no-reply@accounts.google.com>, displayed with this timestamp. Body reports a new sign-in for maxwafoone@gmail.com from Mount Crumpit. | I-003 / E-003, header, account and body | High for visible content; authenticity unverified |
| Actual sign-in time unknown | The sign-in is described in the email, but no separate event timestamp, IP, device or session ID is shown. | I-003 / E-003, body | Source claim; exact timing unknown |

### New Connections

- The Gmail account's “max” name and I-002's max.contr.maint are candidate identity correlations only. No ownership, account linkage, credential reuse, or common session is established.
- Mount Crumpit appears in I-003's sign-in location claim and I-001's FDR-15 service area (OFFLINE, 0.0 MW/0.0 kV; row update Dec 25 08:42:40 PST). This is a shared place name, not proof that the login originated from an affected electrical asset or that it caused an outage.
- If calendar dates, year, and zones align, the displayed 22:12 email precedes the 23:59:02 failed SSH login and 00:00:36 accepted login. Do not treat that conditional sequence as established cross-source timing or causation.
- A new-sign-in alert alone does not establish unauthorized access. Legitimate owner activity, an unfamiliar device, account compromise, or an unauthenticated/spoofed screenshot remain alternatives; none is resolved here.

### Contradictions

- I-003 says **Wed, Dec 24** while I-001 explicitly says **Dec 25, 2026**. December 24, 2026 is Thursday. This is a calendar consistency problem if both artifacts are assumed to describe the same year's incident. I-003 omits the year; retain that uncertainty rather than silently assigning 2026.
- Earlier notes did not contain a Google-account or sign-in-location lead. I-003 adds these leads; it does not confirm a relationship to the SCADA account.
- I-001's monitoring contradictions and I-002's 11:00/11:03:15 recovery/start ambiguity remain unresolved.

### Unanswered Questions

1. What year, time zone, and exact Google sign-in event time apply? Does the weekday reflect a different year or scenario formatting error?
2. Obtain the original email and full headers plus account security-event records through the challenge evidence; is the sender authenticated?
3. Who owns maxwafoone@gmail.com, and is there documented linkage to max.contr.maint or Hydro Siber?
4. What source IP, device, session, and location basis produced the Mount Crumpit label? Does it correlate with 89.46.57.27?
5. Was the sign-in recognized by the owner, and were there subsequent recovery, MFA, password, token, or forwarding changes?
6. What independent SCADA/physical evidence connects any account event to the service failure?

### Six-part assessment for leader review

1. **Situation:** Six files now listed; I-003 adds a Google security-alert screenshot to the dashboard and recovered-log evidence.
2. **New findings:** Message display time Wed Dec 24 22:12; account maxwafoone@gmail.com; claimed sign-in location Mount Crumpit. No separate sign-in timestamp or IP shown.
3. **Leading hypotheses:** A possible account relationship is worth testing, but similarity of names/location is weak linkage evidence. Legitimate activity and unrelated events remain viable.
4. **Contradictions:** Weekday/date alignment differs if 2026 is assumed; source zones and exact event times are unknown. Existing grid and recovery-time contradictions persist.
5. **Recommended action:** Evidence desk/leader seek original email, account ownership/security events and clock context; response analyst can evaluate account-protection proposals once authorization and scope are known. No account actions performed.
6. **Critical unknowns:** Authenticity, year/zone, exact event time, authorized activity, Gmail-to-SCADA identity linkage, source IP/device, and physical blackout causation.

### Message for Team Leader

> Inject 3 shows a Google-labelled alert for maxwafoone@gmail.com, displayed Wed Dec 24 at 10:12 PM, reporting a new sign-in from Mount Crumpit. Possible links to max.contr.maint and the Mount Crumpit feeder are unconfirmed. The alert omits year/zone and its weekday conflicts with Dec 24, 2026 if that year is assumed. Obtain original email/security events and account ownership evidence before linking it to the SCADA activity. Cause and outage onset remain unknown.

### Change history

- I-003/E-003 added with one message timestamp and an explicitly untimed sign-in claim. Earlier I-001/I-002 findings retained.
- Earlier “five files” and “Inject 2 latest” notes describe prior checks; six files and Inject 3 are current as of this review.


## Inject 4 — community outage reports — 2026-10-15 11:39 PDT

**Evidence:** Four distinct screenshots named "Inject 4" in the challenge Drive, reviewed visually. Source IDs here use I-004a–d within Inject 4 (shared evidence desk uses I-004/E-004).
- **I-004a:** [Reddit discussion](https://drive.google.com/file/d/1CUNuPYSCE9y9prf1uCUYhjlMU9K1_WAm/view)
- **I-004b:** [Ned Mcdodd X post and generator reply](https://drive.google.com/file/d/1XN9CpCFTRhB8AuFq9e_RgGDRfUK5cAIL/view)
- **I-004c:** [LouLouWho advice post](https://drive.google.com/file/d/1a2gAJlOUtpwflgsO99Zex6_nqia_a_CA/view)
- **I-004d:** [OzzyFlight X post](https://drive.google.com/file/d/1fAsOH6POqtOg9kaey9DQqxxYqrmyYScE/view)

Direct Drive folder inspection found ten items: four I-004 screenshots, the three earlier inject images, and three PDFs. The screenshots are unverified social-media representations, not authenticated original posts. Incident times are separate from October 15 collection/review times.

### Updated Timeline (additions to existing I-001–I-003 master)

| Time | Event | Source | Confidence |
|---|---|---|---|
| Dec 25, 2026, 08:47 AM; zone unstated | OzzyFlight (`pilot_ozzy2323`) says they hoped for a snow day but "now nothing turns on." Resident-reported electrical loss; place, start time, and equipment unverified. | I-004d, X header/body | High for screenshot text; low for independently verified conditions |
| Dec 25, 2026, 09:01 AM; zone unstated | Ned Mcdodd (`notyourmayor_`) asks whether electricity is out elsewhere and reports freezing conditions at home. | I-004b, X header/body | High for screenshot text; low for independently verified conditions |
| Relative "1h"; screenshot capture day/zone unknown | r/Whoville poster `greenestNotTheMeanest` reports apparent outage in Central; comments from `yelpb27`, `whobrisubris`, `chereshnya09`, and `stustustu0` report East Valley, West Ridge, and Riverdale outages, with Riverdale heating trouble. Status bar says 11:34 but cannot assign an absolute post timestamp. | I-004a, post, comments, status bar | High for visible claims; report/event timestamps unknown |
| Relative "1h"; capture day/zone unknown | `bricklecrackled` (`Treesforchopping1`) says they have used a neighbour's generator "this morning." Not a measured power status or exact timeline event. | I-004b, reply | High for screenshot text; event time unverified |
| Relative "23m"; capture day/zone unknown | `LouLouWho` posts household outage advice and warns of cold/heating consequences. Claimed urgency, official status and safety guidance not verified. | I-004c, post | High for visible claims; authority unverified |

### New Connections

- Public accounts independently *claim* losses or lack of heat in Central Whoville, East Valley, West Ridge and Riverdale. This is evidence of geographically broad **reported** impact, not independent feeder/relay confirmation.
- 08:47 is the earliest explicit full date-and-clock stamp within I-004, not evidence the blackout *began* at 08:47. Relative "1h"/"23m" markers cannot be converted to timestamps without capture date/clock context.
- The incident dashboard (I-001, 08:43:12 Dec 25, 2026, header zone unknown) precedes the 08:47 X post **only if source clock zones align**. Neither source establishes the initial physical outage time.
- Heating reports increase the safety priority of verified warming resources and vulnerable-resident checks. A poster's emergency advice is not validated official guidance; in particular, do not repeat improvised food-storage advice as approved.
- I-004 does not identify a SCADA actor, demonstrate a breaker switching command, correlate reported areas with feeders, or resolve physical status at the Medical District.

### Contradictions / uncertainties

- No new direct technical contradiction is established; firsthand outage complaints and SCADA display inconsistency can coexist.
- Two X post timestamps contain the explicit date Dec 25, 2026 but **not** a zone. Reddit's phone-clock 11:34, relative "1h" and LouLouWho's "23m" do not identify a reliable incident timestamp or even a known screenshot date.
- I-003's "Wed, Dec 24" versus Dec 24, 2026 Thursday issue remains unresolved, as do I-001 counts/telemetry and I-002 recovery/restart clocks.
- A social platform's visual verified badge or name is not proof of identity, source authorization, content accuracy, or a government statement.

### Unanswered Questions

1. Are the neighbourhood outages confirmed by utility trouble calls, meter events, independent crews, or relay records, and what are their actual onset times?
2. What are the social screenshots' original URLs, capture times, local time zones and authenticity?
3. Which feeders serve Central, East Valley, West Ridge and Riverdale? Are Medical District facilities and confirmed warming sites powered?
4. Does LouLouWho represent an authorized incident/public-safety source, and what advice has incident command verified?
5. Has cold exposure caused urgent medical or community-service needs?

### Six-part leader assessment

1. **Situation:** Community claims suggest a wider public electricity/heating disruption than any single resident report; physical scope and cause remain unknown.
2. **New findings:** Dec 25 08:47 and 09:01 explicitly timestamped X posts; four neighbourhoods reported in Reddit discussion; a relative-time public guidance post.
3. **Leading hypotheses/confidence:** Multi-area disruption is credible as a *pattern of reports*, not established by physical readings. Authorized maintenance, account abuse, measurement problems, equipment failure, other operational and environmental causes remain open. Cyberattack not confirmed.
4. **Contradictions:** Relative/social timestamps cannot be reconciled to absolute incident clocks. Prior dashboard, log recovery and email calendar discrepancies remain.
5. **Recommended action:** Verify on-the-ground neighbourhood outages, Medical District conditions, incident clocks, welfare/warming support and publicly endorsed guidance. Preserve original technical logs and avoid unsupported cyber attribution.
6. **Critical unknowns:** Power-loss onset, physical grid coverage, timing/identity of posts, health impact, officially approved guidance, actor/session links and cause.

### Message for Team Leader

> Inject 4 comprises four social-media screenshots. Dec 25, 2026 posts at 08:47 and 09:01 report power loss and freezing indoor conditions. Reddit comments claim outages across Central, East Valley, West Ridge and Riverdale, with time shown only relatively; LouLouWho shares unverified advice. These corroborate *reported* widespread impacts, not the physical outage onset, feeder states, or a cyberattack. Prioritize verified field conditions, Medical District service, vulnerable residents and approved public guidance. Existing technical uncertainties persist.

### Change history

- Added I-004a–d without deleting or retiming I-001–I-003 records; no causal conclusion or source authentication invented.
