import React from 'react';
import {Link} from 'react-router-dom'

const Sidebar = (props) => {

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <Link to='/albums'>ALBUMS</Link>
        </h4>
        <h4 className="menu-item active">
          <Link to='/artists'>ARTISTS</Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
