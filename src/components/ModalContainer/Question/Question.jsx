import React from 'react'

export default (props) => {
  return (
    <section>
        <div>
          <h1>Title</h1>
          <p>Some Contents</p>
          <button onClick={props.onCloseModal}>Close Modal</button>
        </div>
    </section>
  );
}
