import React, { useEffect, useState } from 'react'
import './style.css'
import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  Loader,
} from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 26,
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column-reverse',
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
    backgroundColor: '#fbdc5c',
    color: '#202124',
    '&:hover': {
      backgroundColor: '#e86aa8',
      color: 'white',
    },
  },
  controlAnchor: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}))

export default function Reset({ setStep, setVisible }) {
  const { classes } = useStyles()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) =>
        /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/.test(value)
          ? null
          : error
          ? error
          : 'Maaf, email tidak valid. Silahkan coba lagi.',
    },
  })
  useEffect(() => {
    submitHandler()
  }, [email])

  const submitHandler = () => {
    if (email) {
      setStep(2)
      setVisible(1)
    }
  }

  return (
    <Container>
      <Title className={classes.title} align='center'>
        Lupa password?
      </Title>
      <Text color='dimmed' size='sm' align='center'>
        Silahkan masukan email, untuk mencari akun anda
      </Text>
      <Paper withBorder shadow='md' p={30} radius='md' mt='xl'>
        <form onSubmit={form.onSubmit((v) => setEmail(v.email))}>
          <TextInput
            label='Masukan Email'
            placeholder='email@email.com'
            required
            {...form.getInputProps('email')}
            rightSection={loading && <Loader size='xs' />}
            styles={(theme) => ({
              error: {
                color: '#F06595',
              },
              invalid: { color: '#F06595', borderColor: '#F06595' },
              input: {
                '&:focus': { borderColor: '#fbdc5c' },
              },
            })}
          />
          <Group position='apart' mt='lg' className={classes.controls}>
            <Anchor
              component={Link}
              to='/login'
              color='dimmed'
              size='sm'
              className={classes.controlAnchor}
            >
              <Center inline>
                <IconArrowLeft size={12} stroke={1.5} />
                <Box ml={5}>Kembali ke halaman login</Box>
              </Center>
            </Anchor>
            <Button
              type='submit'
              className={classes.control}
              disabled={loading ? true : false}
            >
              Cari Akun
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}
