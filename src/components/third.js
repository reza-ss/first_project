import React from 'react';
function Third(props){
    return(
<section id="second" class="main special">
    <header class="major">
        <h2>چرا ما را انتخاب کنید؟</h2>
        <p>دلایل بسیار خوبی برای انتخاب ما وجود دارد<br/>
            چند مورد که شما را ترغیب می کند ما را انتخاب کنید عبارتند از :</p>
    </header>
    <ul class="statistics">
    {props['numbers'].map((index,number)=>{
    return (       <li class={'style'+(number + 1)}>
    <strong>{index}</strong> {props.titles[number]}
</li>)
    })}
        {/* <li class="style2">
            <strong>{props.numbers[1]}</strong> {props.titles[1]}
        </li>
        <li class="style3">
            <strong>{props.numbers[2]}</strong> {props.titles[2]}
        </li>
        <li class="style4">
            <strong>{props.numbers[3]}</strong> {props.titles[3]}
        </li>
        <li class="style5">
            <strong>{props.numbers[4]}</strong>{props.titles[4]}
        </li> */}
    </ul>
    <p class="content">کمپانی اپل در سال ۱۹۷۱ با دوستی استیو وزنیاک ۲۱ ساله مهندس کامپیوتر و استیو جابز ۱۶ ساله متولد شد به طوری که با گذشت شش سال از آشنایی این دو نفر در سال ۱۹۷۷ این کمپانی با معرفی کامپیوتر شخصی Apple I که در گاراژ خانه جابز به صورت دستی ساخته شده بود رسماً با نام تجاری Apple Computer Inc به بازار تکنولوژی وارد شد و توانست ظرف مدت کوتاهی با فروش تعدادی از این مدل کامپیوتر شخصی، اعتباری برای خود دست و پا کند. بلافاصله در سال ۱۹۷۷ اپل نوع دیگری از کامپیوتر شخصی یعنی Apple II را وارد بازار کرد که به دلیل مجهز بودنش به فلاپی درایو ۵٫۲۵ اینچی از رقبای دیگر خود در آن دوره نظیر Commodore که از نوار مغناطیسی برای ذخیره‌سازی اطلاعات استفاده می‌کرد، پیشی گرفت.</p>
    <footer class="major">
        <ul class="actions">
            <li><a href="generic.html" class="button">هنوز قانع نشده اید؟ روی اینجا کلیک کنید</a></li>
        </ul>
    </footer>
</section>
    );
}
export default Third;



