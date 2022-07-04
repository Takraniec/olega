var btn_back = document.querySelector('.osnova .strelki5 .strelkalev5 img');
    var btn_next = document.querySelector('.osnova .strelki5 .strelkapr5 img');
    var images = document.querySelectorAll('.osnova .ekran5 .forma5 .forma51 .opis5 .levyopis55 .photo5 img');
    var names = document.querySelectorAll('.osnova .ekran5 .forma5 .forma51 .opis5 .levyopis55 .name5 h2');
    var opis = document.querySelectorAll('.osnova .ekran5 .forma5 .forma51 .opis55 p');
    var i = 0; 
    var p = 0;
    var n = 0;

    btn_back.onclick = function () {
        images[i].style.display = 'none';
        i--;
        if(i < 0){
            i = images.length-1;
        }
        images[i].style.display = 'block';
        names[p].style.display = 'none';
        p--;
        if(p < 0){
            p = names.length-1;
        }
        names[p].style.display = 'block';
        opis[n].style.display = 'none';
        n--;
        if(n < 0){
            n = opis.length-1;
        }
        opis[n].style.display = 'block';
    }
    
    btn_next.onclick = function () {
        images[i].style.display = 'none';
        i++;
        if(i >= images.length){
            i = 0;
        }
        images[i].style.display = 'block';
        names[p].style.display = 'none';        
        p++;
        if(p >= names.length){
            p = 0;
        }
        names[p].style.display = 'block';
        opis[n].style.display = 'none';        
        n++;
        if(n >= opis.length){
            n = 0;
        }
        opis[n].style.display = 'block';

    }


