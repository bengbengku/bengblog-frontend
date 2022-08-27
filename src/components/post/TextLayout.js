import React from 'react'
import { Textarea, MantineProvider, Badge } from '@mantine/core'

export default function TextLayout({ descText, descPlaceholder }) {
  return (
    <div className='des_wrapper'>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
        }}
      >
        <Badge
          className={
            descText === 'Keywords' ? 'badge_wrap key_width' : 'badge_wrap'
          }
        >
          {descText}
        </Badge>
        <Textarea
          placeholder={descPlaceholder}
          autosize
          minRows={2}
          maxRows={4}
          variant='filled'
          spellCheck={false}
        />
      </MantineProvider>
    </div>
  )
}
