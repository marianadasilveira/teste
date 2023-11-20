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
                email: {
                    required: true,
                    email: true
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
                    required: "Por favor, insira o seu telefone para contato",
                    minlength: "Seu número deve conter pelo menos 8 caracteres"
                },
                email: {
                    required: "Por favor, insira o seu e-mail para contato",
                    minlength: "Seu endereço de e-mail deve conter pelo menos 8 caracteres"
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

                        

                        /*function exibirAlerta(){
                            alert ("Formulário enviado!");
                        }*/
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