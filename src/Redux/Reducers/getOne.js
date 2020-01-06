const initialState = {
    userData: [],
    isPending: false,
    isRejected: false,
    isFulfilled: false
  };
  
  const oneUser = (prevState = initialState, action) => {
    switch (action.type) {
      case "GET_ONE_USER_PENDING":
        return {
          ...prevState,
          isPending: true,
          isRejected: false,
          isFulfilled: false
        };
      case "GET_ONE_USER_REJECTED":
        return {
          ...prevState,
          isPending: false,
          isRejected: true
        };
      case "GET_ONE_USER_FULFILLED":
        return {
          ...prevState,
          isPending: false,
          isFulfilled: true,
          userData: action.payload.data
        };
      default:
        return prevState;
    }
  };
  
  export default oneUser;
  