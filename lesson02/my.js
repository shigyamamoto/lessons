$(function(){
	var attack = 1;
	var items = { 1: '-', 2: '-', 3: '-', 4: '-', 5: '-', 6: '-', 7: '-', 8: '-', 9: '-'};

	$('.mbcell').click(function() {
		target = $(this).data('number');
		item = $(this).html();
		if (isEntered(item)) {
			return;
		}
		$(this).html(symbol(attack));
		items[target] = symbol(attack);
		// 勝ち負け判定
		if (checkWinner()) {
			var text = '勝者 : ';
			if (attack == 1) {
				text += '先攻(○)';
			} else {
				text += '後攻(×)';
			}
			alert(text);
			return;
		}
		changePlayer();
    })

	var checkWinner = function() {
		ret = false;
		if ( items[1] != '-' && items[1] == items[2] && items[1] == items[3]) {
			console.log('同じ');
			ret = true;
		}
		if ( items[4] != '-' && items[4] == items[5] && items[4] == items[6]) {
			ret = true;
		}
		if ( items[7] != '-' && items[7] == items[8] && items[7] == items[9]) {
			ret = true;
		}
		if ( items[1] != '-' && items[1] == items[4] && items[1] == items[7]) {
			ret = true;
		}
		if ( items[2] != '-' && items[2] == items[5] && items[2] == items[8]) {
			ret = true;
		}
		if ( items[3] != '-' && items[3] == items[6] && items[3] == items[9]) {
			ret = true;
		}
		if ( items[1] != '-' && items[1] == items[5] && items[1] == items[9]) {
			ret = true;
		}
		if ( items[3] != '-' && items[3] == items[5] && items[3] == items[7]) {
			ret = true;
		}
		return ret;
	};

	var isEntered = function(item){
		ret = false;
		if (item == '○' || item == '×') {
			ret = true;
		}
		return ret
	};

	var changePlayer = function(){
		if (attack == 1) {
			attack = 2;
		} else {
			attack = 1;
		}
	};

	var symbol = function(symbol){
		var ret = '○';
		if (symbol == 2) {
			ret = '×';
		}
		return ret
	};
});