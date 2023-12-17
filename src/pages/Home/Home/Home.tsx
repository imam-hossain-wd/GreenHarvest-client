import Swipper from "../../../components/Swipper/Swipper";
// import Slider from "../../../components/slider/Slider";
import HomeBanner from "../Banner/HomeBanner";
import Product from "../Product/Product";

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Swipper />
            {/* <Slider /> */}
            <Product />
        </div>
    );
};

export default Home;