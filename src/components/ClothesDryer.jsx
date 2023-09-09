import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React, { useState, useEffect, useRef } from 'react';
import ModalWashingMachine from './ModalWashingMachine'
import { useCookies } from 'react-cookie';

function ClothesDryer(props) {
    const [show, setShow] = useState(false);
    const [numberMachineDry, setNumberMachineDry] = useState(0);
    const [amountMachineDry, setAmountMachineDry] = useState(0);
    const [priceMachineDry, setPriceMachineDry] = useState(0);
    const [typeDryer, setTypeDry] = useState(false);
    const [countdown1, setCountdown1] = useState('3:00');
    const [countdown2, setCountdown2] = useState('3:00');
    const Ref = useRef(null);
    const Ref2 = useRef(null);
    const [seconds , setSeconds] = useState(15)

    const handleShow = () => setShow(true);
    const showModal = (number,amount,price) =>{
        handleShow()
        setNumberMachineDry(number)
        setAmountMachineDry(amount)
        setPriceMachineDry(price)
        setTypeDry(true)
    }
    const [cookieDry, setCookieDry, removeCookieDry] = useCookies(
        ['isWorking_numberClothesDryer_1'],
    );
    const [cookieDry2, setCookieDry2, removeCookieDry2] = useCookies(
        ['isWorking_numberClothesDryer_2'],
    );

    const [timerOn1, setTimerOn1] = useState(true);
    const [textAlertSuccess1, setTextAlertSuccess1] = useState(false);
    const AlertMachine1 = () => (
        <p className='fontSizeAlet' style={{ color: '#222', textAlign: 'center', paddingTop:'1.8rem' }}> เครื่องอบผ้าทำงานเสร็จแล้ว !</p>
    );
    const CountdownMachine1 = (props) => (
        <span style={{ color: '#222', fontSize: '21px', textAlign: 'center' }}> {props.time} </span>
    );
    useEffect(()=>{
        // console.log(cookieDry.isWorking_numberClothesDryer_1);
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
                // if (remaining === 10) {
                //     notifyLineAlert(cookieDry.isWorking_numberClothesDryer_1)
                // }
                if (Ref.current) clearTimeout(Ref.current); 
                const id = setTimeout(function () {
                    timer1(remaining);
                }, 1000);
                Ref.current = id;
                return <CountdownMachine1 />;
            } 
            else {
                setTimeout(() => {
                    removeCookieDry('isWorking_numberClothesDryer_1')
                }, 1000);
                setTextAlertSuccess1(true)
                setTimeout(() => {
                    setTextAlertSuccess1(false)
                }, 4000);
                return <AlertMachine1 />
            }
            // if (!timerOn1) {
            //     // Do validate stuff here
            //     return;
            // }
            
        };
        if (cookieDry.isWorking_numberClothesDryer_1 === 1) {
            timer1(seconds)
        }
        // removeCookie('isWorking_numberClothesDryer_1')
        // removeCookie('isWorking_numberMachine_2')

    },[cookieDry.isWorking_numberClothesDryer_1])

    const [timerOn2, setTimerOn2] = useState(true);
    const [textAlertSuccess2, setTextAlertSuccess2] = useState(false);
    const AlertMachine2 = () => (
        <p className='fontSizeAlet' style={{ color: '#222', textAlign: 'center', paddingTop:'1.8rem' }}> เครื่องอบผ้าทำงานเสร็จแล้ว !</p>
    );
    const CountdownMachine2 = (props) => (
        <span style={{ color: '#222', fontSize: '21px', textAlign: 'center' }}> {props.time2} </span>
    );
    useEffect(()=>{
        // console.log(cookieDry.isWorking_numberClothesDryer_1);
        const timer2 = (remaining) => {
            var m = Math.floor(remaining / 60);
            var s = remaining % 60;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            setCountdown2(m + ':' + s);
            remaining -= 1;
            
            // if(remaining < 60){
            // }
            if (remaining >= 0) {
                // if (remaining === 10) {
                //     notifyLineAlert(cookieDry.isWorking_numberClothesDryer_1)
                // }
                if (Ref2.current) clearTimeout(Ref2.current); 
                const id = setTimeout(function () {
                    timer2(remaining);
                }, 1000);
                Ref2.current = id;
                return <CountdownMachine2 />;
            } 
            else {
                setTimeout(() => {
                    removeCookieDry2('isWorking_numberClothesDryer_2')
                }, 1000);
                setTextAlertSuccess2(true)
                setTimeout(() => {
                    setTextAlertSuccess2(false)
                }, 4000);
                return <AlertMachine2 />
            }
            // if (!timerOn1) {
            //     // Do validate stuff here
            //     return;
            // }
            
        };
        if (cookieDry2.isWorking_numberClothesDryer_2 === 2) {
            timer2(seconds)
        }
        // removeCookie('isWorking_numberClothesDryer_1')
        // removeCookie('isWorking_numberMachine_2')

    },[cookieDry2.isWorking_numberClothesDryer_2])

    // useEffect(()=>{
    //     console.log(cookieDry.isWorking_numberClothesDryer_1);
    // },[cookieDry.isWorking_numberClothesDryer_1])

    return (
        <>
            <Row>
                <Col lg={12} xs={6}>
                    <div className={`washingMachine`} onClick={() => showModal(1,10,50)}>
                        <div className='vendingMachine'>
                            <span>หมายเลขเครื่อง 1</span>
                        </div>

                        {cookieDry.isWorking_numberClothesDryer_1 === 1 ? 
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-error2.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        :
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-success2.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        }
                        {cookieDry.isWorking_numberClothesDryer_1 === 1 ? 
                            <div>
                                <p className='text-center m-1 textAlertCountdown'>เครื่องจะทำงานเสร็จภายใน <CountdownMachine1 time={countdown1}/> น.</p>
                            </div>
                        :
                        (textAlertSuccess1 === true ? 
                            <AlertMachine1 />
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
                <Col lg={12} xs={6}>
                    <div className='washingMachine' onClick={() => showModal(2,10,50)}>
                        <div className='vendingMachine'>
                            <span>หมายเลขเครื่อง 2</span>
                        </div>
                        {cookieDry2.isWorking_numberClothesDryer_2 === 2 ? 
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-error2.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        :
                            <div className={'boxImgWashingMachine'}>
                                <img src={require('./../images/washing-machine-success2.png')} alt="" className='imgWashingMachine'/>
                            </div>
                        }
                        {cookieDry2.isWorking_numberClothesDryer_2 === 2 ? 
                            <div>
                                <p className='text-center m-1 textAlertCountdown'>เครื่องจะทำงานเสร็จภายใน <CountdownMachine2 time2={countdown2}/> น.</p>
                            </div>
                        :
                        (textAlertSuccess2 === true ? 
                            <AlertMachine2 />
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
            </Row>

            <ModalWashingMachine 
                show={show} 
                onHide={() =>setShow(false)} 
                numberMachineDry={numberMachineDry}
                amountMachineDry={amountMachineDry}
                priceMachineDry={priceMachineDry}
                typeDryer={typeDryer}
            />
        </>
    );
}
export default ClothesDryer;