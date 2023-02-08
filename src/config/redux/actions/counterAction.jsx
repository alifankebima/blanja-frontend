//fetching and processing data here
const counterAction = () => (dispatch) => {
    dispatch({type:"INCREMENT", payload: 2})
}

export default counterAction