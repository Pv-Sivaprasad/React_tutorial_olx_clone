import React ,{useEffect,useState,useContext}from 'react';

import './View.css';
import { postContext } from '../../store/postContext';
import { firebaseContext } from '../../store/Context';


function View() {

  const [userDetails,setUserDetails]=useState()
  console.log(userDetails)
  const {postDetails}= useContext(postContext)
  // console.log(postDetails);
  const {firebase}=useContext(firebaseContext)

  useEffect(()=>{
    const {userId} = postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data())
      });
    })
    console.log(userDetails)
  },[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails?.url }
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails?.price} </p>
          <span> {postDetails?.category} </span>
          <p>Two Wheeler</p>
          <span>  </span>
        </div>
      { userDetails &&
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p> {userDetails.phone} </p>
        </div> }
      </div>
    </div>
  );
}
export default View;
