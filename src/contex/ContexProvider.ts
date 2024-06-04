import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {createContext, useContext} from "react";
import {ICommentModel} from "../models/ICommentModel";


type StoreType = {
    usersStore: {
        allUsers: IUserModel[]
    },
    postsStore: {
        allPosts: IPostModel[]
    },
    commentsStore: {
        allComms: ICommentModel[]
    }
}


export const defaultValue:StoreType = {
    usersStore: {
        allUsers: []
    },
    postsStore: {
        allPosts: []
    },
    commentsStore: {
        allComms: []
    }
}


export const Contex = createContext<StoreType>(defaultValue);

export const useContexProvider = ():StoreType => useContext(Contex)