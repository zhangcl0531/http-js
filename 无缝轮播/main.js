// setTimeout(function(){
//     $('.images > img:nth-child(1)').css({
//         transform: 'translateX(-100%)'
//     })
//     $('.images > img:nth-child(2)').css({
//         transform: 'translateX(-100%)'
//     })

//     $('.images > img:nth-child(1)').one('transitionend',function(){
//         $(this).addClass('right').css({transform: 'none'})
//     })
// },2000)


// setTimeout(function(){
//     $('.images > img:nth-child(2)').css({
//         transform: 'translateX(-200%)'
//     })
//     $('.images > img:nth-child(3)').css({
//         transform: 'translateX(-100%)'
//     })

//     $('.images > img:nth-child(2)').one('transitionend',function(){
//         $(this).addClass('right').css({transform: 'none'})
//     })
// },4000)


// setTimeout(function(){
//     $('.images > img:nth-child(3)').css({
//         transform: 'translateX(-200%)'
//     })
//     $('.images > img:nth-child(1)').css({
//         transform: 'translateX(-100%)'
//     })

//     $('.images > img:nth-child(3)').one('transitionend',function(){
//         $(this).addClass('right').css({transform: 'none'})
//     })
// },6000)


// $('.images > img:nth-child(1)').addClass('current')
// $('.images > img:nth-child(2)').addClass('enter')
// $('.images > img:nth-child(3)').addClass('enter')

// setTimeout(function () {
//     $('.images > img:nth-child(1)').removeClass('current').addClass('leave').one('transitionend', function () {
//         $(this).removeClass('leave').addClass('enter')
//     })
//     $('.images > img:nth-child(2)').removeClass('enter').addClass('current')
// },2000)


// setTimeout(function () {
//     $('.images > img:nth-child(2)').removeClass('current').addClass('leave').one('transitionend', function () {
//         $(this).removeClass('leave').addClass('enter')
//     })
//     $('.images > img:nth-child(3)').removeClass('enter').addClass('current')
// },4000)

// setTimeout(function () {
//     $('.images > img:nth-child(3)').removeClass('current').addClass('leave').one('transitionend', function () {
//         $(this).removeClass('leave').addClass('enter')
//     })
//     $('.images > img:nth-child(1)').removeClass('enter').addClass('current')
// },6000)

// setTimeout(function () {
//     $('.images > img:nth-child(1)').removeClass('current').addClass('leave').one('transitionend', function () {
//         $(this).removeClass('leave').addClass('enter')
//     })
//     $('.images > img:nth-child(2)').removeClass('enter').addClass('current')
// },8000)






// 获取有多少张轮播图
allimg = $('.images > img').length

let n = 1
$(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter')




let timer = setInterval(function () {

    $(`.images > img:nth-child(${n})`).removeClass('current').addClass('leave').one('transitionend', function () {
        $(this).removeClass('leave').addClass('enter')
    })

    if (n === allimg) {
        n = 0
    }

    $(`.images > img:nth-child(${n+1})`).removeClass('enter').addClass('current')

    n = n + 1
}, 2000)

// 当页面切开之后，暂停轮播
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        window.clearInterval(timer)
    } else {
        let timer = setInterval(function () {

            $(`.images > img:nth-child(${n})`).removeClass('current').addClass('leave').one('transitionend', function () {
                $(this).removeClass('leave').addClass('enter')
            })

            if (n === allimg) {
                n = 0
            }

            $(`.images > img:nth-child(${n+1})`).removeClass('enter').addClass('current')

            n = n + 1
        }, 2000)
    }
})