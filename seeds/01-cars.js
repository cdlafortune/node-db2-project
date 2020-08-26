
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        {
          VIN: 2278432749,
          make: "Toyota",
          model: "Corolla",
          mileage: 25,
          transmission: "auto",
          title: 'new'          
        },
        {
          VIN: 23327892739,
          make: "Kia",
          model: "Soul",
          mileage: 250000,
          transmission: "auto",
          title: 'used'          
        }
      ]);
    });
};
