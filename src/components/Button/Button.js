import styled from 'styled-components';

/* 
styled é uma biblioteca que facilita um pouco
nela só precisa do css, o padão de receber as
props ela já faz automaticamente
*/
const Button = styled.button /* .a é a tag */ `
color: var(--white);
border: 1px solid var(--white);
box-sizing: border-box;
cursor: pointer;
padding: 16px 24px;
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
border-radius: 5px;
text-decoration: none;
display: inline-block;
transition: opacity .3s;
$:hover,
$:focus {
opacity: .5;
}

`;

export default Button;