$(() => {
    let imgarr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]
    let slider = $("#slider")
    let slide = $("#slide")
    let x = 0
    let timer
    slider
        .click((e) => {
            if (e.pageX > $(window).width() / 2) change(1)
            else change(-1)
        })
    slide.css({
        width: '100%',
        height: '100%'
    })

    change(0)

    function change(dir = 1) {
        clearTimeout(timer)
        x += dir
        if (x > imgarr.length - 1) x = 0
        if (x < 0) x = imgarr.length - 1    
        slide
            .fadeOut(500, function () { $(this).css({ background: `url('img/${imgarr[x]}') center/cover` }) })
            .fadeIn(500, () => { slider.css({ background: `url('img/${imgarr[x]}') center/cover` }) })

        timer = setTimeout(change, 3000)

    }
})