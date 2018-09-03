import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi Everyone, I'm Vincenzo.</h1>
    <p>This is my first time ever using or hearing about Gatsby.</p>
	<p>I have also been programming for approximately 4 years now,
	but have never competed in a single hackathon! My primary languages that I have used are
	python, Java, and C, but I dabble in other languages as well. I'm really interested in
	computer security, physics, mathematics, and fitness. I am currently in school to become
	a software engineer, so being able to attend this hackathon and getting the opportunity to 
	create something with other people would be great. Until then, I will keep improving my skills!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
