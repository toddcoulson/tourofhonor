

$(function() {
    $('ul.tohPhotos').bsPhotoGallery({
        "classes" : "col-lg-2 col-md-4 col-sm-3 col-xs-4 col-xxs-12",
        "hasModal" : true
    });

    /*$('#slideshow img:gt(0)').hide();
    setInterval(function() {
        $('#slideshow :first-child')
            .fadeOut(1000)
            .next('img')
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 6000);*/

    /*

    //$('#slideshow img:gt(0)').hide();

    var index;
    index = 0;
    var totalslides;
    totalslides = 4;

    var nextSlide = function () {
        $('#slideshow div').eq(index).fadeOut(1000);
        $('#nav' + index).toggleClass('navselected');
        index++;
        if (index > totalslides - 1) { index = 0; }
        $('#slideshow div').eq(index).fadeIn(1000);
        $('#nav' + index).toggleClass('navselected');
    }
    var nextSlideTimer = setInterval(nextSlide, 4000);

    function nav(selectedSlide) {
        clearInterval(nextSlideTimer);

        $('#slideshow div').eq(index).fadeOut(1000);
        $('#nav' + index).toggleClass('navselected');
        index = selectedSlide;
        $('#slideshow div').eq(index).fadeIn(1000);
        $('#nav' + index).toggleClass('navselected');

        nextSlideTimer = setInterval(nextSlide, 6000);
    }

    $("#nav0").click(function () { nav(0); });
    $("#nav1").click(function () { nav(1); });
    $("#nav2").click(function () { nav(2); });
    $("#nav3").click(function () { nav(3); });
    $("#nav4").click(function () { nav(4); });









    $(document).ready(function() {
        $('#contact_form').bootstrapValidator({
            // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                name: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: 'Please supply your first name'
                        }
                    }
                },

                email: {
                    validators: {
                        notEmpty: {
                            message: 'Please supply your email address'
                        },
                        emailAddress: {
                            message: 'Please supply a valid email address'
                        }
                    }
                },
                subject: {
                    validators: {
                        stringLength: {
                            min: 10,
                            max: 200,
                            message:'Please enter at least 10 characters and no more than 200'
                        },
                        notEmpty: {
                            message: 'Please supply a description of your project'
                        }
                    }
                }
            },
            comment: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                }
            }
        }
                                              })
            .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
    });

*/
});