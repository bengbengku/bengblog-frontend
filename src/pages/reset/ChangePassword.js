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
  Center,
  PasswordInput,
  Box,
  Progress,
  Group,
} from '@mantine/core'
import { useInputState } from '@mantine/hooks'
import { IconLock, IconCheck, IconX } from '@tabler/icons'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  title: {
    marginTop: '8rem',
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

function PasswordRequirement({ meets, label, strength }) {
  return (
    <Text color={meets ? '#fbdc5c' : '#e86aa8'} mt={5} size='sm'>
      <Center inline>
        {meets ? (
          <IconCheck size={14} stroke={1.5} />
        ) : (
          <IconX size={14} stroke={1.5} />
        )}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  )
}

const requirements = [
  { re: /[0-9]/, label: 'Berisi angka' },
  { re: /[a-z]/, label: 'Berisi huruf kecil' },
  { re: /[A-Z]/, label: 'Berisi huruf besar' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Berisi spesial simbol' },
]

function getStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1
    }
  })

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0)
}

export default function ChangePassword({ setCode, code }) {
  const { classes } = useStyles()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [value, setValue] = useInputState('')
  const strength = getStrength(value)
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
      strength={strength}
    />
  ))
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ bar: { transitionDuration: '0ms' } }}
        value={
          value.length > 0 && index === 0
            ? 100
            : strength >= ((index + 1) / 4) * 100
            ? 100
            : 0
        }
        color={strength > 80 ? 'teal' : strength > 50 ? '#fbdc5c' : '#e86aa8'}
        key={index}
        size={4}
      />
    ))

  return (
    <Container>
      <Title className={classes.title} align='center'>
        Ganti Password
      </Title>
      <Text color='dimmed' size='sm' align='center'>
        Silahkan masukan kode verifikasi. Cek email anda.
      </Text>
      <Paper withBorder shadow='md' p={30} radius='md' mt='md'>
        <PasswordInput
          value={value}
          onChange={setValue}
          placeholder='Password Baru'
          label='Password Baru'
          required
          styles={(theme) => ({
            root: {
              width: '270px',
            },
          })}
        />

        <Group spacing={5} grow mt='xs' mb='md'>
          {bars}
        </Group>

        <PasswordRequirement
          label='Minimum 6 karakter'
          meets={value.length > 5}
        />
        {checks}
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
