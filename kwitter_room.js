
//ADD YOUR FIREBASE LINKS HERE
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
user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name-" + Room_names);
                  row = "<div class='room_name'id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;


                  //End code
            })
      });
}
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.Location = "index.html";
}
function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }