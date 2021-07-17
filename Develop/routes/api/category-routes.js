const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {

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
  category_name: req.body.category_name
})

.then((userData) => {
  res.json(userData)
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

.then(userData => {
  if (!userData[0]) {
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

.then(userData => {

  res.json(`Category with ID ${req.params.id} has been deleted`)

})

.catch(err => {
  res.json(err)
})

});

module.exports = router;
