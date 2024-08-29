const config = {
  apiKey: 'AIzaSyCN7G-RmrkeRsClTWXurPkcstTp5usNsqs',
  authDomain: 'vidmo-65578.firebaseapp.com',
  projectId: 'vidmo-65578',
  storageBucket: 'vidmo-65578.appspot.com',
  messagingSenderId: '679844539996',
  appId: '1:679844539996:web:ddc71eeb8c6e38cf490099',
  measurementId: 'G-DJDW7WPGKV'

} as const;

type Config = typeof config;

export function getFirebaseConfig(): Config {
  if (Object.values(config).some((value) => !value))
    throw new Error('Firebase config is not set or incomplete');

  return config;
}
