import React from 'react'
import { Stepper, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  stepper: {
    width: '45vw',
    position: 'absolute',
    top: '-50px',
    left: '27%',
    transform: 'translate(5px,200px)',
  },
}))

export default function StepperReset({ step }) {
  const { classes } = useStyles()
  return (
    <Stepper
      iconSize={32}
      color='pink.5'
      active={step}
      size={15}
      className={classes.stepper}
      breakpoint='sm'
    >
      <Stepper.Step label='Langkah 1' description='Cari akun' color='pink.5' />
      <Stepper.Step
        label='Langkah 2'
        description='Konfirmasi akun'
        color='pink.5'
      />
      <Stepper.Step
        label='Langkah 3'
        description='Kode Verifikasi'
        color='pink.5'
      />
      <Stepper.Step label='Langkah 4' description='Final' color='pink.5' />
    </Stepper>
  )
}
