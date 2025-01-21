// List of products
const products = [
    {
        id: 1,
        product: 'p1'
    },
    {
        id: 2,
        product: 'p2'
    },
    {
        id: 3,
        product: 'p3'
    }
]

const productsList = async (req, res) => {
    try {
        const list = products
        res.status(200).json({ succcess: true, message: list });
        console.log('List of Products ', list)
    } catch (error) {
        res.status(500).json({ succcess: false, message: error })
    }
}
const productDetail = async (req, res) => {
    try {
        const productId = parseInt(req.params.id); // Convert to integer
        console.log('Requested Product ID:', productId);

        if (isNaN(productId)) {
            return res.status(400).json({ success: false, message: 'Invalid product ID' });
        }

        // Find the product by ID
        const product = products.find((p) => p.id === productId);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // Respond with the product details
        res.status(200).json({ success: true, product });
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

module.exports = {
    products,
    productsList,
    productDetail
}