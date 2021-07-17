const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
const seedCategories = require("./seeds/category-seeds");
const seedProducts = require('./seeds/product-seeds');
const seedTags = require("./seeds/tag-seeds");
const seedProductTags = require("./seeds/product-tag-seeds")
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true })

.then(seedCategories)
.then(seedProducts)
.then(seedProductTags)
.then(seedTags)


.then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening on port ${PORT}`)
    })
})

