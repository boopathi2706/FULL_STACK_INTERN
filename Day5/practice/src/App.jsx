
import './App.css'
// import Users from './Component/Users'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
// import Home from "./Component/Home";
// import About from './Component/About';
// import Contact from './Component/Contact';
import Task from './Component/Task';
// import Error from './Component/Error';
import { lazy, Suspense } from 'react';


const Home =lazy(()=>import("./Component/Home"));
const About =lazy(()=>import("./Component/About"));
const Contact =lazy(()=>import("./Component/Contact"));
const Error =lazy(()=>import("./Component/Error"));
const Users =lazy(()=>import("./Component/Users"));

function App() {
 
 
  return (
    <>
    <BrowserRouter>
    <nav>
        <Link classNameName='link' to="/home" >Home</Link>
         <Link classNameName='link' to="/about" >About</Link>
         <Link classNameName='link' to="/contact" >Contact</Link>
          <Link classNameName='link' to="/user" >User</Link>
    </nav>
  
        <Routes>
              <Route path="/home" element={<Suspense fallback={<p>Page is Loading</p>}>{""}<Home /></Suspense>} />
              <Route path="/about" element={<Suspense fallback={<p>Page is Loading</p>}>{" "}<About /></Suspense>} />
              <Route path="/contact" element={<Suspense fallback={<p>Page is Loading</p>}>{" "}<Contact /></Suspense>} />
              <Route path="*" element={<Suspense fallback={<p>Page is Loading</p>}>{" "}<Error /></Suspense>} />
              <Route path="/tasks/:topicname" element={<Task />} />
               <Route path="/user" element={<Suspense fallback={<p>Page is Loading</p>}>{" "}<Users /></Suspense>} />
        </Routes>
    </BrowserRouter>
    {/* <center>
       <h1>
        Task Status
      </h1>
    </center>
       */}
      {/* <Users /> */}
    
    
    
    </>
  )
}

export default App
