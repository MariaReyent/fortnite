import { GoodsItem } from "./GoodsItem";


function GoodsList(props){
    const {goods=[]} = props;
    console.log(goods[0]);
    if(!goods.length){
        return <h3>Nothing here</h3>
    }
    return (<div className="goods">
        {goods.map(item=>
            (
                <GoodsItem key={item.id} {...item}/>
            ))}
    </div>
);
}


export {GoodsList};