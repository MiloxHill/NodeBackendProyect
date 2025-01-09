const { faker } = require('@faker-js/faker');

class usersService{

  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
    for (let index = 0; index < 100; index++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        gender: faker.person.gender()
      });
    };
  };

  create(data){
    const newUser = {
      id: faker.string.uuid(),
      ...data
    };
    this.users.push(newUser);
    return newUser;
  };

  find(){
    return this.users;
  };

  findOne( id ){
    return this.users.find(item => item.id === id);
  };

  update( id, changes ){
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1 ) {
      throw new Error
    }
    const users = this.users[index];
    this.users[index] = {
      ...users,
      ...changes
    };
    // Necesito persistir la informacion y luego agregar los cambios para no reemplazarlo por completo

    return this.users[index];
  };

  delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1 ) {
      throw new Error
    }
    this.users.splice(index, 1)
    return { id }
  };
};

module.exports = usersService;
