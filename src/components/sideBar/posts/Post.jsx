import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import SinglePost from './SinglePost';

const Post = () => {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        const postRef = query(collection(db, "post"), orderBy("time", 'desc'))
        onSnapshot(postRef, (snapshot) => {
            setPostList(snapshot.docs.map((doc) => ({
                id : doc.id,
                ...doc.data()
            })))
        })
    },[])
    console.log(postList)
  return (
      <>
      {postList.map((list) => (
          <SinglePost
          list={list}
          key={list.id}
          id={list.id}
          />
      ))}
      </>
  )
}

export default Post