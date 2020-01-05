import * as firebase from 'firebase';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyArvkrqfZNo3sNUlfV3rfkx39amxsymNjI",
    authDomain: "goalcoach-773a8.firebaseapp.com",
    databaseURL: "https://goalcoach-773a8.firebaseio.com",
    projectId: "goalcoach-773a8",
    storageBucket: "goalcoach-773a8.appspot.com",
    messagingSenderId: "536090755192",
    appId: "1:536090755192:web:b41f8f08aa4aec8bcaed8d",
    measurementId: "G-W7B194QENY"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');