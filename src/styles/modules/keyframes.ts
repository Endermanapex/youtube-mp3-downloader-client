import { keyframes } from 'styled-components'

export const infiniteProgressbar = keyframes`
  0% {
    transform: translateX(-48%);
  }
  100% {
    transform: translateX(0);
  }
`

export const rotation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`
