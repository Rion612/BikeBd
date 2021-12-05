const Contact = require('../Model/Contact');
const nodemailer = require('nodemailer');

exports.createMessage = (req, res) => {
    const { fullname, email, subject, message } = req.body;
    const date = Date.now().toString();
    try {
        const obj = {
            fullname,
            email,
            subject,
            message,
            date
        }
        const _contact = new Contact(obj);
        _contact.save((error, data) => {
            if (data) {
                return res.status(200).json({
                    data
                })
            }
            else {
                return res.status(400).json({
                    error
                })
            }

        })

    } catch (error) {
        return res.status(500).json({
            message: "Something is wrong! Please try again later"
        })
    }

}

exports.getAllMessage = (req, res) => {
    try {
        Contact.find({}).then((data) => {
            return res.status(200).json({
                data
            })
        }).catch((error) => {
            return res.status(400).json({
                error
            })
        });
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}
exports.setStatusTrue = (req, res) => {
    try {
        const updateObj = {};
        updateObj.status = true;
        Contact.findOneAndUpdate({ _id: req.body._id }, {
            "$set": updateObj,
            "$currentDate": { lastModified: true }
        }).exec((error, result) => {
            if (error) {
                return res.status(400).json({
                    message: "Something Wrong"
                });
            } else {
                Contact.findOne({ _id: result._id })
                    .exec((error, data) => {
                        if (error) {
                            return res.status(400).json({
                                message: "Something Wrong"
                            });
                        }
                        else if (data) {

                            return res.status(200).json(
                                { data }
                            );
                        }

                    })
            }
        })



    } catch (error) {
        return res.status(400).json({
            message: "Something Wrong",
            error: error
        });
    }
}
exports.deleteMessage = (req, res) => {
    try {
        Contact.findOneAndDelete({ _id: req.body._id })
            .exec((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: "Something Wrong"
                    });
                }
                else if (data) {

                    return res.status(200).json(
                        { message: "Message is deleted successfully" }
                    );
                }

            })

    } catch (error) {
        return res.status(400).json({
            message: "Something Wrong"
        });
    }

}

exports.sendMail = (req, res) => {
    const mailto = req.body.mailto;
    const subject = req.body.subject;
    const message = req.body.message;
    let transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false,
        auth: {
            user: "bikepedia10581@gmail.com",
            pass: "bikepedia1234!@",
        },
    });
    let mailOptions = {
        from: 'bikepedia10581@gmail.com',
        to: mailto, // list of receivers
        subject: subject, // Subject line
        text: message, // plain text body
        html: `<p>${message}</p>`, // html body
    }
    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log(err);
        }
        else{
            return res.status(200).json({
                message : "Email is sent successfully!"
            })
        }
    })
}