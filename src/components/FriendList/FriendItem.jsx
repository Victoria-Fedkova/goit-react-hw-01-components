import PropTypes from 'prop-types';
import {OnlineStatus, Avatar, UserName} from './FriendList.styled'


function FriendItem ({avatar, name, isOnline}){
    return <>
    <OnlineStatus isOnline={isOnline} />
    <Avatar src={avatar} alt="User avatar" width="48" />
    <UserName>{name}</UserName>
</>            
}

FriendItem.propTypes = {
    avatar:PropTypes.string, 
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

export default FriendItem;
