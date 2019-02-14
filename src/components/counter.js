import React from 'react';
class Counter extends React.Component{
    state={
    time:0
    };
componentDidMount(){
setInterval(
()=>{
    this.setState({time:this.state.time + 1});
}
,1000)
}
render(){
    return(
    <>
<section id="intro" className="main">
    <div className="spotlight">
    <p className="counter">شما <span>{this.state.time}</span>ثانیه است که درون این سایت هستید</p>
    </div>
</section>
    </>
    );
}
}
export default Counter;