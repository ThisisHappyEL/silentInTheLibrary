// Создали массив объектов книг
let library = [
  { name: "Незнайка на Луне", autor: "Николай Носов", year: 1965, genre: "Антиутопия для состоявшихся личностей", pages: 256 }
];

//Сделали функцию для добавления новых книг
const addBook = (name, autor, year, genre, pages) => {
  const newBook = {name, autor, year, genre, pages}
  library.push(newBook)
};

addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия для зумеров", 328)
console.log('Добавили в библиотеку вот эту вашу "литералли 1984')
console.log(library);

//Сделали функцию для "удаления" книг
const removeBook = (deleteName) => {
  const filtredLibrary = library.filter((book) => book.name !== deleteName)
  library = filtredLibrary
  return library
};

console.log('Оставили только по настоящему хорошую антиутопию');
console.log(removeBook('1984'));

//Добавим книг для наглядности работоспособности следующей функции
addBook("Фантазёры", "Николай Носов", 1940, "Приключение", 16)
addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310)

//Сделали фукнцию для вывода всех книг одного автора
const findBooksByAuthor = (autorName) => {
  const filterToAutor = library.filter((book) => book.autor === autorName)
  return filterToAutor
};

console.log('Вывели только работы Николая Носова');
console.log(findBooksByAuthor('Николай Носов'));

//Сделали функцию для поиска по книг по жанру
const filterBooksByGenre = (interestingGenre) => {
  const filterToGenre = library.filter((book) => book.genre === interestingGenre)
  return filterToGenre
}

console.log('Пошерстили в поисках фэнтези');
console.log(filterBooksByGenre('Фэнтези'));


//Сделали функцию для отчёта по количеству книг в разных жанрах
const genreReport = () => {
  const genreReport = library.reduce((acc, book) => {
    if (Object.hasOwn(acc, book.genre)) {
      acc[book.genre] += 1
    } else {
      acc[book.genre] = 1
    }
    return acc
  }, {})
  return genreReport
};

console.log('Подсчитали книги в разных жанрах');
console.log(genreReport());

//Написали функцию для подсчёта среднего количества страниц
const averagePagesReport = () => {
  const averagePages = library.reduce((acc, book) => {
    acc += book.pages
    return acc
  }, 0)
  const antiNotEven = Math.ceil(averagePages / library.length)
  return antiNotEven
};

console.log('Подсчитали среднее количество страниц');
console.log(averagePagesReport())

//Написали функцию для сортировки книг по году издания
const fromNewToOld = library.sort((aBook, bBook) => Math.sign(bBook.year - aBook.year))

console.log('Отсортировали книги по дате выхода от нового к старому');
console.log(fromNewToOld)

//Конец!