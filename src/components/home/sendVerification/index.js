import React, { useState } from 'react'
import { createStyles, Alert, Text } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons'
import axios from 'axios'

const useStyles = createStyles((theme) => ({
  container: {
    height: '100%',
    width: '40vw',
    display: 'flex',
    alignItems: 'flex-start',
    borderRadius: '8px',
  },
  alert: {
    background: 'none',
    color: '#e86aa8',
    border: 'none',
  },
}))

export default function SendVerification({ user }) {
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const { classes } = useStyles()

  const sendVerificationHandler = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/sendVerification`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      setSuccess(data.message)
    } catch (error) {
      setError(error.response.data.message)
    }
  }

  return (
    <div className={classes.container}>
      <Alert
        icon={<IconAlertCircle size={16} />}
        title='Sekilas Info!'
        className={classes.alert}
        variant='outline'
        styles={{
          root: {
            height: '90px',
            width: '40vw',
          },
          message: {
            color: 'white',
            fontSize: '12px',
            marginTop: '-5px',
            width: '90%',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
          },
          title: {
            color: '#e86aa8',
          },
        }}
      >
        Akun kamu belum terverifikasi, silahkan verifikasi akun.
        {success ? (
          <Text
            component='span'
            align='left'
            variant='gradient'
            gradient={{ from: 'pink', to: 'blue', deg: 5 }}
            size='xs'
            weight={100}
            style={{
              fontFamily: 'Greycliff CF, sans-serif',
              cursor: 'pointer',
            }}
            onClick={() => {
              sendVerificationHandler()
            }}
          >
            {success}
          </Text>
        ) : error ? (
          <Text
            component='span'
            align='left'
            variant='gradient'
            gradient={{ from: 'pink', to: 'blue', deg: 5 }}
            size='xs'
            weight={100}
            style={{
              fontFamily: 'Greycliff CF, sans-serif',
              cursor: 'pointer',
            }}
            onClick={() => {
              sendVerificationHandler()
            }}
          >
            {error}
          </Text>
        ) : (
          <Text
            component='span'
            align='left'
            variant='gradient'
            gradient={{ from: 'pink', to: 'blue', deg: 5 }}
            size='xs'
            weight={100}
            style={{
              fontFamily: 'Greycliff CF, sans-serif',
              cursor: 'pointer',
            }}
            onClick={() => {
              sendVerificationHandler()
            }}
          >
            Kilk disini, kirim verifikasi email
          </Text>
        )}
      </Alert>
    </div>
  )
}
