if(document.querySelector(".infos-icon img")) {
   const infosIcon = document.querySelector(".infos-icon img");
   const infosBlock = document.querySelector(".infos-block");

   infosIcon.addEventListener("mouseover", () => {
      infosBlock.style.display = "initial";
   })
   infosIcon.addEventListener("mouseout", () => {
      infosBlock.style.display = "none";
   })
}
