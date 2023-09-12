import "./information.css";

export default function Information(name, photo, country, gender, age) {
  const app = document.getElementById("app");

  //Header

  const header = document.createElement("div");
  header.classList.add("infoHeader");

  //Left side header

  const columnLeftSideHeader = document.createElement("div");
  columnLeftSideHeader.classList.add("columnLeftSideHeader");

  const profilePicture = document.createElement("div");
  const Name = document.createElement("span");
  const NameLink = document.createElement("a");
  const Data = document.createElement("div");

  profilePicture.classList.add("infoProfilePicture");
  Name.classList.add("infoName");
  NameLink.classList.add("infoNameLink");
  Data.classList.add("infoDataHeader");

  profilePicture.style.backgroundImage = `url(${photo})`;

  Name.textContent = name;
  NameLink.textContent = name;
  Data.textContent = country + "-" + gender + ", " + age + " Años";

  columnLeftSideHeader.append(Name, NameLink, Data);

  const leftSideHeader = document.createElement("div");
  leftSideHeader.classList.add("leftSideHeader");
  leftSideHeader.append(profilePicture, columnLeftSideHeader);

  // Center side header

  const centerSideHeader = document.createElement("div");
  centerSideHeader.classList.add("centerSideHeader");

  const Reach = document.createElement("span");
  const Relevance = document.createElement("span");
  const Resonance = document.createElement("span");

  Reach.classList.add("reachText");
  Relevance.classList.add("relevanceText");
  Resonance.classList.add("resonanceText");

  Reach.textContent = "Reach";
  Relevance.textContent = "Relevance";
  Resonance.textContent = "Resonance";

  const reachPercentage = document.createElement("div");
  const relevancePercentage = document.createElement("div");
  const resonancePercentage = document.createElement("div");

  reachPercentage.classList.add("reachPercentage");
  relevancePercentage.classList.add("relevancePercentage");
  resonancePercentage.classList.add("resonancePercentage");

  const centerHeaderColumn1 = document.createElement("div");
  const centerHeaderColumn2 = document.createElement("div");
  const centerHeaderColumn3 = document.createElement("div");

  centerHeaderColumn1.classList.add("centerHeaderC1");
  centerHeaderColumn2.classList.add("centerHeaderC2");
  centerHeaderColumn3.classList.add("centerHeaderC3");

  centerHeaderColumn1.append(Reach, reachPercentage);
  centerHeaderColumn2.append(Relevance, relevancePercentage);
  centerHeaderColumn3.append(Resonance, resonancePercentage);

  centerSideHeader.append(
    centerHeaderColumn1,
    centerHeaderColumn2,
    centerHeaderColumn3
  );

  //Right side header
  const rightSideHeader = document.createElement("div");
  rightSideHeader.classList.add("rightSideHeader");

  const exitButton = document.createElement("div");
  const downloadCardButton = document.createElement("div");
  const watchProfile = document.createElement("div");
  const messageActualization = document.createElement("span");

  exitButton.textContent="Salir";
  downloadCardButton.textContent = "Descargar influcard";
  watchProfile.textContent = "Ver perfil"
  messageActualization.textContent = "Datos actualizados a " + new Date().toISOString()

  rightSideHeader.append(
    exitButton,
    downloadCardButton,
    watchProfile,
    messageActualization
  );

  header.append(leftSideHeader, centerSideHeader, rightSideHeader);

  const backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");
  backdrop.append(header);

  app.appendChild(backdrop);
}
