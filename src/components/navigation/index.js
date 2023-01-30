import React, { useEffect, useState } from 'react';
import { getPetTypes } from '../../api/petfinder';
import Logo from '../../assets/logo.svg';
import Search from '../search';
import {  NavLink } from "react-router-dom";
import  './navigation.css' 

const Navigation = () => {
    let activeStyle = {
      background: '#013959',
    };
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    async function getPetTypesData() {
      const { types } = await getPetTypes();
      setPetTypes(types);
    }

    getPetTypesData();
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <img src={Logo} alt="Petlover" />
        <Search />
      </div>
      <ul className="nav-links">
        <li key="all">
          <NavLink
            exact
            to="/"
            className="nav-link"
            activeClassName="nav-link-active"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All Pets
          </NavLink>
        </li>
        {petTypes
          ? petTypes.map((type) => (
              <li key={type.name}>
                {/* These links should have an activeClassName prop */}
                <NavLink
                  to={`/${type._links.self.href.split("/").pop()}`}
                  key={type.name}
                  className="nav-link"
                  activeClassName="nav-link-active"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {type.name}
                </NavLink>{" "}
              </li>
            ))
          : "Loading..."}
      </ul>
    </nav>
  );
};

export default Navigation;
