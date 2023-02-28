import React, { useState }  from 'react';
import avatar from '../assets/avatar.jpg'
import imagePost from '../assets/image_Post.png';
import '../assets/styles/Profile.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
  
function Home() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-6">
    <div className="row">
      <div className="col bg-white mx-4 my-4 rounded">
        <div>
            <img src={avatar} className="rounded-circle w-25 d-inline" alt="avatar" /> 
            <div className="d-inline-block mx-3 py-2 bg-light rounded" onClick={handleShow} style={{width:400}}>
               <span className="mx-3 text-muted">Share something</span>
            </div>
        </div>
        <hr />
        <div className='my-3'>
            <p className="d-inline mx-3"><i className="bi bi-image"></i> Image</p>
            <p className="d-inline mx-3"><i className="bi bi-play-btn"></i> Video</p>
            <p className="d-inline mx-3"><i className="bi bi-paperclip"></i> Attachment</p>
            <p className="d-inline mx-3"><i className="bi bi-hash"></i>  Hashtag</p>
        </div>
        <div className="d-grid my-2">
                {/* <Button variant="outline-secondary" onClick={handleShow}>
                    Edit
                </Button> */}

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
    </div>
    <div className="row">
      <div className="col bg-white mx-4 my-4 rounded">
        <div className="d-flex align-items-center my-3">
                <img src={avatar} className="rounded-circle w-25 h-25 d-inline" alt="avatar" /> 
                <p className="d-flex align-items-center my-0 mx-4">La Minh Toan <br /> 2 giờ</p>
        </div>
        <div className="m-2">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
            <img src={imagePost} alt="imagePost" />
        </div>
        <div className="my-3">
            <p className="d-inline mx-2"><i className="bi bi-suit-heart"></i> 14</p>
            <p className="d-inline"><i className="bi bi-chat-left"></i> 14</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col bg-white mx-4 my-4 rounded">
        <div className="d-flex align-items-center my-3">
                <img src={avatar} className="rounded-circle w-25 h-25 d-inline" alt="avatar" /> 
                <p className="d-flex align-items-center my-0 mx-4">La Minh Toan <br /> 2 giờ</p>
        </div>
        <div className="m-2">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
            <img src={imagePost} alt="imagePost" />
        </div>
        <div className="my-3">
            <p className="d-inline mx-2"><i className="bi bi-suit-heart"></i> 14</p>
            <p className="d-inline"><i className="bi bi-chat-left"></i> 14</p>
        </div>
      </div>
    </div>
  </div>
          
  );
}

export default Home;
