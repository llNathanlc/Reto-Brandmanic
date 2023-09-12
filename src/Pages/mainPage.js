import Card from "../Components/card.js";
import "./mainPage.css";

export default function MainPage() {
  const app = document.getElementById("app");

  app.append(
    Card(
      "gracyvillareal",
      "https://images.brandmanic.com/api/v1/getimage?account=Tng4dk85Y3BNR2UzeW83cm9kV3VTdz09IyMQlPROSQGYHsFytYXwhGJA&type=1&channel=4",
      "Mujer",
      "32",
      "España",
      "Fotografía, Veggie..",
      "611.01 K",
      "32.57 K",
      "11.82 K",
      "1.93 %",
      "272.68 K"
    ),
    Card(
      "gracyvillareal",
      "https://images.brandmanic.com/api/v1/getimage?account=Tng4dk85Y3BNR2UzeW83cm9kV3VTdz09IyMQlPROSQGYHsFytYXwhGJA&type=1&channel=4",
      "Mujer",
      "32",
      "España",
      "Fotografía, Veggie..",
      "611.01 K",
      "32.57 K",
      "11.82 K",
      "1.93 %",
      "272.68 K"
    ),
    Card(
      "gracyvillareal",
      "https://images.brandmanic.com/api/v1/getimage?account=Tng4dk85Y3BNR2UzeW83cm9kV3VTdz09IyMQlPROSQGYHsFytYXwhGJA&type=1&channel=4",
      "Mujer",
      "32",
      "España",
      "Fotografía, Veggie..",
      "611.01 K",
      "32.57 K",
      "11.82 K",
      "1.93 %",
      "272.68 K"
    )
  );
}
