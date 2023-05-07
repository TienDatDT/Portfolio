import React, { ReactNode } from 'react'

interface MyChildren{
    children: React.ReactNode;
    className: React.ReactNode
}

const Layout: React.FC <MyChildren>= ({children, className}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-white p-32 ${className}`}>
        {children}
    </div>
  )
}

export default Layout