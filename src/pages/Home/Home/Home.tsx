import HomeBanner from "../Banner/HomeBanner";
import ReferSection from "../Banner/ReferSection";
import TopProduct from "../TopProduct/TopProduct";
import PopularCategory from "../PopularCategory/PopularCategory";
import ShopGetMore from "../ShopGetMore/ShopGetMore";
import VegatableFruitsCategory from "../VegatableFruits/VegatableFruitsCategory";
import SpecialOffers from "../SpecialOffers/SpecialOffers";




const Home = () => {
    return (
        <div className="mt-20">
            <HomeBanner />
            <ReferSection />
            <PopularCategory />
            <TopProduct />
            <VegatableFruitsCategory /> 
            <VegatableFruitsCategory /> 
            <SpecialOffers />
            <ShopGetMore />
            {/* <HomeProduct /> */}
        </div>
    );
};

export default Home;