import Swipper from "../../../components/Swipper/Swipper";
import HomeBanner from "../Banner/HomeBanner";
import ReferSection from "../Banner/ReferSection";
import HomeProduct from "../HomeProduct/HomeProduct";
import ProductCarousel from "../HomeProduct/ProductCarousel";
import PopularCategory from "../PopularCategory/PopularCategory";


const Home = () => {
    return (
        <div className="mt-20">
            <HomeBanner />
            <ReferSection />
            <PopularCategory />
            <Swipper />
            <HomeProduct />
            <ProductCarousel/>
            {/* <PopularCategory /> */}
        </div>
    );
};

export default Home;