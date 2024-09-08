import React from "react";
import Caution from "./Caution";

export default function Cautions() {
  return cautions.map((caution) => {
    const { title, subTitle, info } = caution;
    return <Caution title={title} subTitle={subTitle} info={info} />;
  });
}

const cautions = [
  {
    title: "Shipping / Exchange / Retrun",
    subTitle: "Shipping and Caution",
    info: [
      "Orders completed before 9 AM will be shipped on the same day. Orders placed after 9 AM will be shipped the next day (on weekdays)",
      "For orders placed on the same day, if there is a lack of stock in logistics, a supply period of approximately 2-3 days may be required. In cases where stock cannot be secured, we may notify you of a sold-out item, so please consider this when making a purchase",
      "Size and weight may have slight variations depending on standards, and the color may appear differently depending on your monitor settings",
    ],
  },
  {
    title: "Caution for Use",
    subTitle: "Precautions for Use and Storage",
    info: [
      "When storing, please keep it in a cool, well-ventilated place away from direct sunlight.",
      "The leather dye is water-based, so please be careful with white natural fibers like cotton, linen, or hemp, as they may become stained by moisture or sweat.",
      "Natural leather/enamel/leather and synthetic leather products may experience staining or color fading when exposed to water or when in contact with other materials, so please handle and store them with care.",
      "If the product gets wet, please dry it in a well-ventilated shaded area.",
    ],
  },
  {
    title: "A/S Information",
    subTitle: "Warranty Policy",
    info: [
      "1 year from the date of purchase (Repairs may be free or charged depending on the type of repair).",
    ],
  },
];
