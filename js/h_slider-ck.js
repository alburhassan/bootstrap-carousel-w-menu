$.fn.hSlider=function(){$el=this};var carousel=$(".carousel").carousel("pause"),init=function(){var e={};$(".carousel .item").each(function(){var t=$(this).find("h3"),n=t.first().text(),r="";typeof t.attr("data-group")!="undefined"&&(r=t.attr("data-group"));typeof e[r]=="undefined"&&(e[r]=[]);e[r].push(n)});for(var t in e){$(".h-slider-nav-list").append("<li><h4>"+t+"</h4></li>");$(".h-slider-nav-select").append("<optgroup label='"+t+"'>");for(var n in e[t]){$(".h-slider-nav-select").append("<option>"+e[t][n]+"</option>");$(".h-slider-nav-list").append("<li><a href='#'>"+e[t][n]+"</a></li>")}$(".h-slider-nav-select").append("</optgroup>")}$(".h-slider-nav-list a").click(function(){var e=$(this).text();$(".h-slider .item").each(function(t,n){$(n).find("h3").first().text()==e&&$(".carousel").carousel(t)})});$(".h-slider-nav-select").change(function(){$(".carousel").carousel($(this)[0].selectedIndex)})},updateNav=function(){var e=$("#next-button"),t=$("#previous-button");if($(".item.active").next().length<=0){e.hide();t.removeClass("col-sm-3");t.addClass("col-sm-12")}else{e.show();t.addClass("col-sm-3");t.removeClass("col-sm-12")}if($(".item.active").prev().length<=0){t.hide();e.removeClass("col-sm-9");e.addClass("col-sm-12")}else{t.show();e.addClass("col-sm-9");e.removeClass("col-sm-12")}var n=$(".carousel .item.active").find("h3").first().text();$(".h-slider-nav-select option").each(function(){$(this).text()==n?$(this).attr("selected","selected"):$(this).removeAttr("selected")});$(".h-slider-nav-list li").each(function(){$(this).text()==n?$(this).addClass("active"):$(this).removeClass("active")})};carousel.on("slid.bs.carousel",updateNav);init();updateNav();