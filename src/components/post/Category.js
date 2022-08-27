import React from 'react'
import {
  NativeSelect,
  MantineProvider,
  Badge,
  createStyles,
} from '@mantine/core'
import { IconHash } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
  category: {
    padding: '0 20px 20px 10px',
  },
  badge: {
    width: '90px',
    height: '35px',
    textAlign: 'center',
    background: '#262729',
    marginLeft: '11.5px',
    fontSize: '0.8125rem',
  },
}))

export default function Category() {
  const { classes } = useStyles()
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
      }}
    >
      <Badge className={classes.badge}>Channel</Badge>
      <NativeSelect
        placeholder='Pilih Channel'
        data={['React', 'Angular', 'Svelte', 'Vue']}
        icon={<IconHash size={14} />}
        variant='filled'
        className={classes.category}
      />
    </MantineProvider>
  )
}
