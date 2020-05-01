import React, { useState } from 'react'
import { NextPage } from 'next'
import { FaMoon, FaRegMoon } from 'react-icons/fa'
import { AppStyles } from './styles'

const Layout: NextPage<{}> = ({ children }) => {
  const [toggleMode, setToggleMode] = useState(true)

  const toggle = () => {
    setToggleMode(!toggleMode)
    const d = document.documentElement
    if (d.classList.contains('theme-dark')) {
      d.classList.remove('theme-dark')
    } else {
      d.classList.add('theme-dark')
    }
  }

  return (
    <React.Fragment>
      <AppStyles>
        <button
          className="absolute right-0 mr-2 focus:outline-none rounded-full inline-flex items-center"
          onClick={toggle}
        >
          {toggleMode ? <FaMoon /> : <FaRegMoon />}
        </button>
        <main>{children}</main>
        <footer>
          <a
            href="https://github.com/rjoydip"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by rjoydip
          </a>
        </footer>
      </AppStyles>
      <style jsx>{`
        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </React.Fragment>
  )
}
export { Layout }
