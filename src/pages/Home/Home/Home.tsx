import Swipper from "../../../components/Swipper/Swipper";
import HomeBanner from "../Banner/HomeBanner";
import HomeProduct from "../HomeProduct/HomeProduct";
import PopularCategory from "../PopularCategory/PopularCategory";

const Home = () => {
    return (
        <div className="mt-20">
            <HomeBanner />
            <Swipper />
            <HomeProduct />
            <PopularCategory />
        </div>
    );
};

export default Home;