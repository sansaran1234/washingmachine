import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import WashingMachine from "./components/WashingMachine";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>เครื่องซักผ้าหยอดเหรียญ</h1>
        <h2>ซักสบาย</h2>
        <a href="#manualPage" className="tagAManual">
          <Button className="btnManual">ขั้นตอนการทำงาน</Button>
        </a>
        <div className="boxScanLine">
          <p className="textScan">
            สแกน QR CODE <br /> เพื่อรับการแจ้งเตือนจากระบบ
          </p>
          <img src={require("./images/scan_line.jpg")} alt="" />
        </div>
      </header>
    </div>
  );
}

export default App;
