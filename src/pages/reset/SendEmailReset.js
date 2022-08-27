import React, { useState } from 'react'
import './style.css'
import {
  createStyles,
  Paper,
  Title,
  Text,
  Container,
  Avatar,
  Button,
} from '@mantine/core'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  title: {
    marginTop: '5rem',
    fontSize: 26,
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
  continue: {
    backgroundColor: '#fbdc5c',
    color: '#1A1B1E',
    '&:hover': {
      backgroundColor: '#F06595',
      color: '#fff',
    },
  },
}))

export default function SendEmailReset({ user }) {
  const { classes } = useStyles()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  return (
    <Container>
      <Title className={classes.title} align='center'>
        Konfirmasi Akun
      </Title>
      <Text color='dimmed' size='sm' align='center'>
        Kirim kode via email
      </Text>
      <Paper withBorder shadow='md' p={30} radius='md' mt='md'>
        <Avatar src={user.picture} size={120} radius={120} mx='auto' />
        <Text align='center' size='lg' weight={500} mt='md'>
          {user.username}
        </Text>
        <Text align='center' color='dimmed' size='sm'>
          {user.first_name} • Facebook User
        </Text>

        <Button
          variant='default'
          fullWidth
          mt='md'
          className={classes.continue}
        >
          Lanjut
        </Button>
        <Button
          variant='default'
          fullWidth
          mt='md'
          component={Link}
          to='/login'
        >
          Bukan saya?
        </Button>
      </Paper>
    </Container>
  )
}
