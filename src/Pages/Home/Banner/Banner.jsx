
import banner1 from "../../../Assets/banner/Main-Banner-1-1903x801.jpg"
import banner2 from "../../../Assets/banner/mainbanner1-1920x750.jpg"
import banner3 from "../../../Assets/banner/mainbanner2-1920x750.jpg"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
 
    return (
      
      <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={1000}
    className=" h-[80vh]"
      
    >
      <div data-src={banner1} />
      <div data-src={banner2} />
      <div data-src={banner3} />
    </AutoplaySlider>

    );
};

export default Banner;