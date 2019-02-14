import React from 'react';
import logo from '../logo.svg';
function Nav(){
    return(
    <>
<nav id="nav">
						<ul>
							<li><a href="#intro" className="active">معرفی</a></li>
							<li><a href="#first">بخش اول</a></li>
							<li><a href="#second">بخش دوم</a></li>
							<li><a href="#cta">شروع کنید</a></li>
						</ul>
					</nav>
    </>
    );
}
export default Nav;