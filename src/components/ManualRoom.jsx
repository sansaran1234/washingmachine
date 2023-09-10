import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React, { useState, useEffect, useRef } from 'react';
import ModalWashingMachine from './ModalWashingMachine'
import { useCookies } from 'react-cookie';

function ManualRoom() {
    
    return (
        <>
            <div className='manualPage' id='manualPage'>
                <Container>
                    <Row>
                        <Col lg={6} xs={12}></Col>
                        <Col lg={6} xs={12}>
                            <div className='boxTextManual'>
                                <h3>ขั้นตอนการทำงาน</h3>
                                <ul>
                                    <li>เลือกเครื่องซักผ้าที่มีสถานะ “ว่าง” (สีเขียว)</li>
                                    <li>ใส่ผ้าลงในเครื่อง พร้อมปิดเครื่องให้เรียบร้อย</li>
                                    <li>เลือกตัวเลือก “เริ่มใช้งานเครื่องนี้”</li>
                                    <li>ระบบจะแสดงหน้าต่างสำหรับสแกน QR CODE LINE ของร้านซักผ้า
                                    ให้ท่านสแกน QR CODE เพื่อรับการแจ้งเตือนจากระบบ </li>
                                    <li>หลังจากนั้นจะสามารถหยอดเหรียญตามจำนวนที่ระบบแสดง 
                                    โดยคำนวนจากขนาดของเครื่องซักผ้า</li>
                                    <li>ให้หยอดเหรียญจนครบจำนวน ให้เลือกตัวเลือก “เริ่มทำงาน”</li>
                                    <li>เมื่อการทำงานสำเร็จ ระบบจะแสดงหน้าต่างยืนยันสถานะ
                                    เครื่องซักผ้าเริ่มทำงาน</li>
                                    <li>หากเกิดข้อผิดพลาด หรือท่านหยอดเหรียญไม่ครบตามจำนวน 
                                    ระบบจะแสดงหน้าต่าง สถานะเครื่องซักผ้าไม่สามารถเริ่มทำงาน 
                                    เพื่อแจ้งให้ทราบและทำตามเงื่อนไข</li>
                                    <li>เครื่องซักผ้าจะใช้เวลาในการทำงานทั้งหมด 30 นาที</li>
                                    <li>ก่อนเครื่องซักผ้าทำงานสำเร็จ 1 นาที ระบบจะทำการแจ้งเตือน
                                    ไปยัง LINE ที่เชื่อมไว้ เพื่อให้ท่านสามารถเตรียมตัวนำผ้าออกจากเครื่อง</li>
                                </ul>
                                <div className='imgBgShowMobile'>
                                    <img src={require('./../images/bgManualMobile.png')} alt="" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default ManualRoom;