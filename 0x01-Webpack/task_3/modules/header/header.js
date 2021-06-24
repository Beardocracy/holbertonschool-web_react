import $ from "jquery";
import './header.css';

console.log("Init header");

$('body').append('<header></header>');
$('header').append(`<div id='logo'></div>`);
$('header').append('<h1>Holberton Dashboard</h1>');