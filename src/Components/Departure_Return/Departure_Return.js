import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Depature.css'
import DatePicker from "react-datepicker";


const Departure_Return = ({disabledInput, setDisabledInput,formData, setFormData}) => {

  
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
  
    return (
       <Row>
          <Col sm={12} md={6}>
        <Form.Group className="mb-3 " controlled="memberData.name">
        <Form.Label>Departure</Form.Label>
    
      <Form.Control type='date' className='input'
          value={formData.startdate}
          onChange={(e) => setFormData({...formData, startdate:e.target.value })}
        placeholder='Select Date'
               
      />
     

   </Form.Group>
   </Col>
          <Col sm={12} md={6}>
        <Form.Group className="mb-3 " controlled="memberData.name">
        <Form.Label>Retrun</Form.Label>
       
       <Form.Control type='date' className={`input ${disabledInput === true ? "active" : "input"}`} 
          value={formData.endDate}
          onChange={(e) => setFormData({...formData,endDate:e.target.value })}
        placeholder='Select Date'
        disabled={disabledInput === true}
       
      />
        
   </Form.Group>
   </Col>
       </Row>
    );
};

export default Departure_Return;