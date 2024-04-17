require('dotenv').config();
const Razorpay = require('razorpay');



const order = async(req, res) => {
  const data = req.body;
  try{
    var instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET })

    const order_req = await instance.orders.create({
    amount: data.amount,
    currency: data.currency,
    receipt: data.receipt,
    notes: data.notes
    })
    res.send({order_req});
    console.log(order_req);
  }
  catch(err){
    console.log(err);
  }
}

module.exports = {order};