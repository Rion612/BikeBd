import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import axios from '../../helpers/axios';
import { IoPersonCircleSharp } from 'react-icons/io5'
import './message.css';

const Message = (props) => {
    const [messages, setMessages] = useState([]);
    useEffect(async () => {
        const res = await axios.get('/get/all/messages');
        if (res.status == 200) {
            setMessages(res.data.data);
        }
    }, [])
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
                                return (
                                    <div className="singleMail" key={index}>
                                        <div>
                                            <IoPersonCircleSharp
                                                size={60}
                                                color={index % 2 ? "rgb(114, 174, 243)" : "rgb(231, 101, 101)"}
                                            />
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', padding: '10px' }}>
                                                <div style={{width:'70%',wordWrap:'break-word'}}>{item?.email}</div>
                                                <div style={{width: '30%' }}>
                                                    <p style={{width:'100%',textAlign:'right'}}>24/11/2021</p>
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
                        <div>
                            <img src={process.env.PUBLIC_URL + '/mailbox.jpg'} height="100%" width="100%" />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Message;