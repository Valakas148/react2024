import React, {FC} from 'react';
import {UserModel} from "../../models/UserModel";
import {PostModel} from "../../models/PostModel";


type IPropsUserComponent = {
    content: UserModel,
        handleUserSelection?: (userId: number) => void
}
    & {children?: React.ReactNode}
const UserComponent:FC<IPropsUserComponent> = ({content,handleUserSelection}) => {

    const onClickHandler = () => {
        if (handleUserSelection) {
            handleUserSelection(content.id);
        }
    };

    return (
        <div>
            <h2>№{content.id} - {content.firstName} {content.lastName}</h2>
            <h3>Age: {content.age}</h3>
            <ul>
                <li>{content.gender}</li>
                <li>{content.email}</li>
                <li>{content.phone}</li>
                <li>{content.username}</li>
                <li>{content.birthDate}</li>
            </ul>
            <button onClick={onClickHandler}>Get Posts</button>
        </div>
    );
};

export default UserComponent;