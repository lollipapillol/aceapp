# Firebase setup for Aceapp v43

Aceapp uses Firebase Authentication and Cloud Firestore for registered accounts, cloud progress, feedback, and the UID-protected admin control room.

## Authentication

Enable **Email/Password** authentication. Guest showcase users do not create anonymous Firebase accounts.

## Firestore

If the v35+ `firestore.rules` are already published, **no rules change is required for v43**. Contrast Duels and exam-readiness calculations use the existing mastered/skills/reviews progress structure. No new Firestore fields or permissions are required.

## Admin access

Create `admins/{YOUR_UID}` with Boolean `active: true` for your own Aceapp account. Only approved admin UIDs can read the feedback queue, registered-user analytics, QA history, or coordinate evidence.
