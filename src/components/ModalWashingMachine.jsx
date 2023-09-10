import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useCookies } from 'react-cookie';
import ReactLoading from 'react-loading';
// import success from './imgs/success.png'
function ModalWashingMachine(props) {
    const [showSuccess, setShowSuccess] = useState(false);
    const [valueNum, setValueNum] = useState(0);
    const [checkAlert, setCheckAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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

    const [cookieDry, setCookieDry, removeCookieDry] = useCookies(
        ['isWorking_numberClothesDryer_1'],
    );
    const [cookieDry2, setCookieDry2, removeCookieDry2] = useCookies(
        ['isWorking_numberClothesDryer_2'],
    );

    const showModalSuccess = () =>{
        setShowSuccess(true)
       
    }
    const handleCloseSuccess = () => {
        setShowSuccess(false)
        setValueNum(0)
    }
    const tenUp = () =>{
        setValueNum(valueNum + 10)
    }
    const clearValue = () =>{
        setValueNum(0)
        setCheckAlert(false)
    }
    const handleClose = () => {
        props.onHide()
        setValueNum(0)
        setCheckAlert(false)
    }
    const startMachine = () =>{
        if (valueNum < props.priceMachine || valueNum < props.priceMachineDry) {
            setCheckAlert(true)
        }else{
            setIsLoading(true)
            if (props.numberMachine === 1) {
                setCookie('isWorking_numberMachine_1', 1, {
                    path: '/',
                    sameSite: true
                })
            }
            if (props.numberMachine === 2) {
                setCookie2('isWorking_numberMachine_2', 2, {
                    path: '/',
                    sameSite: true
                })
            }
            if (props.numberMachine === 3) {
                setCookie3('isWorking_numberMachine_3', 3, {
                    path: '/',
                    sameSite: true
                })
            }
            if (props.numberMachine === 4) {
                setCookie4('isWorking_numberMachine_4', 4, {
                    path: '/',
                    sameSite: true
                })
            }
            if (props.numberMachine === 5) {
                setCookie5('isWorking_numberMachine_5', 5, {
                    path: '/',
                    sameSite: true
                })
            }
            if (props.numberMachine === 6) {
                setCookie6('isWorking_numberMachine_6', 6, {
                    path: '/',
                    sameSite: true
                })
            }
            if (props.numberMachineDry === 1) {
                setCookieDry('isWorking_numberClothesDryer_1', 1, {
                    path: '/',
                    sameSite: true
                })
            }
            if (props.numberMachineDry === 2) {
                setCookieDry2('isWorking_numberClothesDryer_2', 2, {
                    path: '/',
                    sameSite: true
                })
            }
            // console.log(props.numberMachineDry);
            setTimeout(() => {
                setIsLoading(false)
                setCheckAlert(false)
                showModalSuccess()
                setTimeout(() => {
                    handleCloseSuccess()
                }, 5000);
                handleClose()
            }, 800);
        }
    }

    // useEffect(() => {
    //     // console.log(props.typeDryer);
    //     showModalSuccess()
    // }, [props.typeDryer]);
    return (
        <>
            <Modal show={props.show} onHide={handleClose} className='modalMachine'>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <Modal.Title className='text-center mb-3'>
                        
                        {props.typeDryer === true ? 'เครื่องอบผ้า ขนาน ': 'เครื่องซักผ้า ขนาน '}
                        {props.typeDryer === true ? props.amountMachineDry :props.amountMachine} KG 
                        {' '}
                        {props.typeDryer === true ? props.priceMachineDry :props.priceMachine} บาท
                    </Modal.Title>
                    
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <div className='text-center'>
                                <Form.Label>กรุณาหยอดเหรียญ</Form.Label>
                            </div>
                            <div className="boxFormInput mb-3">
                                <div className='zoneInput'>
                                    <Form.Control
                                    type='number'
                                    placeholder="กรุณาหยอดเหรียญ"
                                    value={valueNum}
                                    className='formCustom'
                                    disabled
                                    />
                                </div>
                                <div className='zoneBtn'>
                                    <Button variant="outline-secondary btnUp" onClick={tenUp}>
                                        <img className='imgCoin' src={require('./../images/coin-insert.png')} alt="" />
                                        {/* หยอดเหรียญ +10 บาท */}
                                    </Button>
                                    <Button variant="outline-secondary btnClear" onClick={clearValue}>
                                        <img className='imgClear' src={require('./../images/clear.png')} alt="" />
                                        {/* ล้างค่า */}
                                    </Button>
                                </div>
                            </div>
                            {checkAlert === true ?
                                <p className='textAlert'>* ไม่สำเร็จ ไม่สามารถเริ่มต้นการทำงานได้ "ท่านหยอดเหรียญไม่ครบตามจำนวน"</p>
                            :
                                ''
                            }
                        </Form.Group>
                    </Form>
                    <img className='imgInModal' src={require('./../images/modalMoney.png')} alt="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className='btnStartProcess' onClick={startMachine}>
                        {isLoading === true ?
                            <ReactLoading type={'spin'} color={'#FFF'} className='loadingSpin'/>
                        :
                        <div>
                            <img className='imgGo' src={require('./../images/next.png')} alt="" />
                            เริ่มทำงาน 
                        </div>
                        }
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSuccess} onHide={handleCloseSuccess}>   
                <Modal.Header closeButton></Modal.Header>     
                <Modal.Body>
                    <div className='modalSuccess'>
                        <Modal.Title>สำเร็จ</Modal.Title>
                        <p className='mb-0'>เครื่องซักผ้ากำลังเริ่มต้นทำงาน <br className='showBr'/> ใช้เวลาประมาณ 30 นาที</p>
                        <p>
                            ระบบจะทำการแจ้งเตือนไปยัง <br className='showBr'/> Line ของท่าน ก่อนเครื่อง<br/>ทำงานเสร็จ 1 นาที เพื่อให้ท่านเตรียม<br className='showBr'/>ตัวนำผ้าออกจากเครื่อง
                        </p>
                        <img src={require('./../images/success.png')} alt="" className='imgSuccess'/>
                    </div>
                    <div className='text-center pt-4 pb-2'>
                        <Button variant="primary" className='btnCloseSuccess' onClick={handleCloseSuccess}>
                            <img src={require('./../images/close.png')} alt="" className='imgClose'/>
                            ปิด
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>


        </>
    );
}
export default ModalWashingMachine;