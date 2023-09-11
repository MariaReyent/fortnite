
function GoodsItem(props){
    const {
        mainId,
        displayName,
        displayDescription,
        price: {finalPrice},
        displayAssets,
        addToBasket= Function.prototype,
    } = props;
    const {url}= displayAssets[0];
    
    return (
        <div className='card'>
            <div className='card-image'  style={{backgroundColor:"#000"}}>
                <img src={url} alt={displayName} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn' onClick={()=>addToBasket({
                        mainId, 
                        displayName,
                        finalPrice,
                        
                    }) 
                }
                >
                    Buy
                </button>
                <span className='right' style={{ fontSize: '1.8rem' }}>
                    {finalPrice} $.
                </span>
            </div>
        </div>
    );
}



export {GoodsItem}