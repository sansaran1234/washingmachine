import WashingMachine from './WashingMachine'
import ClothesDryer from './ClothesDryer'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState, useEffect, useRef } from 'react';

function WashingMachineRoom() {
    const [key, setKey] = useState('WashingMachine');

    // console.log(key);
    return (
        <div className={`roomPage ${key === 'ClothesDryer' ? 'bgClothesDryer': ''}`}>
            <Container fluid>
                <Row className='washRoomDesktop'>
                    <Col lg={8} xs={12} className='BoxWashingMachine'>
                        <h4 className='headerName'>เครื่องซักผ้า</h4>
                        <div className='washingMachineZone'>
                            <WashingMachine />
                        </div>
                    </Col>
                    <Col lg={4} xs={12} className='BoxClothesDryerZone'>
                        <h4 className='headerName'>เครื่องอบผ้า</h4>
                        <div className='clothesDryerZone'>
                            <ClothesDryer />
                        </div>
                    </Col>
                </Row>

                {/* <div className='washRoomMobile'>
                    <Tabs
                    defaultActiveKey="WashingMachine"
                    id="uncontrolled-tab-example"
                    onSelect={(k) => setKey(k)}
                    className="mb-3 tabCustom"
                    >
                        <Tab eventKey="WashingMachine" title="เครื่องซักผ้า" className='tabWashingMachine'>
                            <div>
                                <div className='washingMachineZone'>
                                    <WashingMachine />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="ClothesDryer" title="เครื่องอบผ้า" className='tabClothesDryer'>
                            <div>
                                <div className='clothesDryerZone'>
                                    <ClothesDryer />
                                </div>
                            </div>
                        </Tab>
                        
                    </Tabs>
                </div> */}
            </Container>
            
         </div>
    );
}
export default WashingMachineRoom;