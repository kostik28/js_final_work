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
          <div>
            <label>
              Login
            </label>
            <input
              name='login'
              autoFocus
              onChange={(e) => props.onChangedLogin(e.target.value)}
            />
            <label>
              Password
            </label>
            <input
              name='password'
              type="password"
              onChange={(e) => props.onChangedPassword(e.target.value)}
            />
          </div>
          {props.messageToUser !== null
          &&
          <div>{props.messageToUser}</div>}
          <button
            disabled={
              props.passwordInputValue === null
              || props.loginInputValue === null
              || props.passwordInputValue.length <= 0
              || props.loginInputValue.length <= 0}
            onClick={(e) => {
              props.onLogin(props.loginInputValue)
            }}
          >login
          </button>
          <button onClick={props.onCloseModal}>Close Modal</button>
        </div>
      </Modal>
    </section>

  )

}