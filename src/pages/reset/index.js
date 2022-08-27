import React, { useState } from 'react'
import { MantineProvider, Text } from '@mantine/core'
import Reset from './Reset'
import ResetHeader from './ResetHeader'
import './style.css'
import StepperReset from './StepperReset'
import SendEmailReset from './SendEmailReset'
import { useSelector } from 'react-redux'
import CodeVerification from './CodeVerification'
import ChangePassword from './ChangePassword'

export default function ResetContainer() {
  const { user } = useSelector((state) => ({ ...state }))
  const [visible, setVisible] = useState(3)
  const [step, setStep] = useState(1)
  const [code, setCode] = useState('')
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        components: {
          Container: {
            styles: {
              root: {
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              },
            },
          },
        },
        colorScheme: 'dark',
      }}
    >
      <ResetHeader />
      <StepperReset step={step} />
      {visible === 0 && <Reset setVisible={setVisible} setStep={setStep} />}
      {visible === 1 && <SendEmailReset setVisible={setVisible} user={user} />}
      {visible === 2 && (
        <CodeVerification
          setVisible={setVisible}
          code={code}
          setCode={setCode}
        />
      )}
      {visible === 3 && <ChangePassword setVisible={setVisible} user={user} />}
    </MantineProvider>
  )
}
