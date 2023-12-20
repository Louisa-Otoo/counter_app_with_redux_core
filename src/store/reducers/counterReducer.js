import { Decrement, Increment, Reset } from '../actions/index'
const initialState = {
    counter: 0
} 


export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Increment: {
            return { ...state, counter: state.counter += 1 }
        }
        case Decrement: {
            return { ...state, counter: state.counter -= 1 }
        }
        case Reset: {
            return { ...state, counter: state.counter = 0 }
        }

        default:
            return state
    }
}



/// this is the process without redux core ///

// export const counterReducer = (state = initialState, action) => {
//     if(action.type === 'INCREMENT') {
//         return { counter: state.counter += 1 }
//     } else if (action.type === 'DECREMENT' && state.counter > 0) {
//         return { counter: state.counter - 1}
//     } else if (action.type === 'RESET') {
//         return { counter: state.counter = 0}    
//     } else {
//         return state
//     }  
        
// } 
   