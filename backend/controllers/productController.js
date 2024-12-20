import { v2 as cloudinary } from "cloudinary"
import productModel from './../models/productModel.js';


// Function for add product
const addProduct = async (req,res) => {

    try {

        const {name, description, price, category} = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item) => item !== undefined)

        let imageUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,{resource_type: 'image'});
                return result.secure_url
            })
        )

        const productData = {
            name, 
            description,
            category,
            price: Number(price),
            image: imageUrl
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save()
        

        res.json({
            success: true,
            message: "Sản phẩm đã được thêm"
        })
        
        

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}



// Function for list product
const listProduct = async (req,res) => {

    try {
        const products = await productModel.find({})
        res.json({
            success: true,
            products
        })    

    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message: error.message
        })
    }

}



// Function for removing product
const removeProduct = async (req,res) => {

    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({
            success: true,
            message: " Đã xóa sản phẩm"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message: error.message
        })
    }

}

// Function for editing product
const editProduct = async (req, res) => {
    try {
        const { productId, name, description, price, category } = req.body;
        const product = await productModel.findById(productId);

        // Kiểm tra xem sản phẩm có tồn tại không
        if (!product) {
            return res.json({
                success: false,
                message: "Sản phẩm không tồn tại!"
            });
        }

        // Cập nhật thông tin sản phẩm
        product.name = name;
        product.description = description;
        product.price = price;
        product.category = category;
        
        // Kiểm tra nếu có ảnh mới, sẽ cập nhật lại
        if (req.files) {
            const image1 = req.files.image1 && req.files.image1[0];
            const image2 = req.files.image2 && req.files.image2[0];
            const image3 = req.files.image3 && req.files.image3[0];
            const image4 = req.files.image4 && req.files.image4[0];

            const newImages = [image1, image2, image3, image4];
            const updatedImages = [...product.image];
            
            for (let i = 0; i < newImages.length; i++) {
                if (newImages[i]) {
                    // Upload ảnh mới lên Cloudinary
                    const result = await cloudinary.uploader.upload(newImages[i].path, { resource_type: 'image' });
                    updatedImages[i] = result.secure_url; // Cập nhật ảnh mới vào vị trí tương ứng
                }
            }

            product.image = updatedImages;
        }
        
        // Lưu thông tin sản phẩm đã chỉnh sửa
        await product.save();

        res.json({
            success: true,
            message: "Sản phẩm đã được cập nhật"
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};




// Function for single product
const singleProduct = async (req,res) => {

    try {
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({
            success: true,
            product
        })
    } catch (error) {
        
        console.log(error);
        res.json({
            success:false,
            message: error.message
        })
        
    }
}




export {addProduct, listProduct, singleProduct, removeProduct, editProduct }