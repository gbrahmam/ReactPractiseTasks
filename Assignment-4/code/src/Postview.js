import React from 'react';
// import axios from 'axios';
import { Username } from './username';
import { Postimage } from './postimage';
import { Status } from './status';
import './Postview.css';


export const Postview = () => {

  const [posts, setPost] = React.useState([]);
  React.useEffect(async () => {
    // console.log(posts)
    const response = await fetch('http://localhost:3004/user');
    const data = await response.json();
    // console.log(data)
    setPost(data)
    // fetch('http://localhost:3004/user')
    //     .then((res) => {
    //         res.json()
    //     })
    //     .then((res) => {
    //         setPost(res)
    //     })
  }, [])


  return (

    <>
      {/*Static page header */}
      <div className='pageHeader'>
        <p>InstaClone</p>
        <img className='headImage' src='https://cdn-icons-png.flaticon.com/512/1077/1077042.png' alt='camera' />
      </div>

      {/*card structure*/}
      {posts.length > 0 ?
        posts.map((post, idx) => {
          return (
            <div className='card-container'>
              <div className="card" key={idx}>
                <Username Name={post.name} location={post.location} />
                <Postimage postimage={post.PostImage} />
                <Status likes={post.likes} description={post.description} Date={post.date} />
              </div>
            </div>
          )
        }
        ) : "No posts"}

    </>
  )

}