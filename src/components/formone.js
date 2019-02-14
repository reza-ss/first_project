import React from 'react';
import style from '../form_one.module.css';

function Formone(props) {
  return (
    <>
      <section id="intro" className="main">
        <div className="spotlight">
          <p>
            <input className="input" placeholder={props.placeholder} />
          </p>
          <p>
            <input
              type="submit"
              className={props.btnClassName}
              value={props.btnText}
            />
          </p>
        </div>
      </section>
    </>
  );
}
export default Formone;
