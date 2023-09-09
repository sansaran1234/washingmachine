import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React, { useState, useEffect, useRef } from 'react';
import ModalWashingMachine from './ModalWashingMachine'
import { useCookies } from 'react-cookie';
// import { sendLineNotifyMessage } from '../service/apis/line-notify';
import axios from "axios";
// import Express  from 'express';
function WashingMachine(props) {
    const [show, setShow] = useState(false);
    const [numberMachine, setNumberMachine] = useState(0);
    const [amountMachine, setAmountMachine] = useState(0);
    const [priceMachine, setPriceMachine] = useState(0);
    const [countdown1, setCountdown1] = useState('3:00');
    const [countdown2, setCountdown2] = useState('3:00');
    const [countdown3, setCountdown3] = useState('3:00');
    const [countdown4, setCountdown4] = useState('3:00');
    const [countdown5, setCountdown5] = useState('3:00');
    const [countdown6, setCountdown6] = useState('3:00');
    const [cookie, setCookie, removeCookie] = useCookies(
        ['isWorking_numberMachine_1'],
    );
    const [cookie2, setCookie2, removeCookie2] = useCookies(
        ['isWorking_numberMachine_2'],
    );
    const [cookie3, setCookie3, removeCookie3] = useCookies(
        ['isWorking_numberMachine_3'],
    );
    const [cookie4, setCookie4, removeCookie4] = useCookies(
        ['isWorking_numberMachine_4'],
    );
    const [cookie5, setCookie5, removeCookie5] = useCookies(
        ['isWorking_numberMachine_5'],
    );
    const [cookie6, setCookie6, removeCookie6] = useCookies(
        ['isWorking_numberMachine_6'],
    );
    const Ref = useRef(null);
    const Ref2 = useRef(null);
    const Ref3 = useRef(null);
    const Ref4 = useRef(null);
    const Ref5 = useRef(null);
    const Ref6 = useRef(null);

    const handleShow = () => setShow(true);
    const showModal = (number,amount,price) =>{
        handleShow()
        setNumberMachine(number)
        setAmountMachine(amount)
        setPriceMachine(price)
    }
    const [seconds , setSeconds] = useState(15)

    const tokenLine = 'eKp2RdTcquOoWiorsJNNLOc1tjlg6iEu3kMnNmCSBgO'

    const instance = axios.create({
        baseURL: 'https://notify-api.line.me',
        headers: { 
            "Content-Type": "application/x-www-form-urlencoded", 
            Authorization: 'Bearer eKp2RdTcquOoWiorsJNNLOc1tjlg6iEu3kMnNmCSBgO',
            "Access-Control-Allow-Origin": "*",
        }
    });
    // const instance = axios.create({
    //     baseURL: 'https://notify-api.line.me', // Replace with your API's base URL
    //   });
    // const headers = {
    //     Authorization: 'Bearer eKp2RdTcquOoWiorsJNNLOc1tjlg6iEu3kMnNmCSBgO',
    //     'Content-Type': 'application/x-www-form-urlencoded', // You can set other headers as needed
    //   };
    // const notifyLineAlert = async (number) =>{
    //     const text = 'เครื่องซักผ้าหมายเลข '+number+ ' เหลือเวลาอีก 1 นาที'
    //     // await NOTIFY(messege)
    //     // try {
    //     //     // const response = await instance.post('/api/notify', {
    //     //     //   message: text,
    //     //     // });
    //     //     const response = await instance.post("/api/notify/",{
    //     //         // headers:headers,
    //     //         message:text
    //     //     }).then((res)=>{
    //     //         console.log(res);
    //     //     })
    //     //   } catch (error) {
    //     //     console.error(error);
    //     //   }
    //     var bodyFormData = new FormData();
    //     bodyFormData.append('message', 'Fred');
    //     axios({
    //         method: "post",
    //         url: "https://notify-api.line.me/api/notify",
    //         data: bodyFormData,
    //         headers: { "Content-Type": "application/x-www-form-urlencoded",
    //         Authorization:"Bearer eKp2RdTcquOoWiorsJNNLOc1tjlg6iEu3kMnNmCSBgO",
    //         "Access-Control-Allow-Origin": "*" },
    //     })
    //         .then(function (response) {
    //         //handle success
    //         console.log(response);
    //         })
    //         .catch(function (response) {
    //         //handle error
    //         console.log(response);
    //     });
    // }
    
    // const axios = require('axios');

    const notifyLineAlert = async (number) => {
        const text = 'เครื่องซักผ้าหมายเลข ' + number + ' เหลือเวลาอีก 1 นาที';
        const accessToken = 'eKp2RdTcquOoWiorsJNNLOc1tjlg6iEu3kMnNmCSBgO'; // แทน YOUR_ACCESS_TOKEN ด้วย Access Token ของคุณ
        try {
            const response = await axios({
                method: 'post',
                url: 'https://notify-api.line.me/api/notify',
                data: `message=${text}`,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            console.log(response.data); // แสดงข้อมูลที่ได้รับจาก Line Notify API
        } catch (error) {
            console.error(error);
        }
    };

// const express = require('express');
// const axios = require('axios');

// const app = express();
// const port = 3001; // กำหนดพอร์ตของเซิร์ฟเวอร์

// // กำหนดหัวข้อความ CORS สำหรับโดเมนของคุณ
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// app.use(express.json());

// app.post('/send-notification', async (req, res) => {
//   const text = 'ข้อความที่คุณต้องการส่งไปยัง Line Notify';
//   const accessToken = 'YOUR_ACCESS_TOKEN'; // แทน YOUR_ACCESS_TOKEN ด้วย Access Token ของคุณ

//   try {
//     const response = await axios.post('https://notify-api.line.me/api/notify', `message=${text}`, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': `Bearer ${accessToken}`,
//       },
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'เกิดข้อผิดพลาดในการส่งข้อความ' });
//   }
// });

// app.listen(port, () => {
//   console.log(`เซิร์ฟเวอร์พร็อกซีกำลังทำงานบนพอร์ต ${port}`);
// });



      
    // const sendLineNotify = async (number) => {
    //     const postData = {
    //         message: 'เครื่องซักผ้าหมายเลข ' +number+ ' เหลือเวลาอีก 1 นาที',
    //     };
    //     try {
    //         const response = await sendLineNotifyMessage(postData);
    //         // console.log(response);
    //         // console.log("LINE Notify Response:", response.data);
    //     } catch (error) {
    //         console.log(error);
    //         console.error("Error sending LINE Notify:", error);
    //     }
    // };

    const [timerOn1, setTimerOn1] = useState(true);
    const [textAlertSuccess1, setTextAlertSuccess1] = useState(false);
    const AlertMachine1 = () => (
        <p className='fontSizeAlet' style={{ color: '#222', textAlign: 'center', paddingTop:'1.8rem' }}> เครื่องซักผ้าทำงานเสร็จแล้ว !</p>
    );
    const CountdownMachine1 = (props) => (
        <span style={{ color: '#222', fontSize: '21px', textAlign: 'center' }}> {props.time} </span>
    );
    useEffect(()=>{
        // console.log(cookie.isWorking_numberMachine_1);
        const timer1 = (remaining) => {
            var m = Math.floor(remaining / 60);
            var s = remaining % 60;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            setCountdown1(m + ':' + s);
            remaining -= 1;
            
            // if(remaining < 60){
            // }
            if (remaining >= 0) {
                console.log('time1 ='+remaining);
                if (remaining === 10) {
                    notifyLineAlert(cookie.isWorking_numberMachine_1)
                }
                if (Ref.current) clearTimeout(Ref.current); 
                const id = setTimeout(function () {
                    timer1(remaining);
                }, 1000);
                Ref.current = id;
                return <CountdownMachine1 />;
            } 
            else {
                setTimeout(() => {
                    removeCookie('isWorking_numberMachine_1')
                }, 1000);
                setTextAlertSuccess1(true)
                setTimeout(() => {
                    setTextAlertSuccess1(false)
                }, 4000);
                return <AlertMachine2 />
            }
            // if (!timerOn1) {
            //     // Do validate stuff here
            //     return;
            // }
            
        };
        if (cookie.isWorking_numberMachine_1 === 1) {
            timer1(seconds)
        }
        // removeCookie('isWorking_numberMachine_1')
        // removeCookie('isWorking_numberMachine_2')

    },[cookie.isWorking_numberMachine_1])

    const [timerOn2, setTimerOn2] = useState(true);
    const [textAlertSuccess2, setTextAlertSuccess2] = useState(false);
    const CountdownMachine2 = (props) => (
        <span style={{ color: '#222', fontSize: '21px', textAlign: 'center' }}> {props.time2} </span>
    );
    const AlertMachine2 = () => (
        <p className='fontSizeAlet' style={{ color: '#222', textAlign: 'center', paddingTop:'1.8rem' }}> เครื่องซักผ้าทำงานเสร็จแล้ว !</p>
    );
    useEffect(()=>{
        const timer2 = (remaining) => {
            var m = Math.floor(remaining / 60);
            var s = remaining % 60;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            setCountdown2(m + ':' + s);
            remaining -= 1;
            if (remaining >= 0) {
                console.log('time2 ='+remaining);
                if (Ref2.current) clearTimeout(Ref2.current);
                const id = setTimeout(function () {
                    timer2(remaining);
                }, 1000);
                Ref2.current = id;
                return <CountdownMachine2 />;
            } 
            else {
                setTimeout(() => {
                    removeCookie2('isWorking_numberMachine_2')
                }, 1000);
                setTextAlertSuccess2(true)
                setTimeout(() => {
                    setTextAlertSuccess2(false)
                }, 4000);
                return <AlertMachine2 />
            }
            // if (!timerOn2) {
            //     // Do validate stuff here
            //     return;
            // }
        };
        if (cookie2.isWorking_numberMachine_2 === 2) {
            timer2(seconds)
        }
        // removeCookie('isWorking_numberMachine_1')
        // removeCookie('isWorking_numberMachine_2')

    },[cookie2.isWorking_numberMachine_2])

    const [timerOn3, setTimerOn3] = useState(true);
    const [textAlertSuccess3, setTextAlertSuccess3] = useState(false);
    const CountdownMachine3 = (props) => (
        <span style={{ color: '#222', fontSize: '21px', textAlign: 'center' }}> {props.time3} </span>
    );
    const AlertMachine3 = () => (
        <p className='fontSizeAlet' style={{ color: '#222', textAlign: 'center', paddingTop:'1.8rem' }}> เครื่องซักผ้าทำงานเสร็จแล้ว !</p>
    );
    useEffect(()=>{
        const timer3 = (remaining) => {
            var m = Math.floor(remaining / 60);
            var s = remaining % 60;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            setCountdown3(m + ':' + s);
            remaining -= 1;
            if (remaining >= 0) {
                if (Ref3.current) clearTimeout(Ref3.current);
                const id = setTimeout(function () {
                    timer3(remaining);
                }, 1000);
                Ref3.current = id;
                return <CountdownMachine3 />;
            } 
            else {
                setTimeout(() => {
                    removeCookie3('isWorking_numberMachine_3')
                }, 1000);
                setTextAlertSuccess3(true)
                setTimeout(() => {
                    setTextAlertSuccess3(false)
                }, 4000);
                return <AlertMachine3 />
            }
            // if (!timerOn2) {
            //     // Do validate stuff here
            //     return;
            // }
        };
        if (cookie3.isWorking_numberMachine_3 === 3) {
            timer3(seconds)
        }
        // removeCookie('isWorking_numberMachine_1')
        // removeCookie2('isWorking_numberMachine_2')
        // removeCookie3('isWorking_numberMachine_3')

    },[cookie3.isWorking_numberMachine_3])

    const [timerOn4, setTimerOn4] = useState(true);
    const [textAlertSuccess4, setTextAlertSuccess4] = useState(false);
    const CountdownMachine4 = (props) => (
        <span style={{ color: '#222', fontSize: '21px', textAlign: 'center' }}> {props.time4} </span>
    );
    const AlertMachine4 = () => (
        <p className='fontSizeAlet' style={{ color: '#222', textAlign: 'center', paddingTop:'1.8rem' }}> เครื่องซักผ้าทำงานเสร็จแล้ว !</p>
    );
    useEffect(()=>{
        const timer4 = (remaining) => {
            var m = Math.floor(remaining / 60);
            var s = remaining % 60;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            setCountdown4(m + ':' + s);
            remaining -= 1;
            if (remaining >= 0) {
                if (Ref4.current) clearTimeout(Ref4.current);
                const id = setTimeout(function () {
                    timer4(remaining);
                }, 1000);
                Ref4.current = id;
                return <CountdownMachine3 />;
            } 
            else {
                setTimeout(() => {
                    removeCookie4('isWorking_numberMachine_4')
                }, 1000);
                setTextAlertSuccess4(true)
                setTimeout(() => {
                    setTextAlertSuccess4(false)
                }, 4000);
                return <AlertMachine4 />
            }
            // if (!timerOn2) {
            //     // Do validate stuff here
            //     return;
            // }
        };
        if (cookie4.isWorking_numberMachine_4 === 4) {
            timer4(seconds)
        }
        // removeCookie('isWorking_numberMachine_1')
        // removeCookie2('isWorking_numberMachine_2')
        // removeCookie3('isWorking_numberMachine_3')
        // removeCookie4('isWorking_numberMachine_4')

    },[cookie4.isWorking_numberMachine_4])

    const [timerOn5, setTimerOn5] = useState(true);
    const [textAlertSuccess5, setTextAlertSuccess5] = useState(false);
    const CountdownMachine5 = (props) => (
        <span style={{ color: '#222', fontSize: '21px', textAlign: 'center' }}> {props.time5} </span>
    );
    const AlertMachine5 = () => (
        <p className='fontSizeAlet' style={{ color: '#222', textAlign: 'center', paddingTop:'1.8rem' }}> เครื่องซักผ้าทำงานเสร็จแล้ว !</p>
    );
    useEffect(()=>{
        const timer5 = (remaining) => {
            var m = Math.floor(remaining / 60);
            var s = remaining % 60;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            setCountdown5(m + ':' + s);
            remaining -= 1;
            if (remaining >= 0) {
                if (Ref5.current) clearTimeout(Ref5.current);
                const id = setTimeout(function () {
                    timer5(remaining);
                }, 1000);
                Ref5.current = id;
                return <CountdownMachine5 />;
            } 
            else {
                setTimeout(() => {
                    removeCookie5('isWorking_numberMachine_5')
                }, 1000);
                setTextAlertSuccess5(true)
                setTimeout(() => {
                    setTextAlertSuccess5(false)
                }, 4000);
                return <AlertMachine5 />
            }
            // if (!timerOn2) {
            //     // Do validate stuff here
            //     return;
            // }
        };
        if (cookie5.isWorking_numberMachine_5 === 5) {
            timer5(seconds)
        }
        // removeCookie('isWorking_numberMachine_1')
        // removeCookie2('isWorking_numberMachine_2')
        // removeCookie3('isWorking_numberMachine_3')
        // removeCookie4('isWorking_numberMachine_4')

    },[cookie5.isWorking_numberMachine_5])

    const [timerOn6, setTimerOn6] = useState(true);
    const [textAlertSuccess6, setTextAlertSuccess6] = useState(false);
    const CountdownMachine6 = (props) => (
        <span style={{ color: '#222', fontSize: '21px', textAlign: 'center' }}> {props.time6} </span>
    );
    const AlertMachine6 = () => (
        <p className='fontSizeAlet' style={{ color: '#222', textAlign: 'center', paddingTop:'1.8rem' }}> เครื่องซักผ้าทำงานเสร็จแล้ว !</p>
    );
    useEffect(()=>{
        const timer6 = (remaining) => {
            var m = Math.floor(remaining / 60);
            var s = remaining % 60;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            setCountdown6(m + ':' + s);
            remaining -= 1;
            if (remaining >= 0) {
                if (Ref6.current) clearTimeout(Ref6.current);
                const id = setTimeout(function () {
                    timer6(remaining);
                }, 1000);
                Ref6.current = id;
                return <CountdownMachine6 />;
            } 
            else {
                setTimeout(() => {
                    removeCookie6('isWorking_numberMachine_6')
                }, 1000);
                setTextAlertSuccess6(true)
                setTimeout(() => {
                    setTextAlertSuccess6(false)
                }, 4000);
                return <AlertMachine6 />
            }
            // if (!timerOn2) {
            //     // Do validate stuff here
            //     return;
            // }
        };
        if (cookie6.isWorking_numberMachine_6 === 6) {
            timer6(seconds)
        }
        // removeCookie('isWorking_numberMachine_1')
        // removeCookie2('isWorking_numberMachine_2')
        // removeCookie3('isWorking_numberMachine_3')
        // removeCookie4('isWorking_numberMachine_4')

    },[cookie6.isWorking_numberMachine_6])

    return (
        <>
            
            <Row>
                <Col lg={4} xs={6}>
                    <div className={`washingMachine ${cookie.isWorking_numberMachine_1 === 1 ? 'disabledMachine' : ''}`} onClick={() => showModal(1,7,40)}>
                        <div className='vendingMachine'>
                            <span>หมายเลขเครื่อง 1</span>
                        </div>
                        {/* <div className='WMlid'>
                            <div className='lid'></div>
                        </div> */}
                        {cookie.isWorking_numberMachine_1 === 1 ? 
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-error.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        :
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-success.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        }
                        {cookie.isWorking_numberMachine_1 === 1 ? 
                            <div>
                                <p className='text-center m-1 textAlertCountdown'>เครื่องจะทำงานเสร็จภายใน <CountdownMachine1 time={countdown1}/> น.</p>
                            </div>
                        :
                        (textAlertSuccess1 === true ? 
                            <AlertMachine1 />
                            :
                            <div className='machineAmount'>
                                <p className='pt-2'>
                                    7 KG
                                </p>
                                <span>
                                    40 บาท
                                </span>
                            </div>
                           
                        )
                        }
                        
                    </div>
                </Col>
                <Col lg={4} xs={6}>
                    <div className={`washingMachine ${cookie2.isWorking_numberMachine_2 === 2 ? 'disabledMachine' : ''}`} onClick={() => showModal(2,7,40)}>
                        <div className='vendingMachine'>
                            <span>หมายเลขเครื่อง 2</span>
                        </div>
                        {cookie2.isWorking_numberMachine_2 === 2 ? 
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-error.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        :
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-success.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        }
                        {cookie2.isWorking_numberMachine_2 === 2 ? 
                            <div>
                                <p className='text-center m-1 textAlertCountdown'>เครื่องจะทำงานเสร็จภายใน <CountdownMachine2 time2={countdown2}/> น.</p>
                            </div>
                        :
                            (textAlertSuccess2 === true ? 
                                <AlertMachine2 />
                                :
                                <div className='machineAmount'>
                                    <p className='pt-2'>
                                        7 KG
                                    </p>
                                    <span>
                                        40 บาท
                                    </span>
                                </div>
                                
                            )
                        }
                                
                    </div>
                </Col>
                <Col lg={4} xs={6}>
                    <div className={`washingMachine ${cookie3.isWorking_numberMachine_3 === 3 ? 'disabledMachine' : ''}`} onClick={() => showModal(3,10,50)}>
                        <div className='vendingMachine'>
                            <span>หมายเลขเครื่อง 3</span>
                        </div>
                        {cookie3.isWorking_numberMachine_3 === 3 ? 
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-error.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        :
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-success.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        }
                        {cookie3.isWorking_numberMachine_3 === 3 ? 
                            <div>
                                <p className='text-center m-1 textAlertCountdown'>เครื่องจะทำงานเสร็จภายใน <CountdownMachine3 time3={countdown3}/> น.</p>
                            </div>
                        :
                            (textAlertSuccess3 === true ? 
                                <AlertMachine3 />
                                :
                                <div className='machineAmount'>
                                    <p className='pt-2'>
                                        7 KG
                                    </p>
                                    <span>
                                        40 บาท
                                    </span>
                                </div>
                            )
                        }
                    </div>
                </Col>
                <Col lg={4} xs={6}>
                    <div className={`washingMachine ${cookie4.isWorking_numberMachine_4 === 4 ? 'disabledMachine' : ''}`} onClick={() => showModal(4,10,50)}>
                        <div className='vendingMachine'>
                            <span>หมายเลขเครื่อง 4</span>
                        </div>
                        {cookie4.isWorking_numberMachine_4 === 4 ? 
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-error.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        :
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-success.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        }
                        {cookie4.isWorking_numberMachine_4 === 4 ? 
                            <div>
                                <p className='text-center m-1 textAlertCountdown'>เครื่องจะทำงานเสร็จภายใน <CountdownMachine4 time4={countdown4}/> น.</p>
                            </div>
                        :
                            (textAlertSuccess4 === true ? 
                                <AlertMachine4 />
                                :
                                <div className='machineAmount'>
                                    <p className='pt-2'>
                                        10 KG
                                    </p>
                                    <span>
                                        50 บาท
                                    </span>
                                </div>
                            )
                        }
                    </div>
                </Col>
                <Col lg={4} xs={6}>
                    <div className={`washingMachine ${cookie5.isWorking_numberMachine_5 === 5 ? 'disabledMachine' : ''}`} onClick={() => showModal(5,10,50)}>
                        <div className='vendingMachine'>
                            <span>หมายเลขเครื่อง 5</span>
                        </div>
                        {cookie5.isWorking_numberMachine_5 === 5 ? 
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-error.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        :
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-success.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        }
                        {cookie5.isWorking_numberMachine_5 === 5 ? 
                            <div>
                                <p className='text-center m-1 textAlertCountdown'>เครื่องจะทำงานเสร็จภายใน <CountdownMachine5 time5={countdown5}/> น.</p>
                            </div>
                        :
                            (textAlertSuccess5 === true ? 
                                <AlertMachine5 />
                                :
                                <div className='machineAmount'>
                                    <p className='pt-2'>
                                        10 KG
                                    </p>
                                    <span>
                                        50 บาท
                                    </span>
                                </div>
                            )
                        }
                    </div>
                </Col>
                <Col lg={4} xs={6}>
                    <div className={`washingMachine ${cookie6.isWorking_numberMachine_6 === 6 ? 'disabledMachine' : ''}`} onClick={() => showModal(6,12,60)}>
                        <div className='vendingMachine'>
                            <span>หมายเลขเครื่อง 6</span>
                        </div>
                        {cookie6.isWorking_numberMachine_6 === 6 ? 
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-error.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        :
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-success.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        }
                        {cookie6.isWorking_numberMachine_6 === 6 ? 
                            <div>
                                <p className='text-center m-1 textAlertCountdown'>เครื่องจะทำงานเสร็จภายใน <CountdownMachine6 time6={countdown6}/> น.</p>
                            </div>
                        :
                            (textAlertSuccess6 === true ? 
                                <AlertMachine6 />
                                :
                                <div className='machineAmount'>
                                    <p className='pt-2'>
                                        12 KG
                                    </p>
                                    <span>
                                        60 บาท
                                    </span>
                                </div>
                            )
                        }
                    </div>
                </Col>
                
                
            </Row>
            
            <ModalWashingMachine 
                show={show} 
                onHide={() =>setShow(false)} 
                numberMachine={numberMachine}
                amountMachine={amountMachine}
                priceMachine={priceMachine}
            />
        </>
    );
}
export default WashingMachine;