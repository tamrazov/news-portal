import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom'
import ItemHeader from './ItemHeader';
import logo from './../img/logo.png'

@observer
class Header extends React.Component {
  render() {
    const items = {
      list: ['Home','About','Category','AddPost']
    }
    return(
      <div className="container-header">
          <div className="header-logo">
            <Link to="/Home"> <img className="header-logo-img" src={ logo } alt="Logo"/> </Link>  
          </div>
          <ItemHeader items={items.list} className=""/>
          <div className='header-auth'>
            <Link to="/Auth" > LOG IN </Link>
          </div>
        </div>
    )
  }
}

export default Header;