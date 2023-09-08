import WashingMachine from './WashingMachine'
import ClothesDryer from './ClothesDryer'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
function WashingMachineRoom() {
    return (
        <div className='roomPage'>
            <Container fluid>
                <Row>
                    <Col lg={8} className='BoxWashingMachine'>
                        <h4 className='headerName'>เครื่องซักผ้า</h4>
                        <div className='washingMachineZone'>
                            <WashingMachine />
                        </div>
                    </Col>
                    <Col lg={4} className='BoxClothesDryerZone'>
                        <h4 className='headerName'>เครื่องอบผ้า</h4>
                        <div className='clothesDryerZone'>
                            <ClothesDryer />
                        </div>
                    </Col>
                </Row>
            </Container>
            
         </div>
    );
}
export default WashingMachineRoom;