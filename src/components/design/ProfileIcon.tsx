import {FC} from 'react';
import styled from 'styled-components'

interface StyledPhotoProps {
    color?: '#FB9CFF' | '#06EBFF';
}

const StyledPhoto = styled.div `  
  width: 42px;
  height: 42px;
  border-radius: 100%;
  background-color: #FB9CFF;
  border: 3px solid #fff;
`;

const ProfileIcon: FC<StyledPhotoProps> = ({ color } ) => {
    return (
        <StyledPhoto style={{ backgroundColor: color }} />
    );
};

export default ProfileIcon;