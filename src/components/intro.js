import React from 'react';
function Intro(props){
    return(
    <>
<section id="intro" className="main">
    <div className="spotlight">
        <div className="content">
            <header className="major">
                <h2>{props.title}</h2>
            </header>
            <p>{props.children}</p>
            <ul className="actions">
                <li><a href="generic.html" className="button">{props.btn}</a></li>
            </ul>
        </div>
        <span className="image"><img src={require('../img/pic01.jpg')}/></span>
    </div>
</section>
    </>
    );
}
export default Intro;