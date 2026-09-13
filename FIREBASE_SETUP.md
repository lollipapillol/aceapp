# Aceapp Firebase setup

The web build is already wired to Firebase project `aceapp-70837` using the Firebase modular browser SDK.

## Firebase Console steps required

1. **Authentication → Sign-in method**
   - Enable **Anonymous**.
   - Enable **Email/Password** (the Email/Password provider, not email-link-only).
2. **Firestore Database**
   - Create a Firestore database if the project does not have one yet.
   - Start in Production mode.
   - Replace the Firestore rules with the included `firestore.rules` and publish them.
3. **Authentication → Settings → Authorized domains**
   - Add the domain where Aceapp is deployed if Firebase has not added it automatically.
4. Optional but recommended before a larger public launch:
   - Enable Firebase App Check for the deployed web domain.
   - If available on your Firebase/Identity Platform setup, enable automatic cleanup of old anonymous accounts.

## Current behavior

- First visit: Firebase creates an anonymous user.
- Guests receive 20 scored retrievals. The included Firestore rules keep an anonymous UID's cloud trial counter within 0–20 and prevent it from being decreased or deleted by that anonymous user.
- Guest study progress is synced to `users/{uid}` in Firestore when available and is also cached locally for offline resilience.
- Create account: the anonymous Firebase user is linked to Email/Password, preserving the same UID and progress.
- Log in to an existing account: local guest progress and the user's Firestore progress are merged conservatively.
- Signed-in users are not subject to the 20-retrieval gate.
- Sign out clears that user's study record from the local UI and starts a new guest session; the registered record remains in Firestore.

## Data model

`users/{firebaseUid}` stores:
- `accountType`: `anonymous` or `registered`
- `email`
- `displayName`
- `trialUsed`
- `schemaVersion`
- `progress`: XP, streak, mastery, misses, seen items, reviews, activity days, confusion pairs, and skill evidence
- `updatedAt`

Cloud writes are debounced so a rapid drill does not send a Firestore write for every tap.

## Security note

The Firebase web configuration/API key in `index.html` is expected to be public. Do not place Firebase Admin service-account keys, private API credentials, or payment secrets in the web app. Access to user records is controlled by Firebase Authentication and Firestore Security Rules.
