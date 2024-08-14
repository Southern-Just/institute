import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
    
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Baratie menu</h1>
        <p className='explore-menu-text'>Prepared by the very best for the very best, and that's you darling !<br/><span>Just the thought it's an Italian behind that Kitchen, .......Mama mia</span></p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
      
    </div>
  )
}

export default ExploreMenu
