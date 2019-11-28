const initialState = {
    baseUrl: "/gatsby-wordpress",
    isDarkMode: false,
    count: 1,
    users: []
  };

const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';
const COUNTER         = 'COUNTER';
const USER            = 'users';



export default (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_DARKMODE:
        return { ...state, isDarkMode: action.payload };
      case COUNTER:
          return { ...state, count: action.payload };
      case USER:
          return { ...state, users: action.payload };
      default:
        return state;
    }
  };