const initialState = {
  showMenu: false,
  minimizeOptions: false,
};

const animations = (state = initialState, action) => {
  const {payload, type} = action;

  switch (type) {
    // keeping this in case we'll need a global err res handler
    case 'CHANGE_MENU':
      return {
        ...state,
        showMenu: payload,
        // minimizeOptions: payload,
      };
    case 'BUTTON_PRESS':
      return {
        ...state,
        minimizeOptions: payload,
      };
    default:
      return state;
  }
};

export default animations;
