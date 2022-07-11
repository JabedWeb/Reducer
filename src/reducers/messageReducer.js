
//initial state
export const initialMessage={
    name : 'alo',
    age : 120,
    skill : 'Ios Developer',
    error : false
};


//message reducer
export const messageReducer= (state,{type,payload})=>{
    
    switch(type){
        case 'DEVS_DATA_LOAD' :
        return state ={...state,...payload};

        case 'AlERT_LOAD' : 
        let error_val=(payload.error=="Start") ? true : false;
        return state ={...state,error : error_val};

        default : 
         return state;

    }
}