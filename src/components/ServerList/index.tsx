import React from 'react';

import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';
import Logo from '../../assets/logo.jpg';

const ServerList: React.FC = () => {
  return (
    <Container>
        <ServerButton logo={Logo} mentions={22} isHome/>
        <Separator/>
        <ServerButton/>
        <ServerButton hasNotifications/>
        <ServerButton mentions={2}/>
        <ServerButton/>
        <ServerButton/>
        <ServerButton/>
        <ServerButton hasNotifications/>
        <ServerButton mentions={252}/>
        <ServerButton/>
        <ServerButton hasNotifications/>
        <ServerButton/>
    </Container>
);
}

export default ServerList;