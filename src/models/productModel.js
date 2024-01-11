import db from '../config/connect_db.js';

class productModel {
    constructor(product) {
        this.product_id = product.product_id,
        this.product_name = product.product_name,
        this.product_description = product.product_description,
        this.product_price = product.product_price,
        this.product_total = product.product_total,
        this.product_color = product.product_color,
        this.product_size = product.product_size,
        this.product_total_sales = product.product_total_sales,
        this.product_group_id = product.product_group_id
    }
}

productModel.get_all_products_with_thumbnail = (result) => {
    db.query(`SELECT A.*, B.product_image_thumbnail_value
                FROM products A LEFT JOIN product_images_thumbnail B ON A.product_id = B.product_id`, function(err, product){
        if(err) {
            result(err);
            return;
        }
        result(product);
    })
}

productModel.get_product_by_id = (id, result) => {
    db.query(`SELECT A.*, B.product_image_thumbnail_value, C.product_image_name, C.product_image_value_1, C.product_image_value_2, C.product_image_value_3, C.product_image_value_4, C.product_image_value_5
                FROM (products A LEFT JOIN product_images_thumbnail B ON A.product_id = B.product_id) LEFT JOIN product_images C ON A.product_id = C.product_id
                    WHERE A.product_id = ?`, id, function(err, product){
        if(err || product.length === 0) {
            result(err);
            return;
        }
        result(product[0]);
    })
}

productModel.uploadProduct = (params, result) => {
    db.query("INSERT INTO products SET ?", params, function(err, product) {
        if(err) {
            result(err);
            return;
        }
        result({id: product.insertId, ...params});
    })
}

productModel.updateProduct = (params, id, result) => {
    db.query("UPDATE products SET ? WHERE products.product_id = ? ", [params, id], function(err, product) {
        if(err) {
            result(err);
            return;
        }
        result({id: id, ...product});
    })
}

productModel.deleteProduct = (id, result) => {
    db.query("DELETE FROM product_images_thumbnail WHERE product_images_thumbnail.product_id = ? ", [id], function(err) {
        if(err) {
            result(err);
            return;
        } else {
            db.query("DELETE FROM product_images WHERE product_images.product_id = ? ", [id], function(err) {
                if(err) {
                    result(err);
                    return;
                } else {
                    db.query("DELETE FROM products WHERE products.product_id = ? ", [id], function(err, product) {
                        if(err) {
                            result(err);
                            return;
                        }
                        result({id: id, ...product});
                    })
                }
            })
        }
    })
    
}


export default productModel;