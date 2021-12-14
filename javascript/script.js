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
            let $bookInfo = data.items[0];
        $('div').html(`
        <div class id="results">
            <h2>${$bookInfo.volumeInfo.title}</h2>
            <h3>${$bookInfo.volumeInfo.authors}</h3>
            <p>Published: ${$bookInfo.volumeInfo.publishedDate}</p>
            <p id ="description">${$bookInfo.volumeInfo.description}</p>
            <p id ="image"><img src="${$bookInfo.volumeInfo.imageLinks.thumbnail}"</p>
        </div>`)
        console.log($bookInfo.volumeInfo);
    }




});