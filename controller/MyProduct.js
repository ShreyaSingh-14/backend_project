const myservice = require('../services/myservice');

const myProduct = async (req, res) => {
    try {
        const productId = req.params.id; 
        await myservice(productId); 
        res.status(200).json({ message: "Product processed successfully" });
    } catch (error) {
        console.error("Error in product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = myProduct;
