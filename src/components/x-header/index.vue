<template>
    <x-header :right-options="{showMore: true}" 
        @on-click-more="showMenus = true"
    >首页</x-header>
</template>

<script>
    import { XHeader } from 'vux';

    export default {
        name: 'v-x-header',
        components: { XHeader }
    }
</script>
