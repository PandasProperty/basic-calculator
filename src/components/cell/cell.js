import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bemHelper from 'react-bem-helper';
import { ROLES } from '../../utils/constants';
import icons from '../../utils/icons';

require('./cell.scss');

const bem = bemHelper('cell');

const Cell = ({ size, content, role, onClick }) => {
    
    const displayContent =
        role === ROLES.OPERATOR ? <FontAwesomeIcon icon={icons[content.icon]} /> : content;
    
    const handleOnClick = () => {
        switch (role) {
            case ROLES.OPERAND:
                onClick(role, content);
                break;
            case ROLES.OPERATOR:
                onClick(role, content.value);
                break;
            case ROLES.RESET:
                onClick(role);
                break;
            default:
                break;
        }
    }

    return (
        <div {...bem('container', `${size}`)}>
            <div {...bem('content', role)} onClick={handleOnClick}>
                {displayContent}
            </div>
        </div>
    );
}

Cell.propTypes = {
    size: PropTypes.number,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.shape({
            value: PropTypes.string,
            icon: PropTypes.string
        })
    ]).isRequired,
    role: PropTypes.oneOf([
        ROLES.OPERAND,
        ROLES.OPERATOR,
        ROLES.RESET,
        ROLES.INPUT
    ]).isRequired,
    onClick: PropTypes.func
};

Cell.defaultProps = {
    size: 1,
    onClick: noop
};

export default Cell;