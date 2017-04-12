$(document).ready(function() {

    //zmienne zawierające przepisy
    var chickenArticle = $('div').find(".chicken");
    chickenArticle.hide();
    var porkArticle = $('div').find(".pork");
    porkArticle.hide();
    var vealArticle = $('div').find(".veal");
    vealArticle.hide();
    var mozzarellaArticle = $('div').find(".mozzarella");
    mozzarellaArticle.hide();

    var searchButton = $('div').find('.search-button');


    //kolekcja składników
    var checkBoxes = $(".search-box").find('input');
    var array = [];
    checkBoxes.on('change', function() {
        if ($(this).is(':checked')) {
            var searchValue = $(this).val();
            array.push(searchValue);
        } else {
            var searchValue = $(this).val();
            var index = array.indexOf(searchValue);
            if (index > -1) {
                array.splice(index, 1);
            }
        }

    });

    searchButton.on('click', function() {

        $.each(array, function(index, value) {


            var chickenArticleText = chickenArticle.text();
            var porkArticleText = porkArticle.text();
            var vealArticleText = vealArticle.text();
            var mozzarellaArticleText = mozzarellaArticle.text();

            if (chickenArticleText.indexOf(value) != -1) {
                chickenArticle.show();
            } else if (porkArticleText.indexOf(value) != -1) {
                porkArticle.show();
            } else if (vealArticleText.indexOf(value) != -1) {
                vealArticle.show();
            } else if (mozzarellaArticleText.indexOf(value) != -1) {
                mozzarellaArticle.show();
            }
        });

    });



    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });


});
