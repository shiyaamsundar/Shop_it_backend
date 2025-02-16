const express = require('express');
const { newOrder, myOrders, getSingleOrder, allOrders, updateOrder ,deleteOrder} = require('../controllers/orderController');
const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth');
const router=express.Router()



router.route('/order/new').post(isAuthenticatedUser,newOrder)

router.route('/order/:id').get(isAuthenticatedUser,getSingleOrder)
router.route('/orders/me').get(isAuthenticatedUser,myOrders)
router.route('/admin/orders').get(isAuthenticatedUser,authorizedRoles('admin'),allOrders)
router.route('/admin/order/:id').put(isAuthenticatedUser,authorizedRoles('admin'),updateOrder)
router.route('/admin/order/:id').delete(isAuthenticatedUser,authorizedRoles('admin'),deleteOrder)



module.exports=router