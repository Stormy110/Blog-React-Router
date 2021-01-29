import React from 'react';
import { Link , useRouteMatch, Route } from 'react-router-dom';
import Post from './Post';
const blogPosts = [
    {
        title: 'Blog Post 1 - A New Dawn',
        content: 'This is my first blog post. It is the beginning of a new era. Computers have taken over the universe. For better or for worse has yet to be determined...'
    },
    {
        title: 'Blog Post 2 - A Dark Horizon',
        content: 'This is my second blog post. The future looks bleak. Humanities future that is. The computers have seen to that. Our time is coming to an end. If only their were a savior, someone to save humanity...'
    },
    {
        title: 'Blog Post 3 - A Midnight Snack',
        content: 'This is my third blog post. It is late and I am hungry. A midnight snack is what I seek. Then reality kicks in and I remember what life is like now. There are no snacks. Their are no more people to even keep track of the time "midnight". Yet even in humanities darkest days, there is still a sliver of light. '
    },
    {
        title: 'Blog Post 4 - A Newwer Hope',
        content: 'This is my fourth blog post. A savior has emerged and helped us defeat the computers. His name is Nicolas Cage.'
    },
]
function Blog(props) {
    const { path, url } = useRouteMatch();
    return (
    <>
        <h1>This is the blog</h1>
        <nav>
            {
                blogPosts.map((p, index)=>(
                    <>
                    <Link to={`${url}/${index}`}>
                        {p.title}
                    </Link>
                    <br/>
                    </>
                ))
            }
        </nav>
        <Route exact path={path}>
            <h2>Please choose a blog post.</h2>
        </Route>
        <Route path={`${url}/:id`}>
            <Post posts={blogPosts}/>
        </Route>
    </>
)};

export default Blog;