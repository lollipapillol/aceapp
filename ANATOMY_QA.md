# Aceapp anatomy annotation QA — release pass

This release treats annotation accuracy as a blocking requirement. A label is not considered acceptable merely because it is near the correct structure.

## Automated release checks

- **52** plate views with interactive point/area maps checked.
- **516** annotation shapes/targets checked for coordinate bounds.
- **58** declared plate/image descriptors compared with their actual source image dimensions.
- **0** missing referenced plate files.
- **0** out-of-bounds annotation targets.
- **0** native-dimension mismatches after correction.
- JavaScript module syntax passes `node --check`.

## Important corrections retained in this release

The visual/semantic re-audit retained or refined corrections including:

- anterior thigh muscle target assignments (iliopsoas, pectineus, adductor longus, gracilis, sartorius, rectus femoris, vastus lateralis, vastus medialis)
- pelvis ASIS/AIIS and ischium placement
- true ribs 1–7, vertebrochondral ribs 8–10, and floating ribs 11–12 represented as groups rather than misleading single points
- tympanic membrane represented along the membrane rather than as an arbitrary dot
- semicircular canals represented as a region
- optic nerve / central retinal target placement tightened
- skin reticular dermis vs hypodermis boundary
- cervical plate coordinate-space correction
- hand and foot labels made bone-specific where a single bone is targeted
- greater wing of sphenoid named specifically on the lateral skull
- female reproductive fundus, uterine cavity, myometrium, cervix and vaginal targets retained after recheck
- male reproductive nomenclature tightened

## Native-image coordinate correction in this release

Five older descriptors were using coordinate dimensions that did not exactly match the source files. Their annotations were proportionally transformed into the source image's true native pixel space and the descriptors were corrected:

- Face muscles — lateral view
- Face muscles — oblique view
- Posterior head/neck
- Torso — anterior view
- Torso — posterior view

The source images now render at their true aspect ratio and the overlay coordinates live in the same pixel space as the image.

## Held content

**Hand Surface & Side Terms** remains `qualityHold: true` and is not released. It should stay hidden until its plate/target set meets the same standard.

## Reporting

Learn and quiz screens retain a report control so a learner can flag an annotation for anatomy QA if a real-device rendering issue is discovered after deployment.
