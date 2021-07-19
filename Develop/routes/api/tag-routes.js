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
  Tag.create({
    tag_name: req.body.tag_name
  })
  
  .then((data) => {
    res.json(data)
  })
  
  .catch(err => {
    console.log(err)
  })
  
  });

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    },
  })
  
  .then(data => {
    if (!data[0]) {
      res.status(404).json({message: "There is no tag with this ID"})
      return;
    }
    res.json(`Updated tag name ${req.params.id}`)
  })
  .catch(err => {
    if (err) {
      res.json(500).json(err)
    }
  })
  });

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  
  .then(data => {
  
    res.json({message:`Tag with ID ${req.params.id} has been deleted`})
  
  })
  
  .catch(err => {
    res.json(err)
  })
  
  });

module.exports = router;
