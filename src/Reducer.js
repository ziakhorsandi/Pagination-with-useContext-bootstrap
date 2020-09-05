export const initialState = {
  isLoading: false,
  posts: [],
};

export const Reducer = (state, action) => {
  // console.log("action", action);
  switch (action.type) {
    case "FETCH_POST":
      return {
        posts: action.payLoad,
        isLoading: false,
      };
    case "FETCH_POST_FAIL":
      return {
        posts: [],
        isLoading: false,
      };
    case "ISLOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      console.error("Reducer Err");
      return {
        isLoading: false,
      };
  }
};
