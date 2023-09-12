import "./card.css";
import eyeIcon from "../../Public/Card icons/eye.svg";
import fakesIcon from "../../Public/Card icons/fakes.svg";
import heartIcon from "../../Public/Card icons/heart.svg";
import heartElectroIcon from "../../Public/Card icons/heart-electrocardiogram.svg";
import usersIcon from "../../Public/Card icons/users.svg";
import Information from "./information";

export default function Card(
  name,
  photo,
  gender,
  age,
  country,
  hobbies,
  audience,
  fakes,
  mediaEng,
  engRate,
  impressions
) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardBackground = new Image();
  cardBackground.classList.add("cardBackgroundImg");
  cardBackground.src = photo;

  const Name = document.createElement("span");
  const profileImg = document.createElement("div");
  const genderAndAge = document.createElement("span");
  const Country = document.createElement("span");
  const Hobbies = document.createElement("span");

  profileImg.classList.add("profileImg");
  profileImg.style.backgroundImage = `url(${photo})`;

  Name.textContent = name;
  genderAndAge.textContent = gender + ", " + age + " años";
  Country.textContent = country;
  Hobbies.textContent = hobbies;

  const leftSide = document.createElement("div");
  leftSide.classList.add("cardLeftSide");
  leftSide.append(profileImg, Name, genderAndAge, Country, Hobbies);

  const NameUpperCase = document.createElement("span");
  const audienceVar = document.createElement("span");
  const fakesVar = document.createElement("span");
  const mediaEngVar = document.createElement("span");
  const engRateVar = document.createElement("span");
  const impressionsVar = document.createElement("span");

  NameUpperCase.classList.add("name");

  NameUpperCase.textContent = name;
  audienceVar.textContent = audience;
  fakesVar.textContent = fakes;
  mediaEngVar.textContent = mediaEng;
  engRateVar.textContent = engRate;
  impressionsVar.textContent = impressions;

  const audienceText = document.createElement("div");
  const fakesText = document.createElement("div");
  const mediaEngText = document.createElement("div");
  const engRateText = document.createElement("div");
  const impressionsText = document.createElement("div");

  const EyeIcon = new Image();
  const FakesIcon = new Image();
  const HeartIcon = new Image();
  const HeartElectroIcon = new Image();
  const UsersIcon = new Image();

  FakesIcon.src = fakesIcon;
  HeartIcon.src = heartIcon;
  UsersIcon.src = usersIcon;
  HeartElectroIcon.src = heartElectroIcon;
  EyeIcon.src = eyeIcon;

  FakesIcon.classList.add("cardIcon");
  HeartIcon.classList.add("cardIcon");
  UsersIcon.classList.add("cardIcon");
  HeartElectroIcon.classList.add("cardIcon");
  EyeIcon.classList.add("cardIcon");

  audienceText.textContent = "Audiencia:";
  fakesText.textContent = "Fakes:";
  mediaEngText.textContent = "Media Eng:";
  engRateText.textContent = "Eng Rate:";
  impressionsText.textContent = "Impresiones:";

  audienceText.appendChild(UsersIcon);
  fakesText.appendChild(FakesIcon);
  mediaEngText.appendChild(HeartIcon);
  engRateText.appendChild(HeartElectroIcon);
  impressionsText.appendChild(EyeIcon);

  audienceText.classList.add("cardText");
  fakesText.classList.add("cardText");
  mediaEngText.classList.add("cardText");
  engRateText.classList.add("cardText");
  impressionsText.classList.add("cardText");

  const rightSideGrid = document.createElement("div");
  rightSideGrid.classList.add("rightSideGrid");
  rightSideGrid.append(
    audienceText,
    audienceVar,
    fakesText,
    fakesVar,
    mediaEngText,
    mediaEngVar,
    engRateText,
    engRateVar,
    impressionsText,
    impressionsVar
  );

  const rightSide = document.createElement("div");
  rightSide.classList.add("cardRightSide");
  rightSide.append(NameUpperCase, rightSideGrid);

  const cardElements = document.createElement("div");
  cardElements.classList.add("cardElements");
  cardElements.append(leftSide, rightSide);

  card.append(cardBackground, cardElements);

  profileImg.addEventListener("pointerdown", () => {
    Information(name, photo, country, gender, age);
  });

  return card;
}
