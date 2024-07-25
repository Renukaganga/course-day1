
import React from "react";
import Register from "./Register";
import Cond from "./Cond";
import DataFetching from "./DataFetching";
import { BrowserRouter ,Routes,Route} from "react-router-dom";

function App() {
  
 
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Cond />}/>
      <Route path="/data" element={<DataFetching />} />
      

    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
