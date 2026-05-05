import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "ISI_PUNYAMU",
  authDomain: "ISI",
  databaseURL: "ISI",
  projectId: "ISI",
  storageBucket: "ISI",
  messagingSenderId: "ISI",
  appId: "ISI"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue };