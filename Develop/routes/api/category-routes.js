const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {

  Category.findAll({
    include: 'product'
  })

  .then((data) => {
    res.json(data)
  })

  .catch((err) => {
    if (err) {
      res.status(500).json(err)
    }
  }
  // be sure to include its associated Products
)});

router.get('/:id', (req, res) => {

  Category.findOne({
    where: {
      id: req.params.id
    },
include: 'product'
  })

  .then((data) => {
    if (!data) {
      res.status(404).json({message: "No category with this ID"})
      return;
    }
    res.json(data)

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
  category_name: req.body.category_name
})

.then((data) => {
  res.json(data)
})

.catch(err => {
  console.log(err)
})

});

router.put('/:id', (req, res) => {
Category.update(req.body, {
  where: {
    id: req.params.id
  },
})

.then(data => {
  if (!data[0]) {
    res.status(404).json({message: "There is no user with this ID"})
    return;
  }
  res.json(`Updated category number ${req.params.id}`)
})

.catch(err => {
  if (err) {
    res.json(500).json(err)
  }
})
});

router.delete('/:id', (req, res) => {
Category.destroy({
  where: {
    id: req.params.id
  }
})

.then(data => {

  res.json({message:`Category with ID ${req.params.id} has been deleted`})

})

.catch(err => {
  res.json(err)
})

});

module.exports = router;
