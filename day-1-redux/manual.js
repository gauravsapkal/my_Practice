// { count : 0, todos : [] }
// stores contain above data
// const { legacy_createStore: createStore } = require("redux")

import { legacy_createStore as createStore } from 'redux';


const reducer = (store, action)=>{
    switch (action.type){
        case "INC_COUNT" : {
            return { ...store, count: store.count + action.payload }
        }

        case "DEC_COUNT" : {
            return { ...store, count: store.count - action.payload }
        }

        case "ADD_TODO" : {
            return { ...store, todos: [ ...store.todos, action.payload ] }
        }

        default : {
            return store;
        }

    }

}








// class Store {
//     constructor(reducer, initialState){
//         this.reducer = reducer;
//         this.state = initialState;
//     }


//     getState(){
//         return this.state;
//     }

//     dispatch(action){
//         this.state = this.reducer(this.state, action);
//     }
// }


const initState = { count : 0, todos : [] };


// const store = new Store(reducer, initState);

const store = createStore(reducer, initState);

const incCount = (payload)=> ({ type: "INC_COUNT", payload: payload })
const decCount = (payload)=> ({ type: "DEC_COUNT", payload: payload })
const addTodo = (payload)=> ({ 
    type: "ADD_TODO",
    payload: payload 
})

store.dispatch( incCount(2) )
store.dispatch( incCount(2) )
store.dispatch( incCount(2) )
store.dispatch( decCount(1) )
store.dispatch( addTodo( { id: 1, title: "Sleep", status: false}) )


console.log(store.getState());


