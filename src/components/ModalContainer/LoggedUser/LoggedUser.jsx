import React from 'react'
import Modal from 'react-awesome-modal'

export  default (props) => {
  return (
    <section>
      <h1>React-Modal Examples</h1>
      <Modal
        visible={props.isOpenedModal}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={props.onCloseModal}
      >
        <div>
          <h1>Title</h1>
          <p>Some Contents</p>
          <a href="javascript:void(0);" onClick={props.onCloseModal}>Close</a>
        </div>
      </Modal>
    </section>
  );
}
