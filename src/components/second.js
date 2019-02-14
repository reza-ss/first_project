import React from 'react';

function Second() {
  return (
    <section id="first" class="main special">
      <header class="major">
        <h2>چه سرویس هایی ارائه میکنیم؟</h2>
      </header>
      <ul class="features">
        <li>
          <span class="icon major style1">
            <img src={require('../img/pic02.jpg')} title="hi" alt="hi" />
          </span>
          <h3>طراحی سایت</h3>
          <p>
            طراحی وب به مهارت ساخت و راه‌اندازی صفحات وب گفته می‌شود. تیم برنرز
            لی، مخترع وب، با برپایی یک سایت وب در اوت ۱۹۹۱، نام خود را به عنوان
            نخستین سازندهٔ وب در تاریخ نگاشت.
          </p>
        </li>
        <li>
          <span class="icon major style3 ">
            <img src={require('../img/pic01.jpg')} title="hi" alt="hi" />
          </span>
          <h3>بهینه سازی موتورهای جستجو</h3>
          <p>
            بهینه سازی سایت (سئو) به فرآیندی گفته می شود که با استفاده از ترکیب
            تکنیکهای برنامه نویسی، محتوای سایت و عوامل خارجی تاثیر گذار در
            رنکینگ گوگل و استفاده از علم سئو باعث افزایش ترافیک و بازدید سایت
            شما خواهد شد.
          </p>
        </li>
        <li>
          <span class="icon major style5">
            <img src={require('../img/pic03.jpg')} title="hi" alt="hi" />
          </span>
          <h3>آموزش وردپرس</h3>
          <p>
            وردپرس نرم‌افزاری تحت وب است که می‌توانید از آن برای ساختن سرویس
            وبلاگدهی، وبسایت یا وبلاگی زیبا و قدرتمند استفاده کنید. مایلیم با
            افتخار اعلام کنیم که وردپرس باارزش و مجانی است.
          </p>
        </li>
      </ul>
      <footer class="major">
        <ul class="actions">
          <li>
            <a href="generic.html" class="button">
              کسب اطلاعات بیشتر
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}
export default Second;
