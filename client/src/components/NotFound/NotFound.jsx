import React from "react";
import {Link} from 'react-router-dom';

const NotFound = () => {
  return(
    <>
    <Link to={'/'} className='logo404'>
        <img src="../img/logo.png" alt="logo" width='120px'/>
      </Link>
    <img className='img404' src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/3dec8a93992731.5e7331408ee1b.gif' alt='not found'/>
    </>
  )
}
export default NotFound;