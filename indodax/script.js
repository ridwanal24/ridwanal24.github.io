let data_convert;
let data_site = [
    "adbtc.top",
    "surf-trx.com",
    "adltc.cc",
    "addash.cc",
    "adsdgb.com",
    "adeth.cc",
    "addoge.cc",
    "adzec.cc",
    "adxrp.cc",
    "surfingbtc.cc",
    "adbch.cc",
];

// INDEX
async function main(){
    let crypto_data;
    crypto_data = await getSummary();
    crypto_data = await getLogo(crypto_data);
    setInterval(async () => {
        crypto_data = await getSummary();
        crypto_data = await getLogo(crypto_data);
        // crypto_table = crypto_data.map(item => item);
        // console.log(crypto_table);
    }, 60000);
    setInterval(() => {
        
        let crypto_table = cloneData(crypto_data);
        crypto_table = crypto_table
        .filter(item => {
            let key = item.key.split('_')
            return key[1] == 'idr';
        })
        .map(item => {
            let price = item.price.toString();
            let key = item.key.replace('_', '/');
            let reversePrice = price.split('').reverse().join('');
            reversePrice = reversePrice.match(/.{1,3}/g).join('.');
            price = reversePrice.split('').reverse().join('');
            item.price = price;
            item.key = key;
            return item;
        });

        data_convert = cloneData(crypto_table);
        data_convert = data_convert
        .filter(item => {
            let key = item.key.split('/');
            // console.log(key[0]);
            switch(key[0].toUpperCase()){
                case "BTC":
                case "TRX":
                case "LTC":
                case "DRK":
                case "DGB":
                case "ETH":
                case "DOGE":
                case "ZEC":
                case "XRP":
                case "BCHABC":
                    return true;
                    break;
                default:
                    return false;
                    break;
            }
        })
        .map(item => {
            let key = item.key.split('/');
            key = key[0];
            item.key = key;

            let price = parseFloat(item.price.split('.').join(''));
            item.price = price;

            return item;
        });
        // console.log(data_convert);
        showTable(crypto_table);

    }, 10000);
}


function getSummary(){
    let crypto = []
    
    $.ajax({
        url: 'https://indodax.com/api/summaries',
        success: function (data){
            // console.log(data);
            for (let key in data.tickers){
                crypto.push({key: key, name: data.tickers[key].name, price: data.tickers[key].last});
            }
        }
    })
    return crypto;
}

function getLogo(arr){
    
    $.ajax({
        url: 'https://indodax.com/api/pairs',
        success: function (data){
            // console.log(data);
            data.forEach((item, index) => {
                arr[index].logo = item.url_logo_png;
            });
        }
    })
    return arr;    
}

function showTable(d){
    // $('.container').html('Loading Cuk');
    // console.log(d.length);
    // console.log(d);
    let txt = `<table class="table table-striped crypto-price">
    <thead>
        <th>Kode</th>
        <th>Nama</th>
        <th>Harga</th>
    </thead><tbody>`;
    d.forEach(item => {
        txt += `<tr>
            <td>${item.key.toUpperCase()}</td>
            <td><img src="${item.logo}" style="width: 20px;"> ${item.name}</td>
            <td>Rp ${item.price}</td>
            </tr>`;
    });
    txt += '</tbody></table>';
    // console.log(txt);
    $('.container .row .left').html(txt);
    // $('.crypto-price').DataTable();
}

function cloneData(data){
    let result = [];
    data.forEach(item => {
        result.push({
            key: item.key,
            logo: item.logo,
            name: item.name,
            price: item.price
        });
    });
    return result;
}

