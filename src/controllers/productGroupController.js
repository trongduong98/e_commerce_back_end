import {
    productGroupModel
} from '../models/_index.js';

const getProductGroupList = async (req, res) => {
    productGroupModel.get_product_group_name((data) => {
        res.send({result: data});
    });
}

const getProductGroupListWithThumbnail = async (req, res) => {
    productGroupModel.get_product_group_with_thumbnail((data) => {
        res.send({result: data});
    });
}

export default {
    getProductGroupList,
    getProductGroupListWithThumbnail
}