import styled from "styled-components";
import {FC} from "react";
import CircleUnit from "../battlefield1942/details/CircleUnit.tsx";
import CrossUnit from "../battlefield1942/details/CrossUnit.tsx";

export interface SquareButtonProps {
    type: 'cross' | 'circle' | 'empty' | null;
}

const SquaredButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0;
  padding: 0;
  position: relative;
  width: 33.3%;
  height: 33.3%;
  border: 5px solid #DE08EB;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const SquareButton: FC<SquareButtonProps> = ( { type} ) => {
    return (
        <SquaredButton>
            {type === "cross" && <CrossUnit />}
            {type === "circle" && <CircleUnit />}
            {type === "empty" && <></>}
        </SquaredButton>
    );
};

export default SquareButton;