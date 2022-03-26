
const Logo = ({ theme = 'light' }) => {
  return (
    <h1 className={`fixed left-4 top-8 text-dark dark:text-light font-pacifico text-[1.5em] font-bold z-[3]
      ${theme === 'light' ? 'text-dark' : 'text-light'}
      lg:left-8 lg:text-[2em]`}
    >
      Minu
    </h1>
  )
}

export default Logo