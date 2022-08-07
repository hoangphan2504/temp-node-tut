// Unique Values
const menu = [
    {
      name: 'pancakes',
      category: 'breakfast',
    },
    {
      name: 'burger',
      category: 'lunch',
    },
    {
      name: 'steak',
      category: 'dinner',
    },
    {
      name: 'bacon',
      category: 'breakfast',
    },
    {
      name: 'eggs',
      category: 'breakfast',
    },
    {
      name: 'pasta',
      category: 'dinner',
    },
  ];
  // const categories = ['all', ...new Set(menu.map((item) => item.category))];
  // map - get all instances
  // new Set - narrow down
  // ['all',...] - turn it back to array
  
  const categories = [...new Set(menu.map((item) => item.category))];
 console.log(categories);

 //test anothor thing

//hello guys this is pull command

