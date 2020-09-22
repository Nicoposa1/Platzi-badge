import React from 'react'
import './styles/BadgesList.css'

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled BadgesList">
          {this.props.badges.map(badge => {
            return (
              <li className="BadgesListItem" key={badge.id}>
                <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="Avatar"/>
                <div>
                  <div><p> {badge.firstName} {badge.lastName} </p></div>
                  <div className="Twitter__name">
                    <span className="BadgesListItem__Logo"></span> 
                    @{badge.twitter}
                  </div>
                  <div><p>{badge.jobTitle}</p></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default BadgesList