import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, uniqueClassName = '' }) => (
    <div className={`container ${uniqueClassName}`}>
        {children && children}
    </div>
);

Container.propTypes = {
    children: PropTypes.node.isRequired
};

export default Container;