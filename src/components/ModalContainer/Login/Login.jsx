import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#modal');
Modal.defaultStyles = {};

const defaultStyles = {
  overlay: {
    position: 'relative',
    width: '100%',
    maxWidth: '1440px',
    height: '100%',
    margin: '0 auto'
  },
  content: {
    position: 'absolute',
    width: '100%',
    top: '50%',
    margin: 0,
    transform: 'translateY(-50%)',
    padding: '0 20px',
    boxSizing: 'border-box',
    transition: 'opacity 0.2s ease-out',
    textTransform: 'lowercase',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default (data) => {
  const props = data.props;

  return (

    <section>
      <Modal
        style={defaultStyles}
        isOpen={props.isOpenedModal}
        contentLabel="onRequestClose Example"
        onRequestClose={props.modalActions.onCloseModal}
        onClickAway={props.modalActions.onCloseModal}>
        <div className='login-form'>
          <div className='login-inner'>

            <div className='login-block'>
              <div className='login-field'>
                <label>
                  login
                </label>
                <input
                  id='login'
                  className={props.messageToUser !== null ? 'login-input login-error' : 'login-input'}
                  name='login'
                  autoComplete='off'
                  placeholder='heavy'
                  required=''
                  onChange={(e) => props.loginActions.onChangedLogin(e.target.value)}/>
              </div>

              <div className='login-field'>
                <label>
                  password
                </label>
                <input
                  id='password'
                  className={props.messageToUser !== null ? 'login-input login-error' : 'login-input'}
                  name='password'
                  autoComplete='off'
                  placeholder='1234'
                  required=''
                  onChange={(e) => props.loginActions.onChangedPassword(e.target.value)}/>
              </div>

            </div>

            {props.messageToUser !== null && <div className='login-message'>{props.messageToUser}</div>}

            <div className='btn-block'>
              <button
                className='btn login-btn'
                disabled={
                  props.passwordInputValue === null
                  || props.loginInputValue === null
                  || props.passwordInputValue.length <= 0
                  || props.loginInputValue.length <= 0}
                onClick={(e) => {
                  props.loginActions.onLogin(props.loginInputValue)
                }}>
                log in
              </button>

              <button
                className='btn login-btn'
                onClick={props.modalActions.onCloseModal}>
                close
              </button>
            </div>

          </div>

        </div>

      </Modal>
    </section>

  )

}