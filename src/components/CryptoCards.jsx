
function CryptoCards({ data }) {
    const { name, image, current_price, price_change_24h, total_volume } = data;
    //const priceDifference = current_price - openingPrice;
  
    return (
      <div className="bg-[#423A6F] rounded-lg shadow-md overflow-hidden">
        <div className="flex items-center px-4 py-4">
          <h3 className="text-lg font-bold mr-4">{name}</h3>
          <img className="w-8 h-8 rounded-full" src={image} alt={name} />
        </div>
        <div className="px-4 py-2">
          <p className="text-gray-600">Current Price: ${current_price.toFixed(2)}</p>
          <p className="text-gray-600"> Last 24 Hours: ${price_change_24h.toFixed(2)}</p>
          {price_change_24h > 0 ? (
            <p className="text-green-500">Difference: +${price_change_24h.toFixed(2)}</p>
          ) : (
            <p className="text-red-500">Difference: -${Math.abs(price_change_24h).toFixed(2)}</p>
          )}
          <p className="text-gray-600">Volume: ${total_volume.toFixed(2)}</p>
        </div>
      </div>
    );
  }
  
  export default CryptoCards;