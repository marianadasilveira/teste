$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 8
                },
                telefone: {
                    required: true,
                    /*telefone: true*/
                    minlength: 8
                },
                /*message: {
                    required: true,
                    minlength: 20
                }*/
            },
            messages: {
                name: {
                    required: "Por favor, insira o seu nome",
                    minlength: "Seu nome deve conter pelo menos 2 caracteres"
                },
                subject: {
                    required: "Por favor, insira o assunto da mensagem",
                    minlength: "Seu assunto deve conter pelo menos 4 caracteres"
                },
                number: {
                    required: "Insira o seu número para contato",
                    minlength: "Seu número deve conter pelo menos 8 caracteres"
                },
                telefone: {
                    required: "Sem telefone, sem mensagem",
                    minlength: "Seu número deve conter pelo menos 8 caracteres"
                },
                /*message: {
                    required: "Você prec",
                    minlength: "thats all? really?"
                }*/
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})