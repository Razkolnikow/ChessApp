export class InfoWriter {
  constructor() {

  }

  write(msg) {
    let miliSeconds = 3000;
    if (msg === 'Checkmate!') miliSeconds = 15000;

    $('#infoBox').text(msg).show();
    setTimeout(function() {
      $('#infoBox').fadeOut(500);
    }, miliSeconds);
  }
}
