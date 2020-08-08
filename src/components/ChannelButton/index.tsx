import React from 'react';
import { Container, HashtagIcon, InvitateIcon, SettingsIcon } from './styles';

export interface Props {
    channelName: string;
    selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({channelName, selected}) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <HashtagIcon/>
            <span>{channelName}</span>
            <InvitateIcon />
            <SettingsIcon />
        </Container>
    );
}

export default ChannelButton;