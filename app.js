const $inputs = $('input');
$('#movie-form').on('submit', function(e){
    e.preventDefault();
    let title = $inputs.eq(0).val();
    let rating = $inputs.eq(1).val();
    if(title.length > 2 && rating >= 0 && rating <= 10 ){
        let movie = $('<p>').text(title + ' ' + rating);
        let $removeBtn = $('<button>').text('remove').click(function(){
            $(this).parent().remove();
        });
        movie.append($removeBtn);
        $('body').append(movie);
        $inputs.val('');
    }
})