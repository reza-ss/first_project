import React, { Component } from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Intro from './components/intro';
import Second from './components/second';
import './index.css';
import './rtl.css';
import Third from './components/third';
import Formone from './components/formone';
import Formtwo from './components/formtwo';
import Counter from './components/counter';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header title="قالب تک صفحه ggg">
          ساییتان را به راحتی راه اندازی کنید
          <br />
          راستچین شده توسط <a href="https://mrcode.ir">مسترکد دات آی آر</a>{' '}
          انتخابی مناسب برای راه اندازی سایت های OnePage.
        </Header>
        <Nav />
        <div id="main" style={{ marginBottom: '10px' }}>
          <Intro title="عکس عروسک باحال" btn="دکمه تست ">
            شرکت مایکروسافت (به انگلیسی: Microsoft Corporation) یک شرکت چند
            ملیتی است که مرکز آن در ایالات متحده آمریکا قرار دارد. این شرکت،
            بزرگترین شرکت ارائه نرم‌افزار رایانه در دنیاست که به انتشار کتاب و
            تولید محصولات چندرسانه‌ای و ارائه خدمات پست الکترونیکی نیز
            می‌پردازد. مایکروسافت در سال مالی منتهی به ژوئن ۲۰۱۰ میلادی، بیش از
            ۶۲ میلیارد دلار درآمد فروش، بیش از ۱۸ میلیارد دلار سود خالص و ۸۹٬۰۰۰
            کارمند در کشورهای مختلف دنیا داشته است.
          </Intro>
          <Second />
          <Third
            titles={[
              'پروژه انجام شده',
              'صفحه کدنویسی شده',
              'قالب طراحی شده',
              'مشتری رضایتمند',
              'مشتری ویژه'
            ]}
            numbers={[23452, 4522, 54565, 4556, 112]}
          />
          <Formone placeholder="فرم اول....." btnText="دکمه تایید فرم اول" />
          <Formtwo placeholder="فرم دوم....." btnText="دکمه تایید فرم دوم" />
          <Counter />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
