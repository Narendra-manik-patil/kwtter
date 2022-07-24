//YOUR FIREBASE LINKS
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
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";


}