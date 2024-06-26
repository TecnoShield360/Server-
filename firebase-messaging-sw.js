importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBa4yb9RiKQ3CD1fPh4qzZihiGgv8wl2rc",
  authDomain: "tecno-shield-360.firebaseapp.com",
  projectId: "tecno-shield-360",
  storageBucket: "tecno-shield-360.appspot.com",
  messagingSenderId: "594144376819",
  appId: "1:594144376819:web:756d2d2156350e9c1b4486",
  measurementId: "G-CNEDFX3EDS"
});

const messaging = firebase.messaging();

// Opcional: Configurar mensagens de fundo
messaging.setBackgroundMessageHandler(function(payload) {
    console.log('Mensagem recebida no service worker:', payload);
    const notificationTitle = 'Nova mensagem';
    const notificationOptions = {
        body: payload.data.body,
        icon: 'https://tecnoshield360.blogspot.com/favicon.ico'  // Caminho para o ícone da notificação
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker ativado');
});

// Adicione mais eventos de service worker conforme necessário