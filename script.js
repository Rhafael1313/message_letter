$( document ).ready(function() {

    const params = new URLSearchParams(window.location.search);

    const nome = params.get('nome');
    const texto = params.get('texto');

    $('.line1').text(`Para ${nome},`);
    $('.line2').text(texto);
    
    const envelope = $('#envelope');

    let state_envelope = false;
    
    envelope.click( function() {
        if (!state_envelope) {
            open();
            state_envelope = !state_envelope;
        } else {
            close();
            state_envelope = !state_envelope;
        }
    });
    
    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});