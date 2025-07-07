importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyC8Pi790CdyUkW1NBbnvBdRNSGiyBuXWeY",
  authDomain: "roshoon-app.firebaseapp.com",
  projectId: "roshoon-app",
  storageBucket: "roshoon-app.firebasestorage.app",
  messagingSenderId: "599109972712",
  appId: "1:599109972712:web:eb9f376bc3245b5d1f8f5d",
  measurementId: "G-3LTJ3S3F8Q",
});

const messaging = firebase.messaging();

// Optional: Handle background messages
messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png", // Optional icon
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
