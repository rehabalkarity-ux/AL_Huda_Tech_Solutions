$(document).ready(function () {

    $(".project-btn").click(function () {
        var project = $(this).data("project");
        $("#modalBody").load("../ajax/" + project + ".html");
        $("#projectModal").show();
    });

    $(".modal-close").click(function () {
        $(".project-modal").hide();
    });

    $("#process-btn").click(function () {
        $("#processBody").load("../ajax/process.html");
        $("#processModal").show();
    });

    $("#loginForm").submit(function (event) {

        var email = $("#loginEmail").val().trim();
        var password = $("#loginPassword").val().trim();

        if (email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        // تم فحص الشروط بنجاح
        alert("Form submitted successfully!");
    });
     //صفحة التواصل 
    $("#contactForm").submit(function (event) {

    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
        toastr.error("Please fill in all fields.");
        return;
    }
    toastr.success("Your message has been sent successfully!");

});

$("#registerForm").submit(function (event) {


    if ($("#registerPassword").val() !== $("#confirmPassword").val()) {

        alert("Passwords do not match.");
        return;
    }
    alert("Account created successfully!");
});

}); // <-- القوس الصحيح للـ document.ready ينبغي أن يكون هنا في النهاية