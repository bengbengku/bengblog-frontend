import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import LoginInput from '../../components/inputs/loginInput'
import { useState } from 'react'
import DotLoader from 'react-spinners/DotLoader'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
const loginInfos = {
  email: '',
  password: '',
}

export default function LoginForm({ setVisible }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, setLogin] = useState(loginInfos)
  const { email, password } = login
  const handleLoginChange = (e) => {
    const { name, value } = e.target
    setLogin({ ...login, [name]: value })
  }
  const loginValidation = Yup.object({
    email: Yup.string()
      .required('Mohon isi kolom berikut.')
      .email('Mohon isi kolom dengan email yang valid.')
      .max(100),
    password: Yup.string().required('Mohon isi kolom berikut'),
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const loginSubmit = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          email,
          password,
        }
      )
      dispatch({ type: 'LOGIN', payload: data })
      Cookies.set('user', JSON.stringify(data))
      navigate('/')
    } catch (error) {
      setLoading(false)
      setError(error.response.data.message)
    }
  }
  return (
    <div className='login_wrap'>
      <div className='login_1'>
        <img src='../../icons/bengblog.svg' alt='bengblog' />
        <span>
          Ya cuma membantu, membagikan cerita dan merekomendasikan. <br />
          Ya, itu aja dulu 💀
        </span>
      </div>
      <div className='login_2'>
        <div className='login_2_wrap'>
          <Formik
            enableReinitialize
            initialValues={{
              email,
              password,
            }}
            validationSchema={loginValidation}
            onSubmit={() => {
              loginSubmit()
            }}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  type='text'
                  name='email'
                  placeholder='No. Handphone/Email'
                  onChange={handleLoginChange}
                />
                <LoginInput
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={handleLoginChange}
                  bottom
                />
                <button type='submit' className='yellow_btn'>
                  Masuk
                </button>
              </Form>
            )}
          </Formik>
          <Link to='/reset' className='forgot_password'>
            Lupa password?
          </Link>
          <DotLoader color='#fff' loading={loading} size={30} />
          {error && <div className='error_text'>{error}</div>}
          <div className='sign_splitter'></div>
          <button
            className='yellow_btn open_signup'
            onClick={() => setVisible(true)}
          >
            Buat akun baru
          </button>
        </div>
        <Link to='/' className='sign_extra'>
          <b>.bengblog</b>{' '}
          <span>Untuk semua kalangan 😆 kaya, miskin atau gitu gitu aja</span>
        </Link>
      </div>
    </div>
  )
}
