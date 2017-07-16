export class InfoWriter {
  constructor() {

  }

  write(msg) {
    $('#infoBox').text(msg).show();
    setTimeout(function() {
      $('#infoBox').fadeOut(500);
    }, 3000);
  }
}
