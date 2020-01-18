export function add() {
    return { type: 'ADD' }
}

export function dec() {
    return { type: 'DEC' }
}

export function stepChanged(event) {
    return { type: 'STEP_CHANGED', payload: Number(event.target.value) }
}