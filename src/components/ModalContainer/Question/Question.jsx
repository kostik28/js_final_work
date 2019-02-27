import React from 'react'
import Question from "../NewPost/NewPost";

export default (props) => {
  return (
    <section>
        <div>
          <p>Data changed! Save changes?</p>
          <button onClick={props.onSaveQuestionForm}>yes</button>
          <button onClick={props.onCloseQuestionForm}>no</button>
          <button onClick={() => props.onShowQuestionForm(false)}>cancel</button>
        </div>
    </section>
  );
}
