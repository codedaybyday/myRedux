/**
 * 其实就是个发布订阅模式
 * @param reducer
 * @returns {{getState: (function()), dispatch: dispatch, subcribe: (function(*=): Function)}}
 */
function createStore(reducer) {
    let state = {};
    let getState = () => {return state};
    let listeners = [];
    let dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(fn => fn());
    };
    let subcribe = (fn) => {
        typeof fn === 'function' && listeners.push(fn);
        return () => {
            listeners = listeners.filter(listener => {listener !== fn});
        };
    };

    return {
        getState,
        dispatch,
        subcribe
    };
}

export default createStore();