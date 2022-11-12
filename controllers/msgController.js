const Msg = require('../models/msg');

exports.addMsg = async (req,res) => {
    try {
        const msg = new Msg();
        msg.name = req.body.name;
        msg.email = req.body.email;
        msg.message = req.body.message

        const saveMsg = await msg.save();

        return res.redirect('/')
    
    } catch (error) {
        return res.redirect('/')
    }
}