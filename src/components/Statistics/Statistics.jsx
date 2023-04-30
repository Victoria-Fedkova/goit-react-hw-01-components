import PropTypes from "prop-types";
import {StatisticsSection, StatisticsTitle, StatList, StatItem, Label, Percentage} from './Statistics.styled'
import { getRandomHexColor } from 'utils';

function Statistics ({title,stats}){
    return <StatisticsSection>

      {title && <StatisticsTitle>{title}</StatisticsTitle>}  

      <StatList >
          {stats.map((item) => (
            <StatItem key={item.id} itemsCount={stats.length} bg={getRandomHexColor()}>
              <Label>{item.label}</Label>
              <Percentage>{item.percentage}%</Percentage>
          </StatItem>
          ))}
      </StatList>

  </StatisticsSection>
}

Statistics.propTypes ={
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
    
}

export default Statistics;