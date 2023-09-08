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
        if (valueNum < props.priceMachine) {
            setCheckAlert(true)
        }else{
            setIsLoading(true)
            console.log(props.numberMachine);
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
    //     showModalSuccess()
    // }, []);
    return (
        <>
            <Modal show={props.show} onHide={handleClose} className='modalMachine'>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title className='text-center mb-3'>เครื่องซักผ้า ขนาน {props.amountMachine} KG {props.priceMachine} บาท</Modal.Title>
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
                        <p className='mb-0'>เครื่องซักผ้ากำลังเริ่มต้นทำงาน ใช้เวลาประมาณ 30 นาที</p>
                        <p>
                            ระบบจะทำการแจ้งเตือนไปยัง Line ของท่าน ก่อนเครื่อง<br/>ทำงานเสร็จ 1 นาที เพื่อให้ท่านเตรียมตัวนำผ้าออกจากเครื่อง
                        </p>
                        <img src={require('./../images/success.png')} alt="" className='imgSuccess'/>
                    </div>
                    <div className='text-center pt-4 pb-2'>
                        <Button variant="primary" className='btnCloseSuccess' onClick={handleCloseSuccess}>
                            ปิด
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>


        </>
    );
}
export default ModalWashingMachine;