import { ProductCard } from "./styles/featuredProducts";

function FeaturedProductCard({ item }) {
  return (
    <ProductCard>
      <ProductCard.Img src={item.image} alt={item.alt} />
      <ProductCard.ImgOverlay>
        <ProductCard.Title>{item.title}</ProductCard.Title>
      </ProductCard.ImgOverlay>
    </ProductCard>
  );
}

export default FeaturedProductCard;
