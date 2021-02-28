// ===== SEARCH OPTION ===== //
$(document).ready(function(){
    $('.btn-search').attr('disabled',true);
    $.ajax({
        method:'GET',
        url:'https://data-ridwanal24.000webhostapp.com/malasngoding_scraper.php',
        data:{
            getcategory: 'true'
        },
        success: data =>{
            data = JSON.parse(data);
            text = '';
            data.forEach(element => {
                text += `<option value="${element}">${element.charAt(0).toUpperCase() + element.slice(1)}</option>`;
            });
            $('.category-search').html(text);
            $('.btn-search').attr('disabled',false);
        }
    });
});


// ===== SEARCH ACTION ===== //
$('.btn-search').click(function(){
    loading = `<table style="width: 100%;">
                    <tr>
                        <td>
                            <center><img style="width: 15%;" src="img/loading2.gif" alt="Loading"><br><p class="text-muted font-italic">Loading Slur...</p></center>
                        </td>
                    </tr>
                </table>`;
    $('.search-result').html(loading);
    $('.btn-search').attr('disabled',true);
    $('.btn-search').html('Sedang Mencari');
    $.ajax({
        method:'GET',
        url:'https://data-ridwanal24.000webhostapp.com/malasngoding_scraper.php',
        data:{
            getresult:$('.category-search').val()
        },
        success: data => {
            data = JSON.parse(data);
            text = '';
            data.forEach(item => {
                text += `<a class="btn btn-white btn-block border rounded result-item" target="_blank" href="${item.link}">
                <div class="row">
                <div class="col-3">
                <img src="${item.image}" alt="${item.name}" class="img-fluid rounded float-left">
                </div>
                <div class="col text-dark font-weight-bold text-left">
                <p>${item.name}</p>
                </div>
                </div>
                </a>`;
            });
            $('.search-result').html(text);
            $('.btn-search').attr('disabled',false);
            $('.btn-search').html('Cari');
        }
    });
});