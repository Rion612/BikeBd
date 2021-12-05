import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import axios from '../../helpers/axios';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { ToastContainer, toast } from 'react-toastify';
import { FiSend } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai'
import 'react-toastify/dist/ReactToastify.css';
import './message.css';

const Message = (props) => {
    const [messages, setMessages] = useState([]);
    const [mailContent, setMailContent] = useState({});
    const [state, setState] = useState(false);
    const [searchItem, setSearchItem] = useState("");
    const [sentMailState, setSentMailState] = useState(false);
    const [emailMessage, setEmailMessage] = useState("");
    const [mailto, setMailTo] = useState("");
    const [mailSubject, setMailSubject] = useState("");
    useEffect(async () => {
        const res = await axios.get('/get/all/messages');
        if (res.status == 200) {
            setMessages(res.data.data);
        }
    }, [state])
    const contentChange = async (mail) => {
        if (mail.status == false) {
            const response = await axios.post('/set/status/true', { _id: mail._id });
            if (response.status == 200) {
                setState(!state);
            }
        }
        setMailContent(mail);
        setMailTo(mail.email);
    }
    const dateFormation = (date) => {
        const d = new Date(parseInt(date));
        const obj = {
            dateAndTime: d.toString(),
            date: d.toString().substr(4, 11),
            day: d.toString().substr(0, 4)
        }
        return obj;
    }
    const deleteMessage = async (item) => {
        const delete_response = await axios.post('/delete/message', { _id: item._id });
        if (delete_response.status == 200) {
            toast.success(delete_response.data.message);
            setState(!state);
            setMailContent({});
        }
        else {
            toast.error(delete_response.data.message);
        }
    }
    const stateChangeOfSentMail = () => {
        setSentMailState(!sentMailState);
    }
    const sendEmail = async() =>{
        const mailOptions = {
            mailto,
            subject: mailSubject,
            message: emailMessage
        }
        const mailSentResponse = await axios.post('/send/mail', mailOptions);
        if(mailSentResponse.status == 200){
            toast.success(mailSentResponse.data.message);
            setEmailMessage("");
            setMailSubject("");
        }else {
            toast.error("Something went wrong! Please try again later.");
        }
    }
    return (
        <div style={{ marginTop: '80px' }}>
            <ToastContainer />
            <div className="title"><h3>Inbox</h3></div>
            <div style={{ margin: "50px 100px" }}>
                <div className="mailDiv">
                    <div className="mailList">
                        <div className="searchBox">
                            <input type="text" placeholder="Search mail.." className="searchInput"
                                value={searchItem}
                                onChange={(e) => setSearchItem(e.target.value)} />
                            <img src={process.env.PUBLIC_URL + '/search.png'} height="40px" width="40px" />
                        </div>
                        {
                            [...messages].reverse().filter((val) => {
                                if (searchItem == "") {
                                    return val;
                                }
                                else if (val.email.toLowerCase().includes(searchItem.toLowerCase())) {
                                    return val;
                                }
                            }).map((item, index) => {
                                const date = dateFormation(item?.date);
                                return (
                                    <div className={item.status ? 'singleReadMail' : 'singleUnreadMail'} key={index} onClick={() => contentChange(item)}>
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
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <h3>{mailContent?.subject}</h3>
                                        </div>
                                        <div>
                                            <RiDeleteBin5Fill size={30} color="red" className="deleteButton" onClick={() => deleteMessage(mailContent)} />
                                        </div>
                                    </div>
                                    <div>
                                        <p>From: {mailContent?.email}</p>
                                        <p>Date and time: {(dateFormation(mailContent?.date)).dateAndTime}</p>
                                    </div>
                                    <div style={{ marginTop: '40px' }}>
                                        <h5>Message: </h5>
                                        <p>{mailContent.message}</p>
                                    </div>
                                    <div>
                                        {
                                            sentMailState ?
                                                <button className="replyButton" onClick={stateChangeOfSentMail}>
                                                    Close <AiOutlineClose/>
                                                </button>
                                                :
                                                <button className="replyButton" onClick={stateChangeOfSentMail}>
                                                    Reply
                                                </button>
                                        }

                                    </div>
                                    <div className={sentMailState ? 'sentMailBoxShow' : 'sentMailBoxHide'}>
                                        <div>
                                            <p>To: <input type="text" value={mailto}
                                                style={{ width: '100%', padding: '10px' }}
                                            />
                                            </p>

                                        </div>
                                        <div>
                                        <input type="text" placeholder="Subject" value={mailSubject} onChange={(e)=>setMailSubject(e.target.value)}
                                                style={{ width: '100%', padding: '10px' }}
                                            />
                                        </div>
                                        <div>
                                        <textarea type="text" placeholder="Your message" rows="8" value={emailMessage}
                                                onChange={(e)=>setEmailMessage(e.target.value)}
                                                style={{ width: '100%', padding: '10px',marginTop:'20px' }}
                                            />
                                        </div>
                                        <div>
                                            <button className="sendButton" onClick={sendEmail}>Send <FiSend /></button>
                                        </div>
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