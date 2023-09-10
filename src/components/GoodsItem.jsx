
function GoodsItem(props){
    const {
        id,
        displayName,
        displayDescription,
        price: {finalPrice},
        displayAssets
        //full_background,
        //addToBasket = Function.prototype,
    } = props;
    const {url}= displayAssets[0];
    console.log(displayAssets[0]);
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
                    className='btn'
                >
                    Buy
                </button>
                <span className='right' style={{ fontSize: '1.8rem' }}>
                    {finalPrice} doll.
                </span>
            </div>
        </div>
    );
}



export {GoodsItem}