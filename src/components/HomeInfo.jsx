import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I&apos;m
        <span className='font-semibold mx-2 text-white'>RYO</span>
        👋
        <br />
        A Software Engineer
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Please check about me.
          <br />
          I glad if you&apos;re interested in me.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          I created a few pages by myself.
          <br />
          By all means, please try and play it.
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <p className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        If you want to contact me,
        <br />
        please click this <a className='underline font-bold' href="mailto:jane.doe3wtp4649@gmail.com">link</a> and send an email.
      </p>
    );
  }

  return null;
};

export default HomeInfo;
