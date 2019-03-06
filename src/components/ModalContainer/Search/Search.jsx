import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#modal');

export default (props) => {
  return (
    <section>
      <h1>React-Modal Examples</h1>
      <Modal
        isOpen={props.isOpenedModal}
        onClickAway={props.onCloseModal}
      >
        <div>
          <h1>Page not done</h1>
          <button onClick={props.onCloseModal}>Close Modal</button>
        </div>
      </Modal>
    </section>
  )
}
