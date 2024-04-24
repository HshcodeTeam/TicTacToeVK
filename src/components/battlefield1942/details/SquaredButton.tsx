import styled from "styled-components";

export const SquaredButton = styled.button`
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