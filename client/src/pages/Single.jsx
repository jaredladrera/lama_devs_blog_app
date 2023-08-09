import React from 'react'
import DeleteLogo from './../img/delete.png';
import EditLogo from './../img/edit.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="" alt="" />
        <div className="user">
          <img src="" alt="" />
          <div className="info">
            <span>Lance</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={EditLogo} alt="" />
            </Link>
            <img src={DeleteLogo} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eveniet assumenda et corporis quis numquam neque placeat, consectetur officiis modi!</h1>
        <p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fuga corporis. Illo laudantium voluptates hic voluptatibus odio incidunt deserunt magnam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit commodi fugiat odit delectus ea esse veritatis nam aliquid provident! Accusantium fugit deleniti deserunt ipsa officiis enim commodi, voluptatem animi aut voluptatum, atque assumenda accusamus dolor voluptates ipsam? Necessitatibus quis temporibus cum, expedita optio adipisci rerum eveniet esse doloribus in!</p>
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single