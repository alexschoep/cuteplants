export const OPTION_SELECTED = 'OPTION_SELECTED';

export const optionSelected = () => dispatch => {
  dispatch({
    type: OPTION_SELECTED
  });
}