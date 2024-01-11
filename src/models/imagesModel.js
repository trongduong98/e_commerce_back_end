import db from '../config/connect_db.js';

class imageModel {
    constructor(file) {
        this.id = file.product_image_id,
        this.name = file.product_image_name,
        this.image_1 = file.product_image_value_1,
        this.image_2 = file.product_image_value_2,
        this.image_3 = file.product_image_value_3,
        this.image_4 = file.product_image_value_4,
        this.image_5 = file.product_image_value_5,
        this.product_id = file.product_id,
        this.status = file.product_status,
        this.date_create = file.date_create,
        this.date_update = file.date_update
    }
}

class imageThumbnailModel {
    constructor(file) {
        this.id = file.product_images_thumbnail_id,
        this.name = file.product_images_thumbnail_name,
        this.image_thumbnail = file.product_images_thumbnail_value,
        this.product_id = file.product_id,
        this.product_group_id = file.product_group_id,
        this.date_created = file.product_image_thumbnail_date_updated,
        this.date_updated = file.product_image_thumbnail_date_updated,
        this.status = file.product_image_thumbnail_status
    }
}

imageModel.uploadImage = (params, result) => {
    db.query("INSERT INTO product_images SET ?", params, function(err, product) {
        if(err) {
            result(err);
            return;
        }
        result({id: product.insertId, ...params});
    })
}

imageModel.updateImage = (params, id, result) => {
    db.query("UPDATE product_images SET ? WHERE product_images.product_id = ? ", [params, id], function(err, product) {
        if(err) {
            result(err);
            return;
        }
        result({id: id, ...params});
    })
}

imageThumbnailModel.uploadImageThumbnail = (params, result) => {
    db.query("INSERT INTO product_images_thumbnail SET ?", params, function(err, product) {
        if(err) {
            result(err);
            return;
        }
        result({id: product.insertId, ...params});
    })
}

imageThumbnailModel.updateImageThumbnail = (params, id, result) => {
    db.query("UPDATE product_images_thumbnail SET ? WHERE product_images_thumbnail.product_id = ? ", [params, id], function(err, product) {
        if(err) {
            result(err);
            return;
        }
        result({id: id, ...params});
    })
}

export {
    imageModel,
    imageThumbnailModel
}