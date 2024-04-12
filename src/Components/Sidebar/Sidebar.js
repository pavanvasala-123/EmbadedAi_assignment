import { useState } from "react";
import "../Sidebar/Sidebar.css";
import AddBoxIcon from '@mui/icons-material/AddBox';

const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };
  return (
    <div className="sidebar">
     <div className="top_container">
      <h2>Character.ai</h2>
      <div className="create_container">
      <AddBoxIcon className="create_con_icon"/>
      <p>Create</p>
      </div>
     <div className="discover_container">
      <AddBoxIcon className="create_con_icon"/>
      <p>Discover</p>
     </div>
     <p>Chats</p>
     <p>Today</p>
     </div>
     <div className="bottom_container">

     </div>
    </div>
  );
};

export default Sidebar;
