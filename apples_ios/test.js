var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
// data.append('key', 'r02uZPy0p2e6UklbXUva0VwWnOek361RDIsrdCDHfWQD5hQVbxihM80FtymEUO8TvD3WOTLe76eCIDnIfnpknNbJRgMzoAGETNVqkGIBVjfa3aE8ykbbD564wmtZMC7LP7DQVb4dnEtWPohTRH2KIKf2KmkvVB33sZkeMYZjiTbvfvJQEJczPmcSPeXG8YuctWCGXMJfQ6dvuxJiEZDAbCirZLmhHCFTuuPEHOUIL0yRQTbCD7hiDcj6tJVkbbV8');
// var config = {
//   method: 'post',
//   url: 'https://test.apples.com.ua/index.php?route=api/login',
//   headers: { 
//     'Content-Type': 'application/json', 
//     'Cookie': 'language=ru-ru; currency=UAH', 
//     ...data.getHeaders()
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
let api_token = "c2ab6ac9a865a4a8fb375d62dd";
(async () => {
    console.log(new Date())
    const res = await axios.default.post('https://test.apples.com.ua/index.php?route=api/product/products',{}, {
        params: {
            'api_token': api_token
        }
    })
    console.log(new Date())
})()
