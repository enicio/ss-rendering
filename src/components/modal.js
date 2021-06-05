import React, { useState } from 'react';
import Modal from 'react-modal';

import './modal.css'

const customStyles = {
  content : {
    zIndex: '100',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '525px',
    height: '479px',
    background: '#6A40E4',
    'border-radius': '15px'
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

function ModalF(props){

  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(true);
  const [ showPassword, setShowPassword ] = useState(true)

//  function openModal() {
//     setIsOpen(true);
//   }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword)
  }

  function closeModal(){
    setIsOpen(false);
    props.openModal(false);
  }

    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          // className="modal"
        >
          <button className="modal__closebutton" onClick={closeModal}>X</button>
          <h2 className="modal__title-1" >Get Started</h2>
          <h2 className="modal__title-2" ><b>Just Login</b></h2>
          <form className="modal__form">
            <label htmlFor="username">
              Username
              <input type="text" id="username" className="modal__input" />
            </label>
            <label htmlFor="password">
              Password
              <input type={(showPassword)?"password":"text"} id="password" className="modal__input" />
              <button className="modal__showPassword__eye" onClick={toggleShowPassword} type="button">
                <img
                  src={(showPassword)
                        ?'./assets/image/icon-eye.png'
                        :'./assets/image/icon-eye-show.png'}
                        alt="icon eye"
                />
              </button>
            </label>
            <button type="submit">Login</button>
          </form>
        </Modal>
      </div>
    );
}

export default  ModalF;
