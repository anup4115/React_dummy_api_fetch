import React, { useEffect,useState } from 'react'

const App = () => {

  const [data,setData] = useState([]);

  const Datafetch=async()=>{
    const response=await fetch('https://dummyjson.com/posts');
    if(!response.ok){
      throw new Error(response.statusText)
    }
    const data=await response.json();
    console.log(data)
   setData(data.posts)
  }
  useEffect(()=>{
    Datafetch()
  },[])
  return (
    <div>
      <ul>
        {data.map((post)=>(
          <div key={post.id} >
            <li>{post.title}</li>
            <span>{post.body}</span><br/>
            <strong>#{post.tags}  </strong>
            <hr />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
