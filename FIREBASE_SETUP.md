# Aceapp Firebase setup

Aceapp is wired to Firebase project `aceapp-70837` with Firebase Authentication and Cloud Firestore.

## Firebase Console steps

1. **Authentication → Sign-in method**
   - Enable **Email/Password**.
   - Keep **Anonymous authentication disabled**. Guests do not create Firebase users.
2. **Firestore Database**
   - Create the database in Production mode if it does not exist.
   - Publish the included `firestore.rules`.
3. **Authentication → Settings → Authorized domains**
   - Add every deployed Aceapp domain, including the Netlify domain and any custom domain.
4. Recommended before a larger public launch:
   - Enable Firebase App Check for the deployed web domain.
   - Consider email verification if verified-account-only features are introduced later.

## Current access model

- A guest can use exactly one fixed showcase set: **Cardiovascular → Heart, Anterior View**.
- The showcase demonstrates the full Aceapp loop: learn → name → reverse location → repair → mini-boss.
- Clearing browser storage can replay that same showcase, but cannot unlock a different free session or expose protected systems.
- Foundations, Atlas, Stats, Practice, tests, all other anatomy sets, and cloud-saved progress require account creation/login.
- Firebase Authentication begins only when a person creates an account or logs in. This keeps the Firebase Authentication user list much closer to the number of real Aceapp accounts.
- When a guest creates an account, local showcase progress can be merged into the new registered record and then synced to Firestore.
- Signing out removes signed-in progress from the local UI while the registered cloud record remains in Firestore.

## User document

`users/{firebaseUid}` stores fields such as:
- `accountType: "registered"`
- `email`
- `displayName`
- `schemaVersion`
- `progress`: XP, streak, mastery, misses, seen items, reviews, activity days, confusion pairs, and skill evidence
- `updatedAt`

Cloud writes are debounced so drills do not create a Firestore write on every tap.

## Security note

The Firebase web configuration/API key in `index.html` is public client configuration by design. Never place Firebase Admin service-account credentials or other private server credentials in the browser bundle. User records are protected by Firebase Authentication and Firestore Security Rules.
