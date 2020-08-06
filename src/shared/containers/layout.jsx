import React from 'react'
import Select from 'react-select'
import layoutStyles from './layout.module.scss'
import logo from '../assets/images/logo.png'

export default function index({ children }) {
  return (
    <div>
      <nav className={layoutStyles.navbar}>
        <img alt='logo' src={logo} width='auto' height='18px' />
        <div className={layoutStyles.navbar_buttons}>
          <Language />
          <Burger />
        </div>
      </nav>
      {children}
    </div>
  )
}

function Language() {
  const options = [
    { value: 'en', label: 'EN' },
    { value: 'fr', label: 'FR' },
    { value: 'ru', label: 'RU' },
  ]

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      border: 'none',
      color: state.isSelected ? 'red' : 'blue',
      padding: 0,
    }),
    control: () => ({
      width: 40,
      height: 25,
      cursor: 'pointer',
      fontSize: '19px',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1
      const transition = 'opacity 300ms'

      return { ...provided, opacity, transition }
    },
  }

  return (
    <Select
      styles={customStyles}
      components={{ DropdownIndicator: () => null }}
      isSearchable={false}
      options={options}
      defaultValue={{ label: 'EN', value: 'en' }}
    />
  )
}

function Burger() {
  return (
    <div className={layoutStyles.burger}>
      <div className={layoutStyles.burger_stick}></div>
      <div className={layoutStyles.burger_stick}></div>
    </div>
  )
}
