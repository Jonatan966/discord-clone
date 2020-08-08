import React from 'react';
import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>✵-CHAT DA TRIBBO-✵</span>
                <AddCategoryIcon/>
            </Category>

            <ChannelButton channelName="🎶-musgas-🎶"/>
            <ChannelButton channelName="👀-memes-👀"/>
            <ChannelButton channelName="♞-xiringar-♞"/>
        </Container>
    );
}

export default ChannelList;