import React from 'react'
import InfoPersonal from '../components/home/InfoPersonal'
import About from '../components/home/About'
import useWindowDimensions from '../hooks/useWindowDimensions'

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="row">
      {(width > 767) ? (
        <>
          <InfoPersonal/>
          <About />
        </>
      ) : (
        <>
          <About />
          <InfoPersonal />
        </>
      )}

    </div>
  )
}

export default Home