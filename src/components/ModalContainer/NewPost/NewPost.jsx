import React from 'react'
import Modal from 'react-modal'
import Question from '../Question/Question'
import NewPost from "../ModalContainer";

Modal.setAppElement('#modal');

export default (data) => {
  const props = data.props;

  return (
    <section>
      <Modal
        isOpen={props.isOpenedModal}
        onClickAway={props.modalActions.onCloseModal}
      >
        <div>
          <h2>{'Hi, ' + props.loggedUser.login}</h2>

          <form>

            <label>
              Title
            </label>
            <input
              value={props.titleInputValue}
              onChange={(e) => props.postActions.onChangedTitle(e.target.value)} />

            <label>
              Text
            </label>
            <textarea
              value={props.textInputValue}
              onChange={(e) => props.postActions.onChangedText(e.target.value)} />

            {props.messageToUser !== null
              &&
            <div>{props.messageToUser}</div>}

          </form>

          <button
            disabled={!props.isModifiedForm}
            onClick={props.postActions.savePost}
          >save</button>

          <button
            onClick={props.modalActions.onCloseModal}>close</button>

          {props.showQuestion &&
            <Question  onShowQuestionForm={props.modalActions.onShowQuestionForm}
                       onCloseQuestionForm={props.modalActions.onCloseQuestionForm}
                       onSaveQuestionForm={props.modalActions.onSaveQuestionForm} />}

        </div>
      </Modal>
    </section>
  );
}
