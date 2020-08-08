import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: UI;
    
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: var(--quaternary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--gray);
`;

export const UserData = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    > strong {
        color: var(--white);
        font-size: 15px;
    }
    > span {
        color: var(--gray);
        font-size: 15px;       
    }
`;

export const MicIcon = styled(Mic)`
    width:  20px;
    height: 20px;

    color: var(--white);
    opacity: .7;
    cursor: pointer;
    border-radius: 5px;

    transition: opacity .2s;
    &:hover {
        opacity: 1;
        background-color: var(--quinary);
    }
`;

export const HeadphoneIcon = styled(Headset)`
    margin-left: 7px;
    width:  20px;
    height: 20px;

    color: var(--white);
    opacity: .7;
    cursor: pointer;
    border-radius: 5px;

    transition: opacity .2s;
    &:hover {
        opacity: 1;
        background-color: var(--quinary);
    }
`;

export const SettingsIcon = styled(Settings)`
    margin-left: 7px;
    width:  20px;
    height: 20px;

    color: var(--white);
    opacity: .7;
    cursor: pointer;
    border-radius: 5px;

    transition: opacity .2s;
    &:hover {
        opacity: 1;
        background-color: var(--quinary);
    }
`;
