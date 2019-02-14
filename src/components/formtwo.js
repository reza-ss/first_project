import React from 'react';
import style from '../form_two.module.css';
function Formtwo(props) {
  return (
    <>
      <section id="intro" className="main">
        <div className="spotlight">
          <p>
            <input className="input" placeholder={props.placeholder} />
          </p>
          <p>
            <input type="submit" className={style.btn} value={props.btnText} />
          </p>
        </div>
      </section>
    </>
  );
}
export default Formtwo;
