var request = require('request');
var cheerio = require('cheerio');

request({
  method: 'GET',
  url: 'http://www.loterias.caixa.gov.br/wps/portal/loterias/landing/megasena'
}, (err, res, body) => {

  if (err) return console.error(err);

  let $ = cheerio.load(body);

  let title = $('title');

  console.log(title.text());
});