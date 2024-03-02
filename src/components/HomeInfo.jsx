import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I'm <span className='font-semibold mx-2 text-white'>RYO</span>
      <br />
      A software engineer
    </h1>
  ),
  2: (
    <InfoBox
      text="About me"
      link="/about"
      btnText="Read about me"
    />
  ),
  3: (
    <InfoBox
      text="About projects"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Contact me"
      link="/contact"
      btnText="Contact me"
    />
  )
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo