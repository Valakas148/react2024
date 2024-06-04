import {IPostModel} from "./IPostModel";
import {ICommentModel} from "./ICommentModel";

export type IPostCommentsModel = IPostModel & {comments: ICommentModel[]}