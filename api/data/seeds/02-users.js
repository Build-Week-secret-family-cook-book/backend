exports.seed = function(knex){
    return knex('users').del()
    .then(function () {
        return knex('users').insert([
            {username: "Mark Gabon", password: "1234"},
            {username: "John Cena", password: "youcantseethis"},
            {username: "Baba Yaga", password: "johnwick"}
        ]);
    });
};

// Inserts users into postgres.