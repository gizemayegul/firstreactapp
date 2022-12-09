import './App.css';
import Nav from './components/Nav.js';
import Intro from './components/Intro.js';
import Intro2 from './components/Intro2.js';
import Intro3 from './components/Intro3.js';
import Footer from './components/Footer.js';


function Heading() { 
  return ( 
    <div class="heading">
      <h1>This is my first React Project</h1> 
    </div>
  ) 
} 


function App() { 
  return ( 
    <div className="App"> 
      I didn't work on that much,
      <Heading /> 
      <Nav /> 
      <Intro />
      <Intro2 />
      <Intro3 />
      <Footer />
      
    </div> 
  ); 
} 
 
export default App;
