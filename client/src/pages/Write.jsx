import { useState } from 'react'
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const Write = () => {
  const state = useLocation().state

  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.description || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      console.log(file);
      const res = await axios.post(`${process.env.REACT_APP_HOST}/upload`, formData);
      return res.data;
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = async e => {
    e.preventDefault();
    const imageUrl = await upload();
    console.log(imageUrl, "image url");

    console.log(state ? "meron" : "wala");


    try {
      state ? await axios.put(`${process.env.REACT_APP_HOST}/posts/${state.id}`, {
        title,
        description: value,
        cat,
        img: file ? imageUrl : ""
      }) : axios.post(`${process.env.REACT_APP_HOST}/posts`, {
        title,
        description: value,
        cat,
        img: file ? imageUrl : "",
        date_posted: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
      });

      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  axios.defaults.withCredentials = true;

  return (
    <div  className='add'>
      <div className="content">
        <input type="text" value={title} placeholder='Title' onChange={e => setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue}/>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status :</b> Draft
          </span>
          <span>
            <b>Visibility :</b> Public
          </span>
          <input  style={{ display: 'none' }} id='file' type="file" onChange={e=>setFile(e.target.files[0])} />
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
               <button>Save as draft</button>
               <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <h1>{ cat } lance</h1>
          <div className="cat">
          <input type="radio" checked={ cat === "art" } name="cat"  value="art" id='art' onChange={e=>setCat(e.target.value)} />
          <label htmlFor="art">Art</label>
          </div>

          <div className="cat">
          <input type="radio" checked={ cat === "science"} name="cat"  value="science" id='science' onChange={e=>setCat(e.target.value)} />
          <label htmlFor="science">Science</label>
          </div>

          <div className="cat">
          <input type="radio" checked={ cat === "technology"} name="cat"  value="technology" id='technology' onChange={e=>setCat(e.target.value)} />
          <label htmlFor="technology">Technology</label>
          </div>

          <div className="cat">
          <input type="radio" checked={ cat === "cinema"} name="cat"  value="cinema" id='cinema' onChange={e=>setCat(e.target.value)} />
          <label htmlFor="cinema">Cinema</label>
          </div>

          <div className="cat">
          <input type="radio" checked={ cat === "design"} name="cat"  value="design" id='design' onChange={e=>setCat(e.target.value)} />
          <label htmlFor="design">Design</label>
          </div>

          <div className="cat">
          <input type="radio" checked={ cat === "food"} name="cat"  value="food" id='food' onChange={e=>setCat(e.target.value)} />
          <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write