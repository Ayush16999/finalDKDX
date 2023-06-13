export default {
  expo: {
    name: "fbphoneauth",
    slug: "fbphoneauth",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  },
  extra: {
    apiKey: "AIzaSyCzDrL4iT9ag6bjxH6ZiG3c5lxP7uQyvfs",
    authDomain: "a2s-task.firebaseapp.com",
    projectId: "a2s-task",
    storageBucket: "a2s-task.appspot.com",
    messagingSenderId: "444633169019",
    appId: "1:444633169019:web:2714e076c9f048464076de",
    measurementId: "G-PYQ4BND1VD",
  },
};
