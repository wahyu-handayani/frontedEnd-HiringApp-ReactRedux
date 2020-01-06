const initialState = {
    id: '',
    name: '',
    description: '',
    skill: '',
    location: '',
    birth: '',
    showcase: '',
    email: '',
    
    isPending: false,
    isRejected: false,
    isFulfilled: false
  };
  const myemail=localStorage.getItem("email")
  
  const postData = (prevState = initialState, action) => {
    switch (action.type) {
      case "POST_DATA_PENDING":
        return {
          ...prevState,
          isPending: true,
          isRejected: false,
          isFulfilled: false
        };
      case "POST_DATA_REJECTED":
        return {
          ...prevState,
          isPending: false,
          isRejected: true
        };
      case "POST_DATA_FULFILLED":
        console.log(action.payload.data)
        return {
          ...prevState,
          isPending: false,
          isFulfilled: true,
          // email: action.paylo
          id: action.id,
          name: action.name,
          description: action.description,
          skill: action.skill,
          location: action.location,
          birth: action.birth,
          showcase: action.showcase,
          email: myemail,
          
          
        };
      default:
        return prevState;
    }
  };
  
  export default postData;
  