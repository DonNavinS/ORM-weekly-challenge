const router = require('express').Router();
const { Category, Product } = require('../../models');
const seedCategories = require("../../seeds/category-seeds")

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // seedCategories();

  Category.findAll()

  .then((userData) => {
    res.json(userData)
  })

  .catch((err) => {
    if (err) {
      res.status(500).json(err)
    }
  }
  // be sure to include its associated Products
)});

router.get('/:id', (req, res) => {
// seedCategories();

  Category.findOne({
    where: {
      id: req.params.id
    }
  })

  .then((userData) => {
    if (!userData) {
      res.status(404).json({message: "No category with this ID"})
      return;
    }
    res.json(userData)

  })
  .catch((err)=> {
    if (err) {
      res.json(err)
    }
  }  )
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
Category.create({
  
  category_name: req.body.name
})

.then((userData) => {
  res.json(userData)
})

.catch(err => {
  console.log(err)
})

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
