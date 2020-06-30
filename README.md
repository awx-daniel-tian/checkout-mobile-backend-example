# checkout-mobile-backend-example

Airwallex Mobile Checkout Backend Demo. This demo is designed to be a node backend for the [iOS](https://github.com/airwallex/airwallex-payment-ios) or [Android](https://github.com/airwallex/airwallex-payment-android) payment checkout demo. This is to simulate a basic example of how an Airwallex merchant should be integrating the Airwallex service in both the app client and the backend. Currently, it is deployed on Heroku [here](https://checkout-mobile-backend-demo.herokuapp.com/).

## Get Started

##### Setting Up

```
$ git clone https://github.com/awx-daniel-tian/checkout-mobile-backend-example.git
$ yarn install (in root directory)
$ yarn dev (in development)
$ yarn start (in production)
```

##### Create .env file in root directory

```
$ clientId=xxxxxxxxxxxxxxxxx
$ apiKey=xxxxxxxxxxxxxxxxx
```

## Explanation

Here's an explanation of how the payment flow works between the merchant's App Client, the merchant's Backend, and Airwallex API

1.

## Code Structure

- `./app.js` boilerplate to setup Express.js server
- `./routes/route.js` API routes to simulate merchant backend (details below)
- `./utils/token-client.js` fetch Airwallex JWT token when there's none, or expired
- `./utils/fake-data.js` generates a fake customer or fake customer order
- `./utils/config.js` contains Airwallex API base URL's (currently set to demo)
- `./views` contains basic front end files

## API Endpoints

| Type | API Route               | Description                 |
| ---- | ----------------------- | --------------------------- |
| POST | /customers/create       | Create a new customer       |
| POST | /payment_intents/create | Create a new payment intent |
| GET  | /customer-secret/:id    | Get a customer secret       |
