import React from 'react';
import { Link } from 'react-router-dom'

class ItemHeader extends React.Component {
  render() {
    const item = this.props.items.map( (el,i) => {
      return(
        <Link 
          className="header-item"
          key={i}
          to={`/${el}`}
        > 
          { el }
        </Link>
      )
    })
    return(
      <div className="header-items">
         { item }
      </div>
    )
  }
}

export default ItemHeader;