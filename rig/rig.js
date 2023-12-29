function commaSeparateNumber(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return val;
}

calculateHeat = function() {
  var clockspeed = $('input[name="clockspeed"]:checked').val();

  $("#rig tr td").empty();
  $("#rig tr td").removeClass("overheat hot cold");
  $("#rig tr td.ecpu").each(function(i, obj) {
    var cellIndex = $(this).index();
    $(this).append(11);
    $(this).next().append(1);
    $(this).prev().append(1);
    $(this).closest('tr').next().children().eq(cellIndex).next().append(1);
    $(this).closest('tr').next().children().eq(cellIndex).append(1);
    $(this).closest('tr').next().children().eq(cellIndex).prev().append(1);
    $(this).closest('tr').prev().children().eq(cellIndex).next().append(1);
    $(this).closest('tr').prev().children().eq(cellIndex).append(1);
    $(this).closest('tr').prev().children().eq(cellIndex).prev().append(1);
  });
  $("#rig tr td.cpu").each(function(i, obj) {
    var cellIndex = $(this).index();
    $(this).append(111111);
    $(this).next().next().append(11);
    $(this).next().append(1111);
    $(this).prev().append(1111);
    $(this).prev().prev().append(11);

    $(this).closest('tr').next().next().children().eq(cellIndex).next().next().append(11);
    $(this).closest('tr').next().next().children().eq(cellIndex).next().append(11);
    $(this).closest('tr').next().next().children().eq(cellIndex).append(11);
    $(this).closest('tr').next().next().children().eq(cellIndex).prev().append(11);
    $(this).closest('tr').next().next().children().eq(cellIndex).prev().prev().append(11);

    $(this).closest('tr').next().children().eq(cellIndex).next().next().append(11);
    $(this).closest('tr').next().children().eq(cellIndex).next().append(1111);
    $(this).closest('tr').next().children().eq(cellIndex).append(1111);
    $(this).closest('tr').next().children().eq(cellIndex).prev().append(1111);
    $(this).closest('tr').next().children().eq(cellIndex).prev().prev().append(11);

    $(this).closest('tr').prev().children().eq(cellIndex).next().next().append(11);
    $(this).closest('tr').prev().children().eq(cellIndex).next().append(1111);
    $(this).closest('tr').prev().children().eq(cellIndex).append(1111);
    $(this).closest('tr').prev().children().eq(cellIndex).prev().append(1111);
    $(this).closest('tr').prev().children().eq(cellIndex).prev().prev().append(11);

    $(this).closest('tr').prev().prev().children().eq(cellIndex).next().next().append(11);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).next().append(11);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).append(11);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).prev().append(11);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).prev().prev().append(11);
  });
  $("#rig tr td.hcpu").each(function(i, obj) {
    var cellIndex = $(this).index();
    $(this).append(111111111111111);
    $(this).next().next().next().next().append(111);
    $(this).next().next().next().append(111111);
    $(this).next().next().append(111111111);
    $(this).next().append(111111111111);
    $(this).prev().append(111111111111);
    $(this).prev().prev().append(111111111);
    $(this).prev().prev().prev().append(111111);
    $(this).prev().prev().prev().prev().append(111);

    $(this).closest('tr').next().next().next().next().children().eq(cellIndex).next().next().next().next().append(111);
    $(this).closest('tr').next().next().next().next().children().eq(cellIndex).next().next().next().append(111);
    $(this).closest('tr').next().next().next().next().children().eq(cellIndex).next().next().append(111);
    $(this).closest('tr').next().next().next().next().children().eq(cellIndex).next().append(111);
    $(this).closest('tr').next().next().next().next().children().eq(cellIndex).append(111);
    $(this).closest('tr').next().next().next().next().children().eq(cellIndex).prev().append(111);
    $(this).closest('tr').next().next().next().next().children().eq(cellIndex).prev().prev().append(111);
    $(this).closest('tr').next().next().next().next().children().eq(cellIndex).prev().prev().prev().append(111);
    $(this).closest('tr').next().next().next().next().children().eq(cellIndex).prev().prev().prev().prev().append(111);

    $(this).closest('tr').next().next().next().children().eq(cellIndex).next().next().next().next().append(111);
    $(this).closest('tr').next().next().next().children().eq(cellIndex).next().next().next().append(111111);
    $(this).closest('tr').next().next().next().children().eq(cellIndex).next().next().append(111111);
    $(this).closest('tr').next().next().next().children().eq(cellIndex).next().append(111111);
    $(this).closest('tr').next().next().next().children().eq(cellIndex).append(111111);
    $(this).closest('tr').next().next().next().children().eq(cellIndex).prev().append(111111);
    $(this).closest('tr').next().next().next().children().eq(cellIndex).prev().prev().append(111111);
    $(this).closest('tr').next().next().next().children().eq(cellIndex).prev().prev().prev().append(111111);
    $(this).closest('tr').next().next().next().children().eq(cellIndex).prev().prev().prev().prev().append(111);

    $(this).closest('tr').next().next().children().eq(cellIndex).next().next().next().next().append(111);
    $(this).closest('tr').next().next().children().eq(cellIndex).next().next().next().append(111111);
    $(this).closest('tr').next().next().children().eq(cellIndex).next().next().append(111111111);
    $(this).closest('tr').next().next().children().eq(cellIndex).next().append(111111111);
    $(this).closest('tr').next().next().children().eq(cellIndex).append(111111111);
    $(this).closest('tr').next().next().children().eq(cellIndex).prev().append(111111111);
    $(this).closest('tr').next().next().children().eq(cellIndex).prev().prev().append(111111111);
    $(this).closest('tr').next().next().children().eq(cellIndex).prev().prev().prev().append(111111);
    $(this).closest('tr').next().next().children().eq(cellIndex).prev().prev().prev().prev().append(111);

    $(this).closest('tr').next().children().eq(cellIndex).next().next().next().next().append(111);
    $(this).closest('tr').next().children().eq(cellIndex).next().next().next().append(111111);
    $(this).closest('tr').next().children().eq(cellIndex).next().next().append(111111111);
    $(this).closest('tr').next().children().eq(cellIndex).next().append(111111111111);
    $(this).closest('tr').next().children().eq(cellIndex).append(111111111111);
    $(this).closest('tr').next().children().eq(cellIndex).prev().append(111111111111);
    $(this).closest('tr').next().children().eq(cellIndex).prev().prev().append(111111111);
    $(this).closest('tr').next().children().eq(cellIndex).prev().prev().prev().append(111111);
    $(this).closest('tr').next().children().eq(cellIndex).prev().prev().prev().prev().append(111);

    $(this).closest('tr').prev().children().eq(cellIndex).next().next().next().next().append(111);
    $(this).closest('tr').prev().children().eq(cellIndex).next().next().next().append(111111);
    $(this).closest('tr').prev().children().eq(cellIndex).next().next().append(111111111);
    $(this).closest('tr').prev().children().eq(cellIndex).next().append(111111111111);
    $(this).closest('tr').prev().children().eq(cellIndex).append(111111111111);
    $(this).closest('tr').prev().children().eq(cellIndex).prev().append(111111111111);
    $(this).closest('tr').prev().children().eq(cellIndex).prev().prev().append(111111111);
    $(this).closest('tr').prev().children().eq(cellIndex).prev().prev().prev().append(111111);
    $(this).closest('tr').prev().children().eq(cellIndex).prev().prev().prev().prev().append(111);

    $(this).closest('tr').prev().prev().children().eq(cellIndex).next().next().next().next().append(111);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).next().next().next().append(111111);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).next().next().append(111111111);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).next().append(111111111);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).append(111111111);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).prev().append(111111111);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).prev().prev().append(111111111);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).prev().prev().prev().append(111111);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).prev().prev().prev().prev().append(111);

    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).next().next().next().next().append(111);
    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).next().next().next().append(111111);
    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).next().next().append(111111);
    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).next().append(111111);
    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).append(111111);
    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).prev().append(111111);
    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).prev().prev().append(111111);
    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).prev().prev().prev().append(111111);
    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).prev().prev().prev().prev().append(111);

    $(this).closest('tr').prev().prev().prev().prev().children().eq(cellIndex).next().next().next().next().append(111);
    $(this).closest('tr').prev().prev().prev().prev().children().eq(cellIndex).next().next().next().append(111);
    $(this).closest('tr').prev().prev().prev().prev().children().eq(cellIndex).next().next().append(111);
    $(this).closest('tr').prev().prev().prev().prev().children().eq(cellIndex).next().append(111);
    $(this).closest('tr').prev().prev().prev().prev().children().eq(cellIndex).append(111);
    $(this).closest('tr').prev().prev().prev().prev().children().eq(cellIndex).prev().append(111);
    $(this).closest('tr').prev().prev().prev().prev().children().eq(cellIndex).prev().prev().append(111);
    $(this).closest('tr').prev().prev().prev().prev().children().eq(cellIndex).prev().prev().prev().append(111);
    $(this).closest('tr').prev().prev().prev().prev().children().eq(cellIndex).prev().prev().prev().prev().append(111);
  });

  $("#rig tr td").each(function(i, obj) {
    $(this).data("heat", $(this).text().length * clockspeed);
    $(this).empty();
  });

  $("#rig tr td.psu").each(function(i, obj) {
    var cellIndex = $(this).index();
    $(this).append(1111);
    $(this).next().append(1111);
    $(this).next().next().append(11);
    $(this).prev().append(11);
    $(this).closest('tr').next().children().eq(cellIndex).next().append(11);
    $(this).closest('tr').next().children().eq(cellIndex).next().next().append(11);
    $(this).closest('tr').next().children().eq(cellIndex).append(11);
    $(this).closest('tr').next().children().eq(cellIndex).prev().append(11);
    $(this).closest('tr').prev().children().eq(cellIndex).next().append(11);
    $(this).closest('tr').prev().children().eq(cellIndex).next().next().append(11);
    $(this).closest('tr').prev().children().eq(cellIndex).append(11);
    $(this).closest('tr').prev().children().eq(cellIndex).prev().append(11);
  });
  $("#rig tr td.psuV").each(function(i, obj) {
    var cellIndex = $(this).index();
    $(this).closest('tr').prev().children().eq(cellIndex).next().append(11);
    $(this).closest('tr').prev().children().eq(cellIndex).append(11);
    $(this).closest('tr').prev().children().eq(cellIndex).prev().append(11);
    $(this).next().append(11);
    $(this).append(1111);
    $(this).prev().append(11);
    $(this).closest('tr').next().children().eq(cellIndex).next().append(11);
    $(this).closest('tr').next().children().eq(cellIndex).append(1111);
    $(this).closest('tr').next().children().eq(cellIndex).prev().append(11);
    $(this).closest('tr').next().next().children().eq(cellIndex).next().append(11);
    $(this).closest('tr').next().next().children().eq(cellIndex).append(11);
    $(this).closest('tr').next().next().children().eq(cellIndex).prev().append(11);
  });

  $("#rig tr td").each(function(i, obj) {
    $(this).data("heat", $(this).data("heat") + $(this).text().length);
    $(this).empty();
  });

  $("#rig tr td.sink").each(function(i, obj) {
    var cellIndex = $(this).index();
    $(this).next().data("heat", $(this).next().data("heat") * 0.1);
    $(this).prev().data("heat", $(this).prev().data("heat") * 0.1);
    $(this).closest('tr').next().children().eq(cellIndex).data("heat", $(this).closest('tr').next().children().eq(cellIndex).data("heat") * 0.1);
    $(this).closest('tr').prev().children().eq(cellIndex).data("heat", $(this).closest('tr').prev().children().eq(cellIndex).data("heat") * 0.1);
  });

  $("#rig tr td.water").each(function(i, obj) {
    var cellIndex = $(this).index();
    //if ($(this).data("heat") >= 100) {
    //  $(this).addClass("overheat");
    //  return;
    //}

    $(this).closest('tr').next().children().eq(cellIndex).next().append('111111111111111111111111111111111111111111');
    $(this).closest('tr').next().children().eq(cellIndex).append('111111111111111111111111111111111111111111');
    $(this).closest('tr').next().children().eq(cellIndex).prev().append('111111111111111111111111111111111111111111');

    $(this).next().append('111111111111111111111111111111111111111111');
    $(this).append('1111111111111111111111111111');
    $(this).prev().append('111111111111111111111111111111111111111111');

    $(this).closest('tr').prev().children().eq(cellIndex).next().append('111111111111111111111111111111111111111111');
    $(this).closest('tr').prev().children().eq(cellIndex).append('111111111111111111111111111111111111111111');
    $(this).closest('tr').prev().children().eq(cellIndex).prev().append('111111111111111111111111111111111111111111');

  });

  $("#rig tr td.fan").each(function(i, obj) {
    var cellIndex = $(this).index();
    //if ($(this).data("heat") >= 100) {
    //  $(this).addClass("overheat");
    //  return;
    //}

    $(this).closest('tr').next().next().next().children().eq(cellIndex).next().next().next().append(111);
    $(this).closest('tr').next().next().next().children().eq(cellIndex).next().next().append(111);
    $(this).closest('tr').next().next().next().children().eq(cellIndex).next().append(111);
    $(this).closest('tr').next().next().next().children().eq(cellIndex).append(111);
    $(this).closest('tr').next().next().next().children().eq(cellIndex).prev().append(111);
    $(this).closest('tr').next().next().next().children().eq(cellIndex).prev().prev().append(111);
    $(this).closest('tr').next().next().next().children().eq(cellIndex).prev().prev().prev().append(111);

    $(this).closest('tr').next().next().children().eq(cellIndex).next().next().next().append(111);
    $(this).closest('tr').next().next().children().eq(cellIndex).next().next().append(111111);
    $(this).closest('tr').next().next().children().eq(cellIndex).next().append(111111);
    $(this).closest('tr').next().next().children().eq(cellIndex).append(111111);
    $(this).closest('tr').next().next().children().eq(cellIndex).prev().append(111111);
    $(this).closest('tr').next().next().children().eq(cellIndex).prev().prev().append(111111);
    $(this).closest('tr').next().next().children().eq(cellIndex).prev().prev().prev().append(111);

    $(this).closest('tr').next().children().eq(cellIndex).next().next().next().append(111);
    $(this).closest('tr').next().children().eq(cellIndex).next().next().append(111111);
    $(this).closest('tr').next().children().eq(cellIndex).next().append(11111111);
    $(this).closest('tr').next().children().eq(cellIndex).append(11111111);
    $(this).closest('tr').next().children().eq(cellIndex).prev().append(11111111);
    $(this).closest('tr').next().children().eq(cellIndex).prev().prev().append(111111);
    $(this).closest('tr').next().children().eq(cellIndex).prev().prev().prev().append(111);

    $(this).next().next().next().append(111);
    $(this).next().next().append(111111);
    $(this).next().append(11111111);
    $(this).append(11111111111);
    $(this).prev().append(11111111);
    $(this).prev().prev().append(111111);
    $(this).prev().prev().prev().append(111);

    $(this).closest('tr').prev().children().eq(cellIndex).next().next().next().append(111);
    $(this).closest('tr').prev().children().eq(cellIndex).next().next().append(111111);
    $(this).closest('tr').prev().children().eq(cellIndex).next().append(11111111);
    $(this).closest('tr').prev().children().eq(cellIndex).append(11111111);
    $(this).closest('tr').prev().children().eq(cellIndex).prev().append(11111111);
    $(this).closest('tr').prev().children().eq(cellIndex).prev().prev().append(111111);
    $(this).closest('tr').prev().children().eq(cellIndex).prev().prev().prev().append(111);

    $(this).closest('tr').prev().prev().children().eq(cellIndex).next().next().next().append(111);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).next().next().append(111111);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).next().append(111111);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).append(111111);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).prev().append(111111);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).prev().prev().append(111111);
    $(this).closest('tr').prev().prev().children().eq(cellIndex).prev().prev().prev().append(111);

    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).next().next().next().append(111);
    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).next().next().append(111);
    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).next().append(111);
    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).append(111);
    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).prev().append(111);
    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).prev().prev().append(111);
    $(this).closest('tr').prev().prev().prev().children().eq(cellIndex).prev().prev().prev().append(111);
  });

  $("#rig tr td").each(function(i, obj) {
    $(this).data("heat", $(this).data("heat") - $(this).text().length);
    $(this).empty();
  });

  var mips = 0;
  var powerMax = 0;
  var powerUse = 0;
  var comp = 0;
  var overheatComp = 0;
  var hottestComp = 0;
  $("#rig tr td").each(function(i, obj) {
    comp++;

    if ($(this).data("heat") != 0) {
      $(this).html(Math.round($(this).data("heat") * 10, 1) / 10);
      if ($(this).data("heat") > hottestComp) {
        hottestComp = Math.round($(this).data("heat") * 10, 1) / 10;
      }
    }

    if ($(this).data("heat") >= 100) {
      $(this).addClass("overheat");
    } else if ($(this).data("heat") >= 50) {
      $(this).addClass("hot");
    } else if ($(this).data("heat") < 0) {
      $(this).addClass("cold");
    }
    $(this).removeData("heat");

    if ($(this).hasClass("overheat")) {
      overheatComp++;
    } else {
      if ($(this).hasClass("psu") || $(this).hasClass("psuV")) {
        powerMax += 750;
      }
      if ($(this).hasClass("ecpu")) {
        powerUse += 30;
        mips += 25000 * (clockspeed / 2 + 0.5);
      }
      if ($(this).hasClass("cpu")) {
        powerUse += 70;
        mips += 30000 * (clockspeed / 4 * 3 + 0.25);
      }
      if ($(this).hasClass("hcpu")) {
        powerUse += 150;
        mips += 50000 * clockspeed;
      }
      if ($(this).hasClass("fan")) {
        powerUse += 5;
      }
    }

  });

  powerUse *= clockspeed;

  if (powerUse > powerMax) {
    mips *= (powerMax / powerUse);
    mips = Math.floor(mips / 10) * 10;
    $("#power-perc").html(Math.floor((powerMax / powerUse) * 100));
  } else {
    mips = Math.round(mips);
    $("#power-perc").html(Math.floor((powerUse / powerMax) * 100));
  }

  $("#mips").html(commaSeparateNumber(mips));
  $("#brute").html(Math.round((0.0052 * Math.sqrt(mips) - 0.6252) * 10000) / 10000);
  $("#comp").html(comp);
  $("#overheat-comp").html(overheatComp);
  $("#hottest-comp").html(hottestComp);
  $("#power-use").html(powerUse);
  $("#power-max").html(powerMax);


  if (powerUse > powerMax && clockspeed > 1) {
    $('input[name="clockspeed"]:checked').prev().prev().click();
    calculateHeat();
  }

  var seed = $("#rig td").map(function() {
    if (~$(this).attr("class").indexOf('2'))
      return $(this).attr("class").replace('psuV', 'v').charAt(0).toUpperCase();
    else
      return $(this).attr("class").replace('psuV', 'v').charAt(0);
  }).get().join('') + $('input[name="clockspeed"]:checked').attr("id").slice(-1);
  $('#seed').val(seed);
}

