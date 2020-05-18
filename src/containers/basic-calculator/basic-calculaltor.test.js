import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import ReactTestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import BasicCalculator from '.';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { ROLES } from '../../utils/constants';

const mockStore = configureStore([]);

describe('Basic calculator', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            calculator: {
                input: '0',
                role: ROLES.OPERAND,
                value: null
            }
        });
    });
    
    it('Basic calculator should render with given state from Redux store', () => {
        const component = renderer.create(
            <Provider store={store}>
                <BasicCalculator />
            </Provider>
        );
        
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
