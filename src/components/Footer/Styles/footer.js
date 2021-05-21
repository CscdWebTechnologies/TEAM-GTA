import styled from 'styled-components'

export const Container = styled.div `
    padding: 90px 80px;
    backgorund: radial-gradient(circle, rgba(92, 39, 256, 1) 0%, rgba(112, 71, 256, 1) 100%);
`

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: right;
    max-width: 1000px;
    margin-left: 380px;
    margin-top: -149px;
`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 30px;
    margin-down: 100px;
`

export const Row = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Link = styled.div `
    color: #696969;
    margin-bottom: 7px;
    font-size: 14px;
    text-decoration: none;

    &:hover {
        color: #1E90FF;
        text-decoration: underline;
        transition: 200ms ease-in;
    }
`

export const Title = styled.div `
    font-size: 16px;
    color: #000000;     
    margin-bottom: 15px;
    font-weight: bold;
`
