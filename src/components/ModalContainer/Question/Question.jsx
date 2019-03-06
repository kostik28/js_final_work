import React from 'react'

export default (props) => {
  return (
    <div className='question-inner'>
      <div className='question-block'>
        <div className='question-form'>

          <h2 className='question-title'>Data changed! Save changes?</h2>

          <button
            className='btn'
            onClick={props.onSaveQuestionForm}>
            yes
          </button>

          <button
            className='btn'
            onClick={props.onCloseQuestionForm}>
            no
          </button>

          <button
            className='btn'
            onClick={() => props.onShowQuestionForm(false)}>
            cancel
          </button>

        </div>
      </div>
    </div>
  );
}
