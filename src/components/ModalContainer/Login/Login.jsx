import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#modal');

export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <section>
        <Modal
          isOpen={this.props.isOpenedModal}
          onClickAway={this.props.onCloseModal}
        >
          <div>
            <div>
              <label>
                Login
              </label>
              <input
                name='login'
                autoFocus
                onChange={(e) => this.props.onChangedLogin(e.target.value)}
              />
              <label>
                Password
              </label>
              <input
                name='password'
                type="password"
                onChange={(e) => this.props.onChangedPassword(e.target.value)}
              />
            </div>
            {this.props.messageToUser !== null
              &&
            <div>{this.props.messageToUser}</div>}
            <button

              onClick={(e) => {
                this.props.onLogin(this.props.loginInputValue)
              }}
            >login
            </button>
            <button onClick={this.props.onCloseModal}>Close Modal</button>
          </div>
        </Modal>
      </section>
    )
  }
}