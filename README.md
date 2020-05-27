# gazine

A web podcast player powered by Itunes API for podcast searching.
You can sign up and login to follow podcasts of your interest.

## Live Demo

[Live Demo](https://gazine.firebaseapp.com)

## Getting Started

### Prerequisites

- Create a firebase account:
  [Firebase](https://firebase.google.com/)

- Node 10.20.0+

  - [Node](https://nodejs.org/en/)

- Yarn 1.22.0+

  - [Yarn](https://classic.yarnpkg.com/)

- Install and setup firebase

```
npm install -g firebase-tools
firebase login
firebase init hosting
```

## Project setup web/gazine folder

### Firebase hosting

- Create a new site at firebase hosting console at: [Firebase console](https://console.firebase.google.com)
- Create .firebaserc file inside web/gazine folder
- Fill up 'YOUR_FIREBASE_PROJECT' and 'SITE_NAME' with your own firebase project information

- Add a target to firebase.json

```
{
  "hosting": {
    "target": "SITE_NAME",
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

- Run the following command to apply the target to the right hosting site at Firebase Hosting

```
firebase target:apply hosting SITE_NAME SITE_NAME
```

```
{
  "projects": {
    "default": "YOUR_FIREBASE_PROJECT"
  },
  "targets": {
    "YOUR_FIREBASE_PROJECT": {
      "hosting": {
        "SITE_NAME": [
          "SITE_NAME"
        ]
      }
    }
  }
}
```

### Create a .env inside web/gazine folder

```
BASE_URL=https://itunes.apple.com
VUE_APP_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
VUE_APP_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
VUE_APP_FIREBASE_DATABASE_URL=
VUE_APP_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
VUE_APP_FIREBASE_STORAGE_BUCKET=
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=
VUE_APP_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
```

### Install dependencies

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn dev
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Deployment

- **_Clear your browser cache when changing from dev to prodcution deployment_**
- Disable dev config at nuxt.config.js

```
pwa: {
    // disable the modules you don't need
    meta: false,
    icon: false,
    // if you omit a module key form configuration sensible defaults will be applied
    // manifest: false,

    workbox: {
      importScripts: [
        // ...
        '/firebase-auth-sw.js'
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: false
    }
  }
```

```
cd web/gazine
yarn build
firebase deploy --only hosting
```

### Prerequisites Frontend

- Node 10.20.0+

  - [Node](https://nodejs.org/en/)

- Yarn 1.22.0+
  - [Yarn](https://classic.yarnpkg.com/)

## Build Setup Frontend

    ```bash
    $ cd web/gazine
    # install dependencies
    $ yarn install

    # serve with hot reload at localhost:3000
    $ yarn dev

    # build for production and launch server
    $ yarn build
    $ yarn start

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### Prerequisites Backend api/functions folder

**_Currently the api is not being called from frontend_** but is already working for search podcasts:

```
api/podcast/search?term=podcast_title
```

and reading rss from podcast feed url.
**_URL must be base64 encoded_**:

```
api/podcast?feedUrl=encodedURL
```

- .firebaserc

```
{
  "projects": {
    "default": "YOUR_FIREBASE_PROJECT"
  }
}
```

- Node 8.0.0+

  - [Node](https://nodejs.org/en/)

```bash
  $ cd api/functions
  # install dependencies
  $ npm install

 # serve
 $ npm run serve

 # build for production and launch server
 $ npm run build
 $ npm run deploy


### Built With

- [Nuxt.js](https://nuxtjs.org/) - The Progressive Vue.js Framework
- [iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/) - The Search API allows you to place search fields in your website to search for content within the iTunes Store and Apple Books Store. You can search for a variety of content; including books, movies, podcasts, music, music videos, audiobooks, and TV shows.
- [Firebase Authentication](https://firebase.google.com/docs/auth) - Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
- [Firebase Firestore](https://firebase.google.com/docs/firestore) - Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform.
- [Firebase Hosting](https://firebase.google.com/docs/hosting) - Firebase Hosting provides fast and secure hosting for your web app, static and dynamic content, and microservices.
- [Firebase Cloud Functions](https://firebase.google.com/docs/functions) - Backend developed as Cloud functions. Cloud Functions is Google Cloud’s event-driven serverless compute platform. Run your code locally or in the cloud without having to provision servers. Go from code to deploy with continuous delivery and monitoring tools. Cloud Functions scales up or down, so you pay only for compute resources you use. Easily create end-to-end complex development scenarios by connecting with existing Google Cloud or third-party services.
- [RSS parser](https://github.com/rbren/rss-parser#readme) - A small library for turning RSS XML feeds into JavaScript objects.

## Contributing

Please send me an email to fchiapini@gmail.com I will be happy to help

## Author

- **Felipe Chiapini** - Project owner - [GitHub](https://github.com/fchiapini)

## Acknowledgments

- A special thanks to my wife for supporting me
```
