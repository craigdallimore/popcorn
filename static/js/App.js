var App = {};

(function(Popcorn) {

    var v       = document.getElementById('vid'),
        c       = document.getElementById('canv'),
        player  = Popcorn('#vid'),
        ctx     = c.getContext('2d'),
        cw      = c.width,
        ch      = c.height;

        v.addEventListener('click', startPlaying);


    function startPlaying() {
        player.play();
        draw(v,ctx,cw,ch);
    }

    function draw(v, c, w, h) {
        if(v.paused || v.ended) { return; }
        c.drawImage(v,0,0,w,h);
        setTimeout(draw, 20, v, c, w, h);
    }

}(Popcorn));

