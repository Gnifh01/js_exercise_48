const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const { id, firstName: nameing, lastName: surname, age: old } = person;
console.log(id, nameing, surname, old);

// Ho rinominato 'name' con 'nameing' perchè altrimenti mi diceva che 'name' è deprecato