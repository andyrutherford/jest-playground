export default ({ dispatch }) => next => action => {
    // Check to see if action has a promise on its payload
    // If it does, wait for it to resolve
    // If it doesn't, send the action to next middleware

    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    // Wait for promise to resolve
    // Get the data and create new action with data
    // Dispatch again
    action.payload.then(function(response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
    
}
    
