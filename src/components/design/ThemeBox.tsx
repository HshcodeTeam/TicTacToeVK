import React, { FC } from 'react';
import styled from "styled-components";
import Cirle from "./Cirle.tsx";

interface BackGroundProps {
    children?: React.ReactNode;
}

const StyledBackground = styled.div`  
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: #230249;
`;

const PrefaceBox = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: space-between;
  position: relative;
  padding: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

const ThemeBox: FC <BackGroundProps> = ({ children } ) => {
    return (
        <StyledBackground>
            <Cirle />
            <PrefaceBox>
                { children }
            </PrefaceBox>
        </StyledBackground>
    );
};

export default ThemeBox;