import { useState } from "react";
import AppUserComp from "./components/AppUserComp";
import Dept from "./components/Dept";
import Emp from "./components/Emp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyMedia from "./components/MyMedia";

const App = () => {

  const [dataInParent, setDataInParent] = useState(5);

  const passDataToParent = (callbackFun) => {
    console.log('passDataToParent');
    setDataInParent(callbackFun);
  }

  return (
    <div className="container">
      <Header />
      <Header></Header>
      <p className="display-4 text-primary" >App Component</p>
      <p>Welcome to LTI ReactJS app...</p>
      <AppUserComp />
      {/* <p className="text-primary">App Component</p>
      <p>Data from child in parent : {dataInParent}</p>
      <Emp />
      <Dept />
      <MyMedia />
      <Footer firstName="Vaman" lastName="Deshmukh" passData={passDataToParent} /> */}
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <p>Welcome to LTI ReactJS app...</p>
//       <p>Welcome to LTI ReactJS app...</p>
//       <p>Welcome to LTI ReactJS app...</p>
//     </div>
//   );
// }
// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
