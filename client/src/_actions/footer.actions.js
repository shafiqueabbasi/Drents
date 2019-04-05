import { footerConstants } from '../_constants';

export const footerActions = {
    show,
    hide
};

function show(boo) {
    return { type: footerConstants.SHOWFOOTER, boo };
}

function hide(boo) {
    return { type: footerConstants.HIDEFOOTER, boo };
}