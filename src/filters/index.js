import Vue from 'vue'

Vue.filter('current',( val ) => {
    return '￥'+val
})