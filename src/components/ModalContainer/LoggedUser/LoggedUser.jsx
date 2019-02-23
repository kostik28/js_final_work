import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#modal');

export default (props) => {
  return (
    <section>
      <Modal
        isOpen={props.isOpenedModal}
        onClickAway={props.onCloseModal}
      >
        <div>
          <h1>Title</h1>
          <p>Some Contents</p>
          <button onClick={props.onCloseModal}>Close Modal</button>
        </div>
      </Modal>
    </section>
  );
}
