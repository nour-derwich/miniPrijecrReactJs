import {  Routes , Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Agents from "./compnonets/Agents";
import Main from "./compnonets/Main";

function App() {
  return (
    <>
<Routes>
     <Route path="/" element={<Main/>}/>
     </Routes>
    </>
  );
}

export default App;
