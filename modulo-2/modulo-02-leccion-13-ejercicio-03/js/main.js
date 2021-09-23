'use strict';

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
  ];
  const getPremiun = users.map (
      users =>{
      if (users.isPremium === true) {
          return `bienvenida ${users.name}. Gracias por confiar en nosotros`;
      } else {
          return `Bienvenida ${users.name}`;
      }
      }
  );

  console.log (getPremiun);