import { useNavigate } from "react-router-dom";

export default function useCategoryNavigation(currentCategory) {
  const navigate = useNavigate();

  const handleGoToMan = () => {
    navigate(`/products/Man`, { state: "Man" });
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
    handleGoToMan,
    handleGoToWomen,
    handleGoToAccessories,
    handleGoToShoes,
    handleGoToCategory,
  };
}
