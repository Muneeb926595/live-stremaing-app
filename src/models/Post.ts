import {User} from './User';
import {Ingredient} from './Ingredient';

export interface Post {
  _id?: String;
  userId?: User;
  name?: String;
  description?: String;
  image?: String;
  recipeStepValues?: String[];
  likes?: any;
  time?: String;
  tags?: any;
  video?: String;
  mediaFiles?: [{type: String}];
  postType?: String;
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
  ingredient?: Ingredient[];
  history?: any;
}
