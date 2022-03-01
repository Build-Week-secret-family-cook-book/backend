exports.seed = function (knex) {
    return knex('recipes').del()
        .then(function () {
            return knex('recipes').insert([
                { title: "Pizza", source: "Italian Chef", ingredients: "Cheese, Dough, Sauce", instructions: "Bake the pizza!", category: "Dinner" },
                { title: "Baked Chicken", source: "Chicken Shop", ingredients: "Salt, pepper, chicken", instructions: "Cook the chicken!", category: "Dinner" },
                { title: "Cup of water", source: "Gourmet Chef", ingredients: "Water, cup", instructions: "Fill the cup with water", category: "Beverage" },

            ]);
        });
};

// Inserts recipes into postgres.