import PropTypes from 'prop-types';
import { ProfileWrapper, Description, UserAvatar, UserName, UserInfo, StatsList, StatsItem, Statslabel,StatsQuantity} from "./styles";


function Profile({username, tag, location, avatar, stats }){
  const statsKeys = Object.keys(stats);
return <ProfileWrapper key={tag}>
<Description>
  <UserAvatar
    src={avatar}
    alt="User avatar"
  />
  <UserName>{username}</UserName>
  <UserInfo>@{tag}</UserInfo>
  <UserInfo>{location}</UserInfo>
</Description>

<StatsList> 
  {statsKeys.map(key => 
  {
    const label = key[0].toLocaleUpperCase() + key.slice(1);
    return (
    <StatsItem key={key} itemsCount={statsKeys.length}>
      <Statslabel>{label}</Statslabel>
      <StatsQuantity>{stats[key]}</StatsQuantity>
    </StatsItem>
  )})}
</StatsList>
</ProfileWrapper>
}

Profile.propTypes ={
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
} 

export default Profile;