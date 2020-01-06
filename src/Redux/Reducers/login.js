const initialState = {
    email: '',
    password: '',
    position:'',
    isPending: false,
    isRejected: false,
    isFulfilled: false
  };
  
  const userReducer = (prevState = initialState, action) => {
    switch (action.type) {
      case "POST_ALL_LOGIN_PENDING":
        return {
          ...prevState,
          isPending: true,
          isRejected: false,
          isFulfilled: false
        };
      case "POST_ALL_LOGIN_REJECTED":
        return {
          ...prevState,
          isPending: false,
          isRejected: true
        };
      case "POST_ALL_LOGIN_FULFILLED":
        console.log(action.payload.data)
        return {
          ...prevState,
          isPending: false,
          isFulfilled: true,
          
  
          
        };
      default:
        return prevState;
    }
  };
  
  export default userReducer;
  