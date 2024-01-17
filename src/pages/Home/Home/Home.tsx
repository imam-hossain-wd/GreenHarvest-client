import Swipper from "../../../components/Swipper/Swipper";
import HomeBanner from "../Banner/HomeBanner";
import ReferSection from "../Banner/ReferSection";
import HomeProduct from "../HomeProduct/HomeProduct";
import PopularCategory from "../PopularCategory/PopularCategory";


const Home = () => {
    return (
        <div className="mt-20">
            <HomeBanner />
            <ReferSection />
            <Swipper />
            <HomeProduct />
            {/* <PopularCategory /> */}
        </div>
    );
};

export default Home;