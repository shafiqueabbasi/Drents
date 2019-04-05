import { footerConstants } from '../_constants';

export function footer(state = {}, action) {
  switch (action.type) {
    case footerConstants.SHOWFOOTER:
      return {
        showFooter: true
      };
    case footerConstants.HIDEFOOTER:
      return {
        showFooter: false
      };
    default:
      return state
  }
}