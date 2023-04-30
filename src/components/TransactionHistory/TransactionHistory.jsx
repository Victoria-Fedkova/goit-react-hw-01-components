import PropTypes from 'prop-types';
import {Table, TableHead, TableRow, TableD, TableH} from './styles'

function TransactionHistory ({items}){
    return <Table>
    <TableHead>
      <TableRow>
        <TableH>Type</TableH>
        <TableH>Amount</TableH>
        <TableH>Currency</TableH>
      </TableRow>
    </TableHead>
  
    <tbody>
        {items.map(({id, type, amount, currency}, index) => (
            <TableRow key={id}>
                <TableD>{type}</TableD>
                <TableD>{amount}</TableD>
                <TableD>{currency}</TableD>
            </TableRow>
        ))}
    </tbody>
  </Table>
}

TransactionHistory.propTypes={
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type:PropTypes.string.isRequired, 
          amount: PropTypes.string.isRequired,  //number?
          currency: PropTypes.string.isRequired,
        })
      ),
}

export default TransactionHistory;