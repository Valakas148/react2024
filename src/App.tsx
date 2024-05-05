import React, {useState} from 'react';
import './App.css';
import UsersComponent from "./component/UsersComponent/UsersComponent";
import {PostModel} from "./models/PostModel";
import PostsComponent from "./component/PostsComponent/PostsComponent";


const App = () => {



    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

    return (
      <div className={'AppDiv'}>
        <UsersComponent handleUserSelection={setSelectedUserId}/>
        {selectedUserId !== null && <PostsComponent contentId={selectedUserId} />}

      </div>
  );
};

export default App;