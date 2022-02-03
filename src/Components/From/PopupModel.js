import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const PopupModel = ({show, formData, setShow}) => {
  
const {departure,arrival,startdate, endDate,passengers,enterCode} =formData
    const handleClose = () => setShow(false);
  
  
            
 console.log(departure);

  return (
    <>
   

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <h3>{departure}</h3>
         <h3>{arrival}</h3>
         <h3>{startdate}</h3>
         <h3>{endDate}</h3>
         <h3>{passengers}</h3>
         <h3>{enterCode}</h3>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default PopupModel;