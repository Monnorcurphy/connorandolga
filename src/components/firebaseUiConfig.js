import { auth } from '../firebase';
import { GoogleAuthProvider } from 'firebase/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const uiConfig = {
  signInOptions: [
    {
      provider: GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        prompt: 'select_account'
      }
    }
  ],
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  tosUrl: 'https://connorandolga.com/tos',
  privacyPolicyUrl: 'https://connorandolga.com/privacy',
};

const ui = new firebaseui.auth.AuthUI(auth);

export const startFirebaseUI = (elementId) => {
  // Set the app name here
  ui.start(elementId, {
    ...uiConfig,
    siteName: 'Connor & Olga'
  });
};