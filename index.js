import { formValidation } from "./formValidation.js";

// book constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

const library = {
    myLibrary: [],
    bookFF: null,
    addBookForm: null,
    addBookBtn:  null,
    addNewBookBtn:  null,
    titleInput:  null,
    authorInput:  null,
    pagesInput:  null,
    readInput:  null,
    main:  null,
    cardsContainer: null,

    init() {
        this.bookFF = new Book()
        this.addBookForm = document.querySelector('.add-book-form')
        this.addBookBtn = document.querySelector('#add-book-btn')
        this.addNewBookBtn = document.querySelector('#add-new-book-btn')
        this.titleInput = document.querySelector('#title')
        this.authorInput = document.querySelector('#author')
        this.pagesInput = document.querySelector('#pages')
        this.readInput = document.querySelector('#read')
        this.main = document.querySelector('.main')
        this.cardsContainer = document.querySelector('.cards')
        this.addBookForm.addEventListener('submit', (e) => {
            e.preventDefault()
            this.handleFormSubmit(this.addBookForm, this.readInput, this.myLibrary, this.addNewBookBtn)
        })
        this.addNewBookBtn.addEventListener('click', () => {
            this.handleAddNewBookClick(this.addBookForm, this.addNewBookBtn, this.main)
            this.titleInput.addEventListener('load', () => {
                formValidation.checkTitle(this.titleInput)
            })
        })
        // this.titleInput.addEventListener('load', () => {
        //     formValidation.checkTitle(this.titleInput)
        // })
        this.authorInput.addEventListener('input', () => {
            formValidation.checkAuthor(this.authorInput)
        })
        this.pagesInput.addEventListener('input', () => {
            formValidation.checkPages(this.pagesInput)
        })
    },

    addBookToLibrary() {
        this.bookFormEventListner(addBookForm, addBookBtn, addNewBookBtn)
    },

    handleFormSubmit(addBookForm, readInput, myLibrary, addNewBookBtn) {
            let title = this.titleInput.value
            let author = this.authorInput.value
            let pages = this.pagesInput.value
            let read = this.readInput.value

            if (readInput.checked) 
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
            this.updateDisplay()
            addBookForm.reset()
    },

    updateDisplay() {
        this.cardsContainer.textContent = ''
        this.displayLibrary()
    },

    handleAddNewBookClick(addBookForm, addNewBookBtn, main) {
        addBookForm.classList.remove('hidden');
        addNewBookBtn.hidden = true;
        main.hidden = true;
    },

    handleFormValidation() {
        formValidation.checktitle(this.title)
    },

    deleteBook(btnId) {
        for (let i = 0; i < this.myLibrary.length; i++)
        {
            if (i == btnId)
            {
                this.myLibrary.splice(i, 1)
                this.updateDisplay()
                break
            }
        }
    },

    toggleRead(book) {
        if (book.read == 'Read')
        {
            book.read = 'Not read'
        }
        else if (book.read == 'Not read')
        {
            book.read = 'Read'
        }
        this.updateDisplay()
    },

    displayLibrary() {
        this.main.hidden = false
        for (let i = 0; i < this.myLibrary.length; i++)
        {
            let div = document.createElement('div')
            div.setAttribute('class', 'card')
            this.cardsContainer.appendChild(div)
    
            for (let j = 0; j < 4; j++)
            {
                let span = document.createElement('span')
                if (j == 0)
                {
                    span.textContent = this.myLibrary[i].title
                    div.appendChild(span)
                }
                else if (j == 1)
                {
                    span.textContent = this.myLibrary[i].author
                    div.appendChild(span)
                }
                else if (j == 2)
                {
                    span.textContent = `${this.myLibrary[i].pages} pages`
                    div.appendChild(span)
                }
            }
    
            const readBtn = document.createElement('button')
            readBtn.classList.add('read-btn')
            div.appendChild(readBtn)
            readBtn.textContent = this.myLibrary[i].read
            readBtn.addEventListener('click', () => {
                this.toggleRead(this.myLibrary[i])
            })
    
            const deleteBtn = document.createElement('button')
            deleteBtn.classList.add('delete-btn')
            deleteBtn.setAttribute('id', i)
            div.appendChild(deleteBtn)
            deleteBtn.textContent = 'Remove book'
            deleteBtn.addEventListener('click', () => {
                this.deleteBook(i)
            })
        }
    }
}

library.init()
