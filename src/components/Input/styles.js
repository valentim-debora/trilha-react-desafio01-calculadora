import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    

    input {
        width: 100%;
        height: 75px;
        background-color: #8585a8;
        border: 0;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-weight: 600;
        font-family: 'Major Mono Display', monospace;
        color: #4e4e74;
    }
`