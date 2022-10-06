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

export default reducer;