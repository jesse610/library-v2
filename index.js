let myLibrary = [
    // {
    //     title : 'The Great Gatsby',
    //     author : 'F. Scott Fitzgerald',
    //     pages : 164,
    //     read : 'Read'
    // },
    // {
    //     title : 'To Kill a Mockingbird',
    //     author : 'Harper Lee',
    //     pages : 230,
    //     read : 'Read'
    // },
    // {
    //     title : 'Beloved',
    //     author : 'Toni Morrison',
    //     pages : 170,
    //     read : 'Not read'
    // },
    // {
    //     title : 'Lord of the flies',
    //     author : 'William Golding',
    //     pages : 143,
    //     read : 'Not read'
    // }
];

// book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    return {
        title,
        author,
        pages,
        read
    }
}

// creates book and updates library
function addBookToLibrary() {
    const addBookForm = document.querySelector('.add-book-form')
    const addBookBtn = document.querySelector('#add-book-btn')
    const addNewBookBtn = document.querySelector('#add-new-book-btn')
    addBookForm.addEventListener('submit', function(e) { 
        e.preventDefault()
        let title = document.querySelector('#title').value
        let author = document.querySelector('#author').value
        let pages = document.querySelector('#pages').value
        let read = document.querySelector('#read')

        if (read.checked) 
        {
            read = 'Read'
        }
        else
        {
            read = 'Not read'
        }

        let book = new Book(title, author, pages, read)
        console.log(book)
        myLibrary.push(book)
        addBookForm.classList.add('hidden')
        addNewBookBtn.hidden = false
        updateDisplay()
        addBookForm.reset()
    })
}

// displays library 
function displayLibrary() {
    const main = document.querySelector('.main')
    main.hidden = false
    const cardsContainer = document.querySelector('.cards')
    for (let i = 0; i < myLibrary.length; i++)
    {
        let div = document.createElement('div')
        div.setAttribute('class', 'card')
        cardsContainer.appendChild(div)

        for (let j = 0; j < 4; j++)
        {
            let span = document.createElement('span')
            if (j == 0)
            {
                span.textContent = myLibrary[i].title
                div.appendChild(span)
            }
            else if (j == 1)
            {
                span.textContent = myLibrary[i].author
                div.appendChild(span)
            }
            else if (j == 2)
            {
                span.textContent = `${myLibrary[i].pages} pages`
                div.appendChild(span)
            }
        }

        const readBtn = document.createElement('button')
        readBtn.classList.add('read-btn')
        div.appendChild(readBtn)
        readBtn.textContent = myLibrary[i].read
        readBtn.addEventListener('click', function() {
            toggleRead(myLibrary[i])
        })

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-btn')
        deleteBtn.setAttribute('id', i)
        div.appendChild(deleteBtn)
        deleteBtn.textContent = 'Remove book'
        deleteBtn.addEventListener('click', deleteBook)
    }
}

function toggleRead(book) {
    if (book.read == 'Read')
    {
        book.read = 'Not read'
    }
    else if (book.read == 'Not read')
    {
        book.read = 'Read'
    }
    updateDisplay()
}

function updateDisplay() {
    const main = document.querySelector('.main')
    const cardsContainer = document.querySelector('.cards')
    cardsContainer.textContent = ''
    displayLibrary()
}

function displayBookForm() {
    const addNewBookBtn = document.querySelector('#add-new-book-btn')
    const addBookForm = document.querySelector('.add-book-form')
    const main = document.querySelector('.main')
    addNewBookBtn.addEventListener('click', function() {
        console.log('clicked')
        addBookForm.classList.remove('hidden');
        addNewBookBtn.hidden = true;
        main.hidden = true;
    })
}

function deleteBook() {
    let bookid = this.id

    for (let i = 0; i < myLibrary.length; i++)
    {
        if (i == bookid)
        {
            myLibrary.splice(i, 1)
            updateDisplay()
            break
        }
    }
}

addBookToLibrary()
displayBookForm()
displayLibrary()