import React, { useState, useEffect, useContext } from 'react'
import DeleteLogo from './../img/delete.png';
import EditLogo from './../img/edit.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const Single = () => {

  const [post, setPost] = useState([]);

  const location = useLocation();
  const navigate = useNavigate()

  const postId = location.pathname.split("/")[2];

  // console.log(postId)
  // console.log(`${process.env.REACT_APP_HOST}/posts/${postId}`);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_HOST}/posts/${postId}`);
        console.log(res.data);
        setPost(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData();
  }, [postId])


  const handleDelete = async () => {
    try {
       await axios.delete(`${process.env.REACT_APP_HOST}/posts/${postId}`);
       navigate('/');
    } catch (err) {
      console.log(err)
    }
  }

  axios.defaults.withCredentials = true;
  return (
    <div className="single">
      {console.log(post.img, "this is post")}
      <div className="content">
        <img src={`../uploads/${post.img}`} alt="" />
        <div className="user">
          { post.userImage && <img src={post.userImage} alt="" /> }
          <div className="info">
            <span>{ post?.username }</span>
            <p>posted { moment(post?.date_posted).fromNow() }</p>
          </div>
         { currentUser?.username === post.username && <div className="edit">
            <Link to={`/write?edit=2`} state={ post }>
              <img src={EditLogo} alt="" />
            </Link>
            <img onClick={handleDelete} src={DeleteLogo} alt="" />
          </div> }
        </div>
        <h1>{ post.title }</h1>
         { post.description }
      </div>
      <Menu cat={post.cat}/>
    </div>
  )
}

export default Single