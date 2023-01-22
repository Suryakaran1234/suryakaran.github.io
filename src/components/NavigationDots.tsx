interface Props {
  active: string;
}

const NavigationDots = ({ active }: Props) => {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
        (item, index) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            href={`#${item}`}
            key={index + item}
            className='app__navigation-dot'
            style={active === item ? { backgroundColor: '#313BAC' } : {}}
          ></a>
        ),
      )}
    </div>
  );
};

export default NavigationDots;
