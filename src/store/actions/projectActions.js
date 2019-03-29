export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call to databse
        dispatch({ type: 'CREATE_PROJECT', project })
    }
}