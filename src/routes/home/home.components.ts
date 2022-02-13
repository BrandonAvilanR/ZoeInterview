import styled from 'styled-components';
import { BlackColor, WhiteColor } from '../../styles/Colors';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 100px);
  width: 100vw;
  color: ${BlackColor}
`;

export const InputContainer = styled.div`
  position: relative;
  align-items: center;
  margin: 40px 0 32px;
  width: 240px;
  color: ${BlackColor};
  svg {
    position: absolute;
    top: 16px;
    left: 12px;
  }
`;

export const InputLabel = styled.p`
  position: absolute;
  top: -36px;
  font-size: small;
`;

export const StyledInput = styled.input`
  text-align: end;
  width: 100%;
  background-color: ${WhiteColor};
  outline: none;
  border: 1px solid ${BlackColor};
  border-radius: 8px;
  line-height: 2;
  padding: 8px 40px;
`;