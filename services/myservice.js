// services/myservice.js

const myservice = async (productId) => {

    console.log(`Processing product with ID: ${productId}`)

    return { id: productId, name: "Sample Product" };
};

module.exports = myservice;
