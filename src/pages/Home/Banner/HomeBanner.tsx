
// import HomeCarousel from './HomeCarousel';
import Banner from '../../../assets/images/banner-image.jpg'
// import MySlider from '../../../components/Slick/Slick';
// import App from '../../../components/Swipper/Swipper';



const HomeBanner = () => {
    return (
        <div className="w-full mt-12">
          <img src={Banner} className='w-full h-screen' />
      {/* <HomeCarousel /> */}
      {/* <MySlider /> */}
      <div className='my-20'>
      {/* <App /> */}
      </div>
    </div>
    );
};

export default HomeBanner;