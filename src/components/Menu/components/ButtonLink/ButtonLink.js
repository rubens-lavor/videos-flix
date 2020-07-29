import React from 'react';

function ButtomLink (props) {
    // props => { className: "o que alguém passar", href: "/" }
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtomLink;