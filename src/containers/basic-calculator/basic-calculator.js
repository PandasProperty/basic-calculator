import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import bemHelper from 'react-bem-helper';
import { process } from '../../redux/calculator';
import Cell from '../../components/cell';
import { ROLES } from '../../utils/constants';
import operators from '../../utils/operators';

require('./basic-calculator.scss');

const bem = bemHelper('basic-calculator');

const BasicCalculator = () => {
    
    const input = useSelector(state => state.calculator.input);
    const dispatch = useDispatch();

    const onClick = (role, value) => {
        console.log('onClick', role, value);
        dispatch(process({ role, value }))
    };
    
    return (
        <div {...bem()}>
            <div {...bem('container')}>
                <div {...bem('row')}>
                    <Cell size={4} content={input} role={ROLES.INPUT} />
                </div>
                <div {...bem('row')}>
                    <Cell size={3} onClick={onClick} content='C' role={ROLES.RESET} />
                    <Cell onClick={onClick} content={operators[0]} role={ROLES.OPERATOR} />
                </div>
                <div {...bem('row')}>
                    <Cell onClick={onClick} content={7} role={ROLES.OPERAND} />
                    <Cell onClick={onClick} content={8} role={ROLES.OPERAND} />
                    <Cell onClick={onClick} content={9} role={ROLES.OPERAND} />
                    <Cell onClick={onClick} content={operators[1]} role={ROLES.OPERATOR} />
                </div>
                <div {...bem('row')}>
                    <Cell onClick={onClick} content={4} role={ROLES.OPERAND} />
                    <Cell onClick={onClick} content={5} role={ROLES.OPERAND} />
                    <Cell onClick={onClick} content={6} role={ROLES.OPERAND} />
                    <Cell onClick={onClick} content={operators[2]} role={ROLES.OPERATOR} />
                </div>
                <div {...bem('row')}>
                    <Cell onClick={onClick} content={1} role={ROLES.OPERAND} />
                    <Cell onClick={onClick} content={2} role={ROLES.OPERAND} />
                    <Cell onClick={onClick} content={3} role={ROLES.OPERAND} />
                    <Cell onClick={onClick} content={operators[3]} role={ROLES.OPERATOR} />
                </div>
                <div {...bem('row')}>
                    <Cell size={2} onClick={onClick} content={0} role={ROLES.OPERAND} />
                    <Cell onClick={onClick} content='.' role={ROLES.OPERAND} />
                    <Cell onClick={onClick} content={operators[4]} role={ROLES.OPERATOR} />
                </div>
            </div>
        </div>
    );
};

export default BasicCalculator;