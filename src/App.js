
import './App.css';
import Carta from './Components/Carta.js'
import MyPic from './assets/mounir.jpg'

function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Carta />
      <div className="alert alert-success" ><h1>Hello !! I'm here!!</h1></div>
      <img src={MyPic} alt="It is me!" />
      </div>
    </div>
  );
}

export default App;
