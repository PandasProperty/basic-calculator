import React from 'react';
import Cell from '.';
import { noop } from 'lodash';
import renderer from 'react-test-renderer';
import { ROLES } from '../../utils/constants';
import operators from '../../utils/operators';

describe('Cell', () => {
    
    it('Cell should render correctly for an operand', () => {
        const component = renderer.create(
            <Cell size={2} onClick={noop} content={0} role={ROLES.OPERAND} />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Cell should render correctly for an operator', () => {
        const component = renderer.create(
            <Cell onClick={noop} content={operators[1]} role={ROLES.OPERATOR} />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Cell should render correctly for a reset', () => {
        const component = renderer.create(
            <Cell size={3} onClick={noop} content='C' role={ROLES.RESET} />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Cell should render correctly for an input', () => {
        const component = renderer.create(
            <Cell size={4} content='2 * 4 + 1' role={ROLES.INPUT} />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});