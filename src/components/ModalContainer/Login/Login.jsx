import React from 'react'
import Modal from 'react-modal'
import Login from "../ModalContainer";

Modal.setAppElement('#modal');

export default (data) => {
  const props = data.props;

  return (

    <section>
      <Modal
        isOpen={props.isOpenedModal}
        onClickAway={props.modalActions.onCloseModal}>
        <div>

          <div>
            <label>
              Login
            </label>
            <input
              name='login'
              autoFocus
              onChange={(e) => props.loginActions.onChangedLogin(e.target.value)} />

            <label>
              Password
            </label>
            <input
              name='password'
              type="password"
              onChange={(e) => props.loginActions.onChangedPassword(e.target.value)} />
          </div>

          { props.messageToUser !== null && <div>{ props.messageToUser }</div> }

          <button
            disabled={
              props.passwordInputValue === null
              || props.loginInputValue === null
              || props.passwordInputValue.length <= 0
              || props.loginInputValue.length <= 0}
            onClick={(e) => { props.loginActions.onLogin(props.loginInputValue) }}>
            login
          </button>

          <button
            onClick={props.modalActions.onCloseModal}>
            close
          </button>

        </div>
      </Modal>
    </section>

  )

}