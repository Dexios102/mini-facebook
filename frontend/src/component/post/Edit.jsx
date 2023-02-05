import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Loader from '../Loader';
import { getEditingPost, editPost } from './actions';
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'


const EditPost = () => {
  // get post id from url
  let { postId } = useParams();

  const [post, setPost] = useState({}); // post state
  const [loading, setLoading] = useState(false); //loading state
  const [updating, setUpdating] = useState(false); // updating post state

  // fetch post on load
  useEffect(async () => {
    setLoading(true)
    let post_ = await getEditingPost(postId);
    if (post_) {
      if (post_ !== {}) {
        setPost(post_);
        if (post !== {}) {
          setLoading(false)
          console.log(post)
        }
      }
    } else {
      // if response is null its 404 so set post to 404 and show Restricted msg
      setPost(404)
      setLoading(false)
    }

  }, [])

  // formik to handle update post form 
  let formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      caption: post.body ? post.body : ""
    },
    onSubmit: async (values) => {
      setUpdating(true);
      let payload = { "body": values.caption }
      let response = await editPost(payload, postId);
      // if response then it is edited successfully
      if (response) {
        setUpdating(false);
        alert("Updated Successfuly.");
      } else {
        alert("Error occoured. Try Again.");
      }
    }
  })

  return (
    <section>
      <Navbar />
      <div className="container" id="main__container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            {/* if loading show loading component 
        if setPost is 404 then show restricted msg
        else show edit form
        */}
            {
              loading ? <Loader /> :
                <div>
                  {post === 404 ? <h5>No post found</h5> :
                    <form className="card p-3" id="edit__page" onSubmit={formik.handleSubmit}>
                      <div className="form-group" id="edit__content">
                        <h1 className='Edit'>EDIT POST {post.caption} </h1>
                        <hr></hr>
                        <label className='Edit_Caption'>Caption</label>
                        {post.caption}
                        <input className="form-control" placeholder="Caption..." id="Edit_CaptionText" name="caption"
                          onChange={formik.handleChange} value={formik.values.caption} />

                        {post.image && <img src={post.image}
                          alt="pic" className="img-fluid mt-1" id="Edit_Image"
                          style={{ height: "20em", width: "100%" }} />}
                        <button type="submit" className="btn__primary mt-2" id="post__button">
                          {updating ? "Editing..." : "Save"}
                        </button>
                      </div>
                    </form>
                  }
                </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditPost;