function bookShelf(arrInput) {
    const booksShelf = [];

    class Shelf {
        constructor(id, genre) {
            this.id = id;
            this.genre = genre;
            this.books = []
        }
    }

    class Book {
        constructor(title, author, genre) {
            this.title = title;
            this.author = author;
            this.genre = genre;
        }
    }

    for (const text of arrInput) {
        if (text.includes('->')) {
            const [id, genre] = text.split(' -> ');
            const newShelf = new Shelf(id, genre);
            if (!(booksShelf.some(shelf => shelf.id === id))) {
                booksShelf.push(newShelf);
            }
        } else {
            const [title, author, genre] = text.replace(': ', ', ').split(', ');
            const foundShelf = booksShelf.find(shelf => shelf.genre === genre);
            if (foundShelf) {
                const newBook = new Book(title, author, genre);
                foundShelf.books.push(newBook);
            }
        }
    }

    booksShelf.sort((a, b) => b.books.length - a.books.length);
    const result = booksShelf.reduce((acc, shelf) => {
        acc.push(`${shelf.id} ${shelf.genre}: ${shelf.books.length}`);
        const sortedBooksByTitle = shelf.books.sort((a, b) => a.title.localeCompare(b.title));
        sortedBooksByTitle.forEach(book => acc.push(`--> ${book.title}: ${book.author}`));
        return acc;
    }, []);

    return result.join('\n');
}

console.log(bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']))