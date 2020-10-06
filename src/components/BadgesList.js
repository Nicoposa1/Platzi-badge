import React from 'react'
import './styles/BadgesList.css'
import Gravatar from '../components/Gravatar'

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled BadgesList">
          {this.props.badges.map(badge => {
            return (
              <li className="BadgesListItem" key={badge.id}>
                <Gravatar
                  className="BadgesListItem__avatar"
                  email={badge.email}
                  // alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
                />
                <div>
                  <div><p> {badge.firstName} {badge.lastName} </p></div>
                  <div className="Twitter__name">
                    <span className="BadgesListItem__Logo"></span> 
                    @{badge.twitter}
                  </div>
                  <div><p>{badge.jobTittle}</p></div>
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