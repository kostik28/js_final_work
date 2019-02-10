import React from 'react'
import Modal from 'react-awesome-modal'

export  default (props) => {
  return (
    <section>
      <h1>React-Modal Examples</h1>
      <Modal
        visible={props.isOpenedModalForm}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={props.onCloseModalForm}
      >
        <div>
          <h1>Title</h1>
          <p>Some Contents</p>
          <a href="javascript:void(0);" onClick={props.onCloseModalForm}>Close</a>
        </div>
      </Modal>
    </section>
  );
}
