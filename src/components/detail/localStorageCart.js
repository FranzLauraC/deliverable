function localStorageCart(size, buttons, productId, name, price, image) { //para ver que todo esta bien se puede hacer cl de cada uno 

  if (!size) {
    console.error('No size assigned ❌ ');
    throw new Error('No size assigned ❌ ')
  }

  //obtener el carrito del localStorage y en caso que no exista vamos a crear uno
  const carGet = localStorage.getItem('cart') //null si le doy a carget cl ; null poeque no existe en el ls
  //si nos responde sera un string que contiene un array ;debemos conseguir solo un array
  const arrayCart = JSON.parse(carGet) || []//parse para convertir strng de array a array;si no hay dame un array 

  /**ejm 
   [
    {size:'s', productId:1, name:'', price:'', image:'', quantity:4},
    {size:'m', productId:1, name:'', price:'', image:'', quantity:2},
    {size:'s', productId:18, name:'', price:'', image:'', quantity:1},
    {size:'l', productId:12, name:'', price:'', image:'', quantity:1}
  ]
  */


  const matched = arrayCart.find((product) => product.productId === productId && product.size === size) // me retorna el find el producto que cumpla con la condicion que estableci, o me devolvera undefined. 

  if (matched) {

    //si el producto esta en el carrito, aumentare la cantidad
    matched.quantity++
  } else {
    //si el producto no esta en el carro, lo creare. Recordar que estoy descriminando por id y talla de ropa

    arrayCart.push({ size, productId, name, price, image, quantity: 1 })
    //ejem de que tbm podria hacer asi pero mas practico hacerlo como arriba 
    //{ size:size, productId:productId, name:name, price:price, image:image, quantity: 1 } 
   
  }


  //Guardar el carrito actualizado en el localStorage
  const arrayJSON = JSON.stringify(arrayCart)//aca estamos conviertiendo ahora un string a array
  localStorage.setItem('cart', arrayJSON) /*ahor asi le damos a l12 cl de arraycart si me sale*/

  buttons.forEach((btn) => {
    btn.classList.remove('div__button--active')
  })

}

export default localStorageCart