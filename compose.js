function compose(fn, ...rest) {
    return rest.reduce((fn, fn2) => {
        fn(fn2);
    }, fn);
}

export default compose;