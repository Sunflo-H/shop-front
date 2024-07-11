import { useNavigate } from "react-router-dom";

export default function useCategoryNavigation(currentCategory) {
  const navigate = useNavigate();

  const handleGoToMen = () => {
    navigate(`/products/Men`, { state: "Men" });
  };
  const handleGoToWomen = () => {
    navigate(`/products/Women`, { state: "Women" });
  };
  const handleGoToAccessories = () => {
    navigate(`/products/Accessories`, { state: "Accessories" });
  };
  const handleGoToShoes = () => {
    navigate(`/products/Shoes `, { state: "Shoes" });
  };
  const handleGoToCategory = () => {
    navigate(`/products/${currentCategory}`, { state: currentCategory });
  };
  return {
    handleGoToMen,
    handleGoToWomen,
    handleGoToAccessories,
    handleGoToShoes,
    handleGoToCategory,
  };
}
