import React, { useState } from 'react'
import {
  Paper,
  MantineProvider,
  createStyles,
  Stack,
  Title,
  Text,
} from '@mantine/core'
import LinearProgress from '@mui/material/LinearProgress'

export default function ActivateFormInfo({ type, header, text, loading }) {
  const useStyles = createStyles((theme) => ({
    popup: {
      width: '100%',
      backgroundColor: '#3a3b3c',
    },
    text: {
      color: type === 'success' ? '#fbdc5c' : '#e86aa8',
    },
    textBottom: {
      color: '#fff',
    },
  }))
  const { classes } = useStyles()
  return (
    <>
      <div className='popup'>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'dark',
          }}
        >
          <Paper shadow='xs' p='md' className={classes.popup}>
            <Stack spacing='md'>
              <Title order={3}>
                <Text className={classes.text} inherit component='span'>
                  {header}
                </Text>
              </Title>
              <Title order={4}>
                <Text className={classes.textBottom} inherit component='span'>
                  {text}
                </Text>
              </Title>
            </Stack>
          </Paper>
        </MantineProvider>
      </div>
      {loading && <LinearProgress color='inherit' />}
    </>
  )
}
