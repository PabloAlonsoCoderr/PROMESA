let stock = [
  { id: 1, nombre: "gorra", marca: "nike", precio: 30 },
  { id: 2, nombre: "pantalon", marca: "adidas", precio: 50 },
  { id: 3, nombre: "camisa", marca: "rebok", precio: 100 },
];

const promesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 3000);
  });
};

export default promesa;
