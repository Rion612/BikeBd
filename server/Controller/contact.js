const Contact = require('../Model/Contact');



exports.createMessage = (req, res) => {
    const { fullname, email,subject,message } = req.body;
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