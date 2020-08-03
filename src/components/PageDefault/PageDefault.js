import React from 'react'
import Footer from '../Footer';
import Menu from '../Menu/Menu';
import styled, { css } from 'styled-components'

const Main = styled.main`
    background-color: var(--black);
     color: var(--white);
     flex: 1;
     padding-top:50px ;
     padding-left:5%;
     padding-right:5% ;
     ${({ padding }) => css `
        padding: ${padding};
    `}
`;


function PageDefault({ children, paddingAll }) {

    return (
        <React.Fragment>
            
            <Menu />

            <Main padding={paddingAll}>
                {children}
            </Main>

            <Footer />

        </React.Fragment>
    )
}

export default PageDefault;