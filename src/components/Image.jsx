import React from 'react';

const Image = (props) => {
    return (
        <img class={ props.class} src={ props.path } alt={ props.alt }/>
    );
}
export default Image;