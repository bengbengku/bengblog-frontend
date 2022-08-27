import React from 'react'
import { IconExternalLink } from '@tabler/icons'
import { Badge, Button, createStyles, Text } from '@mantine/core'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  badge: {
    color: '#fbdc5c',
    backgroundColor: '#2C2E33',
  },
  button: {
    color: '#fff',
    borderColor: '#fff',
    marginRight: '3%',
  },
}))

export default function ResetHeader() {
  const { classes } = useStyles()
  return (
    <div className='reset_header_container'>
      <div className='reset_header_logo'>
        <Text
          color='dimmed'
          size='24px'
          weight={600}
          style={{
            fontFamily: 'Greycliff CF, sans-serif',
            color: '#fbdc5c',
            userSelect: 'none',
          }}
        >
          Bengblog
        </Text>
        <Badge
          color='gray'
          variant='outline'
          size='xs'
          className={classes.badge}
        >
          v1.1.0
        </Badge>
      </div>
      <Button
        component={Link}
        to='/login'
        variant='outline'
        leftIcon={<IconExternalLink size={12} />}
        className={classes.button}
      >
        Login
      </Button>
    </div>
  )
}
