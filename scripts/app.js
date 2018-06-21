(function(){

    let slider = new Slider({
        el: document.querySelector('#slider'),
        slides:[
            { link: '#1', image: 'images/luhan.png'},
            { link: '#2', image: 'images/one.png'},
            { link: '#3', image: 'images/yanzhi.png'},
            { link: '#4', image: 'images/tengxun.png'},
            { link: '#5', image: 'images/aidou.png'}
        ]
    })

    window.slider = slider

})()