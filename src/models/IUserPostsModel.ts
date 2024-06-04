import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";


export type IUserPostsModelType = IUserModel & {posts: IPostModel[]};
