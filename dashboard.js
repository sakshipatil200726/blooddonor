import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

YOUR_FIREBASE_CONFIG

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function loadDashboard(){

const querySnapshot =
await getDocs(collection(db,"donors"));

document.getElementById("totalDonors")
.innerHTML = querySnapshot.size;

}

loadDashboard();