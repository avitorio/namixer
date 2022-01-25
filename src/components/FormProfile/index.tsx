import { useState } from 'react'
import { useRouter } from 'next/router'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Popup from 'components/Popup'

import * as S from './styles'
import { event } from 'utils/ga'

export type FormProfileProps = {
  username?: string
  email?: string
  id?: string
  session?: Session
}

const FormProfile = ({ email, username, id, session }: FormProfileProps) => {
  const { push } = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleOutboundLink = (target: HTMLAnchorElement) => {
    event({
      action: 'outbound_link',
      category: `footer-social`,
      label: `${target.getAttribute('data-label')}`,
      value: 0
    })
  }

  const handleOpenPopup = (event: React.FormEvent) => {
    event.preventDefault()
    setIsOpen(true)
  }

  const handleDeleteAccount = async (event: React.FormEvent) => {
    event.preventDefault()
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.jwt}`
      }
    })

    const data = await signOut({ redirect: false, callbackUrl: '/' })
    push(data.url)
  }

  return (
    <>
      {isOpen && (
        <Popup setIsOpen={setIsOpen} isOpen={isOpen}>
          <h2>Thanks for trying Namixer.com</h2>
          <p>
            Was it a missing feature or a bug? <br />
            If so, please, reach out to me on{' '}
            <a
              href="https://twitter.com/andrevitorio"
              target="_blank"
              rel="noreferrer"
              data-label="twitter"
              onClick={(e) => handleOutboundLink(e.currentTarget)}
            >
              Twitter
            </a>{' '}
            and{' '}
            <a
              href="https://linkedin.com/in/andrevitorio"
              target="_blank"
              rel="noreferrer"
              data-label="linkedin"
              onClick={(e) => handleOutboundLink(e.currentTarget)}
            >
              LinkedIn
            </a>
            .<br />
          </p>
          <Button
            size="medium"
            onClick={(event: React.FormEvent) => handleDeleteAccount(event)}
          >
            Delete Account
          </Button>
        </Popup>
      )}
      <Heading lineBottom color="black" size="small">
        My profile
      </Heading>

      <S.Form>
        <TextField
          name="username"
          placeholder="Username"
          label="Username"
          initialValue={username}
        />

        <TextField
          name="email"
          type="email"
          placeholder="E-mail"
          initialValue={email}
          label="E-mail"
          disabled
        />

        <S.ButtonContainer>
          <Link href={`/forgot-password?email=${email}`} passHref>
            <Button size="medium" as="a">
              Reset Password
            </Button>
          </Link>
          <S.ButtonContainer>
            <Button
              minimal
              size="medium"
              onClick={(event: React.FormEvent) => handleOpenPopup(event)}
            >
              Delete Account
            </Button>
          </S.ButtonContainer>
        </S.ButtonContainer>
      </S.Form>
    </>
  )
}

export default FormProfile
