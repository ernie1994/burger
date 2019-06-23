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

    $("#reset").click(() => {

        $.ajax({
            method: "DELETE",
            url: "/api/burgers"
        })
            .then(_res => {
                window.location.reload();
            })

    });

});