const Bike = require('../Model/Bike');
const slugify = require('slugify');
const Rating = require('../Model/Rating');
const BikeBrand = require('../Model/Bikebrand');

exports.createBike = (req, res) => {

    const bikeObj = {
        name: req.body.name,
        slug: slugify(req.body.name),
        price: req.body.price,
        cc: req.body.cc,
        category: req.body.category,
        availability: req.body.availability,
        displacement: req.body.displacement,
        engine_type: req.body.engine_type,
        max_power: req.body.max_power,
        max_torque: req.body.max_torque,
        gears: req.body.gears,
        clutch: req.body.clutch,
        engine_cooling: req.body.engine_cooling,
        fuel_supply: req.body.fuel_supply,
        starting_method: req.body.starting_method,
        transmission_type: req.body.transmission_type,
        tank_capacity: req.body.tank_capacity,
        ground_clearance: req.body.ground_clearance,
        height: req.body.height,
        overall_length: req.body.overall_length,
        overall_width: req.body.overall_width,
        weight: req.body.weight,
        wheelbase: req.body.wheelbase,
        chassis: req.body.chassis,
        front_brake: req.body.front_brake,
        rear_brake: req.body.rear_brake,
        front_suspension: req.body.front_suspension,
        rear_suspension: req.body.rear_suspension,
        front_tyre: req.body.front_tyre,
        rear_tyre: req.body.rear_tyre,
        tyre_type: req.body.tyre_type,
        wheel_type: req.body.wheel_type,
        mileage: req.body.mileage,
        topspped: req.body.topspped,
        headlight: req.body.headlight,
        taillight: req.body.taillight,
        indicators: req.body.indicators,
        engine_skill_switch: req.body.engine_skill_switch,
        handletype: req.body.handletype,
        speedometer: req.body.speedometer,
        rpm_meter: req.body.rpm_meter,
        odo_meter: req.body.odo_meter,
        seat_type: req.body.seat_type,
        brand: req.body.brand,
        description: req.body.description,
        performance_score: req.body.performance_score,
        durability_score: req.body.durability_score,
        braking_score: req.body.braking_score,
        suspension_score: req.body.suspension_score,
        milage_score: req.body.milage_score,
        features_score: req.body.features_score,
        price_score: req.body.price_score,
        service_score: req.body.service_score,

    }
    if (req.file) {
        bikeObj.bikeImage = process.env.API_URL + 'public/' + req.file.filename;
    }
    const bike = new Bike(bikeObj);
    bike.save((error, bike) => {
        if (error) {
            return res.status(400).json({
                error
            })
        }
        else {
            const array = ['performance_score','durability_score','braking_score','suspension_score','milage_score','features_score','price_score','service_score'];
            let score_sum = 0;
            for(let i =0 ;i< array.length ;i++){
                const ratingValue = parseFloat(bike[array[i]]);
                score_sum = score_sum + ratingValue;
            }
            const final_score = Math.round(score_sum /16.0);
            const obj={
                bike: bike._id,
                rating: final_score
            }
            const rating = new Rating(obj);
            rating.save((error,result)=>{
                if(error){
                    return res.status(500).json({
                        status: false,
                        message: "Something is wrong! Please try again later."
                    });
                }
            })
            return res.status(201).json({
                bike
            })
        }
    })
}
exports.getALLBikes = (req, res) => {
    try {
        Bike.find({}).then((bikesList) => {
            return res.status(200).json({
                bikesList

            })
        }).catch((e) => {
            return res.status(400).json({
                message: "Something is wrong. Please try again later!"
            })
        })

    } catch (error) {
        return res.status(500).json({
            message: "Something is wrong. Please try again later!"
        })
    }

}
exports.bikeSearch = async (req, res) => {

    try {
        const mileage = req.query.mileage;
        const price = (req.query.price).split('-');
        const cc = req.query.cc;
        const brand = req.query.brand;
        const bikes = await Bike.find({});
        if (!bikes) {
            return res.status(500).json({
                status: false,
                message: "Something is wrong! Please try again later."
            });
        }
        const bike = bikes.filter((x) =>
            x.mileage >= mileage 
            &&
            parseInt(x.price.replace(/,/g, '')) >= parseInt(price[0].replace(/,/g, '')) &&
            parseInt(x.price.replace(/,/g, '')) <= parseInt(price[1].replace(/,/g, '')) &&
            x.cc == cc 
            &&
            x.brand == brand
        );
        return res.status(200).json({
            status: true,
            data: bike
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something is wrong! Please try again later.",
            error: error
        })
    }
}