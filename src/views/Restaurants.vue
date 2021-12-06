<template>
    <v-app>
        <Drawer :data="events"></Drawer>

        <h1>{{title}}</h1>
        <v-row>
            <v-col
            v-for="(event, idx) in events"
            :key="idx"
            cols="12"
            xs="6"
            sm="5"
            md="4"
            lg="3"
            xl="2"
            >
                <CardsFetch :card="event"></CardsFetch>
            </v-col>
        </v-row>

        <v-content>
        </v-content>
    </v-app>
</template>

<script>
    import CardsFetch from "../components/CardsFetch"
    import Drawer from "../components/Drawer"
    export default {
        name: "Restaurants",
        data(){
            return{
                titleView: this.$store.state.bigTitle,
            }
        },
        computed:{
            myCards(){
                return this.$store.state.cards
            },
            events(){
                return this.$store.state.events
            },
            title(){
                return this.$store.getters.bigTitle
            },
        },
        components: {
            CardsFetch,
            Drawer
        },
        methods: {
        },
        created(){
            this.$store.dispatch("fetchEvents")
        }
    }
</script>