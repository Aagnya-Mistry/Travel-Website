// import './App.css';

// import React from 'react';
// import DisplayText from './components/DisplayText';
// import Counter from "./components/Counter";

// function App() {
//   return (
//     <div>
//     <h1>React Functional Component Example</h1>
//     <DisplayText /> {/* Using the functional component */}
//     <h1>React State Example</h1>
//     <Counter /> {/* Using the Counter Component */}
//     </div>
//     );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Courses from './components/Courses';
// import About from './components/About';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <div>
//       <h1> React Single Page Application</h1>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" exact element={<Home />} />
//           <Route path="/courses" element={<Courses />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Signup from "./components/SignUp";

function App() {
  return (
    <div>
      <Signup />
    </div>
  );
}

export default App;
