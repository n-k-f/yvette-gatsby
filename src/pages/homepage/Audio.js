import React from 'react'
import "./Audio.css"

 const Release = ({
    albumName,
    artwork,
    releaseDate,
    iframeEmbed,
    soundCloudLink,
    spotifyLink,
    iTunesLink
  }) => {
    return (
      <div className="release_section">
        <img className="artwork" src={artwork}/>
        
        <h3 className="subsection_title">{albumName}</h3>
        <time>{releaseDate}</time>
        
        <div>
          <iframe className="gatsby-iframe-wrap" src={iframeEmbed}>
          </iframe>
        </div>

        <div>
          <a href={soundCloudLink}>Soundcloud</a>
          <a href={spotifyLink}>Spotify</a>
          <a href={iTunesLink}>iTunes</a>
        </div>
      </div>
    )
  }
  
  const Audio = ({ 
    audioTitle,
    releases 
  }) => {
    return (
      <div>
        <div>
          <h2 className="section_title">
              {audioTitle}
          </h2>
        </div>
        <div className="releases_container">
          {releases.map(release => {
            return (
              <Release
                  albumName={release.albumName}
                  artwork={release.artwork}
                  releaseDate={release.releaseDate}
                  iframeEmbed={release.iframeEmbed}
                  soundCloudLink={release.soundCloudLink}
                  spotifyLink={release.spotifyLink}
                  iTunesLink={release.iTunesLink}
              />
            )
          })
        }
        </div>
      </div>
    )
  }

  export default Audio