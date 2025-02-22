class Book {
    title
    author
    ISBN
    available

    constructor(title, author, ISBN, available = true) {
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this.available = available
    }

    get title() {
        return title
    }

    get available() {
        return available
    }

    /**
     * @param {boolean} value
     */
    set available(value) {
        this.available = value
    }

    showBook() {
        document.getElementById('resultText').innerHTML = `${this.title} (ISBN: ${this.ISBN}) is available: ${this.available}`
    }
}

class Library {
    name
    catalog
    constructor(name, catalog = []) {
        this.name = name
        this.catalog = catalog
    }

    addBook = (book) => {
        this.catalog.push(book)
    }

    findBookByTitle = (title) => {
        let res = null
        for (let i = 0; i < this.catalog.length; i++) {
            const element = this.catalog[i];
            if (element.title == title) {
                res = element
                break
            }
        }
        return res
    }

    checkoutBook = (title) => {
        let res = this.findBookByTitle(title)
        if (res) {
            res.available = false
            console.log('Book checkout Completed');
        } else {
            console.log('Book not found in the catalog');
        }
    }

    returnBook = (title) => {
        let res = this.findBookByTitle(title)
        if (res) {
            res.available = true
            console.log('Book return Completed');
        } else {
            console.log('Book not found in the catalog');
        }
    }
}
var B1 = new Book('book1', 'author1', '123', true)
var B2 = new Book('book2', 'author2', '234', true)
var B3 = new Book('book3', 'author3', '345', false)
var B4 = new Book('book4', 'author4', '456', true)
var B5 = new Book('book5', 'author5', '567', false)

var l1 = new Library('L1')

l1.addBook(B1)
l1.addBook(B2)
l1.addBook(B3)
l1.addBook(B4)
l1.addBook(B5)

window.addEventListener("DOMContentLoaded", function () {
    l1.catalog.forEach(element => {
        showItem(element.title)
    });
})

function showItem(item) {
    let list = document.querySelector("ul");
    list.innerHTML += `<li>${item}</li>`;
}

var b1 = document.getElementById('find-book')
var b2 = document.getElementById('checkout-book')
var b3 = document.getElementById('return-book')

onclickB1 = () => {
    var titleHtml = document.getElementById('title')
    let findedBook = l1.findBookByTitle(titleHtml.value)
    if (findedBook) {
        findedBook.showBook()
    } else {
        document.getElementById('resultText').innerHTML = `Book not found in the catalog`
    }
}

onclickB2 = () => {
    var titleHtml = document.getElementById('title')
    let findedBook = l1.findBookByTitle(titleHtml.value)
    if (findedBook) {
        l1.checkoutBook(titleHtml.value)
        document.getElementById('resultText').innerHTML = `${findedBook.title} has been checkout`
    } else {
        document.getElementById('resultText').innerHTML = `Book not found in the catalog`
    }
}
onclickB3 = () => {
    var titleHtml = document.getElementById('title')
    let findedBook = l1.findBookByTitle(titleHtml.value)
    if (findedBook) {
        l1.returnBook(titleHtml.value)
        document.getElementById('resultText').innerHTML = `${findedBook.title} has been return`
    } else {
        document.getElementById('resultText').innerHTML = `Book not found in the catalog`
    }
}