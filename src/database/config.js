import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBd2_m6HHRHp-jq3OKPsuD-BLevM1krf8w",
    authDomain: "myinstagram-78325.firebaseapp.com",
    databaseURL: "https://myinstagram-78325.firebaseio.com",
    projectId: "myinstagram-78325",
    storageBucket: "myinstagram-78325.appspot.com",
    messagingSenderId: "315790283335",
    appId: "1:315790283335:web:73d8afeaeaa90da3a75762",
    measurementId: "G-Y6Q8M2VEZ6"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  export {database}
 