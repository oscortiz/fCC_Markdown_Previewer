import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <nav className="navbar mb-4 shadow text-center">
            <span className="w-100 mt-2 h2 text-white">{props.title}</span>
            <span className="w-100 mb-3 d-none d-sm-block text-white lead">{props.guidelines}</span>                    
        </nav>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    guidelines: PropTypes.string.isRequired
}

export default Header;