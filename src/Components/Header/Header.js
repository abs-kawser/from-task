import React from 'react';

 

const Header = ({handleDisabled, disabledInput}) => {

  const FromStyle ={
     fontFamily: "Gotham--Xlight, Verdana",
     color:" #eb143a",
     lineHeight:"1.15",
    
  }
  const Container ={
       marginTop:"20px",
    //    marginleft:"100px",
    //    paddingleft:"100px"
       textAlign:"center"
  }

    return (
        <div className="containerx" style={Container}>
            <h1 style={FromStyle} >Flight deals with Virgin Atlantic</h1>

            <div className="lavel" > 
                 <input disabled={disabledInput === true} onClick={()=> handleDisabled(!disabledInput)} type="radio" id="html" name="fav_language"  />
                  <lavel>one way  </lavel>
                 <input disabled={disabledInput !== true} onClick={()=> handleDisabled(disabledInput)}type="radio" id="html" name="fav_language"  />
                 <lavel >Round trip</lavel>
                 </div>
        </div>
    );
};

export default Header;