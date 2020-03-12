$('.animation').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});
$('.animation2').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});
$('.animation3').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime({
    targets: '.background',
    translateY: [-1090, 0],
    easing: 'easeInOutExpo',
    direction: 'nomal',
});

anime.timeline({
    loop: true,
}).add({
    targets: '.content2 .logo',
    backgroundColor: '#9c80e1',
    width: [1000, 150],
    easing: 'easeInOutExpo',
    direction: 'nomal',
}).add({
    targets: '.logo',
    backgroundColor: '#f8b090',
    height: [700, 150],
    easing: 'easeInOutExpo',
    direction: 'nomal',
}).add({
    targets: '.logo',
    backgroundColor: '#e98494',
    width: [150, 1000],
    easing: 'easeInOutExpo',
    direction: 'nomal',
}).add({
    targets: '.logo',
    backgroundColor: '#fefefe',
    height: [150, 700],
    easing: 'easeInOutExpo',
    direction: 'nomal',
});

anime.timeline({
        duration: 70,
        loop: true,
    })
    .add({
        targets: '.animation .letter',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function (el, i) {
            return 300 + 30 * i;
        }
    }).add({
        targets: '.animation .letter',
        translateY: [0, -100],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1200,
        delay: function (el, i) {
            return 100 + 30 * i;
        }
    }).add({
        targets: '.animation2 .letter',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function (el, i) {
            return 300 + 30 * i;
        }
    }).add({
        targets: '.animation2 .letter',
        translateY: [0, -100],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1200,
        delay: function (el, i) {
            return 100 + 30 * i;
        }
    }).add({
        targets: '.animation3 .letter',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function (el, i) {
            return 300 + 30 * i;
        }
    }).add({
        targets: '.animation3 .letter',
        translateY: [0, -100],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1200,
        delay: function (el, i) {
            return 100 + 30 * i;
        }
    });

$(function () {
    var tagRotate = anime({
        targets: '.tag',
        rotateZ: [0, 45],
        duration: 300,
        direction: 'nomal',
        easing: 'easeInOutExpo',
        autoplay: false,
    });
    var tagRotateOut = anime({
        targets: '.tag',
        rotateZ: [45, 0],
        duration: 300,
        direction: 'nomal',
        easing: 'easeInOutExpo',
        autoplay: false,
    });

    document.querySelector('.tag').onmouseover = tagRotate.play
    document.querySelector('.tag').onmouseout = tagRotateOut.play
});

anime({
    targets: '.ea1',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 200,
    endDelay: 800,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea2',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 250,
    endDelay: 750,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea3',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 300,
    endDelay: 700,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea4',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 350,
    endDelay: 650,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea5',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 400,
    endDelay: 600,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea6',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 450,
    endDelay: 550,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea7',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 500,
    endDelay: 500,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea8',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 550,
    endDelay: 450,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea9',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 600,
    endDelay: 400,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea10',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 650,
    endDelay: 350,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea11',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 700,
    endDelay: 300,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea12',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 750,
    endDelay: 250,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea13',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 800,
    endDelay: 200,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea14',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 750,
    endDelay: 250,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea15',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 700,
    endDelay: 300,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea16',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 650,
    endDelay: 350,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea17',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 600,
    endDelay: 400,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea18',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 550,
    endDelay: 450,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea19',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 500,
    endDelay: 500,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea20',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 450,
    endDelay: 550,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea21',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 400,
    endDelay: 600,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea22',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 350,
    endDelay: 650,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea23',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 300,
    endDelay: 700,
    easing: 'easeInOutQuint',
});
anime({
    targets: '.ea24',
    translateX: 1150,
    direction: 'alternate',
    loop: true,
    delay: 250,
    endDelay: 750,
    easing: 'easeInOutQuint',
});


console.log("success");
