import styled from 'styled-components'
import { BsSearch } from "react-icons/bs"; 
import {useState,useEffect} from 'react'
import SearchResult from './components/SearchResult/SearchResult.jsx';

export const BASE_DIR ="http://localhost:9000";
const App = () => { 
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const[error, setError] =useState(null);
useEffect(() => {
  const fetchData = async () => { 
    setLoading(true);
    try {
      const response = await fetch(BASE_DIR);
    if (!response.ok) { // this step is not necessary at all.
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Fetched Data:", result); 
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error); // this will throw error  console not reflect at ui 
      setError("unable to fetch data");// this error will reflect at UI 
    }
  };

  fetchData();

}, []);
console.log(data);
if (error) return <div>{error}</div>;
if(loading) return <div>Loading ...</div>
//const temp={
// image: "/images/egg.png",
// name: "Boilded Egg",
// price: 10,
// text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
// type: "breakfast",
//}
  return(
<Container>
    <Topcontainer>
      <div className="logo">
        <img src='./logo.svg' alt="logo" />
      </div>
      <div className="search">
      <input type="text" placeholder="Search Food..." />
      <BsSearch className="search-icon" />
      </div>
    </Topcontainer>
    <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
    </FilterContainer>
    <SearchResult data={data} baseDir={BASE_DIR}/>
   </Container >
   
  ) ;
};

export default App;

 const Container = styled.div`
max-width: 1200px;
`;
const Topcontainer = styled.section`
display: flex;
align-items:center;
min-height:141px;
justify-content: space-between;
padding-left:130px;
padding-right:130px;
.search{
  input{
    background-color: transparent;
    border: 1px solid red;
    color: white;
    height:30px;
    width:190px;
    border-radius:5px;
    font-size: 16px;
    padding: 0px 10px;
    margin-right: -20px;
  }}
`;
const FilterContainer =styled.section`
display: flex;
justify-content: center; 
align-items: center;
gap: 12px; 
padding-bottom:10px;
`;
export const Button =styled.button`
background-color:#ff4343;
border-radius: 5px;
color: white;
padding: 6px 12px;

font-weight:700;
`;

