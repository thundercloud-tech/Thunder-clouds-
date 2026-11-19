THUNDER CLOUD WEBSITE — FIREBASE AUTH VERSION

The original site design and pages are preserved. CSS and the existing site JavaScript
remain embedded in the HTML pages. The background layering fix is included.

FIREBASE AUTHENTICATION
- Email/password account creation and sign-in are wired on login.html.
- account.html checks Firebase login state, displays the signed-in customer, and signs out.
- The selected hosting plan remains in browser local storage; orders are still sent to
  the Thunder Cloud team through Discord (no payment processing is included).

REQUIRED BEFORE USE
1. In every HTML page's Firebase configuration, replace YOUR_EXISTING_API_KEY with the
   real Web API key from Firebase Console > Project settings > General > Your apps.
2. In Firebase Console, open Authentication > Sign-in method and enable Email/Password.
3. Deploy the complete folder to GitHub Pages.
4. In Firebase Authentication > Settings > Authorized domains, ensure your GitHub Pages
   hostname is authorized. Add thundercloud-tech.github.io if it is not already listed.

IMPORTANT
Firebase cannot authenticate users until the real Web API key is inserted and
Email/Password is enabled. Do not put Firebase Admin SDK/service-account private keys
in this website.
