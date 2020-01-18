const INITIAL_STATE = { step: 1, points: 0 }

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD':
            return {...state, points: state.points + state.step}
        case 'DEC':
            return {...state, points: state.points - state.step}
        case 'STEP_CHANGED':
            return {...state, step: action.payload}
        default:
            return state;
    }
}