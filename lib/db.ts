const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = JSON.parse(process.env.GOOGLE_FIREBASE_SERVICE_ACCOUNT || '');

const firebaseConfig = {
  credential: cert(serviceAccount)
};

initializeApp(firebaseConfig);
export const db = getFirestore();