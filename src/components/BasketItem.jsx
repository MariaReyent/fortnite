function BasketItem(props){
   const {
    mainId,
    displayName,
    price: {finalPrice},
    quantity,
   }= props;
   console.log(props.price)
   return (
         <li  className="collection-item active">
        {displayName} x{quantity} = {finalPrice}
        <span  className="secondary-content">
            <i className="material-icons">close</i>
              </span>
         </li>
    );
}

export {BasketItem}