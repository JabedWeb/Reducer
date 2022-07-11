
//initial state
export const initialMessage={
    name : 'alo',
    age : 120,
    skill : 'Ios Developer',
};


//message reducer
export const messageReducer= (state,{type,payload})=>{
    return state ={...state,...payload};

}