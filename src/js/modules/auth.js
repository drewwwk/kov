var firebaseConfig = {
    apiKey: "AIzaSyBNE5tC7edvv_nXgKaLWoCo-QBKDg74PFM",
    authDomain: "kovalev-a-v.firebaseapp.com",
    databaseqURL: "https://kovalev-a-v.firebaseio.com",
    projectId: "kovalev-a-v",
    storageBucket: "kovalev-a-v.appspot.com",
    messagingSenderId: "511514350160",
    appId: "1:511514350160:web:f2157ef25fceeecc5ff755",
    measurementId: "G-MYYSS99BT4"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const loginButton = document.getElementById('button');

loginButton.addEventListener('click', () => {
    firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('password').value)
  .then(function(result) {
    window.location.href = "profile.html";
  }).catch(function(error) {
    document.getElementById('error_handler').innerText = error.message
});
});
