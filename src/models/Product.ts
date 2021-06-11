import {User} from './User';
import {Ingredient} from './Ingredient';

export interface Product {
  _id?: String;
  userId?: User;
  name?: String;
  description?: String;
  image?: String;
  price?: String;
  currency?: String;
  location?: {
    fullAddress: {
      type: String;
    };
    address: {
      type: String;
    };
    postAddress: {
      type: String;
    };
    city: {
      type: String;
    };
    state: {
      type: String;
    };
    country: {
      type: String;
    };
    postcode: {
      type: String;
    };
    longitude: {
      type: Number;
    };
    latitude: {
      type: Number;
    };
  };

  time?: String;
  ingredient?: Ingredient[];
}
