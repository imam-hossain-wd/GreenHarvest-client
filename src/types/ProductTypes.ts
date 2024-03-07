export type IProduct = {
    _id?: string;
    name: string;
    category: string;
    netWeight:string;
    availability:boolean;
    price: number;
    quantity: number;
    image:string;
    description: string;
    updatedAt?: string;
    createdAt?: string;
  };

  export type IReview ={
    id?:string;
    userName:string;
    rating:number;
    title:string;
    productName:string;
    userEmail:string;
    userId:string;
    comment:string;
}

export type IProductProps = {
  name: string;
  image: string;
  href: string;
};
