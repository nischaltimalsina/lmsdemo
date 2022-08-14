import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./config/ProtectedRoutes";
import HomePage from './pages/HomePage';
import Overview from './pages/Overview';

function App() {
  return (
   <>
   <Routes>
    <Route path="/login" element={<></>}/>
    <Route  element={<ProtectedRoutes/>}>
    <Route exact path="/" element={<HomePage/>}></Route>
    <Route exact path="/overview" element={<Overview/>}>
      
    </Route>

    </Route>
   </Routes>
   </>
  );
}

export default App;
