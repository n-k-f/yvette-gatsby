import React from 'react'
import Link from 'gatsby-link'
import releases from '../data/releases'
import Audio from './homepage/Audio'
import Hero from './homepage/Hero'
import heroImage from '../assets/Hero.jpg'
import Shows from './homepage/Shows'
import Info from './homepage/Info'
import bandPhoto from '../assets/yvette_band_photo.jpg'

const IndexPage = () => (
  <div>
    <Hero 
      backgroundImage={heroImage}
      primaryText="New Album Coming Soon"
    />


    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> */}



    <Shows
      showsTitle="Shows"
      showsUpcoming="Upcoming Shows"
      showsUpcomingTable
      showsPast="Past Shows"
    />
    <Audio 
      audioTitle="Audio"
      releases={releases} 
    />
    <Info
      infoTitle="Info"
      infoImage={bandPhoto}
    />
  </div>
)

export default IndexPage
