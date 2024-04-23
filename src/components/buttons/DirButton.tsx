import { FC } from 'react';
import styled from 'styled-components';
import {Icon20HomeOutline, Icon24Error, Icon24MarketOutline, Icon24Poll, Icon24Refresh} from "@vkontakte/icons";

interface DirButtonProps {
    directory?: "STATISTICS" | "HOME" | "MARKET" | "AGAIN";
    onClick?: () => void;
}

const DirectoryButton = styled.button`
      width: 65px;
      height: 65px;  
      background-color: rgba(0, 0, 0, 0);
      border: 5px solid #06ebff;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
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

const DirButton: FC<DirButtonProps> = ( { directory, onClick } ) => {
    return (
        <DirectoryButton onClick={onClick}>
            {directory === "STATISTICS" ? <Icon24Poll color="white" style={{width: "43px", height: "43px"}}/>
            : directory === "HOME" ? <Icon20HomeOutline color="white"  style={{width: "43px", height: "43px"}}/>
            : directory === "MARKET" ? <Icon24MarketOutline color="white"  style={{width: "43px", height: "43px"}}/>
            : directory === "AGAIN" ? <Icon24Refresh color="white"  style={{width: "43px", height: "43px"}}/>
            : <Icon24Error color="white" style={{width: "43px", height: "43px", backgroundColor: "Red", borderRadius: "100%"}}/>}
        </DirectoryButton>
    );
};

export default DirButton;