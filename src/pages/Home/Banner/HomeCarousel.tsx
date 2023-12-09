import { Carousel } from "antd";

import slide1 from '../../../assets/images/slide1.jpg'
import slide2 from '../../../assets/images/slide2.jpg'
import slide3 from '../../../assets/images/slide3.jpg'
import slide4 from '../../../assets/images/slide4.jpg'
import slide5 from '../../../assets/images/slide5.jpg'



const HomeCarousel = () => {

    const contentStyle: React.CSSProperties = {
        height: '700px',
        width:'100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        position: 'relative',
      };
      
      const textContainerStyle: React.CSSProperties = {
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };

      const courselItems = [
        {"image":slide1 },
        {"image":slide2 },
        {"image":slide3 },
        {"image":slide4 },
        {"image":slide5 },
      ]

      const contents = courselItems && courselItems.map((item, index )=> (
        <div key={index} className=''>
        <h3 style={contentStyle}>
          <img style={{width:"100%", height:"100vh"}} className='w-full h-full' src={item.image} alt='home banner' />

          <div style={textContainerStyle}>
            
          </div>
        </h3>
      </div>
      ))


    return (
        <div className='-mt-16 lg:mb-0 bg-gradient-to-tr from-black to-gray-900'>
    <Carousel autoplay >
      {contents}
    </Carousel>
  </div>
    );
};

export default HomeCarousel;