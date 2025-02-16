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

function openForm(){
    const container = document.getElementById('container');
    const formDiv = document.createElement('div');
    formDiv.setAttribute('id', 'formDiv');

    const form = document.createElement('form');
    formDiv.appendChild(form);
    form.setAttribute('method', 'post');
    
    const label1 = document.createElement('label');
    label1.setAttribute('for', 'title');
    label1.textContent = 'Title';
    form.appendChild(label1);
    const input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('id', 'title');
    input1.setAttribute('name', 'title');
    input1.setAttribute('required', '');
    form.appendChild(input1);
    
    const label2 = document.createElement('label');
    label2.setAttribute('for', 'author');
    label2.textContent = 'Author';
    form.appendChild(label2);
    const input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    input2.setAttribute('id', 'author');
    input2.setAttribute('name', 'author');
    input2.setAttribute('required', '');
    form.appendChild(input2);

    const label3 = document.createElement('label');
    label3.setAttribute('for', 'pages');
    label3.textContent = 'Pages';
    form.appendChild(label3);
    const input3 = document.createElement('input');
    input3.setAttribute('type', 'number');
    input3.setAttribute('id', 'pages');
    input3.setAttribute('name', 'pages');
    input3.setAttribute('required', '');
    form.appendChild(input3);

    const checkbox = document.createElement('div');
    checkbox.setAttribute('class', 'checkbox');
    form.appendChild(checkbox);
    const label4 = document.createElement('label');
    label4.setAttribute('for', 'read');
    label4.textContent = 'Read';
    checkbox.appendChild(label4);
    const input4 = document.createElement('input');
    input4.setAttribute('type', 'checkbox');
    input4.setAttribute('id', 'read');
    input4.setAttribute('name', 'read');
    checkbox.appendChild(input4);

    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.textContent = 'Submit';
    submit.setAttribute('id', 'submit');
    form.appendChild(submit);

    container.appendChild(formDiv);
}
const addButton= document.getElementById('addButton');

addButton.addEventListener('click', () =>{
    const container = document.getElementById('page');
    container.removeChild(addButton);
    openForm();
})

updateTable();