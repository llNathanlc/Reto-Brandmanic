import "./information.css";

export default function Information(name, photo, country, gender, age) {
  const app = document.getElementById("app");

  //Header

  const header = document.createElement("div");
  header.classList.add("infoHeader");

  const ProfilePicture = document.createElement("div");
  const Name = document.createElement("span");
  const NameLink = document.createElement("a");
  const Data = document.createElement("div");

  ProfilePicture.classList.add("infoProfilePicture");
  Name.textContent = name;
  NameLink.textContent = name;
  Data.textContent = country + "-" + gender + ", " + age + " Años";

  const columnLeftSideHeader = document.createElement("div");

  columnLeftSideHeader.append(Name, NameLink, Data);

  const leftSideHeader = document.createElement("div");
  leftSideHeader.classList.add("leftSideHeader");
  leftSideHeader.append(ProfilePicture, columnLeftSideHeader);

  const centerSideHeader = document.createElement("div");

  const rightSideHeader = document.createElement("div");

  header.append(leftSideHeader, centerSideHeader, rightSideHeader);

  const backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");
  backdrop.append(header);

  app.appendChild(backdrop);
}
