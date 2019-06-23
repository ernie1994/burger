$(document).ready(() => {

    $("#submit").click(() => {
        event.preventDefault();
        $.ajax({
            method: "POST",
            url: "/api/burgers",
            data: {
                burger_name: $("input").val().trim()
            }
        })
            .then(res => {
                console.log(res);
                window.location.reload();
            });
    });

    $(document).on("click", ".devour-btn", function () {

        $.ajax({
            method: "PUT",
            url: "/api/burgers",
            data: {
                id: $(this).attr("data-burger-id")
            }
        })
            .then(_res => {
                window.location.reload();
            })

    });

});