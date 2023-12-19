import Swipper from "../../../components/Swipper/Swipper";
import HomeBanner from "../Banner/HomeBanner";
import HomeProduct from "../HomeProduct/HomeProduct";
import PopularCategory from "../PopularCategory/PopularCategory";

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Swipper />
            <HomeProduct />
            <PopularCategory />
        </div>
    );
};

export default Home;