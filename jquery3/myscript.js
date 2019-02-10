$(document).ready(function() {

    $.getJSON("lab3.json",function(data){
        var detail = '';
        $.each(data, function(key, value){
            detail += '<tr>' ;
            detail += '<td>' + value.number + '</td>';
            detail += '<td>' + value.nationality + '</td>';
            detail += '<td>' + value.position + '</td>';
            detail += '<td>' + value.name + '</td>';
            detail += '</tr>';
        });
        $('#table').append(detail);
    });
    
    $("#input-text").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $('#submit-btn').click(function() {
            $("#table tr").filter(function() {
               $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
        $(document).on('keypress',function(e){
            if(e.which == 13) {
                $("#table tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                 });
            }
        });
    });

    $('#advanced').click(function(){
        document.getElementById("advasearch").style.display = "initial"
        document.getElementById("field-id").style.display = "none"
        document.getElementById("input-form").style.display = "none";
    });

    $("#back").click(function(){
        document.getElementById("advasearch").style.display = "none"
        document.getElementById("field-id").style.display ="initial"
        document.getElementById("input-form").style.display = "initial"
    });

    $("#number").on("keyup",function(){
        var value_number = $(this).val().toLowerCase();
        $("#search").click(function(){
            $("#table tr").filter(function(){
                $(this).toggle($(this).text().toLowerCase().indexOf(value_number) > -1)
            });
        });
        $(document).on('keypress',function(e){
            if(e.which == 13) {
                $("#table tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value_number) > -1)
                 });
            }
        });
    });

    $("#nation").on("keyup",function(){
        var value_nation = $(this).val().toLowerCase();
        $("#search").click(function(){
            $("#table tr").filter(function(){
                $(this).toggle($(this).text().toLowerCase().indexOf(value_nation) > -1)
            });
        });
        $(document).on('keypress',function(e){
            if(e.which == 13) {
                $("#table tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value_nation) > -1)
                 });
            }
        });
    });

    $("#posit").on("keyup",function(){
        var value_posit = $(this).val().toLowerCase();
        $("#search").click(function(){
            $("#table tr").filter(function(){
                $(this).toggle($(this).text().toLowerCase().indexOf(value_posit) > -1)
            });
        });
        $(document).on('keypress',function(e){
            if(e.which == 13) {
                $("#table tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value_posit) > -1)
                 });
            }
        });
    });

    $("#name").on("keyup",function(){
        var value_name = $(this).val().toLowerCase();
        $("#search").click(function(){
            $("#table tr").filter(function(){
                $(this).toggle($(this).text().toLowerCase().indexOf(value_name) > -1)
            });
        });
        $(document).on('keypress',function(e){
            if(e.which == 13) {
                $("#table tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value_name) > -1)
                 });
            }
        });
    });

    $.ajax({
        url: "lab3.json",
        dataType: "json"
    })
    
    .done(function(response) {
        console.log(response);
        response.forEach(element => {
            console.log(element.name, element.age);
        });
    });
});