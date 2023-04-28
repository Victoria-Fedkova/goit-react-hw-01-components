import PropTypes from 'prop-types';

function FriendList ({friends}){
    return <ul className="friend-list">
                {friends.map(({id, avatar, name, isOnline}) => (
                    <li className="item" key={id}>
                        <span className="status">{isOnline}</span>
                        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="name">{name}</p>
                    </li>            
                ))}
        </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          avatar:PropTypes.string, 
          name: PropTypes.string,
          isOnline: PropTypes.bool,
        })
      ),
    };

export default FriendList;