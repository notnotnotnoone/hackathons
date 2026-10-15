# Agent instructions — Young Defenders progress

## Shared workflow

Read README.md, human-status.txt, docs/progress.json, and the latest relevant analyst handoff before reporting progress. This repository is used by multiple people and agents under one account. Fetch current contents and blob SHAs before edits; preserve unrelated entries. On a conflict, re-read and merge your specific changes. Never force-push.

## Website sources

- GitHub Pages publishes the main branch /docs directory. docs/index.html, docs/style.css, and docs/app.js implement the page; docs/.nojekyll keeps it buildless.
- docs/progress.json is the structured, public progress snapshot.
- human-status.txt is the source for human progress. The page displays the four named roster sections and preserves additional participant reports in its full-text disclosure.
- README.md is the written investigation hub. status.md, team3.md, and codex-evidence-analyst.md retain detailed work and source limitations.
- The page fetches committed progress.json and human-status.txt from the public raw GitHub main branch at load, manual refresh, and every minute while visible if auto-refresh is enabled. GitHub CDN caching may delay updates. If the progress fetch fails, it can show a clearly labelled deployed snapshot.
- The page does NOT monitor Drive, trigger agents, receive chat messages, or submit responses. A page refresh does not mean new evidence has been checked.

## After each substantive update

1. Check the actual evidence or relevant published handoff. Update your detailed source log first, including evidence IDs, exact source locations, uncertainty, and update time/zone.
2. Read the current docs/progress.json. Change your own entry in workstreams (lead, evidence, timeline, or response) and any explicitly assigned actions. Preserve other entries and stable IDs.
3. Set your workstream updatedAt to the actual work time in ISO 8601 with zone, such as YYYY-MM-DDTHH:MM:SS-07:00. Use null when no work time is known. Use plain status strings, not invented completion percentages.
4. Set top-level updatedAt to your actual edit time and updatedBy to your name or workstream. Do NOT change another workstream's time.
5. Only change latestInject after checking the evidence folder or explicitly citing a teammate's dated check. Its checkedAt is the evidence-check time, NOT this JSON edit time. Keep its note honest about review coverage.
6. The lead reconciles the six assessment entries and shared milestones. Other analysts may contribute assigned factual corrections with source links; do not promote an unverified hypothesis to a fact.
7. Keep schemaVersion at 1. Preserve these top-level fields: updatedAt, updatedBy, latestInject, assessment, workstreams, actions, milestones. assessment must contain the six labelled entries: Situation, New findings, Leading hypotheses, Contradictions, Recommended action, Critical unknowns. Retain source fields as repository-relative paths with optional anchors.
8. Validate JSON before committing. Example: node -e "JSON.parse(require('fs').readFileSync('docs/progress.json','utf8')); console.log('JSON valid')". Check dates, all six assessment parts, source links, and unchanged teammates' entries.
9. Commit with attribution, e.g. "evidence: update I-003 review and progress". Use the existing file SHA for GitHub contents updates. Open the page, click Refresh progress, and verify the displayed values and times. Fetch/cache delays must be reported as delays, not successful synchronization.
10. Update README.md if the shared assessment or requirements changed. Preserve corrected or superseded findings in the source log/history; do not silently erase disagreements.

## Human status

Change human-status.txt only from that person's direct report or explicit request. Attribute assisted work as assisted. Unmapped participants are not assumed to be distinct people. Do not infer human identity from the common GitHub account. Do not mark a person inactive because a row is old.

Keep the existing section headers, colon-labelled fields, and equals-sign separators so the page can parse the roster. Do not add fake example participants. The four human names are Leader, gretsky, kherion, and kevin.

## Investigation rules

Use the six-part assessment. Distinguish observation, source claim, inference, and external research. Do not assume a cyberattack or chain unrelated sessions together from timing alone. Never invent evidence, timestamps, read receipts, or completed human work. Preserve raw incident times separately from competition work times.

Routine repository progress updates are authorized. Utility operations, external messages, and competition submissions need the leader's explicit authorization for that action. This site is a public progress view; keep original evidence in Drive and follow confirmed competition sharing rules.

## Maintenance

Normal status edits do not require changes to HTML, CSS, or JavaScript. A site-code change or Pages source change needs verification in the browser. Use main /docs as the Pages source, without custom domains or credentials in the client. Do not add secrets or GitHub tokens to the site.

When taking over this work, follow this file and retain the website links in README.md and human-status.txt.
