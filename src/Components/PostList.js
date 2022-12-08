import React,{useState , useEffect} from 'react'

import axios from 'axios'

export const PostList = () => {
    const [posts , setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res);//Results are on the console(Ctrl + Shift + I)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    },[])

  return (
    <div>
        <ul>
            {
                posts.map( item => {
                <li key={item.id}>
                    {item.title}                    
                </li>})
            }
        </ul>
    </div>
  )
}
