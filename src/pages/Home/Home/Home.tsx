import HomeBanner from "../Banner/HomeBanner";
import ReferSection from "../Banner/ReferSection";
import TopProduct from "../TopProduct/TopProduct";
import PopularCategory from "../PopularCategory/PopularCategory";
import ShopGetMore from "../ShopGetMore/ShopGetMore";
import VegatableFruitsCategory from "../VegatableFruits/VegatableFruitsCategory";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import Review from "../Review/Review";
import Benifits from "../Benifits/Benifits";







const Home = () => {
    return (
        <div className="mt-20">
            <HomeBanner />
            <ReferSection />
            <Benifits />
            <PopularCategory />
            {/* <Navigate /> */}
            <TopProduct />
            <VegatableFruitsCategory /> 
            <VegatableFruitsCategory /> 
            <SpecialOffers />
            <ShopGetMore />
            <Review />
            {/* <HomeProduct /> */}
        </div>
    );
};

export default Home;