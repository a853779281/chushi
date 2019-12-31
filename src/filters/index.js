import Vue from 'vue'

Vue.filter('current', (val) => {
    return '￥' + val
})


Vue.filter('UnitConversion', value => {
    let num;
    if (value > 9999) { //大于9999显示x.xx万
        num = (Math.floor(value / 1000) / 10) + '万';
    } else if (value < 9999 && value > -9999) {
        num = value
    } else if (value < -9999) { //小于-9999显示-x.xx万
        num = -(Math.floor(Math.abs(value) / 1000) / 10) + '万'
    }
    return num;
})