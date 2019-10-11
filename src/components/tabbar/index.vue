<template>
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
</template>

<script>
    import { Tabbar, TabbarItem } from 'vux';

    export default {
        name: 'v-tabbar',
        components: {
            Tabbar, TabbarItem
        }
    }
</script>
