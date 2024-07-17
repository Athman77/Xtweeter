const config = {
  apiKey: 'AIzaSyCe7eaoNM74HZyksNsxC7K8hGWbOdU40lI',
  authDomain: 'finance-aea62.firebaseapp.com',
  projectId: 'finance-aea62',
  storageBucket: 'finance-aea62.appspot.com',
  messagingSenderId: '10437449340',
  appId: '1:10437449340:web:1d02bfc5eeadf9375edbf9',
  measurementId: 'G-28Q34C1ZYY'
} as const;

type Config = typeof config;

export function getFirebaseConfig(): Config {
  if (Object.values(config).some((value) => !value))
    throw new Error('Firebase config is not set or incomplete');

  return config;
}
