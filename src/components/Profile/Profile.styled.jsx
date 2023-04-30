import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  border-radius: 5px;
  overflow: hidden;
  margin: auto;
  text-align: center;
  background-color: #fff;
`;
export const Description = styled.div`
  padding-top: 30px;
  padding-bottom: 18px;
  color: grey;
`;
export const UserAvatar = styled.img`
  width: 120px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  border-radius: 50%;
  background-color: #7c85a6;

  display: block;
  height: auto;
  max-width: 100%;
`;
export const UserName = styled.p`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
  color: black;
`;
export const UserInfo = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
`;
export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  height: 90px;
  background-color: #e4e7f2;
`;
export const StatsItem = styled.li`
  display: flex;
  width: calc(100% / ${props => props.itemsCount});
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #7c85a6;
  &:not(:last-child) {
    border-right: 1px solid #7c85a6;
  }
`;
export const Statslabel = styled.span`
  color: grey;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
`;
export const StatsQuantity = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
