<template>
    <v-navigation-drawer
    expand-on-hover
    height="100"
    width="256"
    >
        <v-list>
            <v-list-item
                v-for="(dt, idx) in data"
                :key="idx"
                @click="() => {}"
            >
                <v-list-item-title>{{dt.title}}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props:['data'],
        name: "Drawer",
        components: {
        },
    }
</script>