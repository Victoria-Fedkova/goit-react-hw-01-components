import styled from 'styled-components';

export const StatisticsSection = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 480px;
  border-radius: 5px;
  overflow: hidden;
  margin: auto;
  text-align: center;
  background-color: #fff;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const StatisticsTitle = styled.h3`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
  color: grey;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  display: flex;
  height: 90px;
`;
export const StatItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100% / ${props => props.itemsCount});
  height: 100%;
  background-color: ${props => props.bg};
  color: white;
  font-weight: 500;
`;
export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 6px;
`;
export const Percentage = styled.span`
  font-size: 18px;
`;
