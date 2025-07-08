import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page,setPage]=useState(10);
   const navigate=useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const val = await response.json();
        setData(val);
        setLoading(true);
        // console.log(va[0].userId);
      } catch (error) {
        console.log("error occur in fetch the data : ", error);
      }
    };
    fetchData();
  }, [page]);
 
  const paging_swap=(index)=>{
            //  page=index*10;
            setPage(index*10);
             console.log(page)
  }
  const moves=(topic)=>{
      navigate(`/tasks/${topic}`)
  }
  return (
    <div classNameName="box_container">
      {!loading ? (
        <h1>loading data</h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th>UserID</th>
              <th>Id</th>
              <th>Title</th>
              <th>Complete Status</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(page-10,page).map((item, index) => (
           
              <tr style={{cursor:"pointer"}} key={item.id} onClick={()=>{moves(item.title)}}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed ? "✅" : "❌"}</td>
              </tr>
             
            ))}
            
          </tbody>
        </table>
      )}
      <div classNameName="pagings">
       <button classNameName="btns" onClick={()=>paging_swap(1)}>1</button>
       <button classNameName="btns" onClick={()=>paging_swap(2)}>2</button>
       <button classNameName="btns" onClick={()=>paging_swap(3)}>3</button>
       <button classNameName="btns" onClick={()=>paging_swap(4)}>4</button>
       <button classNameName="btns" onClick={()=>paging_swap(5)}>5</button>
       <button classNameName="btns" onClick={()=>paging_swap(6)}>6</button>
       <button classNameName="btns" onClick={()=>paging_swap(7)}>7</button>
       <button classNameName="btns" onClick={()=>paging_swap(8)}>8</button>
       <button classNameName="btns" onClick={()=>paging_swap(9)}>9</button>
       <button classNameName="btns" onClick={()=>paging_swap(10)}>10</button>
       <button classNameName="btns" onClick={()=>paging_swap(11)}>11</button>
       <button classNameName="btns" onClick={()=>paging_swap(12)}>12</button>
       <button classNameName="btns" onClick={()=>paging_swap(13)}>13</button>
       <button classNameName="btns" onClick={()=>paging_swap(14)}>14</button>
       <button classNameName="btns" onClick={()=>paging_swap(15)}>15</button>
       <button classNameName="btns" onClick={()=>paging_swap(16)}>16</button>
       <button classNameName="btns" onClick={()=>paging_swap(17)}>17</button>
       <button classNameName="btns" onClick={()=>paging_swap(18)}>18</button>
       <button classNameName="btns" onClick={()=>paging_swap(19)}>19</button>
       <button classNameName="btns" onClick={()=>paging_swap(20)}>20</button>

      </div>
    </div>
  );
};

export default Users;
