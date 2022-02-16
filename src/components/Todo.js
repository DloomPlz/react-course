import { useState } from 'react';

import Modal from './Modal'
import Backdrop from './Backdrop';

function Todo(props) {

  const [modalIsOpen, setOpenModal] = useState(false);

  function openModal(){
    setOpenModal(true);
  }

  function closeModal(){
    setOpenModal(false);
  }

  return (
    <div className="card">
      <h2>{props.content}</h2>
      <div className="actions">
        <button className="btn" onClick={openModal}>Delete</button>
      </div>
      { modalIsOpen && <Modal onConfirm={closeModal} onCancel={closeModal}></Modal>}
      { modalIsOpen && <Backdrop onCancel={closeModal}></Backdrop>}
    </div>
  );
}

export default Todo;
