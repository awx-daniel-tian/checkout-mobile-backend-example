const { v4: uuidv4 } = require("uuid");

const newCustomer = {
  request_id: uuidv4(),
  merchant_customer_id: uuidv4(),
  email: "qa.testing@airwallex.com",
  phone_number: "15566668888",
  first_name: "Testing",
  last_name: "QA",
  additional_info: {
    register_via_social_media: true,
    registration_date: "2012-12-30",
    first_successful_order_date: "2012-12-30",
  },
  live_mode: "true",
  additional_data: {
    "123": "123",
    "234": "234",
    "345": "345",
  },
  metadata: {
    "123": "123",
    "234": "123",
    "345": "123",
  },
};

const newPaymentIntent = {
  request_id: uuidv4(),
  amount: 100,
  email: "joshua@airwallex.com",
  phone: "+86-19100008888",
  currency: "HKD",
  merchant_order_id: uuidv4(),
  order: {
    type: "v_goods",
    products: [
      {
        code: "3414314111",
        name: "IPHONE7",
        quantity: 5,
        sku: "piece",
        type: "physical",
        unit_price: 100.01,
        url: "test_url",
        desc: "test desc",
      },
    ],
    shipping: {
      first_name: "Danny",
      last_name: "She",
      phone_number: "139012321323",
      shipping_method: "sameday",
      address: {
        country_code: "CN",
        state: "Shanghai",
        city: "Shanghai",
        street: "Pudong District",
        postcode: "291201",
      },
    },
  },
  metadata: {
    "123": "123",
    "234": "123",
    "345": "123",
  },
  descriptor: "vip8888",
  additional_data: "131231232",
};

module.exports = { newCustomer, newPaymentIntent };
