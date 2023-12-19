import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import '../../styles/avatar.css';

const AvatarComponent = () => {
  return (
    <Avatar.Root className="AvatarRoot">
      <Avatar.Fallback className="AvatarFallback">PL</Avatar.Fallback>
    </Avatar.Root>
  );
};

export default AvatarComponent;
