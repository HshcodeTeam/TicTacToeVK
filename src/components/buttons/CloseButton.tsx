import { FC } from 'react'
import styled from "styled-components";
import {Icon28Dismiss} from "@vkontakte/icons";

interface CloseButtonProps {
    onClick?: () => void;
    visible?: boolean;
}

const ClosingButton = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 2px solid white;
  border-radius: 100%;
  background-color: #06EBFF;
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
const EmptySpace = styled.div `
  width: 47px;
  height: 47px;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
`


const CloseButton: FC<CloseButtonProps> = ( { onClick, visible } ) => {
    if (visible) {
        return (
        <ClosingButton onClick={onClick}>
            <Icon28Dismiss style={{width:"35px", height: "35px"}} />
        </ClosingButton>
    );
    } else {
        return (
            <EmptySpace />
        );
    }
};

export default CloseButton;