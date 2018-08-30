import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBCq1CI7KdShcpwC_y2zDjBlRFmEJOwdeo",
    databaseURL: "https://mmtest-fc85e.firebaseio.com",
    projectId: "mmtest-fc85e",
};
firebase.initializeApp(config);
window.firebase=firebase;
firebase.database().ref().on('value',snapshot=>console.log(snapshot))