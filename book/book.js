var animateObjects = [
	{ name: "Tiny", weight: 1, health: 20, armour: 18, hitMod: 8, diceSize: 4, diceCount: 1, diceMod: 4 },
	{ name: "Small", weight: 1, health: 25, armour: 16, hitMod: 6, diceSize: 8, diceCount: 1, diceMod: 2 },
	{ name: "Medium", weight: 2, health: 40, armour: 13, hitMod: 5, diceSize: 6, diceCount: 2, diceMod: 1 },
	{ name: "Large", weight: 4, health: 50, armour: 10, hitMod: 6, diceSize: 10, diceCount: 2, diceMod: 2 },
	{ name: "Huge", weight: 8, health: 80, armour: 10, hitMod: 8, diceSize: 12, diceCount: 2, diceMod: 4 },
];
var shiftKey = false;
$(document).on('keyup keydown', function(e){shiftKey = e.shiftKey} );
var ctrlKey = false;
$(document).on('keyup keydown', function(e){ctrlKey = e.ctrlKey} );

$(function() {
	$("span.tab").click(function(){
		console.log($(".page:last:visible .page-content").attr('id') + ":" + $(this).data("page"));
		if (!$(".page").is(':animated') && $(".page:last .page-content:visible").attr('id') != $(this).data("page")) {
			
			$(".page:nth-child(3) .page-content").hide();
			$("#" + $(this).data("page")).detach().appendTo(".page:nth-child(3)").show();
			
			
			$("span.tab.selected").removeClass("selected");
			$(this).addClass("selected");
			$(".page:nth-child(3)").css('z-index', 1);
			$(".page:last").css('transform','rotate(3deg)').animate({left: '80vw', top: '10px'}, 'slow', function(){
				$(".page:last").css('transform','rotate(0deg)').css('z-index', -1).animate({left: '0', top: '40px'});
				$(".page:nth-child(3)").detach().appendTo("div.desk");
			});
		}
	});
	$("span.add-object").click(function() {
		var index = $(this).parent().index();
		var count = $("#animated-list tr.header td.animate-" + index).length;
		$("#total-damage").fadeOut(function() { $(this).text(""); });
		if ($(this).hasClass("negative")) {
			if (count > 0) {
				var deleteIndex = $("#animated-list tr.header td.animate-" + index).index();
				$("#animated-list tr td:nth-child(" + (deleteIndex + 1) + ")").remove();
				count--;
			}
			if ($("#animated-list tr.header td").length == 0) {
				$(".notebook, .notebook-content").css('z-index', 1);
				$(".notebook, .notebook-content").css('transform','rotate(8deg)').css('left', 'calc(50% - 255px)').css('top', '200px');
			}
		} else {
			$("#animated-list tr.header").append("<td data-animate=" + index + " class='animate-" + index + "'>" + animateObjects[index].name + "</td>");
			$("#animated-list tr").eq(1).append("<td><i class='fa fa-gratipay'> " + animateObjects[index].health + "</i><br /><span class='add-health negative'>-</span><span class='add-health'>+</span></td>");
			$("#animated-list tr").eq(2).append("<td><i class='fa fa-shield'> " + animateObjects[index].armour + "</i></td>");
			$("#animated-list tr").eq(3).append("<td class='gap'>-</td>");
			$("#animated-list tr").eq(4).append("<td><i class='fa fa-crosshairs'> -</i></td>");
			$("#animated-list tr").eq(5).append("<td><i class='fa fa-tint'> -</i></td>");
			count++;
			
			$(".notebook, .notebook-content").css('transform','rotate(-3deg)').css('left', 'calc(100% - 600px)').css('top', '50px');
			setTimeout(function() {
				$(".notebook, .notebook-content").css('z-index', 2);
			}, 1000);
		}
		$("#animated-selector tr.footer td").eq(index).text(count + "x" + animateObjects[index].weight + "=" + (count*animateObjects[index].weight));
	});
	$("#animated-list").on("click", "span", function() {
		var updateIndex = $(this).parent().index();
		var health = parseInt($(this).parent().children().first().text()) + ($(this).hasClass("negative") ? -1 : 1) * (shiftKey ? 5 : 1)* (ctrlKey ? 10 : 1);
		if (health <= 0) {
			health = 0;
			$("#animated-list tr td:nth-child(" + (updateIndex + 1) + ")").addClass("dead");
		} else {
			$("#animated-list tr td:nth-child(" + (updateIndex + 1) + ")").removeClass("dead");
		}
		$(this).parent().children().first().text(" " + health);
	});
	$("#animated-list").on("click", ".attacked", function() {
		var clearIndex = $(this).index();
		$("#animated-list tr").eq(4).children().eq(clearIndex).removeClass("attacked").html("<i class='fa fa-crosshairs'> -</i>");
		$("#animated-list tr").eq(5).children().eq(clearIndex).html("<i class='fa fa-tint'> -</i>");
	});
	$("#func-attack").click(function() {

		var time = 500;
		
		$("#animated-list td.fail").removeClass("fail");
		$("#animated-list td.success").removeClass("success");
		$("#animated-list td.attacked").removeClass("attacked");
		$("#total-damage").fadeOut(function() { $(this).text(""); });

		$('#animated-list tr.header td').each(function() {
			var attackIndex = $(this).index();
			var attackMod = animateObjects[$(this).data("animate")].hitMod;
			$("#animated-list tr").eq(4).children().eq(attackIndex).html("<i class='fa fa-crosshairs'> -</i>");
			$("#animated-list tr").eq(5).children().eq(attackIndex).html("<i class='fa fa-tint'> -</i>");
			if (!$(this).hasClass("dead")) {
				setTimeout(function(){ 
					var diceRoll = 1 + Math.floor(Math.random() * 20);
					$("#animated-list tr").eq(4).children().eq(attackIndex).addClass("attacked").html("<i class='fa fa-crosshairs'> " + diceRoll + "<br />(+" + attackMod + ")</i><br /><b>" + (diceRoll + attackMod) + "<b>");
					if (diceRoll == 1) {
						$("#animated-list tr").eq(4).children().eq(attackIndex).addClass("fail");
					} else if (diceRoll == 20) {
						$("#animated-list tr").eq(4).children().eq(attackIndex).addClass("success");
					}
				}, time);
				time += 500;
			}
		});
	});
	$("#func-damage").click(function() {

		var time = 500;
		var totalDamage = 0;

		$("#total-damage").fadeOut(function() { $(this).text(""); });
		
		$('#animated-list tr.header td').each(function() {
			var attackIndex = $(this).index();
			var objectData = animateObjects[$(this).data("animate")];
			var critSuccess = $("#animated-list tr").eq(4).children().eq(attackIndex).hasClass("success");
			$("#animated-list tr").eq(5).children().eq(attackIndex).removeClass("success fail").html("<i class='fa fa-tint'> -</i>");
			if (!$(this).hasClass("dead") && $("#animated-list tr").eq(4).children().eq(attackIndex).hasClass("attacked") && !$("#animated-list tr").eq(4).children().eq(attackIndex).hasClass("fail")) {
				setTimeout(function(){ 
					var diceRoll = 0;
					var diceRollCrit = 0;
					for (var i = 0; i < objectData.diceCount; i++) {
						diceRoll += 1 + Math.floor(Math.random() * objectData.diceSize);
					}
					for (var i = 0; i < objectData.diceCount * critSuccess; i++) {
						diceRollCrit += 1 + Math.floor(Math.random() * objectData.diceSize);
					}
					
					totalDamage += diceRoll + diceRollCrit + objectData.diceMod;
					$("#animated-list tr").eq(5).children().eq(attackIndex).html("<i class='fa fa-tint'> " + diceRoll + (critSuccess ? "," + diceRollCrit : "") + "<br />(+" + objectData.diceMod + ")</i><br /><b>" + (diceRoll + diceRollCrit + objectData.diceMod) + "<b>");
					if (diceRoll + diceRollCrit == objectData.diceCount * (critSuccess ? 2 : 1)) {
						$("#animated-list tr").eq(5).children().eq(attackIndex).addClass("fail");
					} else if (diceRoll + diceRollCrit == objectData.diceSize * objectData.diceCount * (critSuccess ? 2 : 1)) {
						$("#animated-list tr").eq(5).children().eq(attackIndex).addClass("success");
					}
				}, time);
				time += 500;
			}
		});
		setTimeout(function() {
			$("#total-damage").text("= " + totalDamage + " DAMAGE").fadeIn();
		}, time);
	});
});