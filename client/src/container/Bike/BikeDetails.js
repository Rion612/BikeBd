import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreadcumCom from '../../component/BreadcumCom/BreadcumCom';
import Layout from '../../component/Layout/Layout';
import RateStar from '../../component/Rating star/RateStar';
import './bikeDetails.css';
import { RiMotorbikeFill } from 'react-icons/ri';
import { MdCategory } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { MdSportsScore, MdSettingsInputComposite, MdRateReview } from "react-icons/md";
import { Table } from 'react-bootstrap'
import AccordionCom from '../../component/AccordionCom/AccordionCom';
import ScoreBar from '../../component/ScoreBar/ScoreBar';
import { AiOutlineMenuFold } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { FaStar } from 'react-icons/fa';
import { getAllRatings } from '../../Actions';

const BikeDetails = (props) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllRatings());
      },[]);
    const brands = useSelector(state => state.brand.brands);
    const categories = useSelector(state => state.category.categories);
    const bikes = useSelector(state => state.bikes.bikes);
    const ratings = useSelector(state=>state.ratings.ratings);
    const bikeInfo = bikes.find(x => x.slug === props.match.params.slug);
    const categoryInfo = categories.find(x => x._id === bikeInfo?.category)
    const brandInfo = brands.find(x => x._id === bikeInfo?.brand);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [review, setReview] = useState("");
    const [reviewerNameValid, setReviewerNameValid] = useState();
    const [reviewerName, setReviewerName] = useState("");
    const [reviewValid, setReviewValid] = useState();
    const [ratingValid, setRatingValid] = useState();
    const labels = ['Performance score', 'Durability score', 'Braking score', 'Suspension score', 'Mileage score', 'Features score', 'Price score', 'Service score'];
    const colors = ['#08aa38', '#e72630', '#c5d62c', '#2c4bd6', '#d62cd6', '#3a8dda', 'orange', '#247681'];
    const attributes = ['performance_score', 'durability_score', 'braking_score', 'suspension_score', 'milage_score', 'features_score', 'price_score', 'service_score'];
    const reviewSumitHandle = () => {
        if(rating === null){
            setRatingValid(false);
            setReviewerNameValid(true);
            setReviewValid(true);
        }
        else if(reviewerName === ""){
            setRatingValid(true);
            setReviewerNameValid(false);
            setReviewValid(true);
        }
        else if(review === ""){
            setRatingValid(true);
            setReviewerNameValid(true);
            setReviewValid(false);
        }else{
            setRatingValid(true);
            setReviewerNameValid(true);
            setReviewValid(true);
            const ratingObj = {
                bike: bikeInfo?._id,
                rating: rating
            }
            const reviewObj = {
                bike: bikeInfo?._id,
                review: review,
                reviewer_name: reviewerName
            }
        }
        
    }
    const findOutRating = ()=>{
        const r = ratings.filter(x=>x.bike === bikeInfo?._id);
        let ratingValue = 0;
        for(let i=0 ;i< r.length;i++){
            ratingValue = r[i].rating;
        }
        return Math.round(ratingValue/r.length)
    }
    return (
        <Layout>
            <div className='container'>
                <BreadcumCom fTab="Home" sTab={props.match.params.slug} route="/" />
                <div className="bdContent">
                    <div className="bikeImageDiv">
                        <img
                            src={bikeInfo?.bikeImage}
                            alt="Bike Image"
                            width="350px"
                            height="350px"
                            style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)" }}
                        />
                    </div>
                    <div className="bikeInfo">
                        <div style={{ display: "flex" }}>
                            <RiMotorbikeFill size={30} color={"#19626a"} />
                            <p style={{ margin: '0px' }}>{bikeInfo?.name}</p>
                            <div style={{ paddingLeft: "20px" }}>
                                <RateStar size="30" rating={findOutRating()} />
                            </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "5px" }}>
                            <MdCategory size={25} color={"#19626a"} />
                            <p style={{ fontSize: "20px" }}>Category- {categoryInfo?.name}</p>
                        </div>
                        <div style={{ display: "flex", marginTop: "5px" }}>
                            <ImPriceTags size={25} color={"#19626a"} />
                            <p style={{ fontSize: "20px" }}>Price-TK. {bikeInfo?.price}</p>
                        </div>
                        <div style={{ display: "flex", marginTop: "5px" }}>
                            <MdSportsScore size={25} color={"#19626a"} />
                            <p style={{ fontSize: "20px", margin: '0' }}>Overall score</p>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Table bordered>
                                <thead>
                                    <th>#</th>
                                    <th>Score</th>
                                    <th>#</th>
                                    <th>Score</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Performane</td>
                                        <td>{bikeInfo?.performance_score}</td>
                                        <td>Durabilty</td>
                                        <td>{bikeInfo?.durability_score}</td>
                                    </tr>
                                    <tr>
                                        <td>Braking</td>
                                        <td>{bikeInfo?.braking_score}</td>
                                        <td>Suspension</td>
                                        <td>{bikeInfo?.suspension_score}</td>
                                    </tr>
                                    <tr>
                                        <td>Mileage</td>
                                        <td> {bikeInfo?.milage_score}</td>
                                        <td>Features</td>
                                        <td>{bikeInfo?.features_score}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>{bikeInfo?.price_score}</td>
                                        <td>Service</td>
                                        <td>{bikeInfo?.service_score}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                <div>
                    <AccordionCom status={true} headtitle="Description" icon={<MdSettingsInputComposite />}>
                        <p style={{ fontSize: '18px' }}>{bikeInfo?.description}</p>
                        {
                            labels.map((item, index) => {
                                return (
                                    <ScoreBar
                                        key={index}
                                        label={item}
                                        score={parseInt(parseFloat(bikeInfo?.[attributes[index]]) * 10) + '%'}
                                        color="#08aa38"
                                        width={parseInt(parseFloat(bikeInfo?.[attributes[index]]) * 10) + '%'}
                                    />
                                )
                            })
                        }
                    </AccordionCom>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <AccordionCom headtitle="Additional information" status={true} icon={<AiOutlineMenuFold />}>
                        <div className='title'>
                            <h4 className='text-left pl-5' style={{ margin: '0' }}>1. Basic info: </h4>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <Table bordered style={{ fontSize: '16px' }}>
                                <tbody>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Price</td>
                                        <td>{bikeInfo?.price + ' BDT'}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>CC Category</td>
                                        <td>{bikeInfo?.cc + ' cc'}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Brand</td>
                                        <td>{brandInfo?.name}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Category</td>
                                        <td>{categoryInfo?.name}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Product Availability</td>
                                        <td>{bikeInfo?.availability}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className='title'>
                            <h4 className='text-left pl-5' style={{ margin: '0' }}>2. Engine & Transmission </h4>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <Table bordered style={{ fontSize: '16px' }}>
                                <tbody>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Displacement</td>
                                        <td>{bikeInfo?.displacement + ' cc'}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Engine Type</td>
                                        <td>{bikeInfo?.engine_type}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Max Power</td>
                                        <td>{bikeInfo?.max_power}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Max Torque</td>
                                        <td>{bikeInfo?.max_torque}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Gears</td>
                                        <td>{bikeInfo?.gears}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Clutch</td>
                                        <td>{bikeInfo?.clutch}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Engine Cooling</td>
                                        <td>{bikeInfo?.engine_cooling}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Fuel Supply</td>
                                        <td>{bikeInfo?.fuel_supply}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Starting Method</td>
                                        <td>{bikeInfo?.starting_method}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Transmission Type</td>
                                        <td>{bikeInfo?.transmission_type}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className='title'>
                            <h4 className='text-left pl-5' style={{ margin: '0' }}>3. Dimensions </h4>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <Table bordered style={{ fontSize: '16px' }}>
                                <tbody>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Fuel Tank Capacity</td>
                                        <td>{bikeInfo?.tank_capacity + ' L'}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Ground Clearance</td>
                                        <td>{bikeInfo?.ground_clearance + " mm"}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Height</td>
                                        <td>{bikeInfo?.height + " mm"}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Overall Length</td>
                                        <td>{bikeInfo?.overall_length + ' mm'}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Overall Width
                                        </td>
                                        <td>{bikeInfo?.overall_width + ' mm'}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Weight</td>
                                        <td>{bikeInfo?.weight + ' Kg'}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Wheelbase</td>
                                        <td>{bikeInfo?.wheelbase + ' mm'}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className='title'>
                            <h4 className='text-left pl-5' style={{ margin: '0' }}>4. Brakes, Wheels & Suspensions </h4>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <Table bordered style={{ fontSize: '16px' }}>
                                <tbody>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Chassis</td>
                                        <td>{bikeInfo?.chassis}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Front Brake</td>
                                        <td>{bikeInfo?.front_brake}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Rear Brake</td>
                                        <td>{bikeInfo?.rear_brake}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Front Suspension</td>
                                        <td>{bikeInfo?.front_suspension}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Rear Suspension
                                        </td>
                                        <td>{bikeInfo?.rear_suspension}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Front Tyre</td>
                                        <td>{bikeInfo?.front_tyre}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Rear Tyre</td>
                                        <td>{bikeInfo?.rear_tyre}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Tyre Type</td>
                                        <td>{bikeInfo?.tyre_type}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Wheel Type</td>
                                        <td>{bikeInfo?.wheel_type}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className='title'>
                            <h4 className='text-left pl-5' style={{ margin: '0' }}>5. Top Speed and Mileage </h4>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <Table bordered style={{ fontSize: '16px' }}>
                                <tbody>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Mileage (Average)</td>
                                        <td>{bikeInfo?.mileage + ' Kmpl (Approx)'}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Top Speed</td>
                                        <td>{bikeInfo?.topspped + ' Kmph (Approx)'}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className='title'>
                            <h4 className='text-left pl-5' style={{ margin: '0' }}>6. Electricals </h4>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <Table bordered style={{ fontSize: '16px' }}>
                                <tbody>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Headlight</td>
                                        <td>{bikeInfo?.headlight}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Tail Light</td>
                                        <td>{bikeInfo?.taillight}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Indicators</td>
                                        <td>{bikeInfo?.indicators}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className='title'>
                            <h4 className='text-left pl-5' style={{ margin: '0' }}>7. Features </h4>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <Table bordered style={{ fontSize: '16px' }}>
                                <tbody>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Handle Type</td>
                                        <td>{bikeInfo?.handletype}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Speedometer</td>
                                        <td>{bikeInfo?.speedometer}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>RPM Meter</td>
                                        <td>{bikeInfo?.rpm_meter}</td>
                                    </tr><tr>
                                        <td className='text-right font-weight-bold w-50'>Odometer</td>
                                        <td>{bikeInfo?.odo_meter}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-right font-weight-bold w-50'>Seat type
                                        </td>
                                        <td>{bikeInfo?.seat_type}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </AccordionCom>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <AccordionCom status={true} headtitle="User's Reviews" icon={<MdRateReview />}>
                        Here all user's review will be shown
                    </AccordionCom>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <AccordionCom status={true} headtitle="Submit Your Review's and Ratings" icon={<BsFillStarFill />}>
                        <div style={{ display: "flex" }}>
                            <div>
                                <label>Your rating: </label>
                            </div>
                            <div>
                                {[...Array(5)].map((star, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <label>
                                            <input
                                                type="radio"
                                                value={ratingValue}
                                                name="rating"
                                                className="radioButton"
                                                onClick={() => setRating(ratingValue)}
                                            />
                                            <FaStar
                                                size={20}
                                                className="star"
                                                color={
                                                    ratingValue <= (hover || rating) ? "orange" : "grey"
                                                }
                                                onMouseEnter={() => setHover(ratingValue)}
                                                onMouseLeave={() => setHover(null)}
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                        {ratingValid === false ? (
                            <span style={{ color: "red" }}>Rating is required!</span>
                        ) : (
                            <span></span>
                        )}
                        <div>
                            <label>Your name:</label>
                            <input className='form-control' type='text' value={reviewerName} onChange={(e)=>setReviewerName(e.target.value)} />
                        </div>
                        {reviewerNameValid === false ? (
                            <span style={{ color: "red" }}>Name is required!</span>
                        ) : (
                            <span></span>
                        )}
                        <div>
                            <label>Your review:</label>
                            <br />
                            <textarea
                                placeholder="Enter your review"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                            ></textarea>
                            {reviewValid === false ? (
                                <span style={{ color: "red" }}>Review is required!</span>
                            ) : (
                                <span></span>
                            )}
                        </div>
                        <div>
                            <button className="rsButton" onClick={reviewSumitHandle}>
                                Submit
                            </button>
                        </div>
                    </AccordionCom>
                </div>
            </div>
        </Layout>
    );
};

export default BikeDetails;