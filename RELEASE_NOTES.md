# Aceapp v49.1 — Startup hotfix

- Fixes React production error #310 by moving the admin effect above the loading-screen early return so hook order never changes between renders.
- No anatomy coordinates, labels, plate images, Firebase rules, donation flow, or v49 Readiness Matrix behavior changed.

# Aceapp v49 — Readiness Matrix

## New in v49

### One readiness model, made visible
Aceapp already collects different kinds of learning evidence. v49 consolidates those signals into a per-structure **Readiness Matrix** so learners can see why a structure is or is not ready instead of seeing only one percentage.

The five core exam-readiness signals remain:

1. **Name** — recognition from the highlighted target
2. **Find** — localization from the structure name
3. **Recall** — free recall without choices
4. **Delay** — successful retrieval after spacing
5. **Durable** — sufficient spaced strength

The matrix also shows optional transfer evidence when the audited plate genuinely supports it:

- **Cue-free** — successful localization after the target highlight is removed
- **New view** — correct retrieval across at least two verified views
- **Tight crop** — correct recall after global image context is reduced

Transfer evidence does not fake eligibility. A dash means that particular structure/plate does not currently support that drill.

### Targeted prescription
Each priority structure now receives one concrete next action such as **Train localization**, **Train free recall**, **Fade the cues**, **Shift the view**, or **Reduce context**. Tapping the prescription opens the relevant existing drill with that structure prioritized first, then interleaves neighboring material rather than mass-repeating one answer.

### Home summary
Home now summarizes the learner's largest evidence gaps so the readiness percentage has an explanation behind it. Stats contains the full prioritized matrix.

## Anatomy integrity
No anatomy labels, coordinates, target geometry, plate dimensions, or artwork changed in v49. The `LABEL_CATEGORIES` anatomy block is byte-identical to v48 and all 68 files under `plates/` are unchanged.

The audited baseline remains **52 mapped plate views / 516 annotation targets**.

## Firebase
No Firestore rule change is required for v49. The Readiness Matrix is derived from existing progress fields (`mastered`, `reviews`, and `skills`).

## Cache
The service-worker cache key and registration query were bumped to v49.
