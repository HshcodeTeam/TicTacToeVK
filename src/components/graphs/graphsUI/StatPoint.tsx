import styled from "styled-components";
import {FC} from "react";

interface StatProps {
    text?: string;
    colour?: string;
}

const StyledStatPoint = styled.div`
  width: 74%;
  height: 24%;
  background-color: coral;
  display: flex;
  justify-content: start;
  align-self: center;
`;

const StyledPoint = styled.div`
  align-self: center;
  width: 52px;
  height: 52px;
  border-radius: 100%;
`;

const StyledText = styled.p`
  display: flex;
  align-items: center;
  font-family: "VK Sans Display",serif;
  font-size: 32px;
  font-weight: 400;
  padding-left: 30px;
  margin: 0;
`;

const StatPoint: FC<StatProps> = ( { text, colour } ) => {
    return (
        <StyledStatPoint>
            <StyledPoint style={{backgroundColor: `#${colour}`}}/>
            <StyledText>{text}</StyledText>
        </StyledStatPoint>
    );
};

export default StatPoint;