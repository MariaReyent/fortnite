import { BasketItem } from "./BasketItem"; 

function BasketList(props){
  const{order = [], 
    handleBasketShow= Function.prototype,
    removeFromBasket=Function.prototype,
    decQuantity,
    incQuantity,
  } = props;

  const totalPrice = order.reduce((sum, el)=> {
    return sum + el.finalPrice * el.quantity
  }, 0)
 
    return (
          <ul className="collection  basket-list">
        <li  className="collection-item active">Basket</li>
        {
          order.length ? order.map(item => (
            <BasketItem 
                  key= {item.mainId} 
                  removeFromBasket={removeFromBasket}
                  decQuantity={decQuantity}
                  incQuantity={incQuantity}
                  {...item}
              />
          )) : <li  className="collection-item">Basket is empty</li> 
        }
          <li  className="collection-item active">
            Total: {totalPrice}$
            </li>
            <li  className="collection-item">
            <button className="btn btn-small">Check out</button>
            </li>
        <i className ="material-icons basket-close"  
        onClick={handleBasketShow}>close</i>
</ul>
    );      
}

export {BasketList}