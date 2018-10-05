export default function combineReducers(reducers) {
    return function (state, action) {
        let nextState = {};
        Object.keys(reducers).forEach(reducerKey => {
            const reducer = reducers[reducerKey];
            const oldState = state && state[reducerKey];
            nextState[reducerKey] = reducer(oldState, action);
        });
        return nextState;
    }
};