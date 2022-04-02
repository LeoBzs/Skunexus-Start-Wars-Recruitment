import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import Form from '../Form/Form';
import 'C:/Users/leonardo.rodrigues/IdeaProjects/Skunexus-Start-Wars-Recruitment/src/components/Form/Form.css';

function Example() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}><div className='modal-trigger'>Add new planet</div></Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className='form-label'>
            Enter the information below!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {Form()}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;