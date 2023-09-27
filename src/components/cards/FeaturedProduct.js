import { Link } from "react-router-dom";
import { ProductCard } from "./styles/featuredProducts";
import { EQUIPMENTS } from "../../constants/routes";

function FeaturedProductCard({ item }) {
  return (
    <Link to={`${EQUIPMENTS}/${item.category}/${item.slug}`}>
      <ProductCard>
        <ProductCard.Img src={item.image} alt={item.title} />
        <ProductCard.ImgOverlay>
          <ProductCard.Title>{item.title}</ProductCard.Title>
        </ProductCard.ImgOverlay>
      </ProductCard>
    </Link>
  );
}

export default FeaturedProductCard;
