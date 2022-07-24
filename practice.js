
// ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyDi3t4VNpNvavgFL13NzJ42p0Y_ix4ZuMs",
  authDomain: "kwtter-test.firebaseapp.com",
  databaseURL: "https://kwtter-test-default-rtdb.firebaseio.com",
  projectId: "kwtter-test",
  storageBucket: "kwtter-test.appspot.com",
  messagingSenderId: "921249332463",
  appId: "1:921249332463:web:1ef21dd8e1c458a0bcaf1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
  });
}


