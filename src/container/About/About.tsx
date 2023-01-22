import './About.scss';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from 'client';
import { AppWrap, MotionWrap } from 'wrapper';

type Props = {};

// --------Static Data-----------
// const abouts = [
//   {
//     title: 'Web Developer',
//     description: 'I am a good web developer',
//     imgUrl: images.about01,
//   },
//   {
//     title: 'Web Designer',
//     description: 'I am a good web developer',
//     imgUrl: images.about02,
//   },
//   {
//     title: 'UI/UX',
//     description: 'I am a good web developer',
//     imgUrl: images.about03,
//   },
//   {
//     title: 'Backend Developer',
//     description: 'I am a good web developer',
//     imgUrl: images.about04,
//   },
// ];
// --------------------------------------

const About = (props: Props) => {
  const [abouts, setAbouts] = useState<
    Array<{
      title: string;
      description: string;
      imgUrl: string;
    }>
  >([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className='head-text'>
        I know that <span>Good Apps</span> <br /> means <span>Good business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');
