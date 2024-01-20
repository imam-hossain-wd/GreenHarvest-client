
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
        <div className="w-[80%] mx-auto mt-10">
            <div className="flex justify-around">
                {
                    items.map((item:IBenifitsProps, index:number)=>(
                        <div key={index} className="flex items-center p-5 rounded" style={{border:"1px solid gray"}}>
                            <div>
                                <img className="w-10 h-10" src={item.image} alt=""/>
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