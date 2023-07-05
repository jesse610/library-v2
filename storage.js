
const storeLocalStorage = (library) => {
    localStorage.setItem('libraryBooks', JSON.stringify(library))
}

const retrieveLocalStorage = () => {
    const storedLibrary = localStorage.getItem('libraryBooks')

    let libraryBooks;

    if (storedLibrary)
    {
        libraryBooks = JSON.parse(storedLibrary)
    }

    return libraryBooks
}

export {
    storeLocalStorage,
    retrieveLocalStorage
}