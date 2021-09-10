import './app3.css';
import $ from 'jquery';

const $square = $("#app3 .square");
$square.on("click", ()=>{
    if (!($square.hasClass("activate") || $square.hasClass("deactivate"))){
        $square.addClass("activate");
    } else if ($square.hasClass("activate")) {
        $square.removeClass("activate");
        $square.addClass("deactivate");
    } else {
        $square.removeClass("deactivate");
        $square.addClass("activate");
    }
});