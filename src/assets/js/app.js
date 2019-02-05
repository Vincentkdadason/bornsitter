$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items: 1,
        autoplay: true
    });
    // dataTables activation
    var dTable = $('.dt-table').DataTable({responsive: true});
    $('.eshop-table-search').on('keyup', function (e) {
        dTable.search($(e.target).val()).draw();
    });

    $('.action .info').on('click', function (e) {

    });
});
