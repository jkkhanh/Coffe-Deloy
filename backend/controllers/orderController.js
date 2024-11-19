import orderModel from "../models/orderModel.js";
import userModel from './../models/userModel.js';


// Placing orders using COD method
const placeOrder = async (req,res) => {

    try {
        
        const {userId, items, amount, address} = req.body; 

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "Thanh toán khi nhận hàng",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData: {}})

        res.json({
            success: true,
            message: "Đã đặt hàng"
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }

}



// Placing orders using Momo method
const placeOrderMomo = async (req,res) => {}




// Placing orders using VNpay method
const placeOrderVNpay = async (req,res) => {}




// All orders data for admin panel
const allOrders = async (req,res) => {}



// User order data for frontend
const userOrders = async (req,res) => {
    try {
        
        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({
            success: true,
            orders
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}



// Update order Status from Admin panel
const updateStatus = async (req,res) => {}



export {placeOrder, placeOrderMomo, placeOrderVNpay, allOrders, userOrders, updateStatus}