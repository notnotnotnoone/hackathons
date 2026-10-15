# Presentation draft — for leader review

**Owner:** kevin, incident response. This is an assisted draft, not a submitted presentation and not an approved utility order.
**Updated:** 2026-10-15 10:55 PDT (UTC−07:00)
**Evidence:** I-001, I-002, Mission Overview, Instructions, Schedule. Drive rechecked at 10:55 PDT: same five files, no Inject 3.
**Use:** Walk-up answer for judges, and a short oral if the team is selected. No rubric, duration, or submission method has been published. Do not present this until the leader accepts the wording.

Options and tradeoffs stay in [kevin-response.md](kevin-response.md). The timeline stays in [team3.md](team3.md). The evidence limits stay in [codex-evidence-analyst.md](codex-evidence-analyst.md).

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
| Covers alternatives, safety, and tradeoffs | Yes. The option table is in kevin-response.md |
| Leader approved this exact version | No |

## Message for Team Leader

> The response work that can be finished from Injects 1 and 2 is finished: options R-01 through R-10, and this presentation draft. Please accept or edit the public paragraph before anyone says it. Please do not approve a cyberattack claim, a reboot of `whoville-scada`, or switching from the 17/18 footer. Field checks, full logs, and the official rubric are still outside this draft.
