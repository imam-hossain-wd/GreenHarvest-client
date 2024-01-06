import Swipper from "../../../components/Swipper/Swipper";
import HomeBanner from "../Banner/HomeBanner";
import HomeProduct from "../HomeProduct/HomeProduct";
import PopularCategory from "../PopularCategory/PopularCategory";
import Onlineshopping from "../onlineShopping/Onlineshopping";

const Home = () => {
    return (
        <div className="mt-20">
            <HomeBanner />
            <Swipper />
            <HomeProduct />
            <PopularCategory />
            <Onlineshopping />
        </div>
    );
};

export default Home;