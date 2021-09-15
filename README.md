# A movie review application

## Overview

The application fetches movies from a [movie API] (https://www.themoviedb.org/documentation/api). Only logged in users can see them, and they are the ones who can write reviews as well. The reviews can be searched by movie and by reviewer. The application is responsive.

It was a team project, in which I was mainly responsible for the backend.

## Technologies

The project was created using:

- React.js
- Node.js
- express.js
- MongoDB

## Launch

` git clone https://github.com/CodecoolGlobal/fapi-exam-project-2-general-evagurubi.git`

### Client side:

- `cd frontend` //navigates to frontend folder
- `npm install` //to install npm packages
- `npm start` //starts client side, runs on localhost:3000

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Google authentication

Users of the application can authenticate themselves with Google. Register on the Google developer console with the help of [this link](https://developers.google.com/identity/protocols/oauth2/openid-connect) and obtain your own GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET, which you should save in your `.env` file (see the details below). Your redirect_uri should be set to "http://localhost:3000/login".

### Backend:

- `cd backend` //navigates to backend folder
- `npm install` //to install npm packeges

- Create a `.env` file. It should contain the following elements:

  - `MONGO_LINK = YOUR_MONGODB_CONNECTION`
  - `CLIENT_ID = YOUR_GOOGLE_CLIENT_ID`
  - `CLIENT_SECRET = YOUR_GOOGLE_CLIENT_SECRET`
  - `TOKEN_SECRET = YOUR_JWT_SECRET`
  - `PORT = 5000`

- Start the server:

  - `node start.js` //starts server, runs on localhost:5000
