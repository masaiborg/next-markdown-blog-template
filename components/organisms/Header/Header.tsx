import React from 'react'
import { useRouter } from 'next/router'
import { Anchor } from '@/components/atoms/Typography'
import { Nav } from '@/components/atoms/Nav'
import headerNavLinks from '@/data/headerNavLinks'
import { HeaderStyle, InnerStyle } from './style'
import Logo from './moon_logo.svg'

const Header: React.FC = () => {
  const router = useRouter()
  const handleClick = (href: string) => {
    router.push(`/${href}`)
  }
  return (
    <header css={HeaderStyle}>
      <div css={InnerStyle}>
        <Nav Items={headerNavLinks} onClickItem={handleClick} />
      </div>
    </header>
  )
}

export default Header
