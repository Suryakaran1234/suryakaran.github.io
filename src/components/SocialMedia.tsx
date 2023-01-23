import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

import './SocialMedia.scss';

const socials = [
  {
    name: 'twitter',
    title: 'Twitter',
    link: 'https://twitter.com/Suryakran',
    icon: <BsTwitter />,
  },
  {
    name: 'facebook',
    title: 'Facebook',
    link: 'https://www.facebook.com/surykrn/',
    icon: <FaFacebookF />,
  },
  {
    name: 'linkedln',
    title: 'Linkedln',
    link: 'https://www.linkedin.com/in/suryakaransharma/',
    icon: <BsLinkedin />,
  },
  {
    name: 'instagram',
    title: 'Instagram',
    link: 'https://www.instagram.com/suryakran/',
    icon: <BsInstagram />,
  },
  {
    name: 'github',
    title: 'GitHub',
    link: 'https://github.com/Suryakaran1234',
    icon: <BsGithub />,
  },
];

const SocialMedia = () => {
  return (
    <div className='app__social'>
      {socials.map((social) => (
        <a href={social.link}>
          <div data-tip data-for={social.name}>
            <ReactTooltip
              id={social.name}
              place='right'
              effect='solid'
              arrowColor='#fff'
              className='skills-tooltip'
            >
              {social.title}
            </ReactTooltip>
            {social.icon}
          </div>
        </a>
      ))}
      {/* <div>
        <a href='https://www.facebook.com/surykrn/'>
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/suryakran/'>
          <BsInstagram />
        </a>
      </div> */}
    </div>
  );
};

export default SocialMedia;
