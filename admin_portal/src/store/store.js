import {createStore} from 'redux';

//create initial state
const intialState = {
    email: '',
    name : '',
    password : ''
}

//create store reducer
const  storeReducer = (state = intialState, action) => {
    if(action.type === 'EMAIL'){
        return{...state, email: action.payload}
    }
    if(action.type === 'NAME'){
        return{...state, name: action.payload}
    }
    if(action.type === 'PASSWORD'){
        return{...state, password: action.payload}
    }
    return state
}

const loadState = () =>{
    try{
       const loadedState =  localStorage.getItem('admin');
       if(!loadedState) return undefined
       else return JSON.parse(loadedState)
    }

    catch(err){
        console.log(err)
    }
}

const saveState = (state) =>{
    try{
        const savedState = JSON.stringify(state)
        localStorage.setItem('admin', savedState)
    }

    catch(err){
        console.log('err', err)
    }
}
//create store

const store = createStore(storeReducer, loadState())

//create and call subscribe
store.subscribe(() =>{
    saveState(store.getState())
})

export default store