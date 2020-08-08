import React from 'react';
import { Container, Avatar, UserData, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Avatar/>
            <UserData>
                <strong>Jonas</strong>
                <span>#2222</span>
            </UserData>
            
            <MicIcon/>
            <HeadphoneIcon/>
            <SettingsIcon/>
        </Container>
    );
}

export default UserInfo;