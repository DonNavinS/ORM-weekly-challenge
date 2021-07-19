const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll()

  .then(data => {
    res.json(data)
  })

  .catch(err => {
    if(err) {
      res.status(500).json(err)
    }
  })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
 Tag.findOne({
   where: {
     id: req.params.id
   }
 })

 .then(data => {
   if(!data) {
     res.status(404).json({message: "No product found with that tag ID"})
   }
   res.json(data)
 })

 .catch(err => {
   if(err) {
     res.json(err)
   }
 })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create()
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
