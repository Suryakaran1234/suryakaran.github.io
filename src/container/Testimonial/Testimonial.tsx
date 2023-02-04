/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from 'wrapper';
import { urlFor, client } from 'client';
import './Testimonial.scss';

type TestimonialType = Array<{
  imageurl: string;
  feedback: string;
  name: string;
  company: string;
}>;

type BrandType = Array<{
  _id: string;
  name: string;
  imgUrl: string;
  brandLink: string;
}>;

const Testimonial = () => {
  const [brands, setBrands] = useState<BrandType>([]);
  const [testimonials, setTestimonials] = useState<TestimonialType>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(test.imageurl)} alt='testimonial' />
            <div className='app__testimonial-content'>
              <p className='p-text'>{test.feedback}</p>
              <div>
                <h4 className='bold-text'>{test.name}</h4>
                <h5 className='p-text'>{test.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonial-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <a href={brand.brandLink}>
              <img src={urlFor(brand.imgUrl)} alt={brand.name} />
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonials',
  'app__primarybg',
);
