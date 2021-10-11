const mongoose = require('mongoose');

const bikeSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,

    },
    slug: {
        type: String,
        required: true

    },
    price: {
        type: String,
        required: true
    },
    cc: {
        type: String,
        required: true
    },
    
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'BikeCategory',
        required: true
    },
    availability: {
        type: String,
        required: true
    },
    displacement: {
        type: String,
        required: true
    },
    engine_type: {
        type: String,
        required: true
    },
    max_power: {
        type: String,
        required: true
    },
    max_torque: {
        type: String,
        required: true
    },
    gears: {
        type: String,
        required: true
    },
    clutch: {
        type: String,
        required: true
    },
    engine_cooling: {
        type: String,
        required: true
    },
    fuel_supply: {
        type: String,
        required: true
    },
    starting_method: {
        type: String,
        required: true
    },
    transmission_type: {
        type: String,
        required: true
    },
    tank_capacity: {
        type: String,
        required: true
    },
    ground_clearance: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    overall_length: {
        type: String,
        required: true
    },
    overall_width: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    wheelbase: {
        type: String,
        required: true
    },
    chassis:{
        type: String,
        required: true
    },
    front_brake: {
        type: String,
        required: true
    },
    rear_brake: {
        type: String,
        required: true
    },
    front_suspension: {
        type: String,
        required: true
    },
    rear_suspension: {
        type: String,
        required: true
    },
    front_tyre: {
        type: String,
        required: true
    },
    rear_tyre: {
        type: String,
        required: true
    },
    tyre_type: {
        type: String,
        required: true
    },
    wheel_type: {
        type: String,
        required: true
    },
    mileage:{
        type: String,
        required: true
    },
    topspped:{
        type: String,
        required: true
    },
    headlight: {
        type: String,
        required: true
    },
    taillight: {
        type: String,
        required: true
    },
    indicators: {
        type: String,
        required: true
    },
    handletype: {
        type: String,
        required: true
    },
    speedometer: {
        type: String,
        required: true
    },
    rpm_meter: {
        type: String,
        required: true
    },
    odo_meter: {
        type: String,
        required: true
    },
    seat_type: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    brand :{
        type: mongoose.Schema.Types.ObjectId, ref: 'BikeBrand',
        required: true
    },
    bikeImage: {
        type:String,
        required:true
    },
    performance_score:{
        type:String,
        required:true
    },
    durability_score:{
        type:String,
        required:true
    },
    braking_score:{
        type:String,
        required:true
    },
    suspension_score:{
        type:String,
        required:true
    },
    milage_score:{
        type:String,
        required:true
    },
    features_score:{
        type:String,
        required:true
    },
    price_score:{
        type:String,
        required:true
    },
    service_score:{
        type:String,
        required:true
    },

}, { timestamps: true });

module.exports = mongoose.model('Bike', bikeSchema);