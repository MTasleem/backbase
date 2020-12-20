import { userConstants } from '../_constants';
export const userActions = {
    removeAount
};



function removeAount(remainingAmount) {
    return {
        type: userConstants.REMOVE_AMOUNT,
        payload: remainingAmount
    };
}


// =========================OLD===================
export function addNotes(notes) {
    return {
        type: userConstants.ADD_NOTES,
        payload: notes
    };
}

export function deleteNotes(notes) {
    return {
        type: userConstants.DELETE_NOTES,
        payload: notes
    };
}

export function updateNotes(notes) {
    return {
        type: userConstants.UPDATE_NOTES,
        payload: notes
    };
}
