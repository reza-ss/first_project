import React from 'react';
import logo from '../logo.svg';
function Header(props){
    return(
    <>
    <header id="header" className="alt">
    <span className="logo"><img src={logo} alt="" /></span>
    <h1>{props.title}</h1>
    <p>{props.children}</p>
</header>
    </>
    );
}
export default Header;