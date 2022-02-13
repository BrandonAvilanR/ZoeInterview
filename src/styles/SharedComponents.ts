import styled from 'styled-components';
import { BannerColor, BlueColor, GreyColor, WhiteColor } from './Colors';

export const ZoeNav = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 2rem;
  background-color: ${BannerColor};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 240px;
`;

export const BlueIconButton = styled.button`
  display: flex;
  align-items: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  border-radius: 4px;
  margin: 8px 0;
  border: none;
  padding: 12px;
  background-color: ${props => props.disabled ? GreyColor : BlueColor};
  font-weight: bold;
  color: ${WhiteColor};
  svg {
    margin-left: 4px;
  }
`;
