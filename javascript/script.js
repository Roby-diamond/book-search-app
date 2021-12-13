$(function(){

const URL = "https://www.googleapis.com/books/v1/volumes?q="


const $input = $('input[type="text"]');
const $button = $('form');

$button.on('submit', bookSearch)

// console.log($input)
function bookSearch(evt) {
    evt.preventDefault();
    const userInput = $input.val();
    $input.val('');
    $.ajax(URL + userInput).then(function (data){
        display(data) 
    }, function (error) {
        console.log(error);
        console.log('oh no you have an error')
    }
    )};

    function display(data){
        // for (let i = 0; i < data.items.length; i++){
            let $bookInfo = data.items[0];
        $('div').html(`
        <div>
            <h2>Title: ${$bookInfo.volumeInfo.title}</h2>
            <h2>Author: ${$bookInfo.volumeInfo.authors}</h2>
            <h3>Published: ${$bookInfo.volumeInfo.publishedDate}</h3>
        </div>`)
        console.log($bookInfo.volumeInfo);
    }

// }




});