import React from 'react'


interface HeaderProps {
    children: React.ReactNode;

}


export const Header: React.FC<HeaderProps> = ({children}) => {
  return (
    <div>Header</div>
  )
}
