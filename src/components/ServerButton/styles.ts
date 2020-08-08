import styled from 'styled-components';
import ServerButton, {ServerButtonProps} from '.';

export const Button = styled.button<ServerButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.4s;

  width: 48px;
  height: 48px;
  border-radius: 15%;

  margin-bottom: 8px;

  background-image: url(${(p: ServerButtonProps) => p.logo});
  background-color: var(--primary);
  background-size: contain;

  position: relative;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 15%;
  }

  &::before {
    width: 9px;
    height: 9px;
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
    background-color: var(--white);
    border-radius: 50%;

    content: '';
    display: ${(p: ServerButtonProps) => p.hasNotifications ? 'inline' : 'none'};
  }

  &::after {
    background-color: var(--notification);
    width: auto.
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: '${(p: ServerButtonProps) => p.mentions && (p.mentions <= 99 ? p.mentions : '99+')}';
    display: ${(p: ServerButtonProps) => p.mentions && p.mentions > 0 ? 'inline' : 'none'};
  }

  &.active, &:hover{
    border-radius: 50%;
    border: 2.5px solid var(--discord);
    background-color: var(--rocketseat);
  }
`;
