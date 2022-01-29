// import main from '../assets/images/main.svg'
import main2 from '../assets/images/main2.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
             Jobify allows you to quickly track job apps: Keep track of information on the companies that you are applying to, interviews you have had, and keep your job search organized, all in one place
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main2} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
