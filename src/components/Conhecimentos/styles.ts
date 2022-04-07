import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    > section {
        margin-top: 8rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7rem;
        

        @media(max-width: 1300px){
            gap: 5rem;
            
            
        }
        @media(max-width: 950px){
            gap: 3rem;
            flex-wrap: wrap;
            margin-top: 5rem;
        }
    }

`;

export const ConhecimentoContainer = styled.div`

    display: flex;
    flex-direction: column-reverse;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    p{
        color: ${({theme}) => theme.primary};
        font-weight: 300;
        font-size: 1.3rem;
        text-transform: uppercase;

    };

    svg {
        width: 6.5rem;
        height: 6.5rem;
        color: ${({theme}) => theme.secondary};
        transition: 0.3s;
    }

    &:hover{
        svg{
            color: ${({theme}) => theme.primary};
            transform: scale(0.95);
        }
    }

    @media(max-width: 1300px){
        p{
            font-size: 1rem;
        }
        svg{
            height: 5rem;
            width: 5rem;
        }
    }

`;
