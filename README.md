# Young Defenders — Whoville Investigation

**Team coordination hub · Hydro Siber blackout · Three-hour challenge**

[Team status](#team-status) · [Challenge intake](#challenge-intake) · [Current assessment](#current-assessment) · [Injects](#inject-log) · [Evidence](#evidence-register) · [Timeline](#incident-timeline) · [Hypotheses](#hypotheses) · [Decisions](#decisions-and-actions) · [Submissions](#submission-review)

**Shared Google Drive:** [Challenge materials and evidence folder](https://drive.google.com/drive/folders/1tpag2T6jptGhCC7E2tKtuZbTXLQ9B-Mj)

Use Drive for challenge instructions, injects, original evidence, and working documents. Use this README for status, findings, references, and handoffs. The folder link was supplied by the team; its contents and access permissions have not been verified.

> This GitHub repository is public. Check competition sharing rules before posting challenge content, personal information, or sensitive evidence. Reference permitted Drive files by evidence ID and link; keep originals unchanged. A Drive link does not grant access by itself.

## Start here

1. Leader: add the official instructions, judging rubric, start time, deadline, and submission method below.
2. Each member: confirm your suggested role and update your status row with your name, current task, next deliverable, blocker, and update time.
3. For each inject: log it, register its evidence, split independent questions between analysts, and send evidence-linked findings to the leader.
4. Leader: reconcile contradictions and update the six-part assessment. Review every submission against the actual rubric and approve it before anyone submits.

**Editing:** Open `README.md`, click the pencil, make a focused edit, preview it, and commit with a message such as `gretsky: register E-001 from I-001`. Everyone uses the same GitHub account, so sign entries with your team name. Refresh before editing; avoid simultaneous edits to the same section. Never overwrite another member's work to resolve a conflict.

## Team status

Roles for members 2–4 are suggested assignments, pending team confirmation. Names are team identifiers, not separate GitHub usernames. All members use the repository owner's account.

| Member | Role | Status | Current task | Next deliverable | Blocker / help needed | Updated by / at |
|---|---|---|---|---|---|---|
| You — Leader | Lead Cybersecurity Investigator | Awaiting materials | Coordinate investigation and review conclusions | Initial assessment after intake | Official instructions, evidence, rubric | Setup; no member update yet |
| gretsky — Member 2 | Evidence investigator (suggested) | Awaiting role confirmation | After confirmation: inspect evidence and preserve provenance | Evidence-linked findings and limitations | Initial evidence | Setup; no member update yet |
| kherion — Member 3 | Timeline analyst (suggested) | Awaiting role confirmation | After confirmation: reconstruct events and correlate clocks | Timeline with sources and uncertainty | Initial evidence and source time zones | Setup; no member update yet |
| kevin — Member 4 | Incident response analyst (suggested) | Awaiting role confirmation | After confirmation: compare response options and safety impacts | Prioritized options with tradeoffs | Challenge constraints and system context | Setup; no member update yet |

Status vocabulary: `Ready`, `Investigating`, `Needs review`, `Blocked`, `Done`, `Awaiting materials`, `Awaiting role confirmation`. A status is self-reported; include an update time so others can assess freshness.

### Role handoffs

- **Evidence → Lead + Timeline:** evidence ID, exact observation/location, provenance, timestamp details, interpretation, confidence, limitations, and next question.
- **Timeline → Lead + Response:** ordered events, linked evidence IDs, clock uncertainty, gaps, and whether sequence supports or contradicts a hypothesis. Sequence alone does not establish causation.
- **Response → Lead:** proposed action, supporting evidence, urgency, public safety benefit, operational risk, reversibility, prerequisites, and approval required.
- **Lead → Team:** six-part assessment, highest-value unanswered question, owner, and next checkpoint. Assign an independent challenge to significant conclusions when useful.

## Challenge intake

| Required input | Value / source |
|---|---|
| Official challenge instructions | Awaiting team upload/link |
| Judging criteria and scoring weights | Awaiting team upload/link |
| Permitted tools, AI use, research, and sharing rules | Awaiting official instructions |
| Available evidence / first inject | Awaiting team upload/link |
| Challenge start time and time zone | Not supplied |
| Submission deadline and time zone | Not supplied; confirm against official instructions |
| Submission method, format, and length limits | Awaiting official instructions |
| Final submission approver | Leader |

Planning context from the team briefing: the competition lasts three hours, with injects approximately every 10–30 minutes. Confirm official timing. Record competition elapsed time separately from incident event time. Preserve original timestamps and time zones; do not infer a missing zone. No timer is running from this README.

## Current assessment

**Assessment version:** Initial setup. **Evidence reviewed:** None. **Last analyst update:** Not yet recorded.

1. **Situation:** The team briefing describes a widespread electrical blackout in Whoville. Hydro Siber does not know the cause; residents lack electricity and heating during freezing winter conditions. These are scenario statements supplied by the team, not independently verified evidence.
2. **New findings:** Team coordination workspace initialized. No injects or evidence have been reviewed.
3. **Leading hypotheses:** Cause undetermined. Cyberattack, equipment failure, human error, and environmental or supply disruption remain unranked pending evidence.
4. **Contradictions:** Cannot assess before reviewing evidence. No contradictions identified is not the same as evidence of consistency.
5. **Recommended action:** Complete intake; register the first inject; prioritize evidence that distinguishes the initiating failure from downstream effects. Evaluate public safety and continuity options against official constraints.
6. **Critical unknowns:** Outage scope and start time; affected assets and dependencies; operational alarms and logs; recent changes; weather and equipment conditions; evidence reliability; challenge requirements and rubric.

### Update template — copy for each inject or major change

```text
Assessment version / inject IDs:
Author / update time / time zone:
Evidence reviewed:
1. Situation:
2. New findings: [evidence IDs + exact locations]
3. Leading hypotheses: [rank, support, confidence, alternatives]
4. Contradictions: [conflicts, missing expected evidence, assumptions]
5. Recommended action: [owner, priority, next checkpoint, approval needs]
6. Critical unknowns: [what evidence could change the conclusion]
```

Archive the previous assessment in the inject's permitted Drive working document before replacing it; retain the document link in the inject log. Mark corrected or superseded findings rather than silently removing their history.

## Inject log

Assign IDs in arrival order: `I-001`, `I-002`, etc. Do not treat an inject's receipt time as the time its events occurred.

| Inject ID | Received at / zone / elapsed | Official prompt or permitted Drive link | Evidence IDs | Owner(s) | Deadline / required output | Status / assessment archive |
|---|---|---|---|---|---|---|
| — | — | No inject received or reviewed | — | — | — | Awaiting intake |

## Evidence register

Assign `E-001`, `E-002`, etc. Preserve originals in Drive; analyze a copy. Capture a SHA-256 when feasible and useful for integrity tracking; a hash does not establish authenticity or truth. Separate observed facts, source claims, and analyst inference. External research is context, not competition evidence.

| Evidence ID / inject | Original filename / permitted Drive link | Source / collector / received time | Exact page, row, log line, or screenshot region | Observation or source claim | Integrity / limitations | Analyst |
|---|---|---|---|---|---|---|
| — | No evidence registered | — | — | — | Unreviewed | — |

Useful limitations: missing logs, unknown clock offset, incomplete export, ambiguous asset identity, possible duplicates, unverified source, or a screenshot without its underlying data. Record hashes and collection details in the linked evidence notes when the table is too small.

### External research register

| Research ID | URL / publisher / access date | Context it supports | Limits / relationship to competition evidence | Analyst |
|---|---|---|---|---|
| — | No external research used | — | — | — |

## Incident timeline

Assign `T-001`, `T-002`, etc. Record raw source time first. Only normalize when the zone/offset is supported; document the conversion. Mark estimates and conflicting clocks explicitly.

| Event ID | Original event time / zone | Normalized time / conversion basis | Event / asset | Evidence ID + exact location | Uncertainty / competing interpretation | Analyst |
|---|---|---|---|---|---|---|
| — | Unknown | Not normalized | Initiating event not established | — | No evidence reviewed | — |

## Hypotheses

Rank by evidentiary support after intake. These are starting categories, not findings; they may overlap or combine. Use `Unassessed`, `Low`, `Moderate`, or `High` confidence with a reason. Do not manufacture percentages.

| ID | Explanation | Current support / confidence | Contradictions / alternatives | Most discriminating next evidence | Owner |
|---|---|---|---|---|---|
| H-01 | Deliberate cyber activity caused or contributed to the outage | None reviewed / Unassessed | No malicious activity established | Correlated control actions, authentication records, and operational effects | Leader + evidence |
| H-02 | Equipment or infrastructure failure | None reviewed / Unassessed | No failure mechanism established | Protection events, equipment alarms, maintenance and inspection records | Evidence + timeline |
| H-03 | Human error or an unintended configuration / operational change | None reviewed / Unassessed | No relevant change established | Change records, operator actions, approvals, and timing | Evidence + timeline |
| H-04 | Environmental conditions or upstream supply disruption | None reviewed / Unassessed | No environmental or supply cause established | Weather, physical inspection, supply and dependency records | Timeline + response |

For each significant conclusion, ask: What would falsify it? What expected evidence is absent, and were the records complete enough to expect it? Could another mechanism produce the same observations? Distinguish initiating cause, enabling conditions, and consequences.

### Cyber Kill Chain — evidence required

Only populate stages when evidence supports the mapping. An unmapped stage is unknown; do not fill gaps to make a complete narrative. A mapping does not establish an actor's identity or motive.

| Supported stage | Observed behavior | Evidence ID / exact location | Confidence / alternative explanation |
|---|---|---|---|
| None established | No attack progression assessed | — | Unassessed |

Stages, if applicable: reconnaissance, weaponization, delivery, exploitation, installation, command and control, actions on objectives.

## Decisions and actions

Use `A-001` for investigative tasks and `D-001` for response decisions. Prioritize immediate safety implications and evidence that best separates plausible explanations. Set deadlines relative to the actual competition clock once known.

| ID | Task or option / rationale | Evidence basis | Owner | Priority / checkpoint | Risks, reversibility, prerequisites | Status / approval / outcome |
|---|---|---|---|---|---|---|
| A-001 | Add official instructions, evidence, rubric, timing, and submission requirements | Team setup request | Leader, with team uploads | First team action | Verify official source | Open |
| A-002 | Confirm suggested analyst roles and update team status | Team roster | All members | Before task allocation | Assign by team agreement | Open |

Compare response options by evidence strength, urgency, public safety, operational consequences, reversibility, and evidence preservation. Do not assume the team can operate utility equipment. Investigate and recommend within challenge scope; obtain explicit approval before submissions, external communications, or operational changes. Initial README publication is a team setup action, not authorization for later actions.

## Submission review

Keep submissions as drafts until the leader explicitly approves the exact version. No response has been submitted by this setup.

| Submission ID / inject | Official requirement / rubric criterion | Draft Drive link / exact version | Supporting evidence | Reviewer / unresolved gaps | Approval / submitted by / receipt |
|---|---|---|---|---|---|
| — | Awaiting actual rubric | No draft | — | Requirements not yet reviewed | Not approved / not submitted |

Before approval:

- [ ] Answers every part of the actual prompt and maps to the official judging criteria.
- [ ] Meets the required format, length, deadline, and submission method.
- [ ] Every significant factual conclusion cites competition evidence at an exact location.
- [ ] Distinguishes observations, source claims, inference, assumptions, and external context.
- [ ] Tests alternatives and contradictions; states confidence and critical unknowns honestly.
- [ ] Separates initiating cause from downstream effects; maps attack progression only where supported.
- [ ] Evaluates response tradeoffs, urgency, public safety, and potential unintended consequences.
- [ ] Names the exact approved draft version and records the leader's approval.
- [ ] Records submission time, submitter, and confirmation after an authorized submission.

## Working rhythm

At each inject, the leader sets a short checkpoint appropriate to the actual time remaining. Analysts work independently where useful, update their status, and hand off evidence-linked findings. The leader challenges conclusions, resolves disagreements explicitly, and updates the assessment. Reserve time for rubric review and submission confirmation; agree the final-review window after the official deadline is known.

**Team rule:** Accuracy before confidence. Unknown means unknown. A blackout does not by itself establish a cyberattack.

