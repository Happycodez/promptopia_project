import React from 'react' 

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img
                    src='/assets/favicon.ico'
                    alt='logo'
                    width={13}
                    height={10}
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              This is nav
            </ul>
        </nav>
    </header>
  )
}

export default Nav
