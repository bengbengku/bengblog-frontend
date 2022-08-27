import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'

export default function Word({ theme, countChar, countWords }) {
  return (
    <div className='word_wrapper'>
      <div className='char_wrap'>
        <ThemeProvider theme={theme}>
          <Tooltip
            title='Jumlah karakter dalam tulisan'
            placement='bottom'
            arrow
          >
            <Badge color='yellow' badgeContent={countChar} max={999} showZero>
              <Chip label='KARAKTER' />
            </Badge>
          </Tooltip>
        </ThemeProvider>
      </div>
      <div className='word_wrap'>
        <ThemeProvider theme={theme}>
          <Tooltip title='Jumlah kata dalam tulisan' placement='bottom' arrow>
            <Badge color='yellow' badgeContent={countWords} max={999} showZero>
              <Chip label='KATA' />
            </Badge>
          </Tooltip>
        </ThemeProvider>
      </div>
    </div>
  )
}
