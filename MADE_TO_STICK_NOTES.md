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
