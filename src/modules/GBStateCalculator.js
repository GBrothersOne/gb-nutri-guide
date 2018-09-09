export const MODE_CHANGE = 'GBMacroCalculator/MODE_CHANGE'

const initialState = {
  mode: 'form',
  modes: {
    form: 'form',
    editor: 'editor',
  }
}

export default (state = initialState, action) => {
  switch (action.type) {

    case MODE_CHANGE:
      return {
        ...state,
        mode: action.mode
      }

    default:
      return state

  }
}

export const handleModeChange = (mode) => {
  return dispatch => {
    dispatch({
      type: MODE_CHANGE,
      mode: mode
    })
  }
}