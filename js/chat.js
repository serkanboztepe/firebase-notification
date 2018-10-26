
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
});

