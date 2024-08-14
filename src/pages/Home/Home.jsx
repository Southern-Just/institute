import React,{useState} from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/APPDownload/AppDownload'
const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
      <Banner/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} setCategory={setCategory}/>
      <AppDownload />
    </div>
  )
}

export default Home
