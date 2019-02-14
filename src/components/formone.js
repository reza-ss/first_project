import React from 'react';
import styles from './form_one.module.css';

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
              className={styles.btn}
              style={props.btnStyle}
              value={props.btnText}
            />
          </p>
        </div>
      </section>
    </>
  );
}
export default Formone;
