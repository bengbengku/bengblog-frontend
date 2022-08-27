import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PostNavbar from '../../components/post/PostNavbar'
import './style.css'

export default function CreatePost() {
  const { user } = useSelector((state) => ({ ...state }))
  return (
    <div className='post'>
      <PostNavbar user={user} />
      <div className='post_wrapper'></div>
    </div>
  )
}
