$(function() {
    'use strict';
    console.log('Services');
    $('#service2').hide();
    $('#service3').hide();
    $('#service4').hide();

    $('#s1').on('click', function() {

        $('#service1').show();
        $('#service2').hide();
        $('#service3').hide();
        $('#service4').hide();
    });

    $('#s2').on('click', function() {

        $('#service1').hide();
        $('#service2').show();
        $('#service3').hide();
        $('#service4').hide();
    });

    $('#s3').on('click', function() {

        $('#service1').hide();
        $('#service2').hide();
        $('#service3').show();
        $('#service4').hide();
    });

    $('#s4').on('click', function() {

        $('#service1').hide();
        $('#service2').hide();
        $('#service3').hide();
        $('#service4').show();
    });

});