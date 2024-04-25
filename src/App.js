import './App.css';
import ReactLogo from './components/ReactLogo';
import Header from './components/Header';
//import Translation from './components/Translation';


function App() {
  return (
    <div className="container">
     <ReactLogo/>
<Header/>    
{/* <Translation/> */}
    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    
  );
}

export default App;
