import React from 'react'
import { useEffect, useState } from 'react'
import Axios from 'axios';
import Coins from './Coins';
import Pagination from './Pagination';





function Header() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [filterd, setFilterd] = useState([]);
  const [showArticles, setshowArticles] = useState();
  const [currentPage ,setcurrentPage] = useState();
  const [postPerPage , setpostPerPage] = useState();

  

  

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins").then(
      (response) => {
        setListOfCoins(response.data.coins);

        setFilterd(response.data.coins)
       
      }
    );
  }, []);
  

 

  
  
  const recordPerPage = 6;
  const [currentpage, setCurrentPage] = useState(1);
  const lastindex = currentpage * recordPerPage;
  const firstindex = lastindex - recordPerPage;

  function setpages(n) {
    setCurrentPage(n);
  }

 
  



    // for pagination 
    // const length = listOfCoins.length;
    // //const numberofTotalPages =Math.ceil(length/listofCoinsPerPage);
    // const numberofTotalPages = length/listofCoinsPerPage
    // //const pages = [...Array(numberofTotalPages+1).keys={}].slice(1);
    // const pages = Math.round(numberofTotalPages +1);
    // console.log(pages)

 
    
  

  const filteredCoins = listOfCoins.filter((coin)=> {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">

      <div className="Header">
      <h2>List of Coins</h2>
        <input
          type="text"
          placeholder="Enter a Coin name"
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
      </div>
      
      <div className="Display">
        {filteredCoins.slice(firstindex,lastindex).map((coin) => {
          return (
            <Coins 
                icon={coin.icon}
                name={coin.name}
                price={coin.price}
               symbol={coin.symbol}
             
            />
          );
        })}             
</div>
      
     
    
      <Pagination setpages={setpages} length={filterd.length} />
    


       
    </div>
  );
}


export default Header
