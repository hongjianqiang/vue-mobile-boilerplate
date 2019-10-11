<template>
    <view-box ref="viewBox" body-padding-bottom="55px">
        <div slot="header">这里是头部</div>

        <router-view></router-view>

        <tabbar slot="bottom">
            <tabbar-item>
                <img slot="icon" src="static/vux-2/src/assets/demo/icon_nav_button.png">
                <span slot="label">Wechat</span>
            </tabbar-item>
            <tabbar-item show-dot>
                <img slot="icon" src="static/vux-2/src/assets/demo/icon_nav_msg.png">
                <span slot="label">Message</span>
            </tabbar-item>
            <tabbar-item selected link="/component/demo">
                <img slot="icon" src="static/vux-2/src/assets/demo/icon_nav_article.png">
                <span slot="label">Explore</span>
            </tabbar-item>
            <tabbar-item badge="2">
                <img slot="icon" src="static/vux-2/src/assets/demo/icon_nav_cell.png">
                <span slot="label">News</span>
            </tabbar-item>
        </tabbar>
    </view-box>
</template>

<script>
    import { ViewBox, Tabbar, TabbarItem } from 'vux';

    export default {
        components: {
            ViewBox, Tabbar, TabbarItem
        },
        mounted() {
            /**
             * 解决移动端input输入框失去焦点时，页面视觉不能回弹的问题
             */
            document.body.addEventListener('focusout', () => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            });
        }
    }
</script>

<style lang="less">
    @import '~@/../static/vux-2/src/styles/reset.less';
    @import '~@/../static/vux-2/src/styles/1px.less';
    @import '~@/../static/vux-2/src/styles/tap.less';
</style>

<style lang="scss">
    html, body {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;  // 解决iOS下会出现局部滚动不流畅的bug
    }

    // 输入框获得焦点可弹出软键盘，却没有光标闪烁，也无法正常输入
    *:not(input,textarea) {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
    }

    // 取消点击时出现的背景效果
    * {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    // 清除按钮圆角和轮廓
    input, button {
        outline: none;
        -webkit-appearance:none;
        border-radius:0;
    }

    // 去除input[type=number]默认样式
    input[type=number] {
        -moz-appearance:textfield;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
