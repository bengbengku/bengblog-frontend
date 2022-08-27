import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import CreateRoundedIcon from '@mui/icons-material/CreateRounded'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import PersonIcon from '@mui/icons-material/Person'
import Tooltip from '@mui/material/Tooltip'
import { Return } from '../../svg'
import Word from './Word'
import TextLayout from './TextLayout'
import { RichTextEditor, Editor } from '@mantine/rte'
import {
  Text,
  TypographyStylesProvider,
  Badge,
  createStyles,
} from '@mantine/core'
import Category from './Category'
import TitlePost from './TitlePost'
import LogoSecondary from '../logoSecondary/LogoSecondary'

const useStyles = createStyles((theme) => ({
  badge: {
    color: '#fbdc5c',
    backgroundColor: '#2C2E33',
  },
}))

export default function PostNavbar({ user }) {
  const [text, setText] = useState('')
  const editorRef = useRef(Editor)
  const [countChar, setCountChar] = useState(0)
  const [countWords, setCountWords] = useState(0)

  useEffect(() => {
    let char = text.replace(/<[^>]+>/g, '')
    setCountChar(char.length)
    let charSplit = char.split(' ').length
    setCountWords(charSplit)
    if (char === '') {
      return setCountWords(0)
    }
  }, [text])
  useEffect(() => {
    editorRef.current.focus()
  }, [])

  const theme = createTheme({
    palette: {
      yellow: {
        main: '#fbdc5c',
        contrastText: '#292a2d',
      },
    },
  })

  const { classes } = useStyles()

  return (
    <>
      <div className='post_navbar'>
        <div className='post_nav_left'>
          <Link to='/'>
            <Return color='#fff' />
          </Link>
        </div>
        <div className='post_nav_right'>
          <div className='nav_right_side_left'>
            <LogoSecondary />
          </div>
          <div className='nav_right_side_right'>
            <ThemeProvider theme={theme}>
              <Stack direction='row' spacing={1}>
                <Tooltip
                  title={
                    user && `hai ${user.username}, anda memiliki akses menulis`
                  }
                  placement='left'
                >
                  <Chip
                    icon={<PersonIcon fontSize='small' />}
                    label='PENULIS'
                    color='yellow'
                    variant='outlined'
                  />
                </Tooltip>

                <Button
                  variant='contained'
                  size='small'
                  endIcon={<CreateRoundedIcon />}
                  color='yellow'
                >
                  Posting
                </Button>
              </Stack>
            </ThemeProvider>
          </div>
        </div>
      </div>
      <div className='post_nav_main'>
        <div className='main_left'>
          <RichTextEditor
            spellCheck={false}
            value={text}
            onChange={setText}
            placeholder='Mulai menulis cerita ...'
            ref={editorRef}
            className='text_editor_wrapper scrollbar2'
            styles={{
              toolbar: {
                backgroundColor: '#2c2e33',
                borderBottom: '2.2px solid #242528',
              },
              toolbarControl: {
                backgroundColor: '#fbdc5c',
                borderColor: '#202124',
                '&:hover': {
                  backgroundColor: '#FCC419',
                },
              },
            }}
            controls={[
              ['bold', 'italic', 'underline', 'link', 'image'],
              ['unorderedList', 'h1', 'h2', 'h3'],
              ['sup', 'sub'],
              ['alignLeft', 'alignCenter', 'alignRight'],
            ]}
          />
        </div>
        <div className='main_right'>
          <Word theme={theme} countChar={countChar} countWords={countWords} />
          <div className='text_layout_wrapper scrollbar2'>
            <div className='splitter_side'></div>
            <TitlePost />
            <div className='splitter_side'></div>
            <TextLayout
              descText='Deskripsi'
              descPlaceholder='Tambahkan deskripsi singkat...'
            />
            <div className='splitter_side'></div>
            <TextLayout
              descText='Keywords'
              descPlaceholder='Tambahkan keywords...'
            />
            <div className='splitter_side'></div>
            <Category />
            <TypographyStylesProvider>
              <div dangerouslySetInnerHTML={{ __html: text }} />
            </TypographyStylesProvider>
          </div>
        </div>
      </div>
    </>
  )
}
