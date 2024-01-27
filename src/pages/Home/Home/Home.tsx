import HomeBanner from "../Banner/HomeBanner";
import ReferSection from "../Banner/ReferSection";
import TopProduct from "../TopProduct/TopProduct";
import PopularCategory from "../PopularCategory/PopularCategory";
import ShopGetMore from "../ShopGetMore/ShopGetMore";
import VegatableFruitsCategory from "../VegatableFruits/VegatableFruitsCategory";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import Review from "../Review/Review";
import Benifits from "../Benifits/Benifits";
import WeProvideSection from "../../about/WeProvideSection";
import ContactForm from "../../Contact/ContactForm";
import OurTeam from "../../about/OurTeam";







const Home = () => {
    return (
        <div className="">
            <HomeBanner />
            <ReferSection />
            <Benifits />
            <PopularCategory />
            {/* <Navigate /> */}
            <TopProduct />
            <VegatableFruitsCategory /> 
            <VegatableFruitsCategory /> 
            <SpecialOffers />
            <WeProvideSection />
            <ShopGetMore />
            <ContactForm />
            <OurTeam />
            <Review />
            {/* <HomeProduct /> */}
        </div>
    );
};

export default Home;