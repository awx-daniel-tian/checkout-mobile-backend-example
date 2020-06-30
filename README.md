# checkout-mobile-backend-example

Airwallex Mobile Checkout Backend Demo.

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
