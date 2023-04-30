import styled from 'styled-components';

export const Table = styled.table`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 480px;
  border-radius: 5px;
  overflow: hidden;
  margin: auto;
  text-align: center;
  background-color: #fff;
  border-collapse: collapse;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const TableHead = styled.thead`
  background-color: #46ddeb;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: normal;
`;
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: rgb(228, 231, 242);
  }
`;
export const TableD = styled.td`
  height: 28px;
  width: calc(100% / 3);
  padding: 5px 10px 5px;
  color: grey;
  font-size: 12px;
  border-right: 1px solid #c5c7d1;
  border-left: 1px solid #c5c7d1;
`;
export const TableH = styled.th`
  height: 28px;
  padding: 5px 10px 5px;
  &:nth-child(even) {
    border-right: 1px solid white;
    border-left: 1px solid white;
  }
`;
