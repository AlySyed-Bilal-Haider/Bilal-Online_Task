import React, { useReducer } from "react";
export const GlobalContext = React.createContext();

const initialState = {
  globalMessage: "",
  isOpen: true,
  path: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SNACKBAR":
      return {
        ...state,
        globalMessage: action.payload.message,
      };
    case "SETPATH":
      return {
        ...state,
        path: action.payload.path,
      };
    case "OPEN_SIDEBAR":
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };

    default:
      return state;
  }
};

export const showToast = (dispatch, message, timeout = 3000) => {
  dispatch({
    type: "SNACKBAR",
    payload: {
      message,
    },
  });

  setTimeout(() => {
    dispatch({
      type: "SNACKBAR",
      payload: {
        message: "",
      },
    });
    window.location.replace(
      "https://www.figma.com/file/veiESwD61KJBa7BpEHtbdl/react-task-2?node-id=1086%3A15525&t=wCQefInjGCH8dlti-0"
    );
  }, timeout);
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
