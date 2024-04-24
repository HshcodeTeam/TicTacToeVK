import { FC } from 'react';
import styled from 'styled-components';
import {Icon24Error} from "@vkontakte/icons";

interface LearnButtonProps {
    onClick?: () => void;
    visible?: boolean;
}

const LearningButton = styled.button `
  width: 47px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 100%;
  background-color: #06EBFF;
  transition: background-color 0.8s, box-shadow 0.8s, transform 0.8s;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 5px rgba(0, 123, 255, 0.5);
    border: 2px solid white;
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

const LearnButton: FC<LearnButtonProps> = ( {onClick, visible } ) => {

    if (visible) {
        return (
            <LearningButton onClick={onClick}>
                <Icon24Error style={{width: "35px", height: "35px", rotate: "180deg"}} />
            </LearningButton>
        );
    } else {
        return (
            <EmptySpace />
        );
    }


};

export default LearnButton;