const initialState = {
    promoList: [
        {name: "kekek",
        price: 19000},
        {name: "kekek",
        price: 19000},
        {name: "kekek",
        price: 19000},
        {name: "kekek",
        price: 19000},
        {name: "kekek",
        price: 19000},
        {name: "kekek",
        price: 19000},
    ],
    dispList:[]
}


const promo = (state = initialState, action) => {
    switch (action.type) {
        case 'PREMIUM':
            const disp = state.promoList[0]
            return {
                ...state,
                dispList: disp
            }
        case 'FREE':
            const disp2 = state.promoList[1]
            return {
                ...state,
                dispList: disp2
            }
        default:
            return state
    }
}
export default promo;
