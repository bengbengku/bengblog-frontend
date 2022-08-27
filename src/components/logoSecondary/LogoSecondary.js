import { Badge, createStyles, Text } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
  badge: {
    color: '#fbdc5c',
    backgroundColor: '#2C2E33',
  },
}))

export default function LogoSecondary() {
  const { classes } = useStyles()
  return (
    <>
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
      <Badge color='gray' variant='outline' size='xs' className={classes.badge}>
        v1.1.0
      </Badge>
    </>
  )
}
