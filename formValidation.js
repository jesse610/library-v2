const formValidation = {
    checkTitle(title) {
        title.addEventListener('input', (event) => {
            if(title.validity.valueMissing)
            {
                return title.setCustomValidity('Please enter the title of the book!')
            }
            else
            {
                return title.setCustomValidity("")
            }
        })
    },

    checkAuthor(author) {
        author.addEventListener('input', () => {
            if(author.validity.valueMissing)
            {
                return author.setCustomValidity('Please enter a name for the author!')
            }
            else
            {
                return author.setCustomValidity("")
            }
        })
    },

    checkPages(pages) {
        pages.addEventListener('input', () => {
            if(pages.validity.valueMissing)
            {
                return pages.setCustomValidity('Please enter a number of pages!')
            }
            else
            {
                return pages.setCustomValidity("")
            }
        })
    }
}

export {
    formValidation
}