import Emp from "./components/Emp";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {

  return (
    <div>
      <Header />
      <Header></Header>
      <p>Welcome to LTI ReactJS app...</p>
      <Emp />
      <Footer firstName="Vaman" lastName="Deshmukh" />
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
