$(document).ready(function(){
    const bs_nav = $('.bs-nav');
    // show side menu
    function showSideBar() {
        console.log(window.innerWidth);
        return window.innerWidth < 1050;
    }
    showSideBar() ? bs_nav.addClass('side-menu') : bs_nav.removeClass('side-menu');

    $(window).on('resize', function () {
        showSideBar() ? bs_nav.addClass('side-menu') : bs_nav.removeClass('side-menu');
    });

    $('.toggle-menu').on('click', function () {
       $('.top-menu').toggleClass('slide-right');
    });

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
