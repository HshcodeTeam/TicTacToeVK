import styled from "styled-components";
import {FC} from "react";

interface StatProps {
    text?: string;
    colour?: string;
    selected?: boolean;
    onClick?: () => void;
}

const StyledStatPoint = styled.div`
  width: 54%;
  max-width: 303px;
  height: 24%;
  display: flex;
  justify-content: start;
  align-self: center;

  @media (max-width: 482px) {
    width: 65%;
  }
  
  @media (max-width: 414px) {
    width: 80%;
  }
`;

const StyledPoint = styled.div<StatProps>`
  align-self: center;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  background-color: ${({ selected, colour }) => selected ? `#${colour}` : 'transparent'};
  border: 10px solid ${({ colour }) => `#${colour}`};  // Граница всегда отображает цвет
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

const StatPoint: FC<StatProps> = ({ text, colour, selected, onClick }) => {
    return (
        <StyledStatPoint onClick={onClick} style={{ cursor: 'pointer' }}>
            <StyledPoint colour={colour} selected={selected} />
            <StyledText>{text}</StyledText>
        </StyledStatPoint>
    );
};

export default StatPoint;