

import Header from './Components/Header/Header';
import From from './Components/From/From';
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
function App() {
     

  const [disabledInput, setDisabledInput]  =useState(false)
   const handleDisabled=()=>{
     setDisabledInput(!disabledInput )
   }        
  return (
    <>
          <Header handleDisabled={handleDisabled} disabledInput={disabledInput} />  
           <From disabledInput={disabledInput} setDisabledInput={setDisabledInput}  />
    </>
  );
}

export default App;
