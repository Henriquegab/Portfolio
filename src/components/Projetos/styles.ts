import styled from 'styled-components';

interface ProjetoProps {
    imgUrl: string;
}

export const Container = styled.section`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    > section {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 4rem;

        @media(max-width: 1000px){
            gap: 2rem;
        }
    }

    

`;
export const ProjetoContainer = styled.div<ProjetoProps>`

    width: 100%;
    display: flex;
    height: 25rem;
    align-items: flex-end;
    position: relative;

    > button {
        height: 4rem;
        margin: 0 0 3rem 5rem;
        background: none;
        border: none;
        font-weight: 300;
        a{
            color: #fff;
            font-size: 2rem;
            font-weight: 300;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            transition: .5s;

        }
    }
    > section {
        width: 50rem;
        height: 100%;
        background: url(${props => props.imgUrl}) no-repeat center;
        background-size: cover;
        position: relative;

        > div.overlay {

            position: absolute;
            width: 100%;
            height: 100%;
            background: ${({theme}) => theme.gradient};
            opacity: .75;

        }

        > div.text {
            position: absolute;
            top: 3rem;
            right: -10rem;
            transition: .5s;
            width: fit-content;

            h1 {
                color: ${({theme}) => theme.primary};
                font-size: 2.5rem;
                text-shadow: -4px 5px 22px #11172b;
            }
            h2 {
                color: ${({theme}) => theme.secondary};
                font-size: 2rem;
                font-weight: 300;
                text-shadow: -4px 5px 22px #11172b;
            }

        }

    }

    &:nth-child(even){
        flex-direction: row-reverse;

        > button {
            margin: 3rem 5rem 0 0;
        }


    }

`;
