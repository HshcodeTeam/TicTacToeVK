import { FC } from 'react';
import styled from "styled-components";
import WinIcon from "../../assets/cup.svg"
import {Icon28SadFaceOutline, Icon28NeutralFaceOutline} from "@vkontakte/icons";

interface ResultIconProps {
    result?: 'win' | 'lose' | 'dead_heat'
}

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 66%;
  height: 31%;
  border-radius: 20px;
  box-sizing: border-box;
  overflow: hidden;

  @keyframes scaleUp {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(2);
      width: 50%;
      height: 50%;
    }
  }
`;

const StyledImage = styled.img`
  width: 80%;
  height: 80%;
  animation: scaleUp 1s forwards;
`;

const ResultIcon: FC<ResultIconProps> = ( { result } ) => {
    return (
        <StyledIcon>
            {(result === 'win' && <StyledImage src={WinIcon} />)}
            {(result === 'lose' && <Icon28SadFaceOutline color="#FA9CFF" style={{width: "100%", height: "100%",
                animation: 'scaleUp 1s forwards'}}/>)}
            {(result === 'dead_heat' && <Icon28NeutralFaceOutline color="#B054F8" style={{width: "100%", height: "100%",
                animation: 'scaleUp 1s forwards'}}/>)}
        </StyledIcon>
    );
};

export default ResultIcon;