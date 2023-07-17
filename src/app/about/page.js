import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
      <h1>about page</h1>

      <br/>
      <Link href='/about/aboutcollege'>Go to about College</Link>
      <br/>
      <Link href='/about/aboutStudent'>Go to about College</Link>
    </div>
  )
}

export default About
