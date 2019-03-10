import React from 'react'
import Modal from 'react-modal'
import Question from '../Question/Question'
import Textarea from 'react-textarea-autosize'

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
  console.log(props);
  return (
    <section>
      <Modal
        style={defaultStyles}
        isOpen={props.isOpenedModal}
        contentLabel="onRequestClose Example"
        onRequestClose={props.modalActions.onCloseModal}
        onClickAway={props.modalActions.onCloseModal}
      >

        {!props.showQuestion &&
          <div className='newpost-form'>

            <h2 className='newpost-user'>{ 'Hi, ' + props.loggedUser.login }</h2>

            <div className='newpost-block'>
              <div className='newpost-field'>
                <label>
                  title
                </label>
                <input
                  id='title'
                  name='title'
                  className={props.isModifiedForm ? 'newpost-mod newpost-input' : 'newpost-input'}
                  autoComplete='off'
                  placeholder='write title...'
                  required=''
                  value={ props.titleInputValue }
                  onChange={ (e) => props.postActions.onChangedTitle(e.target.value) } />
              </div>

              <div className='newpost-field'>
                <label>
                  text
                </label>
                <Textarea
                  className={props.isModifiedForm ? 'newpost-mod newpost-input' : 'newpost-input'}
                  style={{resize: 'none'}}
                  minRows={8}
                  maxRows={8}
                  value={props.textInputValue}
                  onChange={ (e) => props.postActions.onChangedText(e.target.value) } />
              </div>

            </div>

            { props.messageToUser !== null && <div>{ props.messageToUser }</div> }

              <div className='newpost-btn'>
                <button
                  className='btn'
                  disabled={ !props.isModifiedForm }
                  onClick={ props.postActions.savePost }>
                  save
                </button>

                <button
                  className='btn'
                  onClick={ props.modalActions.onCloseModal }>
                  close
                </button>
              </div>

            </div> }

        {props.showQuestion &&
          <Question onShowQuestionForm={props.modalActions.onShowQuestionForm}
                    onCloseQuestionForm={props.modalActions.onCloseQuestionForm}
                    onSaveQuestionForm={props.modalActions.onSaveQuestionForm} />}

      </Modal>

    </section>
  );
}
