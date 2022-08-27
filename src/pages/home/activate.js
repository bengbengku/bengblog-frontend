import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import ActivateFormInfo from './ActivateFormInfo'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

export default function Home() {
  const { user } = useSelector((state) => ({ ...state }))
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const { token } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    activateAccount()
  }, [])

  const activateAccount = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/activate`,
        { token },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      setSuccess(data.message)
      Cookies.set('user', JSON.stringify({ ...user, verified: true }))
      dispatch({
        type: 'VERIFY',
        payload: true,
      })
      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (error) {
      setError(error.response.data.message)
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }

  return (
    <div className='home'>
      {success && (
        <ActivateFormInfo
          type='success'
          header='Verifikasi akun berhasil.'
          text={success}
          loading={loading}
        />
      )}
      {error && (
        <ActivateFormInfo
          type='error'
          header='Oops! Terjadi kesalahan.'
          text={error}
          loading={loading}
        />
      )}
    </div>
  )
}
