import styled from 'styled-components';
import { BlackColor, BlueColor, DarkGreyColor, GreyColor, WhiteColor } from '../../styles/Colors';

export const MatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: ${BlackColor};
  h1 {
    font-weight: bold;
  }
`;

export const AgentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  grid-auto-rows: minmax(160px, auto);
  margin: 40px;
  width: 640px;
  color: ${BlackColor};
`;

export const AgentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 0px 8px 16px rgba(29, 35, 58, 0.1);
  border-radius: 12px;
  min-width: 200px;
  min-height: 240px;
  img {
    width: 90px;
    height: 90px;
    object-fit: contain;
    border-radius: 50%;
  }
  p {
    margin: 0;
  }
  .income {
    background-color: ${GreyColor};
    width: 100%;
    text-align: center;
    padding: 16px 0;
    border-radius: 0 0 12px 12px;
  }
`;

export const ShowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 640px;
  cursor: pointer;
  .less {
    margin-right: 16px;
    color: ${DarkGreyColor};
  }
  .more {
    color: ${BlueColor};
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: ${BlackColor};
  width: 640px;
  p {
    margin: 0.5rem 0;
  }
  .dropdown-toggle {
    text-align: initial;
    position: relative;
    color: ${BlackColor};
    background-color: ${WhiteColor};
    outline: none;
    border: 1px solid ${BlackColor};
    border-radius: 8px;
    line-height: 2;
    width: 180px;
    &:after {
      position: absolute;
      right: 12px;
      top: 20px;
    }
    &:active, &:focus {
      color: ${BlackColor};
      border: 1px solid ${BlackColor};
      background-color: ${WhiteColor};
      outline: none;
      box-shadow: none !important;
    }
  }
`;