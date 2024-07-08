import React,{useContext, useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, firebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Header() {
  const history=useHistory()
  const {user}=useContext(AuthContext)
  const {firebase}=useContext(firebaseContext)
 

      const [search,setSearch]=useState('')

      const handleSearch =()=>{
        console.log(`searching for ${search}`);
        history.push(`/search?query=${search}`)
      }

        const handlePressKey=(event)=>{
            if(event.key==='Enter'){
              handleSearch()
            }
        }


  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div  onClick={(e)=>{setSearch(e.target.value)}} onKeyPress={handlePressKey}
            className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <Link to='/login'  ><span> {user ? `I'm=>${user.displayName} `:'Login' } </span></Link>
          <hr />
          
        </div>
       
        {user && <span onClick={()=>{
          firebase.auth().signOut();
          history.push('/login')
        }} > Logout </span>}
        
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
           <Link to='/create' > <span>SELL</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
