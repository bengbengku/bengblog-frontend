import React from 'react'
import { IconPencilMinus } from '@tabler/icons'
import { MantineProvider, Badge, createStyles, Input } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  badge: {
    width: '90px',
    height: '35px',
    textAlign: 'center',
    background: '#262729',
    marginLeft: '11.5px',
    fontSize: '0.8125rem',
  },
}))

export default function TitlePost() {
  const { classes } = useStyles()
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
      }}
    >
      <Badge className={classes.badge}>Judul</Badge>
      <div className='input_title_wrap'>
        <Input
          icon={<IconPencilMinus size={16} />}
          variant='filled'
          placeholder='Tuliskan judul postingan...'
          spellCheck={false}
        />
      </div>
    </MantineProvider>
  )
}
