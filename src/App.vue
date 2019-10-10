<template>
    <router-view></router-view>
</template>

<script>
    export default {
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

<style lang="scss">
    @import '/static/normalize/8.0.1/normalize.min.css';

    body {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
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
