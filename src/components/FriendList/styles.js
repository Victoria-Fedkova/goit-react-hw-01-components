import styled from 'styled-components';

export const ItemContainer = styled.li`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 320px;
  height: 80px;
  border-radius: 5px;
  overflow: hidden;
  margin: auto;
  padding: 5px 10px 5px;
  text-align: center;
  background-color: #fff;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const OnlineStatus = styled.span`
  display: block;
  margin: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 6px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  border-radius: 5px;
  background-color: #7c85a6;
  margin-right: 6px;
  width: 70px;
`;
export const UserName = styled.p`
  font-size: 28px;
  font-weight: 600;
`;
