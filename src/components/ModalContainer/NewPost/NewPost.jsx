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
          <h2>{'Hi, ' + props.loggedUser.login}</h2>
          <form>
            <label htmlFor='title'>
              Title
            </label>
            <input
              name='title'
              value={getValue(props.selectedPost, 'title')}
            />
            <label htmlFor='text'>
              Text
            </label>
            <textarea
              name='text'
              value={getValue(props.selectedPost, 'body')}
            />
          </form>
          <button onClick={props.onCloseModal}>Close Modal</button>
        </div>
      </Modal>
    </section>
  );
}

const getValue = (post, quality) => post !== null ? post[quality] : "";

