import { FC } from 'react';
import styled from 'styled-components';

interface StartButtonProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

const StartingButton = styled.button `
  width: 242px;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #06EBFF;
  border-radius: 32px;
  background-color: rgba(0, 0, 0, 0);
  font-family: "VK Sans Display",serif;
  color: #fff;
  font-size: 32px;
  font-weight: 400;
  transition: background-color 0.8s, box-shadow 0.8s, transform 0.8s;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 5px rgba(0, 123, 255, 0.5);
  }
  
  &:active {
    background-color: #004885;
    transition: background-color 0s;
  }
`

const StartButton: FC<StartButtonProps> = ( { type, onClick } ) => {
    return (
        <StartingButton type={type} onClick={onClick}>
            Начать игру
        </StartingButton>
    );
};

export default StartButton;