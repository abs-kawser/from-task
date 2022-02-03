import React, { useState } from 'react';
import "./From.css";
import Passenger_t_C from './../Passenger_t_C/Passenger_t_C';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Departure_Return from './../Departure_Return/Departure_Return';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PopupModel from './PopupModel';
const From = ({disabledInput, setDisabledInput ,}) => {

   const [show, setShow] = useState(false);
   const handleShow = () => setShow(true);

 const [formData, setFormData]= useState({
    departure:'',
    arrival:'',
    startdate:'',
    endDate:'',
    passengers:'',
    enterCode:''

 })

 const handleSubmit=(e)=>{
     e.preventDefault();
     setFormData(formData)
 }

 console.log(formData);

   return (

      <Container className='memberForm'>
       {/* From part start */}
         <Form onSubmit={handleSubmit}>
            <Row>
               <Col sm={12} md={4}>
                  <Form.Group className="mb-3 " controlled="memberData.name">
                     <Form.Label>From</Form.Label>
                    
                     <Form.Control className="input" type="text"

                     value={formData.departure} onChange={(e)=> setFormData({...formData, departure:e.target.value})}
                      placeholder="Select departure" autoComplete="off"

                        required />
                  </Form.Group>
               </Col>

               <Col sm={12} md={4}>
                  <Form.Group className="mb-3" controlled="memberData.name">
                     <Form.Label>To</Form.Label>
                    
                     <Form.Control className="input" type="text" placeholder="Select destination" autoComplete="off"
                          value={formData.arrival} onChange={(e)=> setFormData({...formData, arrival:e.target.value})}
                        required />
                  </Form.Group>
               </Col>
             {/* From part end */}

            {/*Departure and Return  */}
               <Col sm={12} md={4}>
                  <Departure_Return disabledInput={disabledInput} setDisabledInput={setDisabledInput} formData={formData} setFormData={setFormData} />
               </Col>




            </Row>

           <Row className="">
               <Col sm={12} md={9}>
                  <Passenger_t_C disabledInput={disabledInput} setDisabledInput={setDisabledInput} formData={formData} setFormData={setFormData}/>
               </Col>

               <Col sm={12} md={3}>
                  <button onClick={()=>handleShow(show)} className="button">Book now</button>
                  {/* <Button className="button">Book now</Button> */}
               </Col>
            </Row>
         </Form>
         <PopupModel show={show} setShow={setShow} formData={formData} />
      </Container>




     
   );
};

export default From;