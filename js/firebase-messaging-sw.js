

importScripts('https://www.gstatic.com/firebasejs/5.5.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.5/firebase-messaging.js');

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

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
