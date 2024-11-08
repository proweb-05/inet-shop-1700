import { ICartProduct } from "../store/cartStore";

function calcTotalPrice(carts: ICartProduct[]): number {
    return carts.reduce((acc, elem)=>{
        return acc + elem.amount * +elem.price
    }, 0)
}

export default calcTotalPrice