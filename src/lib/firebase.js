import firebase from 'firebase/app';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDEih-pGDu2J5I3u_YtVTaqVXpARLVTGTk",
    authDomain: "infotag-e19da.firebaseapp.com",
    projectId: "infotag-e19da"
  })
}

export default firebase;