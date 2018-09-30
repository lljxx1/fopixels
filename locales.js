var fs = require('fs');
var request = require('request-promise');

var files = ['common', 'warnings', 'apiErrors', 'header', 'statistics', 'pixelsCanvas', 'paintToolbar', 'shoppingCart', 'leaderboard', 'userPanel', 'pixelInfo'];
var locales = ['zh', 'en', 'ja'];



(async () => {


    for (let index = 0; index < files.length; index++) {
        const file = files[index];

        for (let i = 0; i < locales.length; i++) {
            const locale = locales[i];

            var res = await request.get('https://pixelmaster.io/locales/'+locale+'/'+file+'.json?v=0.1.16');

            var localFile = './locales/'+locale;

            if(!fs.existsSync(localFile)){
                fs.mkdirSync(localFile);
            }


            fs.writeFileSync(localFile+'/'+file+'.json', res);

            // console.log(res)

            
        }
        
    }



})();