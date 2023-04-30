import PropTypes from "prop-types";
import StatisticsTableRow from './StatisticsTableRow';
import {StatisticsSection, StatisticsTitle, StatList, StatItem} from './styles'
import { getRandomHexColor } from 'utils';

function Statistics ({title,stats}){
    return <StatisticsSection>

      {title && <StatisticsTitle>{title}</StatisticsTitle>}  

      <StatList >
          {stats.map((item) => (
            <StatItem key={item.id} itemsCount={stats.length} bg={getRandomHexColor()}>
              <StatisticsTableRow 
              label={item.label}
              percentage={item.percentage}
              />
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
    })
  ),
    
}

export default Statistics;