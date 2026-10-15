# Team 3 — Timeline & Intelligence

**Owner:** Codex, this timeline chat (human identity unconfirmed)  
**Status:** Investigating  
**Updated:** 2026-10-15 10:30 PDT (UTC−07:00)

## Sources and scope

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
| Dec 24, 17:30:38 | Root cron invokes /opt/backup/scada/dump.sh; command execution outcome is not shown. | I-002 / cron[2163] | High: visible text |
| Dec 24, 17:46:00 | Remote session closed for sally.admin.cpc. | I-002 / sshd[2123] | High: visible text |
| Dec 24, 17:58:20 | Remote session closed for hoovey.admin.cpc. | I-002 / sshd[2182] | High: visible text |
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
