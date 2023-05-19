
import banner1 from "../../../Assets/banner/Main-Banner-1-1903x801.jpg"
import banner2 from "../../../Assets/banner/mainbanner1-1920x750.jpg"
import banner3 from "../../../Assets/banner/mainbanner2-1920x750.jpg"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
 
    return (
      
    //   <AutoplaySlider
    //   play={true}
    //   cancelOnInteraction={false} // should stop playing on user interaction
    //   interval={100000}
    //   className="w-1/3 md:w-full mx-auto" // Adjust the responsive classes accordingly
    // >
    //   <div className="w-full">
    //     <img className="w-full h-full  max-h-96 md:max-h-none" src={banner1} alt="Banner 1" />
    //   </div>
    //   <div className="w-full">
    //     <img className="w-full h-full object-contain max-h-96 md:max-h-none" src={banner2} alt="Banner 2" />
    //   </div>
    //   <div className="w-full">
    //     <img className="w-full h-full object-contain max-h-96 md:max-h-none" src={banner3} alt="Banner 3" />
    //   </div>
    // </AutoplaySlider>
    /*md:h-[78vh] h-[40vh]*/
<AutoplaySlider
  play={true}
  cancelOnInteraction={false} // should stop playing on user interaction
  interval={1000}
  className="w-full sm:w-2/3 mx-auto md:h-[78vh] h-[40vh]"
>
  <div className="w-full">
    <img className="w-full h-full object-cover" src={banner1} alt="Banner 1" />
  </div>
  <div className="w-full">
    <img className="w-full h-full object-cover" src={banner2} alt="Banner 2" />
  </div>
  <div className="w-full">
    <img className="w-full h-full object-cover" src={banner3} alt="Banner 3" />
  </div>
</AutoplaySlider>

// <AutoplaySlider
// play={true}
// cancelOnInteraction={false} // should stop playing on user interaction
// interval={1000}
// className="h-[80vh]"

// >
// <div  data-src={banner1} />
// <div  data-src={banner2} />
// <div  data-src={banner3} />
// </AutoplaySlider>
    );
};

export default Banner;