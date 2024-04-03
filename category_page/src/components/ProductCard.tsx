import React from 'react';

interface ProductProps {
  product: {
    name: string;
    price: number;
    deliveryTime: number;
    deliveryCharges: boolean;
    rating: number;
    imageUrl: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { name, price, deliveryTime, deliveryCharges, rating, imageUrl } = product;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p className="price">₦{price}</p>
      <p>{deliveryTime} minutes</p>
      <p>{deliveryCharges ? 'Delivery Charges Apply' : 'Free Delivery'}</p>
      <p>Rating: {rating}</p>
      {/* Add other product details or actions here */}
    </div>
  );
};

export default ProductCard;