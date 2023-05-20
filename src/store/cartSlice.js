const { createSlice} = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name : "cart",
    initialState :{
        cartList : [],
        total : 0
    },
    reducers :{
        add(state, action){
            const updated = state.cartList.concat(action.payload)
            const total = state.total + action.payload.price
            return {...state, total : total, cartList : updated}
            
        },
        remove(state, action){
            
            const updated = state.cartList.filter(item=>item.id !== action.payload.id)
            const total = state.total - action.payload.price
            return {...state, total: total, cartList : updated}
        }
    }
})

export const {add, remove} =cartSlice.actions
export const cartReducer = cartSlice.reducer