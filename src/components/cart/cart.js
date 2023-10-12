function cart(){
    const ul = document.querySelector('#cart_list')
    const itemsCart =JSON.parse(localStorage.getItem('cart'|| []))

};
export default cart