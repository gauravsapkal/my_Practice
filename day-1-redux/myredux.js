// { count : 0, todos : [] }
// stores contain above data
// const { legacy_createStore: createStore } = require("redux")

import { addTodo, decCount, incCount } from "../day-1-redux/redux/action.js"
import { store } from "../day-1-redux/redux/store.js"


store.dispatch( incCount(2) )
store.dispatch( incCount(2) )
store.dispatch( incCount(2) )
store.dispatch( decCount(1) )
store.dispatch( addTodo( { id: 1, title: "Sleep", status: false}) )


console.log(store.getState());


