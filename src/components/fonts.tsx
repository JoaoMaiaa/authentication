import { Global } from '@emotion/react'
const Fonts = () => {
  return (
    <>
      <Global
        styles={`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;500;700&display=swap');
        `}
      />
    </>
  )
}

export default Fonts
