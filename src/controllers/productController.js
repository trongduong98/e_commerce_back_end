import {
    productModel
} from '../models/_index.js';

const getProductsListWithThumbnail = async (req, res) => {
    productModel.get_all_products_with_thumbnail((data) => {
        res.send({result: data});
    });
}

const getProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    productModel.get_product_by_id(productId, (data) => {
        res.send({result: data});
    });
}

const uploadProduct = async (req, res) => {
    const params = req.body;
    productModel.uploadProduct(params, (data) => {
        res.send({result: data});
    });
}

const updateProduct = async (req, res) => {
    const params = req.body;
    const productId = parseInt(req.params.id);
    productModel.updateProduct(params, productId, (data) => {
        res.send({result: data});
    });
}

const deleteProduct = async (req, res) => {
    const productId = parseInt(req.params.id);
    productModel.deleteProduct(productId, (data) => {
        res.send({result: data});
    });
}

export default {
    getProductsListWithThumbnail,
    getProductById,
    uploadProduct,
    updateProduct,
    deleteProduct
}