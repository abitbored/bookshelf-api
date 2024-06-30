const {
    addBookHandler,
    getAllBooksHandler,
    getSpecifiedBookHandler,
    editSpecifiedBook,
    deleteSpecifiedBook,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getSpecifiedBookHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editSpecifiedBook,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteSpecifiedBook,
    },
];

module.exports = routes;