import Particles from 'react-tsparticles'

//particle config files

const ParticlesEffect = (props) => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-0'>
      <Particles style={{ position: 'absolute', top: 0 }} params={props.config} />
    </div>
  )
}

export default ParticlesEffect