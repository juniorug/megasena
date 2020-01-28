var request = require('request');
var cheerio = require('cheerio');

request({
  method: 'GET',
  jar: true,
  url: 'http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena'
}, (err, res, body) => {

  if (err) return console.error(err);

  let $ = cheerio.load(body);

  let lis = $('.resultado-loteria').html();
  console.log("lis: ", lis);

    let ulDezenas = $('#ulDezenas').html();
    console.log("ulDezenas: ", ulDezenas);

  $('.numbers.megasena li').each(function() {
    let number = $(this).text();
    console.log(number);
  });

  let title = $('title');

  console.log(title.text());
});