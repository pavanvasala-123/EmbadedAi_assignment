import React from "react";
import "../SearchAndProfile/SearchAndProfile.css";
import SearchIcon from '@mui/icons-material/Search';

const searchandprofile = () => {
  return (
    <div className="search_and_profie_con">
      <div className="profile_con">
        <p>
          <p>Welcome Back</p>
        </p>
        <div className="profile_sub_con">
          <p className="profile_logo">A</p>
          <p className="profile_name">Anil matcha</p>
        </div>
      </div>
      <div className="search_container">
        <SearchIcon/>
        <input type="text" placeholder="Search for the character"/>
      </div>
    </div>
  );
};

export default searchandprofile;
