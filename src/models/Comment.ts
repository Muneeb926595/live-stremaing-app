import {User} from './User';

export interface Comment {
  _id?: string;
  userId?: User;
  postId?: string;
  postType?: string;
  comment?: any;
  taggedUsers?: any;
}
