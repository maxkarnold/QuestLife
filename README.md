# QuestLife

# SETUP
1. Go to Firebase Console to grab firebase config: [Link](https://console.firebase.google.com/u/0/project/quest-life-44c79/settings/general/web:ODRjMzlmN2UtODM0Yy00ODAzLWJiN2QtNTI0ZDZiYzUzOWY2?fb_gclid=Cj0KCQjwqIm_BhDnARIsAKBYcmtNuAaRH_-rTxmVn9KOljMs07CztaobCdfmxLIDPAbzpnDT5QMKHBAaAtrzEALw_wcB)
2. Create `src/environments/` folder with `environment.ts` and `environment.prod.ts` files
3. Something like this for `environment.ts`
```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "XXXXXXXXXXX",
    authDomain: "XXXXXXXX",
    projectId: "XXXXXXXX",
    storageBucket: "XXXXXXX",
    messagingSenderId: "XXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXX"
  }
}
```
4. For `environment.prod.ts` just replace `false` with `true`
5. `npm i` command should install all node modules
6. `npm start` should allow for development
7. `npm run deploy` should allow for deployment to LIVE

# TODO
### Sections
1. Tracker: Main page to update current xp
2. Overview: Page to track levels in each attribute with explanations
