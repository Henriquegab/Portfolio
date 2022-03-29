import styled from 'styled-components';

export const Container = styled.header`

width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 4rem;
border-bottom: 1px solid ${({theme}) => theme.backgroundLight};

ul{
    display: flex;
    gap: 2rem;
    align-itens: center;
}

`;


export const NavLinkContainer = styled.li``;
