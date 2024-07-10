
type IBenifitsProps = {
    title:string;
    condition:string;
    image:string
}

const Benifits = () => {
   

const items = [
    {
        title:"Cancellation & Return",
        condition:"If product not match",
        image:"https://i.ibb.co/BCtvd3g/vehicle.png"
    },
    {
        title:"Privacy & Policy",
        condition:"Check Before Dealing",
        image:"https://i.ibb.co/G95QW98/privacy.png"
    },
    {
        title:"EMI Policy",
        condition:"We provide 0% EMI facilities",
        image:"https://i.ibb.co/bWz4kWn/emi-policy.png"
    },
    {
        title:"Customer Support",
        condition:"Call us at 8801624243747 ",
        image:"https://i.ibb.co/K6jyYVm/Screenshot-2024-01-20-at-17-31-22-Othoba-com.png"
    }
   
]
    return (
        <div className="w-full lg:w-[90%] mb-10 mx-auto mt-7">
            <div className="grid grid-cols-1 m-5 md:grid-cols-2 lg:grid-cols-4 gap-5" >
                {
                    items.map((item:IBenifitsProps, index:number)=>(
                        <div key={index} className="flex px-7 py-5 rounded bg-white shadow hover:shadow-xl" >
                            <div className="flex  items-center">
                                <img className="w-9 h-9 " src={item.image} alt=""/>
                            </div>
                            <div className="ml-4 text-sm">
                                <p className="mb-2">{item.title}</p>
                                <p className="">{item.condition}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

          
        </div>
    );
};

export default Benifits;