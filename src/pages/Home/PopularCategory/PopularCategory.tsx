import grocery from '../../../assets/images/category/grocery.jpeg'
import fruits from '../../../assets/images/category/fruits.jpeg'
import vagetable from '../../../assets/images/category/vagetable.jpeg'
import meat from '../../../assets/images/category/meat.jpeg'
import fish from '../../../assets/images/category/fish.jpeg'
import snacks from '../../../assets/images/category/snacks.jpeg'
import dairy from '../../../assets/images/category/dairy.jpeg'
import beverate from '../../../assets/images/category/beverate.jpeg'




const PopularCategory = () => {
  const categories = [
    {
      name: "Grocery",
      image: grocery
    },
    {
      name: "Fruits",
      image: fruits
    },
    {
      name: "Vagetable",
      image: vagetable
    },
    {
      name: "Meat",
      image: meat
    },
    {
      name: "Fish",
      image: fish
    },
    {
      name: "Snacks",
      image: snacks
    },
    {
      name: "Dairy",
      image: dairy
    },
    {
      name: "Beverate",
      image: beverate
    },
  ];
  return (
    <div>
      <h1 className="text-center my-5">Our popular category</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-11/12 mx-auto'>
        {
            categories.map((category, index) => (
                <div style={{ border: '2px solid' }} className='border-gray-300 shadow-lg rounded-lg' key={index}>
                    <div className='overflow-hidden m-5'>
                        <img className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 w-full rounded-lg h-56' src={category.image}/>
                    </div>
                    <p className='text-lg text-center font-bold mb-4'>{category.name}</p>

                </div>
            ))
        }
      </div>
    </div>
  );
};

export default PopularCategory;
