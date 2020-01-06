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
    case "POST_ALL_REGIS_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "POST_ALL_REGIS_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "POST_ALL_REGIS_FULFILLED":
      console.log(action.payload.data)
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        // email: action.payload.data.data.email,
        // password: action.payload.data.data.password,
        // position: action.payload.data.data.position

        
      };
    default:
      return prevState;
  }
};

export default userReducer;
