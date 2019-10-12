<template>
    <x-header :right-options="{showMore: true}" 
        @on-click-more="showMenus = true"
    >{{$t('home')}}</x-header>
</template>

<i18n>
home:
    en: Home
    zh-CN: 首页
</i18n>

<script>
    import { XHeader } from 'vux';

    export default {
        name: 'v-x-header',
        components: { XHeader }
    }
</script>
