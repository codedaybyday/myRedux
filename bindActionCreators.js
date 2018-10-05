export default function bindActionCreators(actionCreators, dispacth) {
    let obj = {};
    Object.keys(actionCreators).forEach(key => {
        obj[key] = function() {
            const action = actionCreators[key](...arguments);
            console.log('bind', action);
            dispacth(action);
        };
    });
    return obj;
};