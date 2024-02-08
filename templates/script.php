<script>
    $(document).ready(function() {
        $("#galery-toggle").click(function() {
            $("#ui-id-1").click();
        });
    });
</script>


<script>
    let part = false;
    const check = document.getElementById('lbl_44_0');
    const mandatory_fields = ['29','30','123','31','32','33','34','122','525'];

    check.addEventListener("click", party);


    function party(){
        if (part === false){
            document.getElementsByClassName('second-participant')[0].style.display = "block";
            mandatory_on();
            part = true;
        }
        else {
            document.getElementsByClassName('second-participant')[0].style.display = "none";
            mandatory_off();
            part = false;
        }
    }


    function mandatory_on() {
        for(let i = 0; i < mandatory_fields.length; i++){

            document.getElementById('ctrl_'+mandatory_fields[i]).required = true;
            document.getElementById('ctrl_'+mandatory_fields[i]).classList.add("mandatory");
        }
    }

    function mandatory_off() {
        for(let i = 0; i < mandatory_fields.length; i++){

            document.getElementById('ctrl_'+mandatory_fields[i]).required = false;
            document.getElementById('ctrl_'+mandatory_fields[i]).classList.remove("mandatory");
        }
    }

    const allImpressionsLinks = document.getElementById('impressionen-link').querySelectorAll('a');

    allImpressionsLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('article-75').querySelector('.toggler').click();
        })
    });


    const allPrizesLinks = document.getElementById('prizes-link').querySelectorAll('a');

    allPrizesLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('article-30').querySelector('.toggler').click();
        })
    });



    const allInformationLink = document.getElementById('information-link').querySelectorAll('a');

    allInformationLink.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('article-70').querySelector('.toggler').click();
        })
    });
    

</script>
