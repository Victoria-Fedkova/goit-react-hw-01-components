import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import {ItemContainer} from './FriendList.styled';


function FriendList ({friends}){
    return <ul>
        {friends.map((friend) => (
          <ItemContainer key={friend.id}>
            <FriendItem 
            avatar={friend.avatar} 
            name={friend.name} 
            isOnline={friend.isOnline}/>
          </ItemContainer>         
        ))}
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        })
      ),
    };

export default FriendList;