// CONVERTER
function converter(){
    // "adbtc.top",
    // "surf-trx.com",
    // "adltc.cc",
    // "addash.cc",
    // "adsdgb.com",
    // "adeth.cc",
    // "addoge.cc",
    // "adzec.cc",
    // "adxrp.cc",
    // "surfingbtc.cc",
    // "adbch.cc",
    let database = {
        btc: 'surfingbtc',
        bchabc: 'adbch',
        drk: 'addash',
        dgb: 'adsdgb',
        doge: 'addoge',
        eth: 'adeth',
        ltc: 'adltc',
        trx: 'surf-trx',
        xrp: 'adxrp',
        zec: 'adzec'
    };
    let text = `<hr><div class="row">
                    <div class="form-group col-md-6">
                        <label>Bitcoin0</label>
                        <input id="btc0" type="text" class="form-control mt-1 adbtc">
                    </div>
                    <div class="form-group col-md-6">
                        <label>Rupiah</label>
                        <div class="input-group mt-1">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Rp</div>
                            </div>
                            <input id="btc0idr" type="text" class="form-control adbtc-rupiah" readonly>
                        </div>
                    </div>
                </div><hr>`;
    data_convert.forEach(item => {
        text += `<hr><div class="row">
                    <div class="form-group col-md-6">
                        <label>${item.name}</label>
                        <input id="${item.key}" type="text" class="form-control mt-1 ${database[item.key]}">
                    </div>
                    <div class="form-group col-md-6">
                        <label>Rupiah</label>
                        <div class="input-group mt-1">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Rp</div>
                            </div>
                            <input id="${item.key}idr" type="text" class="form-control ${database[item.key]}-rupiah" readonly>
                        </div>
                    </div>
                </div><hr>`;
                // console.log(item.key);
    });
    $('form.converter').html(text);
}

function countAll(){
    let rupiah = [];
    let crypto = parseFloat(document.querySelector(`#btc0`).value);
        // console.log(typeof(crypto));
        if (isNaN(crypto)){
            crypto = 0;
        }
        rupiah.push(crypto * data_convert[0].price);
        document.querySelector(`#btc0idr`).value = crypto * data_convert[0].price;

    data_convert.forEach(item => {
        let crypto = parseFloat(document.querySelector(`#${item.key}`).value);
        // console.log(typeof(crypto));
        if (isNaN(crypto)){
            crypto = 0;
        }
        rupiah.push(crypto * item.price);
        document.querySelector(`#${item.key}idr`).value = crypto * item.price;
    });
    document.querySelector('input.total').value = rupiah.reduce((a,b) => a+b);
}

function openSite(){
    data_site.forEach(item => {
        let a = document.createElement('a');
        a.setAttribute('href', 'http://' + item);
        a.setAttribute('target', '_blank');
        a.click();
    });
}

function fillForm(){
    $.ajax({
        url: 'https://data-ridwanal24.000webhostapp.com/',
        success: function(data) {
            data = JSON.parse(data);
            // console.log(data);
            let rupiah = 0;
            data.forEach(item => {
                document.querySelector(`.${item.nama}-rupiah`).value = item.rupiah;
                document.querySelector(`.${item.nama}`).value = item.coin;
                rupiah += parseInt(item.rupiah);
            });
            document.querySelector('input.total').value = rupiah;
        }
    });
}

function fillTableConverter(){
    $.ajax({
        url: 'https://data-ridwanal24.000webhostapp.com/',
        success: function(data){
            data = JSON.parse(data);
            // console.log(data[5].wallet);
            text = '';
            data.forEach(function(item){
                let withdraw;
                if(item.faucetpay != null){
                    withdraw = parseFloat(item.coin) >= parseFloat(item.faucetpay)? 'Bisa':'Belum Bisa';
                } else if (item.wallet != null){
                    withdraw = parseFloat(item.coin) >= parseFloat(item.wallet)? 'Bisa':'Belum Bisa';
                }
                
                text += `<tr ${withdraw == 'Ya'? 'class="bg-success"':'class="bg-danger"'}>
                            <td><b>${item.nama}</b></td>
                            <td><b>${item.coin}</b></td>
                            <td class="text-center">${item.wallet == null? 'Tidak Ada':item.wallet}</td>
                            <td class="text-center">${item.faucetpay == null? 'Tidak Ada':item.faucetpay}</td>
                            <td class="text-center">${withdraw}</td>
                        </tr>`
            });

            $('tbody.table-body').html(text);
            $('table.withdraw').DataTable();
        }
    });
}

main();

document.querySelector('button.refresh').addEventListener('click', () => {
    converter();
});

document.querySelector('button.total').addEventListener('click', () => {
    countAll();
});

document.querySelector('button.open').addEventListener('click', () => {
    openSite();
});

document.querySelector('button.from-database').addEventListener('click',()=>{
    fillForm();
    fillTableConverter();
});


