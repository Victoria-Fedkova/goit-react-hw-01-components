import PropTypes from "prop-types";
import {Label, Percentage} from './Statistics.styled'


function StatisticsTableRow (item){
    return <>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
        </>
}

StatisticsTableRow.propTypes ={
    item: PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
      })
  
}

export default StatisticsTableRow;