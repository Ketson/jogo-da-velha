const jogador1 = "X";
const jogador2 = "O";
var inicio = jogador1;
var gameOver = false;

atualizaMostrador();
inicializar();

function atualizaMostrador() {
	if (gameOver) { 
		return;
	}

	if (inicio == jogador1) {
		var jogador = document.querySelectorAll("div#mostrador img")[0];
		jogador.setAttribute("src", "assets/images/x.png");
	} else {
		var jogador = document.querySelectorAll("div#mostrador img")[0];
		jogador.setAttribute("src", "assets/images/o.png");
	}
}

function inicializar() {
	var espacos = document.getElementsByClassName("col");
	for (var i = 0; i < espacos.length; i++) {
		espacos[i].addEventListener("click", function(){

			if(gameOver) {
				return;
			}
			if(this.getElementsByTagName("img").length == 0){

				if(inicio == jogador1) {

					this.innerHTML = "<img src='assets/images/x.png'>";
					this.setAttribute("jogada", jogador1);
					inicio = jogador2;

				}else {
					this.innerHTML = "<img src='assets/images/o.png'>";
					this.setAttribute("jogada", jogador2);
					inicio = jogador1;
				}
				atualizaMostrador();
			}
		}

			);
	}
}