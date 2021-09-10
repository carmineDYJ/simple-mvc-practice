import $ from 'jquery';
import './app1.css';

const $button1 = $("#add1");
const $button2 = $("#minus1");
const $button3 = $("#multiply2");
const $button4 = $("#divide2");
const $num = $("#number");
const num = localStorage.getItem("num");
$num.text(num || 100);

const buttonCal = function (btn, fn) {
    btn.on("click", () => {
        let n = parseInt($num.text());
        n = fn(n);
        localStorage.setItem("num", n);
        $num.text(n);
    })
};
buttonCal($button1, (n)=>{return n + 1;});
buttonCal($button2, (n)=>{return n - 1;});
buttonCal($button3, (n)=>{return n * 2;});
buttonCal($button4, (n)=>{return n / 2;});