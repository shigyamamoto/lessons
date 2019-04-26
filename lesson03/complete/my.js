$(function() {
	var turn = 0;
	var isFinished = false;

	var winner_check = function() {
		var ret = false;
		if (line_check(1, 2, 3)) {
			ret = true;
		}
		if (line_check(4, 5, 6)) {
			ret = true;
		}
		if (line_check(7, 8, 9)) {
			ret = true;
		}
		if (line_check(1, 4, 7)) {
			ret = true;
		}
		if (line_check(2, 5, 8)) {
			ret = true;
		}
		if (line_check(3, 6, 9)) {
			ret = true;
		}
		if (line_check(1, 5, 9)) {
			ret = true;
		}
		if (line_check(3, 5, 7)) {
			ret = true;
		}
		return ret;
	};

	var line_check = function(number1, number2, number3) {
		var value1 = $("#cell" + number1).html();
		var value2 = $("#cell" + number2).html();
		var value3 = $("#cell" + number3).html();

		var ret = false;
		if (value1 != "-" && value1 == value2 && value1 == value3) {
			ret = true;
		}
		return ret;
	};

	$(".cell").click(function() {
		// すでに入力済みの値
		var value = $(this).html();

		// 入力済みの値が"○"か"×"のときは処理をしない
		if (value != "○" && value != "×" && !isFinished) {
			// ○か×か判定して、セルに入力する
			var input = (turn == 0) ? "○" : "×";
			$(this).html(input);

			// 勝敗チェック
			if (winner_check()) {
				isFinished = true;
				var text = (turn == 0) ? "勝者は先攻(○)" : "勝者は後攻(×)"
				$("#winner_label").html(text);
			}

			// 入力処理の後に、ターンを入れ替える
			turn = (turn == 0) ? 1 : 0;
		}

	});

	$("#nextbtn").click(function() {
		location.reload();
	});
});