import {
    imageModel,
    imageThumbnailModel
} from '../models/_index.js';

const uploadImage = async(req, res) => {
    const params = req.body;
    imageModel.uploadImage(params, (data) => {
        res.send({result: data});
    });
}

const updateImage = async(req, res) => {
    const params = req.body;
    const productId = parseInt(req.params.id);
    imageModel.updateImage(params, productId, (data) => {
        res.send({result: data});
    });
}

const uploadImageThumbnail = async(req, res) => {
    const params = req.body;
    imageThumbnailModel.uploadImageThumbnail(params, (data) => {
        res.send({result: data});
    });
}

const updateImageThumbnail = async(req, res) => {
    const params = req.body;
    const productId = parseInt(req.params.id);
    imageThumbnailModel.updateImageThumbnail(params, productId, (data) => {
        res.send({result: data});
    });
}


export default {
    uploadImage,
    updateImage,
    uploadImageThumbnail,
    updateImageThumbnail
}