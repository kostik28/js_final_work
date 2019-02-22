import React from 'react'
import Modal from 'react-modal'
import Question from '../Question/Question'

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
            <label>
              Title
            </label>
            <input
              value={props.titleInputValue}
              onChange={(e) => props.onChangedTitle(e.target.value)} />
            <label>
              Text
            </label>
            <textarea
              value={props.textInputValue}
              onChange={(e) => props.onChangedText(e.target.value)} />
            {props.messageToUser !== null
              &&
            <div>{props.messageToUser}</div>}
          </form>
          <button
            disabled={!props.isModifiedForm}
            onClick={props.savePost}
          >save</button>
          <button
            onClick={props.onCloseModal}>close</button>
          {props.showQuestion &&
            <Question
              onCloseModal={props.onCloseModal}
              isOpenModal={props.isModifiedForm}
              onShowQuestionForm={props.onShowQuestionForm}
              onCloseQuestionForm={props.onCloseQuestionForm}
              onSaveQuestionForm={props.onSaveQuestionForm}/>}
        </div>
      </Modal>
    </section>
  );
}
