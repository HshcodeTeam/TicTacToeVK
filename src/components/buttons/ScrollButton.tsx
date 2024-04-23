import { FC } from 'react';
import styled from 'styled-components';
import {Icon28ChevronUpOutline} from "@vkontakte/icons";

interface ScrollButtonProps {
    up?: boolean;
    onClick?: () => void;
}

const ScrollingButton = styled.button `
  width: 222px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0);
  overflow: hidden;
  color: #06EBFF;
  transition: background-color 0.8s, box-shadow 0.8s, transform 0.8s;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.85);
    background-image: radial-gradient(circle, rgba(48, 101, 148, 0.42), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
    transition: background-color 1s;
  }
`

const ScrollButton: FC<ScrollButtonProps> = ( { up} ) => {
    return (
        <ScrollingButton>
            { up ?  <Icon28ChevronUpOutline
                    style={{
                        width:"222px",
                        height:"222px",

            }} />
            : <Icon28ChevronUpOutline
                    style={{
                        width:"222px",
                        height:"222px",
                        rotate:"180deg"
            }} />}
        </ScrollingButton>
    );
};

export default ScrollButton;