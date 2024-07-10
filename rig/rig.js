let settings;
	
$.getJSON("https://sliw.co/rig/rig.json", function(data) {
	settings = data;
	countComponents();
});

function commaSeparateNumber(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return val;
}

function countComponents() {
  $("#component-list").empty();
  $("<tr>").append($("<th>", {
	  text: "Component"
  })).append($("<th>", {
	  text: "Count"
  })).appendTo("#component-list");
  $.each(settings.components, function(key,component) {
	  $("<tr>").append($("<td>", {
		  text: component.name
	  })).append($("<td>", {
		  text: $("." + key).length + $("." + component.vartiant).length
	  })).appendTo("#component-list");
  });
}

addHeat = function(heatObject, heat, modifier = 1) {
	if (heatObject.data("heat"))
		heatObject.data("heat", heatObject.data("heat") + heat * modifier);
	else
		heatObject.data("heat", heat * modifier);
}
addHeatSpread = function(heatObject, distance, heat, modifier = 1) {
    var cellIndex = heatObject.index();
	switch (distance) {
		case 0:
			addHeat(heatObject, heat, modifier);
			break;
		case 1:
			addHeat(heatObject.closest('tr').next().children().eq(cellIndex).next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().children().eq(cellIndex), heat, modifier);
			addHeat(heatObject.closest('tr').next().children().eq(cellIndex).prev(), heat, modifier);
			addHeat(heatObject.next(), heat, modifier);
			addHeat(heatObject.prev(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().children().eq(cellIndex).next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().children().eq(cellIndex), heat, modifier);
			addHeat(heatObject.closest('tr').prev().children().eq(cellIndex).prev(), heat, modifier);
			break;
		case 2:
			addHeat(heatObject.closest('tr').next().next().children().eq(cellIndex).next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().children().eq(cellIndex).next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().children().eq(cellIndex), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().children().eq(cellIndex).prev(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().children().eq(cellIndex).prev().prev(), heat, modifier);
			
			addHeat(heatObject.closest('tr').next().children().eq(cellIndex).next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().children().eq(cellIndex).prev().prev(), heat, modifier);
			addHeat(heatObject.next().next(), heat, modifier);
			addHeat(heatObject.prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().children().eq(cellIndex).next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().children().eq(cellIndex).prev().prev(), heat, modifier);
			
			addHeat(heatObject.closest('tr').prev().prev().children().eq(cellIndex).next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().children().eq(cellIndex).next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().children().eq(cellIndex), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().children().eq(cellIndex).prev(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().children().eq(cellIndex).prev().prev(), heat, modifier);
			break;
		case 3:
			addHeat(heatObject.closest('tr').next().next().next().children().eq(cellIndex).next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().children().eq(cellIndex).next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().children().eq(cellIndex).next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().children().eq(cellIndex), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().children().eq(cellIndex).prev(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().children().eq(cellIndex).prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().children().eq(cellIndex).prev().prev().prev(), heat, modifier);
			
			addHeat(heatObject.closest('tr').next().next().children().eq(cellIndex).next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().children().eq(cellIndex).prev().prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').next().children().eq(cellIndex).next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().children().eq(cellIndex).prev().prev().prev(), heat, modifier);
			addHeat(heatObject.next().next().next(), heat, modifier);
			addHeat(heatObject.prev().prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().children().eq(cellIndex).next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().children().eq(cellIndex).prev().prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().children().eq(cellIndex).next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().children().eq(cellIndex).prev().prev().prev(), heat, modifier);
			
			addHeat(heatObject.closest('tr').prev().prev().prev().children().eq(cellIndex).next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().children().eq(cellIndex).next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().children().eq(cellIndex).next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().children().eq(cellIndex), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().children().eq(cellIndex).prev(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().children().eq(cellIndex).prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().children().eq(cellIndex).prev().prev().prev(), heat, modifier);
			break;
		case 4:
			addHeat(heatObject.closest('tr').next().next().next().next().children().eq(cellIndex).next().next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().next().children().eq(cellIndex).next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().next().children().eq(cellIndex).next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().next().children().eq(cellIndex).next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().next().children().eq(cellIndex), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().next().children().eq(cellIndex).prev(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().next().children().eq(cellIndex).prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().next().children().eq(cellIndex).prev().prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().next().children().eq(cellIndex).prev().prev().prev().prev(), heat, modifier);
			
			addHeat(heatObject.closest('tr').next().next().next().children().eq(cellIndex).next().next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().next().children().eq(cellIndex).prev().prev().prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().children().eq(cellIndex).next().next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().next().children().eq(cellIndex).prev().prev().prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').next().children().eq(cellIndex).next().next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').next().children().eq(cellIndex).prev().prev().prev().prev(), heat, modifier);
			addHeat(heatObject.next().next().next().next(), heat, modifier);
			addHeat(heatObject.prev().prev().prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().children().eq(cellIndex).next().next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().children().eq(cellIndex).prev().prev().prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().children().eq(cellIndex).next().next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().children().eq(cellIndex).prev().prev().prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().children().eq(cellIndex).next().next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().children().eq(cellIndex).prev().prev().prev().prev(), heat, modifier);
			
			addHeat(heatObject.closest('tr').prev().prev().prev().prev().children().eq(cellIndex).next().next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().prev().children().eq(cellIndex).next().next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().prev().children().eq(cellIndex).next().next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().prev().children().eq(cellIndex).next(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().prev().children().eq(cellIndex), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().prev().children().eq(cellIndex).prev(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().prev().children().eq(cellIndex).prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().prev().children().eq(cellIndex).prev().prev().prev(), heat, modifier);
			addHeat(heatObject.closest('tr').prev().prev().prev().prev().children().eq(cellIndex).prev().prev().prev().prev(), heat, modifier);
			break;
	}
}

calculateHeat = function() {
  var clockspeed = $('input[name="clockspeed"]:checked').val();
  var education = $('input[name="education"]:checked').val();

  $(".rig tr td").empty();
  $(".rig tr td").removeClass("overheat hot cold");
  
  $(".rig tr td.ecpu").each(function(i, obj) {
    addHeatSpread($(this), 0, 2.5, education * clockspeed);
    addHeatSpread($(this), 1, 1.25, education * clockspeed);
  });
  
  $(".rig tr td.cpu").each(function(i, obj) {
    addHeatSpread($(this), 0, 7.5, education * clockspeed);
    addHeatSpread($(this), 1, 5, education * clockspeed);
    addHeatSpread($(this), 2, 2.5, education * clockspeed);
  });
  
  $(".rig tr td.hcpu").each(function(i, obj) {
    addHeatSpread($(this), 0, 19, education * clockspeed);
    addHeatSpread($(this), 1, 15, education * clockspeed);
    addHeatSpread($(this), 2, 11.25, education * clockspeed);
    addHeatSpread($(this), 3, 7.5, education * clockspeed);
    addHeatSpread($(this), 4, 3.75, education * clockspeed);
  });

  $(".rig tr td.psu").each(function(i, obj) {
    addHeatSpread($(this), 0, 5, education);
    addHeatSpread($(this), 1, 2.5, education);
	
    var cellIndex = $(this).index();
	addHeat($(this).next(), 2.5, education);
	addHeat($(this).next().next(), 2.5, education);
	addHeat($(this).closest('tr').next().children().eq(cellIndex).next().next(), 2.5, education);
	addHeat($(this).closest('tr').prev().children().eq(cellIndex).next().next(), 2.5, education);
  });
  
  $(".rig tr td.psuV").each(function(i, obj) {
    addHeatSpread($(this), 0, 5, education);
    addHeatSpread($(this), 1, 2.5, education);
	
    var cellIndex = $(this).index();
	addHeat($(this).closest('tr').next().children().eq(cellIndex), 2.5, education);
	addHeat($(this).closest('tr').next().next().children().eq(cellIndex).prev(), 2.5, education);
	addHeat($(this).closest('tr').next().next().children().eq(cellIndex), 2.5, education);
	addHeat($(this).closest('tr').next().next().children().eq(cellIndex).next(), 2.5, education);
  });

  $(".rig tr td.sink").each(function(i, obj) {
    var cellIndex = $(this).index();
    $(this).next().data("heat", $(this).next().data("heat") * 0.1);
    $(this).prev().data("heat", $(this).prev().data("heat") * 0.1);
    $(this).closest('tr').next().children().eq(cellIndex).data("heat", $(this).closest('tr').next().children().eq(cellIndex).data("heat") * 0.1);
    $(this).closest('tr').prev().children().eq(cellIndex).data("heat", $(this).closest('tr').prev().children().eq(cellIndex).data("heat") * 0.1);
  });

  $(".rig tr td.water").each(function(i, obj) {
    addHeatSpread($(this), 0, -30,);
    addHeatSpread($(this), 1, -45);
  });

  $(".rig tr td.fan").each(function(i, obj) {
    addHeatSpread($(this), 0, -12);
    addHeatSpread($(this), 1, -9);
    addHeatSpread($(this), 2, -6);
    addHeatSpread($(this), 3, -3);
  });


  var mips = 0;
  var powerMax = 0;
  var powerUse = 0;
  var comp = 0;
  var overheatComp = 0;
  var hottestComp = 0;
  var heatGain = -1000;
  $(".rig tr td").each(function(i, obj) {
    comp++;

    if ($(this).data("heat") != 0) {
      $(this).html(Math.round($(this).data("heat") * 100, 1) / 100);
      if ($(this).data("heat") > hottestComp) {
        hottestComp = Math.round($(this).data("heat") * 100, 1) / 100;
      }
      if ($(this).data("heat") > heatGain && !($(this).hasClass("sink") || $(this).hasClass("water") || $(this).hasClass("blank"))) {
        heatGain = Math.round($(this).data("heat") * 100, 1) / 100;
      }
    }

    if ($(this).data("heat") >= 100 && (!($(this).hasClass("sink") || $(this).hasClass("water") || $(this).hasClass("blank")))) {
      $(this).addClass("overheat");
    } else if ($(this).data("heat") >= 50) {
      $(this).addClass("hot");
    } else if ($(this).data("heat") < 0) {
      $(this).addClass("cold");
    }
    $(this).removeData("heat");

    if ($(this).hasClass("overheat")) {
      overheatComp++;
    } //} else {
      if ($(this).hasClass("psu") || $(this).hasClass("psuV")) {
        powerMax += 750;
      }
      if ($(this).hasClass("ecpu")) {
        powerUse += 30 * clockspeed;
        mips += 25000 * (clockspeed / 2 + 0.5);
      }
      if ($(this).hasClass("cpu")) {
        powerUse += 70 * clockspeed;
        mips += 30000 * (clockspeed / 4 * 3 + 0.25);
      }
      if ($(this).hasClass("hcpu")) {
        powerUse += 150 * clockspeed;
        mips += 50000 * clockspeed;
      }
      if ($(this).hasClass("fan")) {
        powerUse += 5;
      }
    //}

  });


  if (powerUse > powerMax) {
    mips *= (powerMax / powerUse);
    mips = Math.floor(mips / 10) * 10;
    $("#power-perc").html(Math.floor((powerMax / powerUse) * 100));
  } else {
    mips = Math.round(mips);
    $("#power-perc").html(Math.floor((powerUse / powerMax) * 100));
  }

  var x = mips/100000;
  x = 1.450654*Math.sqrt(x) + 0.240309*Math.log(x) - 0.001976*x*x - 0.485498;
  $("#brute").html(Math.round(10000*x)/10000);
  
  $("#mips").html(commaSeparateNumber(mips));
  $("#comp").html(comp);
  $("#overheat-comp").html(overheatComp);
  $("#hottest-comp").html(hottestComp);
  $("#heat-gain").html((heatGain > 0 ? "+" : "") + heatGain == -1000 ? 0 : heatGain);
  $("#rig-uses").html(heatGain < 0 ? "Infinity" : Math.max(1, Math.floor(100/heatGain)));
  $("#power-use").html(powerUse);
  $("#power-max").html(powerMax);


  if (powerUse > powerMax && clockspeed > 1) {
    $('input[name="clockspeed"]:checked').prev().prev().click();
    calculateHeat();
  }

  var seed = $(".rig td").map(function() {
    if (~$(this).attr("class").indexOf('2'))
      return $(this).attr("class").replace('psuV', 'v').charAt(0).toUpperCase();
    else
      return $(this).attr("class").replace('psuV', 'v').charAt(0);
  }).get().join('') + ($('input[name="education"]:checked').val() == 1 ? '' : 'C') + $('input[name="clockspeed"]:checked').attr("id").slice(-1);
  $('#seed').val(seed);
  
  if (settings)
	  countComponents();
}

$(document).ready(function() {
	
  fetch('https://sliw.co/rig/rig.json')
    .then((response) => response.json())
    .then((json) => $.each(json.rigs, function(key,rig) {
		//$('#template-list').append("<div><h4></h4></div>");
		var caseCount = 3 - ((rig.seed.slice(0,25) == "b".repeat(25)) + (rig.seed.slice(25,50) == "b".repeat(25)) + (rig.seed.slice(50,75) == "b".repeat(25)));
		$("<div>", {
			"class": "template",
			"data-seed": rig.seed
		}).append($("<span>", {
			"class": "mips",
			text: commaSeparateNumber(0 + rig.mips) + " MIPS",
		})).append($("<span>", {
			"class": "heat" + (rig.heat < 0 ? " negative" : (rig.heat == 0 ? " neutral" : "")),
			text: (rig.heat > 0 ? "+" : "") + rig.heat + "% heat",
		})).append($("<span>", {
			"class": "cases",
			text: caseCount + " case rig (" + commaSeparateNumber(Math.round(rig.mips/caseCount)) + " MIPS per case)",
		})).append($("<span>", {
			"class": "uses" + (rig.heat < 0 ? " negative" : (rig.heat == 0 ? " neutral" : "")),
			text: "(" + (rig.heat < 0 ? "Infinity" : Math.floor(100/rig.heat)) + " uses)",
		})).append($("<span>", {
			"class": "name",
			text: rig.name,
		})).append($("<span>", {
			"class": "requirements",
			text: (rig.seed.slice(-2,-1) == 'C' ? 'Requires CMT2570' : ''),
		})).append($("<span>", {
			"class": "overclock",
			text: (rig.seed.slice(-1) == 0 ? "" : rig.seed.slice(-1) + "0% overclocked"),
		})).appendTo("#template-list").click(function(event){ $("#seed").val($(event.target).closest('div').data("seed")).trigger("input");});
	}));
	
  //calculateHeat();
  $('input[name="clockspeed"],input[name="education"]').click(function(event) {
    calculateHeat();
  });

  $("#seed").on("input", function() {
    $(".rig tr td").removeClass();
    var str = $(this).val();
    loadSeed:
      for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
          case "b":
            $(".rig tr td").eq(i).addClass("blank");
            break;
          case "e":
            $(".rig tr td").eq(i).addClass("ecpu");
            break;
          case "c":
            $(".rig tr td").eq(i).addClass("cpu");
            break;
          case "h":
            $(".rig tr td").eq(i).addClass("hcpu");
            break;
          case "f":
            $(".rig tr td").eq(i).addClass("fan");
            break;
          case "w":
            $(".rig tr td").eq(i).addClass("water");
            break;
          case "s":
            $(".rig tr td").eq(i).addClass("sink");
            break;
          case "p":
          case "P":
            $(".rig tr td").eq(i).addClass("psu" + (str[i] == str[i].toUpperCase() ? 2 : ''));
            break;
          case "v":
          case "V":
            $(".rig tr td").eq(i).addClass("psuV" + (str[i] == str[i].toUpperCase() ? 2 : ''));
            break;
          default:
            break loadSeed;

        }
      }
    $('#clock-' + str.slice(-1)).click();
	$('#education-' + (str.slice(-2,-1) == 'C' ? 'yes' : 'no')).click();
  });
  if ((new URL(location.href)).searchParams.get('r'))
    $('#seed').val((new URL(location.href)).searchParams.get('r'));
  $('#seed').trigger("input");

  $('#copy-seed').click(function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val('https://sliw.co/rig?r=' + $('#seed').val()).select();
    document.execCommand("copy");
    $temp.remove();
  });

  $('.rig').click(function(event) {
    var target = $(event.target);
    var component = $('input[name="selector"]:checked').val();
    $td = target.closest('td');

    if (component == 'psu' && $td.next().length == 0) {
      $td = $td.prev();
    }
    if (component == 'psuV' && $td.closest('tr').next().length == 0) {
      $td = $td.closest('tr').prev().children().eq($td.index());
    }

    if ($td.hasClass('psu')) {
      $td.next().removeClass();
      $td.next().addClass('blank');
    }
    if ($td.hasClass('psu2')) {
      $td.prev().removeClass();
      $td.prev().addClass('blank');
    }
    if ($td.hasClass('psuV')) {
      $td.closest('tr').next().children().eq($td.index()).removeClass();
      $td.closest('tr').next().children().eq($td.index()).addClass('blank');
    }
    if ($td.hasClass('psuV2')) {
      $td.closest('tr').prev().children().eq($td.index()).removeClass();
      $td.closest('tr').prev().children().eq($td.index()).addClass('blank');
    }
    $td.removeClass();
    $td.addClass(component);
    if (component == 'psu') {
      if ($td.next().hasClass('psu')) {
        $td.next().next().removeClass();
        $td.next().next().addClass('blank');
      }
      if ($td.next().hasClass('psuV')) {
        $td.next().closest('tr').next().children().eq($td.next().index()).removeClass();
        $td.next().closest('tr').next().children().eq($td.next().index()).addClass('blank');
      }
      if ($td.next().hasClass('psuV2')) {
        $td.next().closest('tr').prev().children().eq($td.next().index()).removeClass();
        $td.next().closest('tr').prev().children().eq($td.next().index()).addClass('blank');
      }
      $td.next().removeClass();
      $td.next().addClass('psu2');
    }
    if (component == 'psuV') {
      if ($td.closest('tr').next().children().eq($td.index()).hasClass('psuV')) {

        $td.closest('tr').next().next().children().eq($td.index()).removeClass();
        $td.closest('tr').next().next().children().eq($td.index()).addClass("blank");
      }
      if ($td.closest('tr').next().children().eq($td.index()).hasClass('psu')) {
        $td.closest('tr').next().children().eq($td.index() + 1).removeClass();
        $td.closest('tr').next().children().eq($td.index() + 1).addClass("blank");
      }
      if ($td.closest('tr').next().children().eq($td.index()).hasClass('psu2')) {
        $td.closest('tr').next().children().eq($td.index() - 1).removeClass();
        $td.closest('tr').next().children().eq($td.index() - 1).addClass("blank");
      }
      $td.closest('tr').next().children().eq($td.index()).removeClass();
      $td.closest('tr').next().children().eq($td.index()).addClass('psuV2');
    }
    calculateHeat();
  });
  $('#copy-script').click(function() {
	  
	  if (window.tornRigLayoutSwitcherVersion !== undefined) {
		  var win = window.open('https://torn.com/loader.php?sid=crimes&rig-import=' + $('#seed').val() + '#/cracking', '_blank');
		if (win) {
			win.focus();
			$('#script-box').html(syntaxHighlight({ "export": {"success" : true, "export-seed": $('#seed').val()}}));
		} else {
			$('#script-box').html(syntaxHighlight({ "export": {"success" : false, "reason": "Please allow popups for this website.", "export-seed": $('#seed').val()}}));
		}
	  } else {
		  var script = { "rig-case.0": [], "rig-case.1": [], "rig-case.2": [] };
		  $('.rig tr td').each(function(i, obj) {
				if ($(this).hasClass("psu") || $(this).hasClass("psuV"))
					script["rig-case." + Math.floor(i/25)].push( { x: (i%5), y: Math.floor((i%25)/5), item: getItem($(this)), x2: (i%5) + ($(this).hasClass("psu") ? 1 : 0), y2: Math.floor((i%25)/5)+($(this).hasClass("psu") ? 0 : 1) });
				else if (!($(this).hasClass("psu2") || $(this).hasClass("psuV2") || $(this).hasClass("blank")))
				script["rig-case." + Math.floor(i/25)].push( { x: (i%5), y: Math.floor((i%25)/5), item: getItem($(this)) });
			});
		  if (script["rig-case.0"].length == 0) delete script["rig-case.0"];
		  if (script["rig-case.1"].length == 0) delete script["rig-case.1"];
		  if (script["rig-case.2"].length == 0) delete script["rig-case.2"];
			
		  $('#script-box').html(syntaxHighlight(script));
		  
		  
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(JSON.stringify(script)).select();
		document.execCommand("copy");
		$temp.remove();
		$("#export-feedback").html("Copied to clipboard!").removeClass();
	  }
  });
  
});

getItem = function(obj) {
	if (obj.hasClass("ecpu"))
		return 1;
	if (obj.hasClass("cpu"))
		return 2;
	if (obj.hasClass("hcpu"))
		return 3;
	if (obj.hasClass("fan"))
		return 4;
	if (obj.hasClass("water"))
		return 5;
	if (obj.hasClass("sink"))
		return 6;
	if (obj.hasClass("psu") || obj.hasClass("psuV"))
		return 7;
	return 0;
}

function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}