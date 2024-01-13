import React ,{useState,useEffect} from 'react'
import SideBar from './SideBar'
import StatusBar from './StatusBar'
import AddSection from './AddSection'
import FilterTask from './FilterTask'


function Tab() {
    // const [Todos, setTodos] = useState(JSON.parse(localStorage.getItem("TodoItems")));
    const [Todos, setTodos] = useState(JSON.parse(localStorage.getItem("TodoItems")) || []);

    const [page,setPage] = useState("All")
    const completed = Todos.filter(item=>item.status)
    const Pending = Todos.filter(item=>!item.status)
    
    useEffect(() => {
      const storedData = setTodos(JSON.parse(localStorage.getItem("TodoItems")))
      if(storedData){
        setTodos(storedData)
      }else{
        console.log("no datas in");
      }
      
    }, [])
    
    useEffect(() => {
        localStorage.setItem("TodoItems",JSON.stringify(Todos))
    }, [Todos])
    

    return (
        <div className='mainDiv' >
            <div className="container" id="container">
                <div className='divAdj' >
                <SideBar page={page} setPage={setPage} />
                <div className="content">
                <StatusBar completed={completed.length} Pending={Pending.length} />
                {page=="All" ? <AddSection Todos={Todos} setTodos={setTodos} /> :
                <FilterTask setTodos={setTodos} page={page} Todos={page=="Completed" ? completed : Pending}  />
                }
                
                </div>
                </div>

            </div>
            </div>

       
    )
}

export default Tab
