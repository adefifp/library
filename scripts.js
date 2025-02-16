const myLibrary = [];

function Book(title, author, pages, completed){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
const book2 = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 423, false);
const book3 = new Book('The Two Towers', 'J.R.R. Tolkien', 352, false);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function updateTable(){
    for (let i = 0; i < myLibrary.length; i++){
        const table = document.querySelector('table');
        const row = document.createElement('tr');

        let title = document.createElement('td');
        title.textContent = `${myLibrary[i].title}`;
        row.appendChild(title);

        let author = document.createElement('td');
        author.textContent = `${myLibrary[i].author}`;
        row.appendChild(author);

        let pages = document.createElement('td');
        pages.textContent = `${myLibrary[i].pages}`;
        row.appendChild(pages);
        let completion = document.createElement('td');
        if (myLibrary[i].completed ? completion.textContent = 'Yes' : completion.textContent = 'No');
        row.appendChild(completion);
        table.appendChild(row);
    }   
}

updateTable();