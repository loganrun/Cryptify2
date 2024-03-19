
function CryptoCards({ data }) {
    const { name, image, current_price, high_24h, total_volume } = data;
    const priceDifference = current_price - high_24h;
  
    return (
      <div className="bg-[#423A6F] rounded-lg shadow-md overflow-hidden">
        <div className="flex items-center px-4 py-4 justify-between">
          <h3 className="text-lg font-bold mr-4">{name}</h3>
          <img className="w-8 h-8 rounded-full" src={image} alt={name} />
        </div>
        <div className="px-4 py-2">
          <p className="text-white">Current Price: ${current_price.toFixed(2)}</p>
          <p className="text-white">Highest 24 Hours : ${high_24h.toFixed(2)}</p>
          {priceDifference > 0 ? (
            <p className="text-green-500">Difference: +${priceDifference.toFixed(2)}</p>
          ) : (
            <p className="text-red-500">Difference: -${Math.abs(priceDifference).toFixed(2)}</p>
          )}
          <p className="text-white">Volume: {total_volume.toFixed(2)}</p>
        </div>
      </div>
    );
  }
  
  export default CryptoCards;