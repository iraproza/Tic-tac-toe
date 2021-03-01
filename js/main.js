    let fields = document.querySelectorAll('td');
    let players = document.querySelector('select');
    let line = document.querySelector('.line');
    let nameBox1 = document.querySelector('.box-name-1');
    let nameBox2 = document.querySelector('.box-name-2');
    let namePlayer = document.querySelector('.name-info');

    let btnRemove = document.querySelector('.remove'); ;

    let startBtn = document.querySelector('.startBtn');
    let startBlock = document.querySelector('.start-block');
    let game = document.querySelector('.game-field');

    let nameInput = document.querySelectorAll('.name');

    let name = [];

    let a = 0;
    let resX = 0;
    let resY = 0;
    let player;

    players.addEventListener('change', function(){
        player = players.value;
        if(player == 2){
            nameBox1.classList.add('box-name-open');
            nameBox1.style.opacity = '1';
            nameBox2.style.opacity = '0';
        }
        if(player == 1){
            nameBox1.style.opacity = '0';
            nameBox2.style.opacity = '1';
            nameBox2.classList.add('box-name-open');
        }
    })

    btnRemove.addEventListener('click', function(){
        for(let i = 0; i < fields.length; i++){
            fields[i].innerHTML = '';
            namePlayer.innerHTML = name[0];
        }
        
        for(let i = 0; i < fields.length; i++){
            fields[i].innerHTML = '';
            fields[i].classList.remove('x');
            fields[i].classList.remove('o');
        }
    })

    startBtn.addEventListener('click', function(){
        if(player == 2){
            for(let i = 0; i<nameInput.length; i++){
                let n =  nameInput[i].value;
                name.push(n)
            }
        }  
        startBlock.classList.add('start');
        game.classList.add('flex');

        namePlayer.innerHTML = name[0];
    })

    for(let i = 0; i<fields.length; i++){
        fields[i].addEventListener('click', function(){
            if(!fields[i].innerHTML){
                let icon = document.createElement('i');
                let boxIcon = document.createElement('div');
                a++;
                if(player == 2){             
                    if( a%2 == 0){
                        namePlayer.innerHTML = name[0];
                        icon.setAttribute('class', 'far circle fa-circle');
                        fields[i].classList.add('o');
                        fields[i].insertAdjacentElement('beforeend', boxIcon);
                        boxIcon.insertAdjacentElement('beforeend', icon);

                        if(checkEnd(fields)){
                            resX = 0;
                            resY = 1;
                            resultGame(); 
                        }
                    }
                    if( a%2 == 1){
                        namePlayer.innerHTML = name[1];
                        icon.setAttribute('class', 'fas dagger fa-times');
                        fields[i].insertAdjacentElement('beforeend', boxIcon);
                        boxIcon.insertAdjacentElement('beforeend', icon);
                        fields[i].classList.add('x');
                        if(checkEnd(fields)){
                            resX= 1;
                            resY= 0;
                        resultGame();
                        
                        }
                    }

                    if(checkInfo()){
                        resultGame();
                        return;
                    }
                }
            }
            
        else{
            alert('Ви не можете поставити тут символ. Будь ласка спробуйте поставити символ в вільному полі');
        }
        })
    }

    function checkInfo(){
        let isAllFilled = true;
        for(let i = 0; i<fields.length; i++){
            if(!fields[i].innerHTML){
                isAllFilled = false;
            }
        }
        return isAllFilled;
    }

    function checkEnd(t) {
        if ((t[0].classList.contains('x') && t[1].classList.contains('x') && t[2].classList.contains('x') || (t[0].classList.contains('o')) && (t[1].classList.contains('o') && t[2].classList.contains('o'))))
        {
            line.classList.add('line-top');
            return true;
        }

        if ((t[3].classList.contains('x') && t[4].classList.contains('x') && t[5].classList.contains('x') || (t[3].classList.contains('o')) && (t[4].classList.contains('o') && t[5].classList.contains('o'))))
        {
            line.classList.add('line-center-hor');
            return true;
        }

        if ((t[0].classList.contains('x') && t[3].classList.contains('x') && t[6].classList.contains('x') || (t[0].classList.contains('o')) && (t[3].classList.contains('o') && t[6].classList.contains('o'))))
        {
            line.classList.add('line-left');
            return true;
        }

        if ((t[1].classList.contains('x') && t[4].classList.contains('x') && t[7].classList.contains('x') || (t[1].classList.contains('o')) && (t[4].classList.contains('o') && t[7].classList.contains('o'))))
        {
            line.classList.add('line-center');
            return true;
        }

        if ((t[2].classList.contains('x') && t[5].classList.contains('x') && t[8].classList.contains('x') || (t[2].classList.contains('o')) && (t[5].classList.contains('o') && t[8].classList.contains('o'))))
        {
            line.classList.add('line-right');
            return true;
        }

        if ((t[0].classList.contains('x') && t[4].classList.contains('x') && t[8].classList.contains('x') || (t[0].classList.contains('o')) && (t[4].classList.contains('o') && t[8].classList.contains('o'))))
        {
            line.classList.add('line-rotate-1');
            return true;
        }

        if ((t[2].classList.contains('x') && t[4].classList.contains('x') && t[6].classList.contains('x') || (t[2].classList.contains('o')) && (t[4].classList.contains('o') && t[6].classList.contains('o'))))
        {
            line.classList.add('line-rotate-2');
            return true;
        }

        if ((t[6].classList.contains('x') && t[7].classList.contains('x') && t[8].classList.contains('x') || (t[6].classList.contains('o')) && (t[7].classList.contains('o') && t[8].classList.contains('o'))))
        {
            line.classList.add('line-bottom');
            return true;
        }
    }

    let res = document.querySelectorAll('.result-box span');
    let nameRes = document.querySelectorAll('.result-box p');
    let resultBox = document.querySelector('.bg-res');

    function resultGame(){
        resultBox.style.display = 'flex';
        nameRes[0].textContent = name[0];
        nameRes[1].textContent = name[1];
        res[0].textContent = resX;
        res[1].textContent = resY;
    }

    let btnExit = document.querySelector('.exit-game');

    btnExit.addEventListener('click', function(){
        a = 0;
        player;
        resultBox = document.querySelector('.bg-res');
        nameRes[0].textContent = '';
        nameRes[1].textContent = '';
        res[0].textContent = '';
        res[1].textContent = '';
        name = [];
        document.querySelector('input[name="name1"]').value = '';
        document.querySelector('input[name="name2"]').value = '';
        line.setAttribute('class', '');
        namePlayer.innerHTML = name[0];


        for(let i = 0; i < fields.length; i++){
            fields[i].innerHTML = '';
            fields[i].classList.remove('x');
            fields[i].classList.remove('o');
        }

        startBlock.classList.remove('start');
        game.classList.remove('flex');
        resultBox.style.display = 'none';
    })

    let btnInfo = document.querySelector('.info')


    btnInfo.addEventListener('click', function(){
        document.querySelector('.bg-rules').style.display = 'flex';
    })

    let btnExitRules = document.querySelector('.exit-rules');

    btnExitRules.addEventListener('click', function(){
        startBlock.classList.remove('start');
        game.classList.remove('flex');
        document.querySelector('.bg-rules').style.display = 'none';
    })