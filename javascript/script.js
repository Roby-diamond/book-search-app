$(function () {

    const URL = "https://www.googleapis.com/books/v1/volumes?q="


    const $input = $('input[type="text"]');
    const $button = $('form');

    $button.on('submit', bookSearch)

    // console.log($input)
    function bookSearch(evt) {
        evt.preventDefault();
        const userInput = $input.val();
        if (!userInput) return;
        $input.val('');
        $.ajax(URL + userInput).then(function (data) {
            display(data)
        }, function (error) {
            console.log(error);
            console.log('oh no you have an error')
        }
        )
    };

    function display(data) {
        let $bookInfo = data.items[0];
        console.log($bookInfo);
        let $isbn = $bookInfo.volumeInfo.industryIdentifiers[1].identifier
        console.log($isbn);
        $('div').html(`
        <main class ="results">
        <p><img src="https://covers.openlibrary.org/b/isbn/${$isbn}-L.jpg" /></p>
            <h2>${$bookInfo.volumeInfo.title}</h2>
            <h3>${$bookInfo.volumeInfo.authors}</h3>
            <p>Published: ${$bookInfo.volumeInfo.publishedDate}</p>
            <p id ="description">${$bookInfo.volumeInfo.description}</p>
            <p> <a href="${$bookInfo.volumeInfo.infoLink}" target ="#">More info</a></p>
        </main>`)
        
        
    }
 
});