import _ from 'lodash';
import $ from 'jquery';

$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");

$('button').on('click', _.debounce(updateCounter, 500));

let count = 0;
function updateCounter() {
        count += 1;
        $('#count').html(`${count} clicks on the button`);
}