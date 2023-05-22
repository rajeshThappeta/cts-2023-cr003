import {useEffect,useState} from 'react'
import './EffectDemo.css'

function EffectDemo(){

    let [posts,setPosts]=useState([])

    //effect function executes when component loaded(after initial render)
    //effect funciton executes every time when state is changed, when no second arg
    //pass the state as element to dependecy array to call effect function for that state change
    useEffect(()=>{
        //call to API to fetch data
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setPosts(data))
        .catch(err=>console.log("err is ",err))
    },[])

    console.log("posts are ",posts)

    return(
        <div className='demo'>
            <h1>Effect Demo</h1>
          
        </div>
    )
}


export default EffectDemo;