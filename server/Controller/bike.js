const Bike = require('../Model/Bike');

const slugify = require('slugify');

exports.createBike = (req,res)=>{
    let bikeImages =[];

    if(req.files.length>0){
        bikeImages = req.files.map((file)=>{
            return { img : file.filename }
        })
    }

    const bikeObj = {
        name : req.body.name,
        slug : slugify(req.body.name),
        price : req.body.price,
        cc : req.body.cc,
        availability : req.body.availability,
        displacement : req.body.displacement,
        engine_type : req.body.engine_type,
        max_power : req.body.max_power,
        max_torque : req.body.max_torque,
        gears : req.body.gears,
        clutch : req.body.clutch,
        engine_cooling : req.body.engine_cooling,
        fuel_supply : req.body.fuel_supply,
        starting_method : req.body.starting_method,
        transmission_type : req.body.transmission_type,
        tank_capacity : req.body.tank_capacity,
        ground_clearance : req.body.ground_clearance,
        height : req.body.height,
        overall_length : req.body.overall_length,
        overall_width :req.body.overall_width,
        weight : req.body.weight,
        braking : req.body.braking,
        chassis : req.body.chassis,
        front_brake : req.body.front_brake,
        rear_brake : req.body.rear_brake,
        front_suspension : req.body.front_suspension,
        rear_suspension : req.body.rear_suspension,
        front_tyre : req.body.front_tyre,
        rear_tyre : req.body.rear_tyre,
        tyre_type : req.body.tyre_type,
        wheel_type : req.body.wheel_type,
        mileage : req.body.mileage,
        topspped : req.body.topspped,
        battery : req.body.battery,
        headlight : req.body.headlight,
        taillight : req.body.taillight,
        indicators : req.body.indicators,
        engine_skill_switch : req.body.engine_skill_switch,
        handletype : req.body.handletype,
        speedometer : req.body.speedometer,
        rpm_meter : req.body.rpm_meter,
        odo_meter : req.body.odo_meter,
        seat_type : req.body.seat_type,
        category : req.body.category,
        brand : req.body.brand,
        description : req.body.description,
        bikeImages
    }
    const bike  = new Bike(bikeObj);
     bike.save((error,bike)=>{
        if(error){
            return res.status(400).json({
                error
            })
        }
        else{
            return res.status(201).json({
                bike
            })
        }
    })
}