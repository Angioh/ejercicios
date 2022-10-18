const arr = [0,1,2,3,4];


//Filter
const filtrado = arr.filter(x => x>1);
console.log('filter: '+filtrado);
 
//map

const mapa = arr.map(x => x**2);

console.log('map: '+mapa);
 
let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];

  const nombreCompleto = users.map(function(elemento){
    return `${elemento.firstName} ${elemento.lastName}`;
  });
  
  console.log('Concatenacion con map: '+nombreCompleto);

//reduce

const numeros = [1, 2, 3, 4];
const suma = numeros.reduce(function (resultado, elemento) {
  return resultado + elemento;
}, 0);
console.log('reduce: '+suma); // 10
