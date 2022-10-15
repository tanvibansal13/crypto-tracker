import axios from "axios"
import { useEffect, useState } from "react"
import Fetching from "./Fetching";
import './Cn.css'

function Cn(){
    const [num,setNum]=useState([]);
    const [click,setClick]=useState('');

    useEffect(()=>{
         axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
          .then(res =>{setNum(res.data) 
            console.log(res.data)  
         })
    }, []);
        
        
    const makeChanges=e =>{
        setClick(e.target.value)
    }

    const filteredValue = num.filter(num =>
        num.name.toLowerCase().includes(click.toLowerCase())
        )

    return(
        <>
         <div className="container">
            <div className="searching">
                <h1 className="naming">Search a Currency</h1>
                <form>
                    <input class="cinput" type="search" placeholder="Search" onChange={makeChanges} />
                </form>
            </div>
            {filteredValue.map(fetching => {
                return (
                <Fetching
                keys={fetching.id}
                name={fetching.name}
                image={fetching.image}
                symbol={fetching.symbol}
                volume={fetching.market_cap}
                price={fetching.current_price}
                priceChange={fetching.price_change_percentage_24h}
                marketcap={fetching.total_volume}

                />
                )
            })}
         </div>
        </>
    )
}

export default Cn