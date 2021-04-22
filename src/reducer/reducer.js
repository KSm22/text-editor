const initialState = {
    files: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILES_LOADED':
            return {
                files: [
                    ...state.files,
                    action.payload
                ]
            };

        default:
            return state;
    }
    return state;
};

export default reducer;
