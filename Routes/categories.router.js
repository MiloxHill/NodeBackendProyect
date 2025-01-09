const express = require('express');

const CategorieService = require ('../Services/categories.service.js');

const routerCategories = express.Router();
const service = new CategorieService();

routerCategories.get('/',  (req, res) => {
  const categorie = service.find()
    res.json(categorie);
})

routerCategories.get('/:id', (req, res) => {
  const { id } = req.params;
  const categorie = service.findOne(id)
  res.json(categorie);
});

// routerCategories.get('/:categoriesId/products/:productId', (req, res) => {
//   const { categorieId, productId} = req.params;
//   res.json({
//     categorieId,
//     productId
//   });
// });

routerCategories.post('/', (req, res) => {
  const body = req.body;
  const newCategorie = service.create(body);
  res.status(201).json(newCategorie);
});

routerCategories.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const categorie = service.update(id, body);
  res.json(categorie);
});

routerCategories.delete('/:id', (req, res) => {
  const { id } = req.params;
  const categorie = service.delete(id);
  res.json(categorie);
});

module.exports = routerCategories;
