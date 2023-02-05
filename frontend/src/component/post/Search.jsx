import React, { useEffect, useState, useCallback } from 'react';
import Navbar from '../Navbar';
import Loader from '../Loader';
import Post from './Post';
import { useSearchParams } from 'react-router-dom';
import { searchResults } from './actions';
import { useFormik } from 'formik';
import { BsSearch } from "react-icons/bs";

const Search = () => {
    const [query, setQuery] = useSearchParams({})
    let searchQuery = query.get('q')
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = useCallback(
        async (post, user) => {
            if (searchQuery) {
                setLoading(true);
                const response = await searchResults(searchQuery, user);
                if (response) {
                    response.posts ? setPosts(response.posts) : setPosts([]);
                    response.users ? setUsers(response.users) : setUsers([]);
                    console.log(response);
                    setLoading(false);
                }
            }
        },
        [searchQuery]
    );


    let formik = useFormik({
        initialValues: {
            check: []
        },
        onSubmit: (values) => {
            if (values.check.includes('post') && values.check.includes('user')) {
                setQuery({ q: input })
                setPosts([]); setUsers([])
                handleSearch(searchQuery, searchQuery)
            }
            else if (values.check.includes('post')) {
                setQuery({ q: input })
                setPosts([]); setUsers([])
                handleSearch(searchQuery, null)
            } else if (values.check.includes('user')) {
                setQuery({ q: input })
                setPosts([]); setUsers([])
                handleSearch(null, searchQuery)
            }
        }
    })

    useEffect(() => {
    }, [handleSearch, query])

    return (
        <section>
            <Navbar />
            <div className="container" id="main__container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <h1 className='Edit'>EDIT POST </h1>
                        <hr></hr>
                        {/* search box */}
                        <form onSubmit={formik.handleSubmit} className="d-flex" style={{ width: "100%", margin: "auto" }}>
                            <div>
                                <input className="form-control" type="search" id="search__input" placeholder="Search..."
                                    onChange={(e) => setInput(e.target.value)} />
                                <input className="form-check-input" type="checkbox" name="check" id="search__post"
                                    onChange={formik.handleChange} value="post" />
                                <label id="search__label">Posts</label>
                                <input className="form-check-input ms-3" type="checkbox" name="check" id="search__post" onChange={formik.handleChange} value="user" />
                                <label id="search__label">Users</label>

                            </div>
                            <button type="submit" className="btn btn__primary" id="search__button" style={{ height: "50%" }}> <BsSearch id="search__icon" /></button>
                        </form>

                        { /*query && <p style={{fontFamily:"Roboto",textAlign:"center",margin:"0.1em 0"}}>
        Showing Results for:  
    </p>*/}

                        {
                            loading ? <Loader /> :

                                <div>

                                    {posts.map((post) => {
                                        return <Post key={post.id}
                                            id={post.id}
                                            caption={post.body}
                                            image={post.image}
                                            total_likes={post.total_likes}
                                            userId={post.author_detail.id}
                                            username={post.author_detail.username}
                                            avatar={null} />
                                    })}

                                    {users.map((user) => {
                                        return <div key={user.id}>
                                            {user.username}
                                        </div>
                                    })}

                                </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search;