$(document).ready(function() {
  //calculateHeat();
  $('input[name="clockspeed"]').click(function(event) {
    calculateHeat();
  });

  $("#seed").on("input", function() {
    $("#rig tr td").removeClass();
    var str = $(this).val();
    loadSeed:
      for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
          case "b":
            $("#rig tr td").eq(i).addClass("blank");
            break;
          case "e":
            $("#rig tr td").eq(i).addClass("ecpu");
            break;
          case "c":
            $("#rig tr td").eq(i).addClass("cpu");
            break;
          case "h":
            $("#rig tr td").eq(i).addClass("hcpu");
            break;
          case "f":
            $("#rig tr td").eq(i).addClass("fan");
            break;
          case "w":
            $("#rig tr td").eq(i).addClass("water");
            break;
          case "s":
            $("#rig tr td").eq(i).addClass("sink");
            break;
          case "p":
          case "P":
            $("#rig tr td").eq(i).addClass("psu" + (str[i] == str[i].toUpperCase() ? 2 : ''));
            break;
          case "v":
          case "V":
            $("#rig tr td").eq(i).addClass("psuV" + (str[i] == str[i].toUpperCase() ? 2 : ''));
            break;
          default:
            break loadSeed;

        }
      }
    $('#clock-' + str.slice(-1)).click();
  });
  if ((new URL(location.href)).searchParams.get('r'))
    $('#seed').val((new URL(location.href)).searchParams.get('r'));
  $('#seed').trigger("input");

  $('#copy-seed').click(function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val('https://https://sliw.co/rig?r=' + $('#seed').val()).select();
    document.execCommand("copy");
    $temp.remove();
  });

  $('#rig').click(function(event) {
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
});
