import React from 'react';
import { Button } from './styles';

export interface ServerButtonProps {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
    logo?: string;
}

const ServerButton: React.FC<ServerButtonProps> = ({
    selected,
    isHome,
    hasNotifications,
    mentions,
    logo
}) => {

  return (
      <Button
        isHome={isHome}
        hasNotifications={hasNotifications}
        mentions={mentions}
        className={selected ? 'active' : ''}
        logo={logo}
      />
  );
}

export default ServerButton;