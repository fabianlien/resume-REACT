import React from 'react'
import PersonalInfo from '../components/PersonalInfo'
import About from '../components/About'
import useWindowDimensions from '../hooks/useWindowDimensions'

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="row">
      {(width > 767) ? (
        <>
          <PersonalInfo/>
          <About />
        </>
      ) : (
        <>
          <About />
          <PersonalInfo />
        </>
      )}

    </div>
  )
}

export default Home