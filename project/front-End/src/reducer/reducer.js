import { isAuth, signout } from "../helper/auth";

const inisialState = {
  isLogin: isAuth(),
  setLogout: signout()
};

const reducer = (state = inisialState, action) => {
  
    // console.log(action);
    // console.log(action.isLogin);

    // eslint-disable-next-line eqeqeq
    if (action.type == "CHANGE_LOGIN") {
      return {
          ...state,
          isLogin : action.isLogin
      };  
    }
      return {
        ...state,
      };
};

export default reducer;
