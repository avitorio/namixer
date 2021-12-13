import { useEffect } from 'react'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'

export type PopupProps = {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const Popup = ({ children, isOpen, setIsOpen }: PopupProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Content aria-hidden={!isOpen}>
        <S.IconWrapper>
          <CloseIcon
            aria-label="Close Popup"
            onClick={() => setIsOpen(false)}
          />
        </S.IconWrapper>
        {children}
      </S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </S.Wrapper>
  )
}

export default Popup
