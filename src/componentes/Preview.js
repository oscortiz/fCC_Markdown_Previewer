import React from 'react';
import PropTypes from 'prop-types';

const Preview = props => {
 
    return (
        <div className="card shadow-lg m-2">
            <div className="card-header">
                <span className="col-12 lead font-weight-bolder">Markdown Previewer</span>
            </div>
            <div className="card-body">
                <div className="w-100 p-2" id='preview' dangerouslySetInnerHTML={{__html: props.markdown}} />
            </div>
        </div>
    );
}

Preview.propTypes = {
    markdown: PropTypes.string.isRequired
}
 
export default Preview;