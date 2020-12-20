import { userConstants } from '../_constants';

const updatedNotes = [];
const updatedTransaction = [];

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.REMOVE_AMOUNT:
      let updatedValue = { ...action.payload, fromAcount: action.payload.fromAcount - action.payload.amount };
      updatedTransaction.unshift(updatedValue);
      return {
        remainingAmount: updatedTransaction
      }




    // =========================OLD===================
    case userConstants.ADD_NOTES:
      if (action.payload.index > -1) {
        updatedNotes.splice(action.payload.index, 1, action.payload.item);
      }
      else {
        updatedNotes.push(JSON.parse(JSON.stringify(action.payload.item)))
      }

      return {
        notes: updatedNotes
      }

    case userConstants.DELETE_NOTES:
      updatedNotes.splice(action.payload, 1);
      return {
        notes: updatedNotes
      }

    case userConstants.UPDATE_NOTES:
      return {
        notes: updatedNotes,
        updateNotes: action.payload
      }

    default:
      return state
  }
}