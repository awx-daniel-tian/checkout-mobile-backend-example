# checkout-mobile-backend-example

Airwallex Mobile Checkout Backend Demo. This demo is designed to be a node backend for the [iOS](https://github.com/airwallex/airwallex-payment-ios) or [Android](https://github.com/airwallex/airwallex-payment-android) payment checkout demo. This is to simulate a basic example of how an Airwallex merchant should be integrating the Airwallex service in both the app client and the backend.

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

## API Endpoints

| Type | API Route               | Description                 |
| ---- | ----------------------- | --------------------------- |
| POST | /customers/create       | Create a new customer       |
| POST | /payment_intents/create | Create a new payment intent |
| GET  | /customer-secret/:id    | Get a customer secret       |
