import { convertDate, convertAmPmTime, Base64, isFiledValid, slidersize } from '../vanila/general';



jQuery(document).ready(($) => {



    const formBtn = $('#sis-add-post-submission-form button');


    $('#sis-add-post-submission-form input ,#sis-add-post-submission-form  textarea').keyup((e) => {
        isFiledValid(e.target, formBtn)
    })



    // for silde new post

    $(window).resize(function () {
        slidersize($('.sis-slider'), $('.sis-slider article'));
    });
    slidersize($('.sis-slider'), $('.sis-slider article'));





    $('#sis-add-post-submission-form').on('submit', (e) => {

        e.preventDefault();

        let formPassVaildation = true;
        $(e.target).find('input , textarea').each((index, element) => {
            const inputPassVaildation = isFiledValid(element, formBtn)
            if (!inputPassVaildation) {
                formPassVaildation = false;
            }
        });


        if (formPassVaildation) {


            $('.loader-div').css("display", "flex")
                .hide()
                .fadeIn(100);

            const data = {
                title: $('#sis-add-post-title').val().trim(),
                excerpt: $('#sis-add-post-excerpt').val().trim(),
                status: 'publish',
            };

            $.ajax({
                method: "POST",
                url: POST_SUBMITTER.root + 'wp/v2/posts',
                data: data,
                beforeSend: (xhr) => {
                    POST_SUBMITTER.login ? xhr.setRequestHeader('X-WP-Nonce', POST_SUBMITTER.nonce) : xhr.setRequestHeader('Authorization', 'Basic ' + Base64.encode('Unknown:Unknown'))
                },
                success: (response) => {

                    const preArticle = $('.sis-slider-wrap article');

                    const newArticle = `<article>
                                            <h3>${response.title.raw}</h3>
                                            <p class="date-create">${convertDate(response.date)} ${convertAmPmTime(response.date)}</p>
                                            ${response.excerpt.rendered}
                                        </article>`;
                    if ($('.sis-slider-wrap')) {
                        $(".sis-slider-wrap").append(newArticle);
                        slidersize($('.sis-slider'), $('.sis-slider article'));
                    }




                    $('.sis-slider-wrap').css('left', `-${preArticle.width()}px`)

                    //preArticle.css('margin-right', `-${preArticle.width()}px`);
                    //preArticle.css('margin-right', '5px');

                    $('.loader-div').css('display', 'none');
                    $('#confirm_msg').css("display", "flex")
                        .hide()
                        .fadeIn();


                    // alert(POST_SUBMITTER.success);
                },
                fail: (response) => {
                    console.log(response);
                    alert(POST_SUBMITTER.failure);
                }

            });
        }




    });


})




