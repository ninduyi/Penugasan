import UserProfile from './UserProfile'
import { useState } from 'react';
import { useEffect } from 'react';

export default function PostList () {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://dummyjson.com/posts');
                const data = await response.json();
                setPosts(data.posts);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    
  return (
    <div className='flex flex-col gap-8'>
         {posts.map((post) => (
            <UserProfile key={post.id} title={post.title} body={post.body} tags={post.tags} likes={post.reactions.likes} dislikes={post.reactions.dislikes}/>
        ))}
    </div>
  );
}
