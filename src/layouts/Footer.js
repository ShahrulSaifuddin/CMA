import React from 'react'

function Footer() {
  return (
    <footer>
        Shahrul Saifuddin @ {new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}
    </footer>
  )
}

export default Footer