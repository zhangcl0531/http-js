var allbuttons = $('#buttons > span')
var imgs = $('.images')
var allimgs = $('.images > img')

var firstcopy = $(allimgs).eq(0).clone(true)
var lastcopy = $(allimgs).eq(-1).clone(true)


$(imgs).append($(firstcopy))
$(imgs).prepend($(lastcopy))

$(imgs).hide().offset()
$(imgs).css({
    transform: 'translateX(-400px)'
}).show()

bindEvents()

var current = 0
// $(allbuttons).eq(0).on('click',function(){
//     if(current == 2){
//         console.log('说明你是从最后一张到第一张')
//         $(imgs).css({transform:'translateX(-1600px)'})
//             .one('transitionend',function(){
//                 $(imgs).hide().offset()
//                 $(imgs).css({transform:'translateX(-400px)'}).show()
//             })
//     }else {
//         $(imgs).css({transform:'translateX(-400px)'})
//     }
//     console.log(current)
//     current = 0
// })

// $(allbuttons).eq(1).on('click',function(){
//     console.log(current)
//     $(imgs).css({transform:'translateX(-800px)'})
//     current = 1
// })

// $(allbuttons).eq(2).on('click',function(){
//     if(current ==0 ){
//         console.log('说明你是从第一张到最后张')
//         $(imgs).css({transform:'translateX(0px)'})
//             .one('transitionend',function(){
//                 $(imgs).hide().offset()
//                 $(imgs).css({transform:'translateX(-1200px)'}).show()
//             })
//     }else {
//         console.log(current)
//         $(imgs).css({transform:'translateX(-1200px)'})
//     }
//     current = 2
// })


//上一页，下一页
$('#next').on('click', function () {
    gotoimg(current + 1)
})

$('#previous').on('click', function () {
    gotoimg(current - 1)
})

//点击按钮进行页面切换
function bindEvents() {
    $('#buttons').on('click', 'span', function (e) {
        let $button = $(this)
        let index = $button.index()
        gotoimg(index)

    })
}

//自动播放

timeid = setTimer()

function setTimer() {
    return setInterval(function () {
        gotoimg(current + 1)
    }, 2000)
}

//鼠标悬停

$('.window').on('mouseenter', function () {
    window.clearInterval(timeid)
})

$('.window').on('mouseleave', function () {
    timeid = setTimer()
})

//当页面切开之后，暂停轮播,修复播放错乱问题
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        window.clearInterval(timeid)
    } else {
        timeid = setTimer()
    }
})



function gotoimg(index) {
    if (index > $(allbuttons).length - 1) {
        index = 0
    } else if (index < 0) {
        index = $(allbuttons).length - 1
    }
    if (current === $(allbuttons).length - 1 && index === 0) {
        console.log('说明你是从最后一张到第一张')
        $(imgs).css({
                transform: `translateX(${- ($(allbuttons).length + 1) * 400}px)`
            })
            .one('transitionend', function () {
                $(imgs).hide().offset()
                $(imgs).css({
                    transform: 'translateX(-400px)'
                }).show()
            })
    } else if (current === 0 && index === $(allbuttons).length - 1) {
        console.log('说明你是从第一张到最后一张')
        $(imgs).css({
                transform: 'translateX(0px)'
            })
            .one('transitionend', function () {
                $(imgs).hide().offset()
                $(imgs).css({
                    transform: `translateX(${- ($(allbuttons).length) * 400}px)`
                }).show()
            })
    } else {
        $(imgs).css({
            transform: `translateX(${- (index+1) * 400}px)`
        })
    }
    current = index
}