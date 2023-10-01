import { Link } from "react-router-dom";
import { ProductCard } from "./styles/featuredProducts";
import { EQUIPMENTS } from "../../constants/routes";

function FeaturedProductCard({ item }) {
  return (
    <Link to={`${EQUIPMENTS}/${item.category}/${item.slug}`}>
      <ProductCard>
        <div className="ratio ratio-4x3">
          <ProductCard.Img src={item.image} alt={item.title} />
        </div>
        <ProductCard.ImgOverlay>
          <ProductCard.Title className="text-center">{item.title}</ProductCard.Title>
        </ProductCard.ImgOverlay>
      </ProductCard>
    </Link>
  );
}

export default FeaturedProductCard;
