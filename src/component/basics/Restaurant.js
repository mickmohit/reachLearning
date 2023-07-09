import React, {useState} from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./menuCard";
import Navbar from './Navbar';

const Restaurant = () => {


const filterItem = (Category) => {

    if(Category==="All"){
         setMenuData(Menu);
         return;
    }

    const updatedList =  Menu.filter((currEl) => {
        return currEl.Category === Category;
    });
    setMenuData(updatedList);
};

const uniqueList = [ ... new Set( 
    Menu.map((curEle) => { return curEle.Category;}) 
    ), "All",];

console.log(uniqueList);
const [menuData, setMenuData] = useState(Menu);
const [menuList, setMenuList] = useState(uniqueList);

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant
