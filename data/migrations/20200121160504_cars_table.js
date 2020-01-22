exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string("make", 200).index();
    tbl.string("model", 200).index();
    tbl.integer("year");
    tbl.string("color");
    tbl.boolean("used").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};