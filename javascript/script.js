$(function(){

const URL = "https://www.googleapis.com/books/v1/volumes?q="


const $input = $('input[type="text"]');
const $button = $('form');

$button.on('submit', bookSearch)

// console.log($input)
function bookSearch(evt) {
    evt.preventDefault();
    const userInput = $input.val();
    $.ajax(URL + userInput).then(function (data){
        render(data);
    }, function (error) {
        console.log(error);
    }
    )};

function render(bookData) {
    $('div').html(`
    <div>
        <h2>Title: ${bookData.title}
    `)
}












});