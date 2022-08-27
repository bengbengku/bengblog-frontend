import React, { useState } from 'react'
import './style.css'
import {
  createStyles,
  Paper,
  Title,
  Text,
  Container,
  Tooltip,
  Button,
  TextInput,
  Center,
} from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons'
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

export default function CodeVerification({ setCode, code }) {
  const { classes } = useStyles()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const rightSection = (
    <Tooltip
      label='Masukan 5 digit kode'
      position='top-end'
      withArrow
      transition='pop-bottom-right'
    >
      <Text color='dimmed' sx={{ cursor: 'help' }}>
        <Center>
          <IconInfoCircle size={18} stroke={1.5} />
        </Center>
      </Text>
    </Tooltip>
  )

  return (
    <Container>
      <Title className={classes.title} align='center'>
        Kode Verifikasi
      </Title>
      <Text color='dimmed' size='sm' align='center'>
        Silahkan masukan kode verifikasi. Cek email anda.
      </Text>
      <Paper withBorder shadow='md' p={30} radius='md' mt='md'>
        <TextInput
          rightSection={rightSection}
          placeholder='00000'
          styles={(theme) => ({
            input: {
              '&:focus': { borderColor: '#fbdc5c' },
            },
          })}
        />
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
          Batal
        </Button>
      </Paper>
    </Container>
  )
}
