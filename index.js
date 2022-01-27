const getImgPlayer = document.querySelector('.imgPlayer');
const getImgComp = document.querySelector('.imgComputer');
const getResult = document.querySelector('.text-result');
const chooseImg = document.querySelectorAll('.multiple-choice');
const rock = document.querySelector('.imgRock');
const scissor = document.querySelector('.imgScissor');
const paper = document.querySelector('.imgPaper');

chooseImg.forEach(img => {
    img.addEventListener('click', e => {
        let player = '';
        
        if (e.target == rock) {
            player += 'batu';
            getImgPlayer.src = e.target.src;
        } else if (e.target == scissor) {
            player += 'gunting';
            getImgPlayer.src = e.target.src;
        } else if (e.target == paper){
            player += 'kertas';
            getImgPlayer.src = e.target.src;
        }


        let computer = Math.floor(Math.random() * 3) + 1;

        if (computer == 1) {
            computer = 'batu';
            getImgComp.src = rock.src;
        } else if (computer == 2) {
            computer = 'gunting';
            getImgComp.src = scissor.src;
        } else if (computer == 3) {
            computer = 'kertas';
            getImgComp.src = paper.src;
        }


        let result = '';

        if (player == computer) {
            result += 'Kamu SERI';
        } else if (e.target == rock) {
            result += (computer == 'gunting') ? 'Kamu MENANG' : 'Kamu KALAH';
        } else if (e.target == scissor) {
            result += (computer == 'kertas') ? 'Kamu MENANG' : 'Kamu KALAH';
        } else if (e.target == paper) {
            result += (computer == 'batu') ? 'Kamu MENANG' : 'Kamu KALAH';
        }

        getResult.innerText = result + '. Komputer memilih ' + computer;
    })
});