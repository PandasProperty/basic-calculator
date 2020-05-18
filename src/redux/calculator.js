import { createAction, handleActions } from 'redux-actions';
import { trimStart } from 'lodash';
import { ROLES, EQUALS } from '../utils/constants';

export const ACTION_ADD_ITEM = 'ACTION_ADD_ITEM';

const defaultState = {
    input: '0',
    role: ROLES.OPERAND,
    value: null
};

export const process = createAction(ACTION_ADD_ITEM);

export const processReducer = (state, { payload}) => {
    const { role, value } = payload;
    if (role === ROLES.RESET) {
        return defaultState;
    }

    if (role === ROLES.OPERATOR) {
        if (state.role === ROLES.OPERATOR) {
            return {
                input: `${state.input.substring(0, state.input.length - 1)} ${value}`,
                role: ROLES.OPERATOR,
                value
            }
        }
        if (value === EQUALS) {
            return {
                // eslint-disable-next-line no-eval
                input: `${eval(state.input)}`,
                role: ROLES.OPERAND,
                value
            }
        }
        return {
            input: `${state.input} ${value}`,
            role: ROLES.OPERATOR,
            value
        }
    }
    if (state.value === EQUALS) {
        return {
            input: `${value}`,
            role,
            value
        };
    }
    return {
        // eslint-disable-next-line no-eval
        input: trimStart(`${state.input}${state.role === ROLES.OPERATOR ? ' ' : ''}${value}`, '0'),
        role,
        value
    };
};

const reducer = handleActions(
    {
        [process]: processReducer
    },
    defaultState
);

export default reducer;