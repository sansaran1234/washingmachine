import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import WashingMachine from './components/WashingMachine'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>เครื่องซักผ้าหยอดเหรียญ</h1>
                <h2>ซักสบาย</h2>
                {/* <WashingMachine /> */}
            </header>
        </div>
    );
}

export default App;
