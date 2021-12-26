import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { getCategory } from '../../../Actions/category.actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../../helpers/axios';


const CreateBikes = () => {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategory());

    }, []);
    const bikeCategories = useSelector(state => state.category.categories);
    const bikeBrands = useSelector(state => state.brand.brands);
    const createBikeSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData();
        form.append("name", name);
        form.append("price", price);
        form.append("cc", cc);
        form.append("availability", availability);
        form.append("category", category);
        form.append("displacement", displacement);
        form.append("engine_type", engine_type);
        form.append("max_power", max_power);
        form.append("max_torque", max_torque);
        form.append("gears", gears);
        form.append("clutch", clutch);
        form.append("engine_cooling", engine_cooling);
        form.append("fuel_supply", fuel_supply);
        form.append("starting_method", starting_method);
        form.append("transmission_type", transmission_type);
        form.append("tank_capacity", tank_capacity);
        form.append("ground_clearance", ground_clearance);
        form.append("height", height);
        form.append("overall_length", overall_length);
        form.append("overall_width", overall_width);
        form.append("weight", weight);
        form.append("wheelbase", wheelbase);
        form.append("chassis", chassis);
        form.append("front_brake", front_brake);
        form.append("rear_brake", rear_brake);
        form.append("front_suspension", front_suspension);
        form.append("rear_suspension", rear_suspension);
        form.append("front_tyre", front_tyre);
        form.append("rear_tyre", rear_tyre);
        form.append("tyre_type", tyre_type);
        form.append("wheel_type", wheel_type);
        form.append("mileage", mileage);
        form.append("topspped", topspped);
        form.append("headlight", headlight);
        form.append("taillight", taillight);
        form.append("indicators", indicators);
        form.append("handletype", handletype);
        form.append("speedometer", speedometer);
        form.append("rpm_meter", rpm_meter);
        form.append("odo_meter", odo_meter);
        form.append("seat_type", seat_type);
        form.append("description", description);
        form.append("brand", brand);
        form.append("bikeImage", bikeImage);
        form.append("performance_score", performance_score);
        form.append("durability_score", durability_score);
        form.append("braking_score", braking_score);
        form.append("suspension_score", suspension_score);
        form.append("milage_score", milage_score);
        form.append("features_score", features_score);
        form.append("price_score", price_score);
        form.append("service_score", service_score);

        for (var key of form.entries()) {
            console.log(key[0] + ', ' + key[1])
        }

        await axios.post('/create/bike', form)
            .then((res) => {
                if (res.status === 201) {
                    toast.success("Succesfully bike created!");
                    setName("");
                    setPrice("");
                    setCc("");
                    setAvailability("");
                    setCategory("");
                    setDisplacement("");
                    setEngine_type("");
                    setMax_power("");
                    setMax_torque("");
                    setGears("");
                    setClutch("");
                    setEngine_cooling("");
                    setFuel_supply("");
                    setStarting_method("");
                    setTransmission_type("");
                    setTank_capacity("");
                    setGround_clearance("");
                    setHeight("");
                    setOverall_length('');
                    setOverall_width("");
                    setWeight("");
                    setWheelbase("");
                    setChassis("");
                    setFront_brake("");
                    setRear_brake("");
                    setFront_suspension("");
                    setRear_suspension("");
                    setFront_tyre("");
                    setRear_tyre("");
                    setTyre_type("");
                    setWheel_type("");
                    setMileage("");
                    setTopspped("");
                    setHeadlight("");
                    setTaillight("");
                    setIndicators("");
                    setHandletype("");
                    setSpeedometer("");
                    setRpm_meter("");
                    setOdo_meter("");
                    setSeat_type("");
                    setDescription("");
                    setBrand("");
                    setBikeImage("");
                    setPerformance_score("");
                    setDurability_score("");
                    setBraking_score("");
                    setSuspension_score("");
                    setMilage_score("");
                    setFeatures_score("");
                    setPrice_score("");
                    setService_score("");
                }
                else {
                    toast.error("Bike created failed!");
                }

            })
            .catch((error) => {
                toast.error(error.message);

            });

    }
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [cc, setCc] = useState("");
    const [availability, setAvailability] = useState("");
    const [category, setCategory] = useState("");
    const [displacement, setDisplacement] = useState("");
    const [engine_type, setEngine_type] = useState("");
    const [max_power, setMax_power] = useState("");
    const [max_torque, setMax_torque] = useState("");
    const [gears, setGears] = useState("");
    const [clutch, setClutch] = useState("");
    const [engine_cooling, setEngine_cooling] = useState("");
    const [fuel_supply, setFuel_supply] = useState("");
    const [starting_method, setStarting_method] = useState("");
    const [transmission_type, setTransmission_type] = useState("");
    const [tank_capacity, setTank_capacity] = useState("");
    const [ground_clearance, setGround_clearance] = useState("");
    const [height, setHeight] = useState("");
    const [overall_length, setOverall_length] = useState('');
    const [overall_width, setOverall_width] = useState("");
    const [weight, setWeight] = useState("");
    const [wheelbase, setWheelbase] = useState("");
    const [chassis, setChassis] = useState("");
    const [front_brake, setFront_brake] = useState("");
    const [rear_brake, setRear_brake] = useState("");
    const [front_suspension, setFront_suspension] = useState("");
    const [rear_suspension, setRear_suspension] = useState("");
    const [front_tyre, setFront_tyre] = useState("");
    const [rear_tyre, setRear_tyre] = useState("");
    const [tyre_type, setTyre_type] = useState("");
    const [wheel_type, setWheel_type] = useState("");
    const [mileage, setMileage] = useState("");
    const [topspped, setTopspped] = useState("");
    const [headlight, setHeadlight] = useState("");
    const [taillight, setTaillight] = useState("");
    const [indicators, setIndicators] = useState("");
    const [handletype, setHandletype] = useState("");
    const [speedometer, setSpeedometer] = useState("");
    const [rpm_meter, setRpm_meter] = useState("");
    const [odo_meter, setOdo_meter] = useState("");
    const [seat_type, setSeat_type] = useState("");
    const [description, setDescription] = useState("");
    const [brand, setBrand] = useState("");
    const [bikeImage, setBikeImage] = useState("");
    const [performance_score, setPerformance_score] = useState();
    const [durability_score, setDurability_score] = useState();
    const [braking_score, setBraking_score] = useState();
    const [suspension_score, setSuspension_score] = useState();
    const [milage_score, setMilage_score] = useState();
    const [features_score, setFeatures_score] = useState();
    const [price_score, setPrice_score] = useState();
    const [service_score, setService_score] = useState();
    return (
        <div className="bike">
            <div className="title"><h3>Create bikes</h3></div>
            <div className="container">
                <div className="container" style={{ marginTop: "50px" }}>
                    <ToastContainer />
                    <form onSubmit={createBikeSubmit}>
                        <h6 className="formTitle">Basic details</h6>
                        <div className="inputGroup">
                            <div>
                                <input type="text" className="form-control" placeholder="Bike name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Price in BDT"
                                    value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Bike CC"
                                    value={cc} onChange={(e) => setCc(e.target.value)} />
                            </div>
                            <div>
                                <select className="form-select" value={availability} onChange={(e) => setAvailability(e.target.value)}>
                                    <option selected>Availability</option>
                                    <option value="Available">Available</option>
                                    <option value="Not Available">Not Available</option>
                                    <option value="Upcoming">Upcoming </option>
                                </select>
                            </div>
                            <div>
                                <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option selected>Select category</option>
                                    {
                                        bikeCategories?.map((item, index) => {
                                            return (
                                                <option value={item?._id}>{item?.name}</option>
                                            )
                                        })

                                    }

                                </select>
                            </div>

                        </div>
                        <h6 className="formTitle">Engine and Transmission</h6>
                        <div className="inputGroup">
                            <div>
                                <input type="text" className="form-control" placeholder="Bike displacement in cc" value={displacement} onChange={(e) => setDisplacement(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Engine type"
                                    value={engine_type} onChange={(e) => setEngine_type(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Max power"
                                    value={max_power} onChange={(e) => setMax_power(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Max torque"
                                    value={max_torque} onChange={(e) => setMax_torque(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Bike clutch"
                                    value={clutch} onChange={(e) => setClutch(e.target.value)} />
                            </div>
                            <div>
                                <select className="form-select" value={gears} onChange={(e) => setGears(e.target.value)}>
                                    <option selected>How many gears?</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                            <div>
                                <select className="form-select" value={engine_cooling} onChange={(e) => setEngine_cooling(e.target.value)}>
                                    <option selected>Select Engine cooling type</option>
                                    <option value="Liquid cooled">Liquid cooled</option>
                                    <option value="Oil-Cooled">Oil-Cooled</option>
                                    <option value="Air Cooled">Air Cooled</option>
                                </select>
                            </div>
                            <div>
                                <select className="form-select" value={fuel_supply} onChange={(e) => setFuel_supply(e.target.value)}>
                                    <option selected>Select Fuel Supply</option>
                                    <option value="Fuel injection">Fuel injection</option>
                                    <option value="Carburetor (UCAL, CV)">Carburetor (UCAL, CV)</option>
                                    <option value="Carburetor">Carburetor</option>
                                    <option value="Carburetor, Fuel Injection">Carburetor, Fuel Injection</option>
                                </select>
                            </div>
                            <div>
                                <select className="form-select" value={starting_method} onChange={(e) => setStarting_method(e.target.value)}>
                                    <option selected>Starting method</option>
                                    <option value="Electric starter">Electric starter</option>
                                    <option value="Kick & Electric starter">Kick & Electric starter</option>
                                </select>
                            </div>
                            <div>
                                <select className="form-select" value={transmission_type}
                                    onChange={(e) => setTransmission_type(e.target.value)}>
                                    <option selected>Transmission type</option>
                                    <option value="Manual">Manual</option>
                                    <option value="Automatic">Automatic</option>
                                    <option value="Semi-Automatic">Semi-Automatic</option>
                                </select>
                            </div>

                        </div>
                        <h6 className="formTitle">Dimensions</h6>
                        <div className="inputGroup">
                            <div>
                                <input type="text" className="form-control" placeholder="Tank capacity"
                                    value={tank_capacity} onChange={(e) => setTank_capacity(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Ground clearance"
                                    value={ground_clearance} onChange={(e) => setGround_clearance(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Height"
                                    value={height} onChange={(e) => setHeight(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Weight"
                                    value={weight} onChange={(e) => setWeight(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Overall Length"
                                    value={overall_length} onChange={(e) => setOverall_length(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Overall Width"
                                    value={overall_width} onChange={(e) => setOverall_width(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Wheelbase"
                                    value={wheelbase} onChange={(e) => setWheelbase(e.target.value)} />
                            </div>

                        </div>
                        <h6 className="formTitle">Brakes, Wheels and Suspensions</h6>
                        <div className="inputGroup">
                            <div>
                                <select className="form-select" value={chassis} onChange={(e) => setChassis(e.target.value)}>
                                    <option selected>Chassis type</option>
                                    <option value="N/A">N/A</option>
                                    <option value="Diamond frame">Diamond frame</option>
                                    <option value="Deltabox">Deltabox</option>
                                    <option value="Double Cradle Split Synchro STIFF">Double Cradle Split Synchro STIFF</option>
                                    <option value="Double Cradle">Double Cradle</option>
                                    <option value="Single Downtube">Single Downtube</option>
                                </select>
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Front brake"
                                    value={front_brake} onChange={(e) => setFront_brake(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Rear brake"
                                    value={rear_brake} onChange={(e) => setRear_brake(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Front suspension"
                                    value={front_suspension} onChange={(e) => setFront_suspension(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Rear suspension"
                                    value={rear_suspension} onChange={(e) => setRear_suspension(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Front tyre"
                                    value={front_tyre} onChange={(e) => setFront_tyre(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Rear tyre"
                                    value={rear_tyre} onChange={(e) => setRear_tyre(e.target.value)} />
                            </div>
                            <div>
                                <select className="form-select" value={tyre_type} onChange={(e) => setTyre_type(e.target.value)}>
                                    <option selected>Tyre type</option>
                                    <option value="N/A">N/A</option>
                                    <option value="Tubeless">Tubeless</option>
                                    <option value="Tube">Tube</option>
                                </select>
                            </div>
                            <div>
                                <select className="form-select" value={wheel_type} onChange={(e) => setWheel_type(e.target.value)}>
                                    <option selected>Wheel type</option>
                                    <option value="N/A">N/A</option>
                                    <option value="Alloy">Alloy</option>
                                </select>
                            </div>

                        </div>

                        <h6 className="formTitle">Top speed and Mileage</h6>
                        <div className="inputGroup">
                            <div>
                                <input type="text" className="form-control" placeholder="Mileage (Average)"
                                    value={mileage} onChange={(e) => setMileage(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Top Speed"
                                    value={topspped} onChange={(e) => setTopspped(e.target.value)} />
                            </div>

                        </div>
                        <h6 className="formTitle">Electricals</h6>
                        <div className="inputGroup">
                            <div>
                                <select className="form-select" value={headlight} onChange={(e) => setHeadlight(e.target.value)}>
                                    <option selected>Select headlight type</option>
                                    <option value="N/A">N/A</option>
                                    <option value="Halogen">Halogen</option>
                                    <option value="HID">HID</option>
                                    <option value="LED">LED</option>
                                    <option value="Laser">Laser</option>
                                </select>
                            </div>
                            <div>
                                <select className="form-select" value={taillight} onChange={(e) => setTaillight(e.target.value)}>
                                    <option selected>Select taillight type</option>
                                    <option value="N/A">N/A</option>
                                    <option value="Halogen">Halogen</option>
                                    <option value="HID">HID</option>
                                    <option value="LED">LED</option>
                                    <option value="Laser">Laser</option>
                                    <option value="Bulb">Bulb</option>
                                </select>
                            </div>
                            <div>
                                <select className="form-select" value={indicators} onChange={(e) => setIndicators(e.target.value)}>
                                    <option selected>Select indicator type</option>
                                    <option value="N/A">N/A</option>
                                    <option value="Halogen">Halogen</option>
                                    <option value="HID">HID</option>
                                    <option value="LED">LED</option>
                                    <option value="Laser">Laser</option>
                                    <option value="Bulb">Bulb</option>
                                </select>
                            </div>

                        </div>
                        <h6 className="formTitle">Features</h6>
                        <div className="inputGroup">
                            <div>
                                <select className="form-select" value={handletype} onChange={(e) => setHandletype(e.target.value)}>
                                    <option selected>Select handle type</option>
                                    <option value="N/A">N/A</option>
                                    <option value="Convention Scooter">Convention Scooter</option>
                                    <option value="3-Part Handle Bar">3-Part Handle Bar</option>
                                    <option value="Rod Handle Bar">Rod Handle Bar</option>
                                    <option value="Pipe">Pipe</option>
                                </select>
                            </div>
                            <div>
                                <select className="form-select" value={speedometer} onChange={(e) => setSpeedometer(e.target.value)}>
                                    <option selected>Speedometer type</option>
                                    <option value="N/A">N/A</option>
                                    <option value="Digital">Digital</option>
                                    <option value="Analog">Analog</option>
                                </select>
                            </div>
                            <div>
                                <select className="form-select" value={rpm_meter} onChange={(e) => setRpm_meter(e.target.value)}>
                                    <option selected>RPM meter type</option>
                                    <option value="N/A">N/A</option>
                                    <option value="Digital">Digital</option>
                                    <option value="Analog">Analog</option>
                                </select>
                            </div>
                            <div>
                                <select className="form-select" value={odo_meter} onChange={(e) => setOdo_meter(e.target.value)}>
                                    <option selected>Odometer type</option>
                                    <option value="N/A">N/A</option>
                                    <option value="Digital">Digital</option>
                                    <option value="Analog">Analog</option>
                                </select>
                            </div>
                            <div>
                                <select className="form-select" value={seat_type} onChange={(e) => setSeat_type(e.target.value)}>
                                    <option selected>Seat type</option>
                                    <option value="N/A">N/A</option>
                                    <option value="Single">Single</option>
                                    <option value="Split">Split</option>
                                </select>
                            </div>

                        </div>
                        <h6 className="formTitle">Overall Score and other things</h6>
                        <div className="inputGroup">
                            <div>
                                <input type="text" className="form-control" placeholder="Performance score"
                                    value={performance_score} onChange={(e) => setPerformance_score(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Durability score"
                                    value={durability_score} onChange={(e) => setDurability_score(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Braking score"
                                    value={braking_score} onChange={(e) => setBraking_score(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Suspension score"
                                    value={suspension_score} onChange={(e) => setSuspension_score(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Milage score"
                                    value={milage_score} onChange={(e) => setMilage_score(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Features score"
                                    value={features_score} onChange={(e) => setFeatures_score(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Price score"
                                    value={price_score} onChange={(e) => setPrice_score(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder="Service center score"
                                    value={service_score} onChange={(e) => setService_score(e.target.value)} />
                            </div>

                        </div>
                        <div className="Otherthings">
                            <select className="form-select" value={brand}
                                onChange={(e) => setBrand(e.target.value)}>
                                <option selected>Select bike's brand</option>
                                {
                                    bikeBrands?.map((item, index) => {
                                        return (
                                            <option value={item?._id}>{item?.name}</option>
                                        )
                                    })

                                }

                            </select>
                            <textarea placeholder="Bike's description" value={description}
                                onChange={(e) => setDescription(e.target.value)} />
                            <div>
                                <label>Select bike image:</label>
                                <input type="file" name="bikeImage" onChange={(e) => setBikeImage(e.target.files[0])} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button className="bikeFormSubmit">Create bike</button>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    );
};

export default CreateBikes;