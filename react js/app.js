import {createStore} from 'redux';
const store=createStore(reducer, 1);

store.dispatch(
    {
        type:"ADD",
        payload:10
    }
);
store.dispatch(
    {
        type:"SUB",
        payload:5
    }
);

const reducer=(state, action)=>{
    switch(action, type){
        case "ADD":
        state=state+action.payload;
        break;
        case:"SUB":
        state=state - action.payload
        break;
    }
    return state;
}