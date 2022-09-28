import './App.css';
import axios from "axios";
import TopNav from './Components/TopNav/TopNav';

function App() {
//   const [search, setSearch] = useState('');
//   const [data, setData] = useState([]);
//   const searching=(e)=>{
//     if(e.key==="Enter")
//     {
//         axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
//         .then(res=>setData(res.data.items))
//         .catch(err=>console.log(err))
//     }
//     console.log(data);
// }
  return (
    // <div className="App"> 
    //   <input type="text" value={search} placeholder="Search" onChange={(e)=>setSearch(e.target.value)} onKeyPress={searching}/>
    //   <button onClick={searching}>Search</button>
    // </div>
    <TopNav/>
  )
}

export default App;
