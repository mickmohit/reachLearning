import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-grp'>
            {
                menuList.map( (currEle)=>{
                    return <button className='btn-grp_item' onClick={() => filterItem(currEle)}>{currEle}</button>
                })
            }
            {/* <button className='btn-grp_item' onClick={() => filterItem("Lunch")}>Lunch</button>
            <button className='btn-grp_item'>Dinner</button>
            <button className='btn-grp_item' onClick={() => setMenuData(Menu)}>All</button> */}
        </div>
    </nav>
    </>
  )
}

export default Navbar
