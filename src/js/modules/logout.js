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

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    firebase.auth().signOut().then(function() {
    window.location.href = "index.html";
        
      }).catch(function(error) {
        console.log(error)
      });
});
