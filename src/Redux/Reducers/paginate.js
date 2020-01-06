const initialState = {
    search: '',
    sortby: '',
    limit:'',
    page:'',
    order:'',
    isPending: false,
    isRejected: false,
    isFulfilled: false,
    result: []
  };
  
  const userReducer = (prevState = initialState, action) => {
    switch (action.type) {
      case "PAGINATION_PENDING":
        return {
          ...prevState,
          isPending: true,
          isRejected: false,
          isFulfilled: false
        };
      case "PAGINATION_REJECTED":
        return {
          ...prevState,
          isPending: false,
          isRejected: true
        };
      case "PAGINATION_FULFILLED":
        // console.log(action.payload.data)
        return {
          ...prevState,
          isPending: false,
          isFulfilled: true,
          search: action.search,
          sortby: action.sortby,
          limit: action.limit,
          page: action.page,
          order: action.order,
          result: action.payload.data
        };
      default:
        return prevState;
    }
  };
  
  export default userReducer;
  