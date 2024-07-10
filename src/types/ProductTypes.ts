/* eslint-disable @typescript-eslint/no-explicit-any */
export type IProduct = {
  _id?: string;
  name: string;
  category: string;
  netWeight: string;
  availability: boolean;
  price: number;
  quantity: number;
  image: string;
  description: string;
  updatedAt?: string;
  createdAt?: string;
};

export type IReview = {
  id?: string;
  userName: string;
  rating: number;
  title: string;
  productName: string;
  userEmail: string;
  userId: string;
  comment: string;
};

export type IProductProps = {
  name: string;
  image: string;
  href: string;
};

export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode?: number;
  message: string;
  success?: string;
  errorMessages: IGenericErrorMessage[];
};

//password type
export type IPasswordProps = {
  oldPassword: string;
  newPassword1: string;
  newPassword2: string;
};
