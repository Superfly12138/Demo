
    // console.log($(".identify").HTML);
    var c = document.getElementsByClassName("identify")
    console.log(c[0].innerHTML);
    if(c[0].innerHTML=='1') {
        $.ajax(
            {
                type: "get",
                url: "./json/posts.json",
                data: {a: 1, b: 2},
                dataType: "json",
                success: function (data, textStatus) {

                    //
                    // $(id).find(".username").html(list[i]["UserName"]);
                    // $(id).find(".postname").html(list[i]["PostName"]);
                    // $(id).find(".imagelink").attr("src",list[i]["ImageLink"]);
                    // $(id).find(".artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[i]["Description"]);
                    var list = data["list"];
                    $("title").html(list[0]["PostName"]);
                    $(".major").find(".postname").html(list[0]["PostName"]);
                    $(".major").find(".username").html(list[0]["UserName"]);
                    $("#main").find(".imagelink").attr("src", list[0]["ImageLink"]);
                    $("#main").find(".artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[0]["Description"]);


                }
            }
        )
        c[0].innerHTML= ""
    }

    if(c[0].innerHTML=='2') {
        $.ajax(
            {
                type: "get",
                url: "./json/posts.json",
                data: {a: 1, b: 2},
                dataType: "json",
                success: function (data, textStatus) {

                    //
                    // $(id).find(".username").html(list[i]["UserName"]);
                    // $(id).find(".postname").html(list[i]["PostName"]);
                    // $(id).find(".imagelink").attr("src",list[i]["ImageLink"]);
                    // $(id).find(".artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[i]["Description"]);
                    var list = data["list"];
                    $("title").html(list[1]["PostName"]);
                    $(".major").find(".postname").html(list[1]["PostName"]);
                    $(".major").find(".username").html(list[1]["UserName"]);
                    $("#main").find(".imagelink").attr("src", list[1]["ImageLink"]);
                    $("#main").find(".artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[1]["Description"]);


                }
            }
        )
        c[0].innerHTML= ""
    }

    if(c[0].innerHTML=='3') {
        $.ajax(
            {
                type: "get",
                url: "./json/posts.json",
                data: {a: 1, b: 2},
                dataType: "json",
                success: function (data, textStatus) {

                    //
                    // $(id).find(".username").html(list[i]["UserName"]);
                    // $(id).find(".postname").html(list[i]["PostName"]);
                    // $(id).find(".imagelink").attr("src",list[i]["ImageLink"]);
                    // $(id).find(".artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[i]["Description"]);
                    var list = data["list"];
                    $("title").html(list[2]["PostName"]);
                    $(".major").find(".postname").html(list[2]["PostName"]);
                    $(".major").find(".username").html(list[2]["UserName"]);
                    $("#main").find(".imagelink").attr("src", list[2]["ImageLink"]);
                    $("#main").find(".artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[2]["Description"]);


                }
            }
        )
        c[0].innerHTML= ""
    }

    if(c[0].innerHTML=='4') {
        $.ajax(
            {
                type: "get",
                url: "./json/posts.json",
                data: {a: 1, b: 2},
                dataType: "json",
                success: function (data, textStatus) {

                    //
                    // $(id).find(".username").html(list[i]["UserName"]);
                    // $(id).find(".postname").html(list[i]["PostName"]);
                    // $(id).find(".imagelink").attr("src",list[i]["ImageLink"]);
                    // $(id).find(".artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[i]["Description"]);
                    var list = data["list"];
                    $("title").html(list[3]["PostName"]);
                    $(".major").find(".postname").html(list[3]["PostName"]);
                    $(".major").find(".username").html(list[3]["UserName"]);
                    $("#main").find(".imagelink").attr("src", list[3]["ImageLink"]);
                    $("#main").find(".artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[3]["Description"]);


                }
            }
        )
        c[0].innerHTML= ""
    }

    if(c[0].innerHTML=='5') {
        $.ajax(
            {
                type: "get",
                url: "./json/posts.json",
                data: {a: 1, b: 2},
                dataType: "json",
                success: function (data, textStatus) {

                    //
                    // $(id).find(".username").html(list[i]["UserName"]);
                    // $(id).find(".postname").html(list[i]["PostName"]);
                    // $(id).find(".imagelink").attr("src",list[i]["ImageLink"]);
                    // $(id).find(".artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[i]["Description"]);
                    var list = data["list"];
                    $("title").html(list[4]["PostName"]);
                    $(".major").find(".postname").html(list[4]["PostName"]);
                    $(".major").find(".username").html(list[4]["UserName"]);
                    $("#main").find(".imagelink").attr("src", list[4]["ImageLink"]);
                    $("#main").find(".artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[4]["Description"]);


                }
            }
        )
        c[0].innerHTML= ""
    }

    if(c[0].innerHTML=='6') {
        $.ajax(
            {
                type: "get",
                url: "./json/posts.json",
                data: {a: 1, b: 2},
                dataType: "json",
                success: function (data, textStatus) {

                    //
                    // $(id).find(".username").html(list[i]["UserName"]);
                    // $(id).find(".postname").html(list[i]["PostName"]);
                    // $(id).find(".imagelink").attr("src",list[i]["ImageLink"]);
                    // $(id).find(".artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[i]["Description"]);
                    var list = data["list"];
                    $("title").html(list[5]["PostName"]);
                    $(".major").find(".postname").html(list[5]["PostName"]);
                    $(".major").find(".username").html(list[5]["UserName"]);
                    $("#main").find(".imagelink").attr("src", list[5]["ImageLink"]);
                    $("#main").find(".artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[5]["Description"]);


                }
            }
        )
        c[0].innerHTML= ""
    }