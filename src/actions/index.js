
const filesLoaded = (newFiles) => {
    return {
        type: 'FILES_LOADED',
        payload: newFiles
    }
};

export {
    filesLoaded
};
