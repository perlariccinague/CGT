let time = document.querySelectorAll(".nav_left .ce_text");

let now     = new Date();
let year    = now.getFullYear();
let month   = now.getMonth()+1;
let day     = now.getDate();
if(month.toString().length === 1) {
    month = '0'+month;
}
if(day.toString().length === 1) {
    day = '0'+day;
}
let dateTime = year+'/'+month+'/'+day+' ';
console.log(dateTime)


time.forEach(element => {
    let lastElement = element.lastChild.previousSibling;
    let lastContent = lastElement.dataset.time;
   /* let convertDate = Date.parse(lastContent);*/
    console.log(lastContent);
    /*console.log(convertDate);*/
  /*  const passDate = new Date(convertDate);*/
/*    console.log(dateForm)*/
    if(lastContent < dateTime) {
        element.classList.add('click');
      /*  console.log(element);*/
    }
})







