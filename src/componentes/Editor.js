import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Editor extends Component {
    
    constructor(props) {
        super(props);

        // Referencias a los datos del formulario
        this.markdownRef = React.createRef();
    }

    handleChange = e => {
        // Cancelamos la accion por defecto del formulario
        e.preventDefault();

        // Enviarlo por props desde el hijo hasta el padre
        this.props.handleChange(this.markdownRef.current.value);
    }

    render() { 
        return (
            <div className="card shadow-lg m-2">
                <div className="card-header">
                    <span className="col-12 lead font-weight-bolder">Markdown Editor</span>
                </div>
                <div className="card-body">
                    <textarea
                        ref={this.markdownRef}
                        className="col-12 shadow-lg"
                        rows="25"
                        id="editor"
                        defaultValue={this.props.initialText}
                        onChange={this.handleChange}
                        type="text" />
                </div>
            </div>
        );
    }
}

Editor.propTypes = {
    initialText: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}
 
export default Editor;
