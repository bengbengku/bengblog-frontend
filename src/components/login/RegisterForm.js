import { Form, Formik } from 'formik'
import { useState } from 'react'
import RegisterInput from '../inputs/registerInput'
import * as Yup from 'yup'
import DateOfBirthSelect from './DateOfBirthSelect'
import GenderSelect from './GenderSelect'
import DotLoader from 'react-spinners/DotLoader'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
export default function RegisterForm({ setVisible }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userInfos = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: '',
  }
  const [user, setUser] = useState(userInfos)
  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user
  const yearTemp = new Date().getFullYear()
  const handleRegisterChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const years = Array.from(new Array(108), (val, index) => yearTemp - index)
  const months = Array.from(new Array(12), (val, index) => 1 + index)
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate()
  }
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index)
  const registerValidation = Yup.object({
    first_name: Yup.string()
      .required('Nama depan nya apa nih? 😊 ')
      .min(2, 'Nama depan nya jangan dikit dikit amat, tambahin gih 😉')
      .max(16, 'Nama depan nya kebanyakan. takut gak muat, kurangin gih 🙃')
      .matches(
        /^[aA-zZ]+$/,
        'Angka sama spesial karakter gak bisa, hapus gih 😉'
      ),
    last_name: Yup.string()
      .required('Nama belakang nya apa nih? 😊')
      .min(2, 'Nama belakang jangan dikit dikit amat, tambahin gih 😉')
      .max(16, 'Nama belakang kebanyakan. takut gak muat, kurangin gih 🙃')
      .matches(
        /^[aA-zZ]+$/,
        'Angka sama spesial karakter gak bisa, hapus gih 😉.'
      ),
    email: Yup.string()
      .required('Isi email nya ya, penting buat akses akun.')
      .email('Email nya yang valid dong 😑'),
    password: Yup.string()
      .required('Masukan kombinasi password, passwordddd nyhaaaa 🤓')
      .min(6, 'Password nya jangan dikit dikit amat, tambahin gih 😉')
      .max(36, 'Password nya kebanyakan. takut gak muat, kurangin gih 🙃'),
  })
  const [dateError, setDateError] = useState('')
  const [genderError, setGenderError] = useState('')

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const registerSubmit = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/register`,
        {
          first_name,
          last_name,
          email,
          password,
          bYear,
          bMonth,
          bDay,
          gender,
        }
      )
      setError('')
      setLoading(false)
      setSuccess(data.message)
      const { message, ...rest } = data
      setTimeout(() => {
        dispatch({ type: 'LOGIN', payload: rest })
        Cookies.set('user', JSON.stringify(rest))
        navigate('/')
      }, 2000)
    } catch (error) {
      setLoading(false)
      setSuccess('')
      setError(error.response.data.message)
    }
  }
  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <div className='blur'>
      <div className='register'>
        <div className='register_header'>
          <i className='exit_icon' onClick={() => setVisible(false)}></i>
          <span>Daftar Akun Baru</span>
          <span>Silahkan mendaftar akun baru</span>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            first_name,
            last_name,
            email,
            password,
            bYear,
            bMonth,
            bDay,
            gender,
          }}
          validationSchema={registerValidation}
          onSubmit={() => {
            let current_date = new Date()
            let picked_date = new Date(bYear, bMonth - 1, bDay)
            let atleast14 = new Date(1970 + 14, 0, 1)
            let noMoreThan70 = new Date(1970 + 70, 0, 1)
            if (current_date - picked_date < atleast14) {
              setDateError(
                'Waduh 😮 masih dibawah 15 tahun umur kamu, nanti dulu ya.'
              )
            } else if (current_date - picked_date > noMoreThan70) {
              setDateError(
                'Waduh 😮 udah lebih dari 70 tahun? maaf ya kek/nek gak bisa akses.'
              )
            } else if (gender === '') {
              setDateError('')
              setGenderError('Pilih jenis kelamin nya dong 😭')
            } else {
              setDateError('')
              setGenderError('')
              registerSubmit()
            }
          }}
        >
          {(formik) => (
            <Form className='register_form'>
              <div className='reg_line'>
                <RegisterInput
                  type='text'
                  placeholder='Nama Depan'
                  name='first_name'
                  onChange={handleRegisterChange}
                />
                <RegisterInput
                  type='text'
                  placeholder='Nama Belakang'
                  name='last_name'
                  onChange={handleRegisterChange}
                />
              </div>
              <div className='reg_line'>
                <RegisterInput
                  type='text'
                  placeholder='No. Handphone/Email'
                  name='email'
                  onChange={handleRegisterChange}
                />
              </div>
              <div className='reg_line'>
                <RegisterInput
                  type='password'
                  placeholder='Password Baru'
                  name='password'
                  onChange={handleRegisterChange}
                />
              </div>
              <div className='reg_col'>
                <div className='reg_line_header'>
                  Tanggal Lahir <i className='info_icon'></i>
                </div>
                <DateOfBirthSelect
                  bDay={bDay}
                  bMonth={bMonth}
                  bYear={bYear}
                  days={days}
                  months={months}
                  years={years}
                  handleRegisterChange={handleRegisterChange}
                  dateError={dateError}
                />
              </div>
              <div className='reg_col'>
                <div className='reg_line_header'>
                  Jenis Kelamin <i className='info_icon'></i>
                </div>

                <GenderSelect
                  handleRegisterChange={handleRegisterChange}
                  genderError={genderError}
                />
              </div>
              <div className='reg_infos'>
                Dengan menekan tombol daftar, berarti kamu setuju{' '}
                <span>Atas Ketentuan, Kebijakan Data &nbsp;</span>
                dan <span>Kebijakan Cookie.</span> Ya nanti nya kamu bakal
                nerima notif verifikasi melalui email dari .bengblog
              </div>
              <div className='reg_btn_wrapper'>
                <button className='yellow_btn open_signup'>Daftar</button>
              </div>
              <DotLoader color='#fff' loading={loading} size={30} />
              {error && <div className='error_text'>{error}</div>}
              {success && <div className='success_text'>{success}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
