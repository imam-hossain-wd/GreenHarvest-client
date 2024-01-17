import Swipper from "../../../components/Swipper/Swipper";
import HomeBanner from "../Banner/HomeBanner";
import ReferSection from "../Banner/ReferSection";
// import HomeProduct from "../HomeProduct/HomeProduct";
import TopProduct from "../HomeProduct/ProductCarousel";
import PopularCategory from "../PopularCategory/PopularCategory";
import VegatableFruitsCategory from "./VegatableFruits/VegatableFruitsCategory";


const Home = () => {
    return (
        <div className="mt-20">
            <HomeBanner />
            <ReferSection />
            <PopularCategory />
            <TopProduct />
            <VegatableFruitsCategory />
            <Swipper />
            {/* <HomeProduct /> */}
            {/* <PopularCategory /> */}
        </div>
    );
};

export default Home;