import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

function Navbar() {
  return (
    <div className='flex gap-10 justify-center items-center h-[10vh] w-full'>
        <Link to='/videos'>
      <Button variant='ghost' size='lg'>
        Videos
      </Button>
        </Link>
        <Link to='/recommendations'>
      <Button variant='ghost' size='lg'>
        Recommendations
      </Button>
        </Link>
        <Link to='/quiz'>
      <Button variant='ghost' size='lg'>
        Quiz
      </Button>
        </Link>
    </div>
  )
}

export default Navbar
