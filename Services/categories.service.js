const { faker } = require('@faker-js/faker');

class CategorieService{

  constructor(){
    this.categories = [];
    this.generate();
  }

  generate(){
    this.categories.push({
      id : faker.string.uuid(),
      categories : faker.commerce.productAdjective(),
      categories : faker.commerce.productDescription()
    });
  };

  create(data){
    const newCategorie = {
      id: faker.string.uuid(),
      ...data
    };
    this.categorie.push(newCategorie);
    return newProduct;
  }

  find(){
    return this.categories;
  }

  findOne( id ){
    return this.categories.find(item => item.id === id);
  }

  update( id, changes ){
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1 ) {
      throw new Error
    }
    const categorie = this.categories[index];
    this.categories[index] = {
      ...categorie,
      ...changes
    };
    // Necesito persistir la informacion y luego agregar los cambios para no reemplazarlo por completo

    return this.users[index];
  };

  delete(id){
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1 ) {
      throw new Error
    }
    this.categories.splice(index, 1)
    return { id }
  };

}

module.exports = CategorieService;
