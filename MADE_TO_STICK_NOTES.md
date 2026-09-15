# Aceapp — Made to Stick learning pass

Aceapp applies Chip & Dan Heath's SUCCESs framework selectively. A structure does **not** receive a mnemonic merely because there is space for one.

- **Simple:** Learn cards prioritize one core anatomical fact before secondary detail.
- **Unexpected:** selected structures surface a counter-intuitive contrast only when it is genuinely useful.
- **Concrete:** visual/spatial anchors are tied directly to what the learner can see on the plate.
- **Credible:** cues stay anatomy-specific and avoid fabricated etymologies, trivia, or pseudo-mnemonics.
- **Emotional/relevant:** selected clinically meaningful structures explain why identification matters.
- **Stories:** short micro-scenarios are used only when a scenario makes retrieval easier.

## Mnemonic rule

The **Memory hook** box is conditional. If Aceapp does not have a concise, genuinely useful mnemonic or memory device, the box does not render. The old generic fallback has been removed.

## Product-level application

The guest preview now uses **Heart, Anterior View** rather than a basic terminology lesson. The goal is to demonstrate Aceapp's most memorable behavior immediately: seeing real anatomy, identifying it, locating it in reverse, repairing a miss, and completing a mini-boss. This is a concrete demonstration of what the learner becomes able to do, not a feature tour.

## QA status

- JavaScript module syntax: checked with `node --check`.
- Plate geometry: 52 mapped plate views and 516 annotation shapes/targets pass bounds validation with 0 out-of-bounds targets.
- Image-space integrity: 58 declared plate descriptors match the native source image dimensions exactly; no coordinate system is being stretched to a different intrinsic size.
- The intentionally held Hand Surface & Side Terms activity remains excluded from release.
- Firebase configuration retained; anonymous guest authentication is not used.

## v37 — correction that sticks

A wrong answer is now treated as a contrast-learning opportunity. When both the distractor and correct structure are real targets on the same plate, Aceapp shows the two locations directly. This applies the Concrete principle without inventing mnemonics: the learner sees the actual anatomical difference, reads the defining cues, and then repairs the item through retrieval.

## v38 — spacing without mnemonic clutter

v38 keeps the Made to Stick content rule intact: no structure receives a forced mnemonic merely because a review is scheduled. Instead, the learning system adds **spacing, interleaving, and confidence calibration** around the same visual content. A wrong answer is repaired immediately, then the structure returns only when due. High-confidence errors receive higher repair priority because they reveal a stronger misconception than an ordinary guess.

## v39 — transfer instead of familiarity

v39 does not add new mnemonics. It strengthens the **Simple + Concrete** side of the learning system by forcing the same anatomical knowledge to survive three prompt directions: seeing a target and naming it, seeing a name and locating it, and recalling the name without choices. This makes apparent familiarity less likely to masquerade as exam-ready knowledge.


## v40 — honest mastery, not flattering progress

v40 applies the **Simple** principle to progress itself: one public readiness number now means one clear thing. A structure is not counted as exam-ready merely because it was answered correctly several times in one format. It needs evidence that the learner can **name it, find it, recall it without choices, retrieve it after a delay, and build durable spaced evidence**.

This also supports **Make It Stick**: retrieval variation, spacing, and delayed success are treated as stronger evidence than same-session familiarity. The “Next best move” card keeps the action concrete by naming the exact set and the weakest evidence type to train next. No new mnemonic is generated when a structure has no useful memory hook.


## v41 — finite Smart Sprint

Aceapp now applies the learning-science side of *Make It Stick* to session dosage as well as feedback. The Smart Daily Sprint uses spaced retrieval, varied prompt directions, interleaving, and a deliberate stopping rule. It does not keep producing extra questions merely to increase engagement. If no useful retrieval is due, the learner is told to stop and let spacing work. Memory hooks remain optional and appear only where they genuinely improve recall.


## v42 — Exam-pressure transfer
The timed Spotter Simulation does not add new mnemonics. It tests whether existing concrete visual anchors, contrasts, and selective memory hooks remain retrievable under realistic time pressure. No mnemonic is added merely because a structure appears in the timed mode.


## v43 — contrast before another mnemonic

v43 uses the **Concrete** and **Simple** principles when two structures interfere with each other. Instead of inventing another mnemonic, Aceapp isolates the learner’s real A↔B confusion and forces repeated visual discrimination of that exact pair. If both targets are genuinely available on the same interactive plate, reverse localization is added; otherwise Aceapp stays with honest name discrimination. The distinction still has to survive later spacing before it counts as durable mastery.


## v44 — change the view, not the fact

v44 strengthens the **Concrete** principle without adding mnemonic clutter. Once a learner recognizes a structure in one screenshot, View Shift presents the same structure in another verified view. The fact stays simple; the visual context changes. This discourages screenshot memorization and makes the anatomical relationships themselves the retrieval cue. No alternate view is generated when the source plate does not genuinely show the target.


## v45 — Landmark Ladder
Landmark Ladder applies **Simple** and **Concrete** by turning a complex plate into a two-step orientation chain: first locate one stable landmark, then use it to retrieve a nearby target. The relationships are curated only where the anatomy itself provides a useful cue. No mnemonic is added simply to fill space.

This also supports transfer: a learner who can recover a target from a landmark is less dependent on the exact screenshot or annotation style.

## v46 — Spatial Map
Spatial Map applies **Concrete** and **Simple** by turning directional anatomy into a visible relationship on the plate: anchor → relation → target. The relationship itself is used as the memory cue. No extra mnemonic is added unless the structure already has a genuinely useful one.

The prompts are hand-curated rather than generated from screen coordinates so the relationship remains anatomically meaningful rather than visually accidental.


## v47 — Cue Fade

Cue Fade applies the learning-science principle of **retrieval with progressively less support** without inventing mnemonics. The anatomy fact stays constant while the scaffold changes:

- first the learner gets the highlighted target plus choices;
- then the choices disappear and the name must be recalled;
- finally the target highlight disappears and the learner must recover its location from the name.

This makes successful performance more credible because the learner is no longer depending on the exact study-card cue. No artificial memory trick is added when the anatomy itself is sufficient.

## v48 — Context Crop

Crop Challenge applies **concreteness + retrieval under changed context** without adding an artificial mnemonic. The anatomical fact remains constant while the amount of surrounding visual context is reduced. Learners first see a wide field, then a reduced field, then a tight crop. This helps reveal whether recall is attached to the actual local anatomy or merely to a memorized full-plate screenshot.

No new “memory trick” is generated for these items. When a structure has no genuine mnemonic, Aceapp continues to leave the mnemonic area absent.


## v49 — Readiness Matrix
The matrix keeps the learning message **Simple** and **Concrete**: instead of a vague mastery percentage, the learner can see exactly which proof is missing—name it, find it, recall it, retrieve it later, or make it durable. Optional transfer checks are shown only when they honestly apply. This avoids inventing mnemonics or decorative "memory tricks" where none are useful.
