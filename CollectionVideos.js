$(document).ready(function(){
    var index = 0;
    var slides = $('.slide');
    var total_slides = slides.length;

    // Check if the URL has a hash (like #2025-performances)
    var hash = window.location.hash;
    if (hash) {
        var target = $(hash);
        if (target.length > 0) {
            index = slides.index(target);
        }
    }

    // Show the correct slide (based on hash or first)
    slides.eq(index).addClass('active').show();

    function showNextSlide(){
        slides.eq(index).removeClass('active').hide();
        index = (index + 1) % total_slides;
        slides.eq(index).addClass('active').show();
    }

    function showPrevSlide(){
        slides.eq(index).removeClass('active').hide();
        index = (index - 1 + total_slides) % total_slides;
        slides.eq(index).addClass('active').show();
    }

    // Navigation button events
    $('.left').on('click', showPrevSlide);
    $('.right').on('click', showNextSlide);

    // Handle video clicks 
    $('.video').click(function(event) {
        event.preventDefault();
        
        var youtubeId = $(this).attr('data-youtube-id');
        
        if (youtubeId) {
            // YouTube video with privacy-enhanced domain and referrer policy
            var embedUrl = 'https://www.youtube-nocookie.com/embed/' + youtubeId + '?autoplay=1&rel=0';
            var iframe = '<iframe id="fullYouTubeFrame" src="' + embedUrl + '" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="width: 80vw; height: 45vw; max-width: 1200px; max-height: 675px; border: none; border-radius: 10px;"></iframe>';
            
            // Hide regular video, show YouTube iframe
            $('#fullVideo').hide();
            
            // Create YouTube container if it doesn't exist
            if ($('#fullYouTubeContainer').length === 0) {
                $('#fullVideoContainer').append('<div id="fullYouTubeContainer"></div>');
            }
            
            $('#fullYouTubeContainer').html(iframe).show();
            $('#fullVideoContainer').css('display', 'flex');
        } else {
            // Regular video file
            var videoSrc = $(this).find('source').attr('src');
            
            if (videoSrc) {
                var fullVideo = $('#fullVideo')[0];
                
                // Hide YouTube container, show regular video
                if ($('#fullYouTubeContainer').length > 0) {
                    $('#fullYouTubeContainer').hide();
                }
                $('#fullVideo').show();
                
                // Set the source and load the video
                $('#fullVideo').attr('src', videoSrc);
                fullVideo.load();
                fullVideo.muted = false;
                fullVideo.play();
                
                $('#fullVideoContainer').css('display', 'flex');
            }
        }
    });

    // Close fullscreen when clicking outside or clicking close button
    $('#fullVideoContainer, #closeBtn').click(function(event) {
        if (event.target === this || event.target.id === 'closeBtn') {
            var fullVideo = $('#fullVideo')[0];
            if (fullVideo) {
                fullVideo.pause();
                fullVideo.muted = true;
            }
            
            // Remove YouTube iframe
            if ($('#fullYouTubeContainer').length > 0) {
                $('#fullYouTubeContainer').empty().hide();
            }
            
            $('#fullVideoContainer').hide();
        }
    });

    // Close on ESC key
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            var fullVideo = $('#fullVideo')[0];
            if (fullVideo) {
                fullVideo.pause();
                fullVideo.muted = true;
            }
            
            // Remove YouTube iframe
            if ($('#fullYouTubeContainer').length > 0) {
                $('#fullYouTubeContainer').empty().hide();
            }
            
            $('#fullVideoContainer').hide();
        }
    });

    $('.video:not(.youtube-video) video').hover(
        function() {
            this.muted = true;
            this.play();
        },
        function() {
            this.pause();
            this.currentTime = 0;
        }
    );

    // Debug info
    console.log("Loaded hash:", hash, "→ Showing slide index:", index);
});