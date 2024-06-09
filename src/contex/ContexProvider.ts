import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {create} from "zustand";


type StoreType = {
    usersStore: {
        allUsers: IUserModel[],
        loadUser: (user: IUserModel[])=> void,
        favoriteUser: IUserModel | null,
        setFavorite: (obj: IUserModel)=> void
    },
    postsStore: {
        allPosts: IPostModel[],
        loadPost: (post: IPostModel[]) => void,
        favoritePost: IPostModel | null,
        setFavoritePost: (obj: IPostModel)=> void
    },
    commentsStore: {
        allComms: ICommentModel[],
        loadComms: (comment: ICommentModel[]) => void
    }
}

export const useStore = create<StoreType>()((set) => {
    return {
        usersStore: {
            allUsers: [],
            loadUser: (user: IUserModel[])=> {
                return set((state: StoreType) => {
                    return{
                        ...state,
                        usersStore:{
                            ...state.usersStore,
                            allUsers: user
                        }
                    }
                })
            },

            favoriteUser: null,
            setFavorite: (obj: IUserModel) =>{
                return set((state:StoreType) =>{
                    return{
                        ...state,
                        usersStore:{
                            ...state.usersStore,
                            favoriteUser: obj
                        }
                    }
                })
            }

        },

        postsStore: {
            allPosts: [],
            loadPost: (post: IPostModel[]) => {
                return set((state:StoreType)=>{
                    return{
                        ...state,
                        postsStore:{
                            ...state.postsStore,
                            allPosts: post
                        }
                    }
                })
            },
            favoritePost: null,
            setFavoritePost: (obj: IPostModel) =>{
                return set((state:StoreType) =>{
                    return{
                        ...state,
                        postsStore:{
                            ...state.postsStore,
                            favoritePost: obj
                        }
                    }
                })
            }
        },



        commentsStore: {
            allComms: [],
            loadComms: (comment: ICommentModel[]) => {
                return set((state:StoreType) =>{
                    return{
                        ...state,
                        commentsStore:{
                            ...state.commentsStore,
                            allComms: comment
                        }
                    }
                })
            }
        }


    }
})
