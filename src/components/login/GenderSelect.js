import { useMediaQuery } from 'react-responsive'

export default function GenderSelect({ handleRegisterChange, genderError }) {
  const view1 = useMediaQuery({
    query: '(min-width: 539px)',
  })
  const view2 = useMediaQuery({
    query: '(min-width: 850px)',
  })
  const view3 = useMediaQuery({
    query: '(min-width: 1170px)',
  })
  return (
    <div
      className='reg_grid'
      style={{ marginBottom: `${genderError && !view3 ? '70px' : '0'}` }}
    >
      <label htmlFor='male'>
        Pria
        <input
          type='radio'
          name='gender'
          id='male'
          value='pria'
          onChange={handleRegisterChange}
        />
      </label>
      <label htmlFor='female'>
        Wanita
        <input
          type='radio'
          name='gender'
          id='female'
          value='wanita'
          onChange={handleRegisterChange}
        />
      </label>
      <label htmlFor='custom'>
        Privasi
        <input
          type='radio'
          name='gender'
          id='custom'
          value='privasi'
          onChange={handleRegisterChange}
        />
      </label>
      {genderError && (
        <div
          className={
            !view3 ? 'input_error' : 'input_error input_error_select_large'
          }
        >
          <div
            className={!view3 ? 'error_arrow_bottom' : 'error_arrow_left'}
          ></div>
          {genderError}
        </div>
      )}
    </div>
  )
}
