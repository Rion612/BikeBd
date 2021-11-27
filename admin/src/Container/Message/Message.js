import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import axios from '../../helpers/axios';
import { IoPersonCircleSharp } from 'react-icons/io5';
import {RiDeleteBin5Fill} from 'react-icons/ri'
import './message.css';

const Message = (props) => {
    const [messages, setMessages] = useState([]);
    const [mailContent, setMailContent] = useState({});
    const [state,setState]= useState(false);
    useEffect(async () => {
        const res = await axios.get('/get/all/messages');
        if (res.status == 200) {
            setMessages(res.data.data);
        }
    }, [state])
    const contentChange = async(mail) =>{
        if(mail.status == false){
            const response = await axios.post('/set/status/true',{_id:mail._id});
            if(response.status == 200){
                setState(!state);
            }
        }
        setMailContent(mail);
    }
    const dateFormation = (date) => {
        const d = new Date(parseInt(date));
        const obj={
            dateAndTime: d.toString(),
            date: d.toString().substr(4, 11),
            day: d.toString().substr(0, 4)
        }
        return obj;
    }
    return (
        <div style={{ marginTop: '80px' }}>
            <div className="title"><h3>Inbox</h3></div>
            <div style={{ margin: "50px 100px" }}>
                <div className="mailDiv">
                    <div className="mailList">
                        <div className="searchBox">
                            <input type="text" placeholder="Search mail.." className="searchInput" />
                            <img src={process.env.PUBLIC_URL + '/search.png'} height="40px" width="40px" />
                        </div>
                        {
                            messages.map((item, index) => {
                                const date = dateFormation(item?.date);
                                return (
                                    <div className={item.status ? 'singleReadMail': 'singleUnreadMail'} key={index} onClick={()=>contentChange(item)}>
                                        <div>
                                            <IoPersonCircleSharp
                                                size={60}
                                                color={index % 2 ? "rgb(114, 174, 243)" : "rgb(231, 101, 101)"}
                                            />
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', padding: '10px' }}>
                                                <div style={{ width: '70%', wordWrap: 'break-word' }}>{item?.email}</div>
                                                <div style={{ width: '30%' }}>
                                                    <p style={{ width: '100%', textAlign: 'right' }}>{date.date}</p>
                                                </div>
                                            </div>
                                            <div style={{ paddingLeft: '10px' }}>
                                                {item?.subject}
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="mailDetails">
                        {
                            Object.keys(mailContent).length == 0 ?
                                <div>
                                    <img src={process.env.PUBLIC_URL + '/mailbox.jpg'} height="100%" width="100%" />
                                </div> :
                               <div>
                                   <div style={{display:'flex', justifyContent:'space-between'}}>
                                       <div>
                                            <h3>{mailContent?.subject}</h3>
                                       </div>
                                       <div>
                                            <RiDeleteBin5Fill size={30} color="red" className="deleteButton"/>
                                       </div>
                                   </div>
                                   <div>
                                       <p>From: {mailContent?.email}</p>
                                       <p>Date and time: {(dateFormation(mailContent?.date)).dateAndTime}</p>
                                   </div>
                                   <div style={{marginTop:'40px'}}>
                                       <h5>Message: </h5>
                                       <p>{mailContent.message}</p>
                                   </div>
                                   <div>
                                       <button className="replyButton">
                                           Reply
                                       </button>
                                   </div>
                               </div>
                        }


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Message;