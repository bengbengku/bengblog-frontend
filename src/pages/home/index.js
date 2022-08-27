import React from 'react'
import './style.css'
import Header from '../../components/header'
import LeftHome from '../../components/home/left'
import { useSelector } from 'react-redux'
import RightHome from '../../components/home/right'
import SendVerification from '../../components/home/sendVerification'

export default function Home() {
  const { user } = useSelector((state) => ({ ...state }))
  return (
    <div className='home'>
      <Header />
      <LeftHome user={user} />
      <div className='home_middle'>
        {user && user.verified === false ? (
          <SendVerification user={user} />
        ) : (
          ''
        )}
        <span>Heihooooo</span>
      </div>
      <RightHome user={user} />
    </div>
  )
}
