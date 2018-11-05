
var config = {
  apiKey: "AIzaSyBhmHo7z28M_ewhjULkj8sMW1UBKMCntBg",
  authDomain: "messages-7d56e.firebaseapp.com",
  databaseURL: "https://messages-7d56e.firebaseio.com",
  projectId: "messages-7d56e",
  storageBucket: "messages-7d56e.appspot.com",
  messagingSenderId: "434052306453"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.usePublicVapidKey('BKb9vl9s4QKOp6cFVh4znlqJQf5-BJvV8_PXjsgwKcWjl-eyHD3hW6hrxsi8NMDRvdZ_ApTVrv70Tv7rr9zmgtw');

messaging.requestPermission().then(function () {
  console.log('Notification izni temin edildi.');
  return messaging.getToken();
}).then(function(token){
  console.log("asil token : "+ token);
});

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then(function(currentToken) {
  if (currentToken) {
    console.log("token :" + currentToken);
    //sendTokenToServer(currentToken);
    //updateUIForPushEnabled(currentToken);
  } else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
   // updateUIForPushPermissionRequired();
    //setTokenSentToServer(false);
  }
}).catch(function(err) {
  console.log('An error occurred while retrieving token. ', err);
  //showToken('Error retrieving Instance ID token. ', err);
  //setTokenSentToServer(false);
});


messaging.onMessage(function(x){
  console.log("mesaj geldi " + JSON.stringify(x));
  appendMessage(x);

});

messaging.on

function appendMessage(payload) {
  console.log(JSON.stringify(payload));
  const messagesElement = document.querySelector('#messages');
  const dataHeaderELement = document.createElement('h5');
  const dataElement = document.createElement('pre');
  dataElement.style = 'overflow-x:hidden;';
  dataHeaderELement.textContent = 'Received message:';
  dataElement.textContent = JSON.stringify(payload, null, 2);
  messagesElement.appendChild(dataHeaderELement);
  messagesElement.appendChild(dataElement);
}
