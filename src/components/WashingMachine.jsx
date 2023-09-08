import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React, { useState, useEffect, useRef } from 'react';
import ModalWashingMachine from './ModalWashingMachine'
import { useCookies } from 'react-cookie';
import { sendLineNotifyMessage } from '../service/apis/line-notify';
import axios from "axios";

function WashingMachine(props) {
    const [show, setShow] = useState(false);
    const [numberMachine, setNumberMachine] = useState(0);
    const [amountMachine, setAmountMachine] = useState(0);
    const [priceMachine, setPriceMachine] = useState(0);
    const [countdown1, setCountdown1] = useState('3:00');
    const [countdown2, setCountdown2] = useState('3:00');
    const [countdown3, setCountdown3] = useState('3:00');
    const [cookie, setCookie, removeCookie] = useCookies(
        ['isWorking_numberMachine_1'],
    );
    const [cookie2, setCookie2, removeCookie2] = useCookies(
        ['isWorking_numberMachine_2'],
    );
    const [cookie3, setCookie3, removeCookie3] = useCookies(
        ['isWorking_numberMachine_3'],
    );
    const Ref = useRef(null);
    const Ref2 = useRef(null);
    const Ref3 = useRef(null);

    const handleShow = () => setShow(true);
    const showModal = (number,amount,price) =>{
        handleShow()
        setNumberMachine(number)
        setAmountMachine(amount)
        setPriceMachine(price)
    }
    const [seconds , setSeconds] = useState(15)

    const tokenLine = 'yC4bEk0p9j3blq7Fd9QvyoF2unCmveNumJHPIgNg4wL'

    const instance = axios.create({
        baseURL: 'https://notify-api.line.me',
        headers: { 
            "Authorization": 'Bearer yC4bEk0p9j3blq7Fd9QvyoF2unCmveNumJHPIgNg4wL',
            "Content-Type": "application/x-www-form-urlencoded", 
            "Access-Control-Allow-Origin": "http://localhost:3000/",
        }
    });
    // const instance = axios.create({
    //     baseURL: 'https://notify-api.line.me', // Replace with your API's base URL
    //   });
    // const headers = {
    //     Authorization: 'Bearer yC4bEk0p9j3blq7Fd9QvyoF2unCmveNumJHPIgNg4wL',
    //     'Content-Type': 'application/x-www-form-urlencoded', // You can set other headers as needed
    //   };
    const notifyLineAlert = async (number) =>{
        const text = 'เครื่องซักผ้าหมายเลข '+number+ ' เหลือเวลาอีก 1 นาที'
        // await NOTIFY(messege)
        try {
            // const response = await instance.post('/api/notify', {
            //   message: text,
            // });
            const response = await instance.post("/api/notify",{
                // headers:headers,
                message:'test'
            }).then((res)=>{
                console.log(res);
            })
          } catch (error) {
            console.error(error);
          }
    }
    
      
    const sendLineNotify = async (number) => {
        const postData = {
            message: 'เครื่องซักผ้าหมายเลข ' +number+ ' เหลือเวลาอีก 1 นาที',
        };
        try {
            const response = await sendLineNotifyMessage(postData);
            console.log(response);
            // console.log("LINE Notify Response:", response.data);
        } catch (error) {
            console.log(error);
            console.error("Error sending LINE Notify:", error);
        }
    };

    const [timerOn1, setTimerOn1] = useState(true);
    const [textAlertSuccess1, setTextAlertSuccess1] = useState(false);
    const AlertMachine1 = () => (
        <p style={{ color: '#222', fontSize: '21px', textAlign: 'center', paddingTop:'1.8rem' }}> เครื่องซักผ้าทำงานเสร็จแล้ว !</p>
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
        <p style={{ color: '#222', fontSize: '21px', textAlign: 'center', paddingTop:'1.8rem' }}> เครื่องซักผ้าทำงานเสร็จแล้ว !</p>
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
                    removeCookie('isWorking_numberMachine_2')
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
        <p style={{ color: '#222', fontSize: '21px', textAlign: 'center', paddingTop:'1.8rem' }}> เครื่องซักผ้าทำงานเสร็จแล้ว !</p>
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
                    removeCookie('isWorking_numberMachine_3')
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
        // removeCooki2('isWorking_numberMachine_2')
        // removeCooki3('isWorking_numberMachine_3')

    },[cookie3.isWorking_numberMachine_3])

    return (
        <>
            
            <Row>
                <Col lg={4}>
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
                                <p className='text-center m-1 pt-4'>เครื่องจะทำงานเสร็จภายใน <CountdownMachine1 time={countdown1}/> น.</p>
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
                        {/* <CountdownMachine1 time={countdown}/> */}
                        
                    </div>
                </Col>
                <Col lg={4}>
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
                                <p className='text-center m-1 pt-4'>เครื่องจะทำงานเสร็จภายใน <CountdownMachine2 time2={countdown2}/> น.</p>
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
                <Col lg={4}>
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
                                <p className='text-center m-1 pt-4'>เครื่องจะทำงานเสร็จภายใน <CountdownMachine3 time3={countdown3}/> น.</p>
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
                <Col lg={4}>
                    <div className='washingMachine' onClick={() => showModal(4,10,50)}>
                        <div className='vendingMachine'>
                            <span>หมายเลขเครื่อง 4</span>
                        </div>
                        <div className='boxImgWashingMachine'>
                            <img src={require('./../images/washing-machine-success.png')} alt="" className='imgWashingMachine'/>
                        </div>
                        <div className='machineAmount'>
                            <p className='pt-2'>
                                10 KG
                            </p>
                            <span>
                                50 บาท
                            </span>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='washingMachine' onClick={() => showModal(5,10,50)}>
                        <div className='vendingMachine'>
                            <span>หมายเลขเครื่อง 5</span>
                        </div>
                        <div className='boxImgWashingMachine'>
                            <img src={require('./../images/washing-machine-success.png')} alt="" className='imgWashingMachine'/>
                        </div>
                        <div className='machineAmount'>
                            <p className='pt-2'>
                                10 KG
                            </p>
                            <span>
                                50 บาท
                            </span>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='washingMachine' onClick={() => showModal(6,12,60)}>
                        <div className='vendingMachine'>
                            <span>หมายเลขเครื่อง 6</span>
                        </div>
                        <div className='boxImgWashingMachine'>
                            <img src={require('./../images/washing-machine-success.png')} alt="" className='imgWashingMachine'/>
                        </div>
                        <div className='machineAmount'>
                            <p className='pt-2'>
                                12 KG
                            </p>
                            <span>
                                60 บาท
                            </span>
                        </div>
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