import './Fetching.css'
function Fetching({name, image, symbol, price, volume , priceChange, marketcap}){
    return(
        <>
         <div className="table-container">
            <div className="table-row">
                <div className="table">
                    <img src={image} alt='crypto'/>
                    <h1>{name}</h1>
                    <p className="csymbol">{symbol}</p>
                </div>
                <div className="cdata">
                    <p className="cprice">${price}</p>
                    <p className="cvolume">${volume.toLocaleString()}</p>
                    {priceChange<0 ? (
                        <p className="cpercent red">{priceChange.toFixed(2)}</p>) 
                        : (<p className="cpercent green">{priceChange.toFixed(2)}</p>
                    )}
                    <p className="cmarketcap">
                        Mkt Cap : ${marketcap.toLocaleString()}
                    </p>

                </div>
            </div>
         </div>
        </>
    )
}
export default Fetching