import React from 'react';
import Modal from 'react-modal';

import './modal.css'

const customStyles = {
  content : {
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
  const [modalIsOpen,setIsOpen] = React.useState(true);

//  function openModal() {
//     setIsOpen(true);
//   }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
    props.openModal(false);
  }

    return (
      <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          // className="modal"
        >

          {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
          <button className="modal__closebutton" onClick={closeModal}>close</button>
          <h2 className="modal__title-1" >Get Started</h2>
          <h2 className="modal__title-2" >Just Login</h2>
          <form className="modal__form">
            <label htmlFor="username">
              Username
              <input type="text" id="username" className="modal__input" />
            </label>
            <label htmlFor="password">
              Password
              <input type="text" id="password" className="modal__input" />
            </label>
            <button type="submit">Login</button>
          </form>
        </Modal>
      </div>
    );
}

export default  ModalF;
