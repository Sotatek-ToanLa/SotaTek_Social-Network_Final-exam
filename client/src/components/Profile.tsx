import React, { useState }  from 'react';
import like from '../assets/like.png';
import view from '../assets/view.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import avatar from '../assets/avatar.jpg'
import '../assets/styles/Profile.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

  
function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
          <div className="col-3 profile bg-white my-4 rounded" style={{height: 500}}>
            <div className="d-flex align-items-center my-3">
                <img src={avatar} className="rounded-circle w-25 h-25 d-inline" alt="avatar" /> 
                <p className="d-flex align-items-center my-0 mx-4">La Minh Toan <br /> Hanoi</p>
            </div>
            <hr />
            <div>
                <p><img src={like} className="d-inline" alt="like" /> 10k follows</p>
                <p><img src={view} className="d-inline" alt="view" /> 600 following</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
            </div>
            <hr />
            <div>
                <p>MY PAGE</p>
                <p><img src={instagram} className="d-inline" alt="instagram" /> Toan La 12</p>
                <p><img src={linkedin} className="d-inline" alt="linkedin" /> Toan La 12</p>
            </div>
            
            <div className="d-grid my-2">
                <Button variant="outline-secondary" onClick={handleShow}>
                    Edit
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            jdhdhdh
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            
          </div>
          
  );
}

export default Home;
