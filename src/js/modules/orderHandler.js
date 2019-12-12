  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBNE5tC7edvv_nXgKaLWoCo-QBKDg74PFM",
    authDomain: "kovalev-a-v.firebaseapp.com",
    databaseURL: "https://kovalev-a-v.firebaseio.com",
    projectId: "kovalev-a-v",
    storageBucket: "kovalev-a-v.appspot.com",
    messagingSenderId: "511514350160",
    appId: "1:511514350160:web:f2157ef25fceeecc5ff755",
    measurementId: "G-MYYSS99BT4"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

  firebase.analytics();

  var db = firebase.firestore();

  console.log('111', db);

const orderConfirmButton = document.getElementById('order_confirm');

const types = document.forms['order_form'].elements['order_location'];

for (var i=0; i < types.length; i++) {
    types[i].onclick = doSomething;
}

let location_type = 0;

function doSomething() {
    if ( this.checked ) {
        location_type = this.value;
        console.log('loc', location_type)

    } else {
        console.log('error')
    }
}

console.log('loc', location_type)

orderConfirmButton.addEventListener('click', () => {
    db.collection("orders").add({
        order_id: 4,
        last: location_type,
        born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
});
