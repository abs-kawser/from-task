import React from 'react';
import {  Col,  Form, Row } from 'react-bootstrap';

const Passenger_t_C = ({formData, setFormData}) => {
    return (
     <> 
     <Row> 
<Col sm={12} md={5}>
  <Form.Group className="mb-3 " controlled="memberData.name">
       <Form.Label>Passengers/travel class</Form.Label>
       <Form.Control className="input" type="text" 

       value={formData.passengers} onChange={(e)=> setFormData({...formData, passengers:e.target.value})}
       
       placeholder="Passengers/travel class" autoComplete="off"
     required
          />
  </Form.Group>
  </Col>

  <Col sm={12} md={5}>
  <Form.Group className="mb-3" controlled="memberData.name">
       <Form.Label>Voucher or event code</Form.Label>
       <Form.Control className="input" type="password"
        value={formData.enterCode} onChange={(e)=> setFormData({...formData, enterCode:e.target.value})}
       placeholder="Enter Code" autoComplete="off"
     required
          />
  </Form.Group>
        
  </Col>
  </Row>
  </>
        


    );
};

export default Passenger_t_C;