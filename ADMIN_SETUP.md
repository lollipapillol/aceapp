# Aceapp admin control room setup — v43

Admin access remains Firebase-UID protected through the `admins` collection.

## One-time admin marker

1. In Firebase Console, open **Authentication → Users** and copy the UID of your own Aceapp account.
2. Open **Firestore Database → Data**.
3. Create collection `admins`.
4. Create a document whose ID is your exact Firebase UID.
5. Add Boolean field `active` = `true`.

Normal users cannot create or edit this marker.

## Anatomy QA workflow

Open **Profile → Admin only → Feedback & anatomy QA dashboard**. The existing QA system remains intact:

- reported target snapshot vs current live target;
- rose reported geometry vs green current geometry;
- raw native-coordinate descriptors;
- severity, admin note, fixed release, QA checklist, and written verification evidence;
- duplicate clusters and regression alerts;
- release-health readiness gate.

v43 does not change admin permissions or anatomy coordinates.
