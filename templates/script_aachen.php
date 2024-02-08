<script>
    $(document).ready(function() {
        $("#galery-toggle").click(function() {
            $("#ui-id-1").click();
        });
    });
</script>


<script>
    let part = false;
    const check = document.getElementById('lbl_296_0');
    const mandatory_fields = ['299','300','301','302','303','304','305','306'];

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

    const allPrizesLinks = document.getElementById('prizes-link').querySelectorAll('a');


    allPrizesLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('article-36').querySelector('.toggler').click();
        })
    });

    const allInformationLink = document.getElementById('information-link').querySelectorAll('a');

    allInformationLink.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('article-71').querySelector('.toggler').click();
        })
    });




</script>
