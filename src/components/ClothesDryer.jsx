import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import ModalWashingMachine from './ModalWashingMachine'

function ClothesDryer(props) {
    const [show, setShow] = useState(false);
    const [numberMachine, setNumberMachine] = useState(0);
    const [amountMachine, setAmountMachine] = useState(0);
    const [priceMachine, setPriceMachine] = useState(0);
    const handleShow = () => setShow(true);

    return (
        <>
            <Row>
                <Col lg={12}>
                    <div className={`washingMachine`}>
                        <div className='vendingMachine'>
                            <span>หมายเลขเครื่อง 1</span>
                        </div>
                        <div className='boxImgWashingMachine'>
                            <img src={require('./../images/washing-machine-success2.png')} alt="" className='imgWashingMachine'/>
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
                <Col lg={12}>
                    <div className='washingMachine'>
                        <div className='vendingMachine'>
                            <span>หมายเลขเครื่อง 2</span>
                        </div>
                        <div className='boxImgWashingMachine'>
                            <img src={require('./../images/washing-machine-success2.png')} alt="" className='imgWashingMachine'/>
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
export default ClothesDryer;