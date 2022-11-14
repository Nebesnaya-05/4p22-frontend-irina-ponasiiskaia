'use strict';


fetch('https://reqres.in/api/users?per_page=12')
  .then((response) => response.json())
  .then((result) => {
    const usersName = result.data;
   
    
    console.log('-------------');
    console.log('Пункт №2:');
    console.log('-------------');
    usersName.forEach((element) => {
        console.log(element.last_name);
      });
   


    console.log('-------------');
    console.log('Пункт №3:');
    console.log('-------------');
    usersName.forEach((element) => {
      if (element.last_name[0] === 'F') {
        console.log('  ' + element.last_name + ':');
        for (const item in element) {
          console.log(' '.repeat(4) + item + ': ' + element[item] + ',');
        }
      }
    });


    console.log('-------------');
    console.log('Пункт №4');
    console.log('-------------');
    const reduceUser = usersName.reduce((accumulator, item, index, array) => {
      let resString = `${item.first_name} ${item.last_name}`;
      if (index !== array.length - 1) {
        resString += ', ';
      } 
      else {
        resString += '.';
      }
      accumulator += resString;
      return accumulator;
    }, '');

    console.log(`Наша база содержит данные следующих пользователей: ${reduceUser}`);

    

    console.log('-------------');
    console.log('Пункт №5');
    console.log('-------------');
    for (const item in element[0]) {
        console.log(' '.repeat(2) + item);
      }
     })
      
      .catch((error) => {
      console.log('Что то пошло не так! ===> ', error);
      
      });


    
    
      