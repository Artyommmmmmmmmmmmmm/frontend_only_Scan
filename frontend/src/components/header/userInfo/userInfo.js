import React, {useContext, useState} from 'react'
import { Context } from '../../..'
import {observer} from 'mobx-react-lite'
import './userInfo.css'

const UserInfo = () => {
  const {store} = useContext(Context)
  const response = store.info()
  const responseData = response.then((e) => {return e.json})
  
  console.log(responseData)


  // console.log(responseData)


    return (
      <div className='user-info-cont'>
        {/* {responseData.then(e => {
        <p>{e.data.eventFiltersInfo.usedCompanyCount}</p>})} */}
  
      </div>
  );
}

export default observer(UserInfo);
