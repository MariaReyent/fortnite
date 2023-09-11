import { BasketItem } from "./BasketItem"; 

function BasketList(props){
  const{order = []} = props;
 
    return (
          <ul className="collection  basket-list">
        <li  className="collection-item active">Basket</li>
        {order.length ? ( 
          order.map(item) =>(
             <BasketItem   
             key={item.mainId} 
             {...item}
             />
            ))
            ) : 
            (<li  className="collection-item active">Basket is empty</li>
            )}
        <li  className="collection-item active">Total:</li>
</ul>
    );      

}

export {BasketList}