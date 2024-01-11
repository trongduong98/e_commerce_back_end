import db from '../config/connect_db.js';

class productGroupModel {
    constructor(productGroup) {
        this.product_group_id = productGroup.product_group_id,
        this.product_group_name = productGroup.product_group_name,
        this.product_group_description = productGroup.product_group_description,
        this.product_group_total = productGroup.product_group_total,
        this.product_images_thumbnail_name = productGroup.product_images_thumbnail_name,
        this.product_image_thumbnail_value = productGroup.product_image_thumbnail_value,
        this.product_group_date_created = productGroup.product_group_date_created,
        this.product_group_date_updated = productGroup.product_group_date_updated,
        this.product_group_status = productGroup.product_group_status
    }
}

// productGroup.get_all_products_with_thumbnail = (result) => {
//     db.query(`SELECT A.*, B.product_image_thumbnail_value
//                 FROM products A LEFT JOIN product_images_thumbnail B ON A.product_id = B.product_id`, function(err, product){
//         if(err) {
//             result(err);
//             return;
//         }
//         result(product);
//     })
// }

productGroupModel.get_product_group_name = (result) => {
    db.query("SELECT A.product_group_id, A.product_group_name FROM product_groups A", function(err, productGroup){
        if(err || !productGroup) {
            result(err);
            return;
        }
        result(productGroup);
    })
}

// productGroup.uploadProduct = (prams, result) => {
//     db.query("INSERT INTO products SET ?", prams, function(err, product) {
//         if(err) {
//             result(err);
//             return;
//         }
//         result({id: product.insertId, ...prams});
//     })
// }

export default productGroupModel;