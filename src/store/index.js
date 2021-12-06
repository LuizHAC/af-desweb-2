import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        cards:[
            {
                nome: "Restaurante Via Brasil",
                endereço: "Av. Prudente de Moraes, 221 - Vila Nova, Itu - SP, 13309-050",
                fone: "(11) 4024-5812",
                preço: "$$$",
                img: "https://www.google.com/maps/uv?pb=!1s0x94cf45526bda4f51%3A0xcf62c0b2188af3c7!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPgMpqrStytwD7wKcUC7dbtb2SyFP09DJShAMVY%3Dw130-h87-n-k-no!5smelhores%20restaurantes%20Itu%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPgMpqrStytwD7wKcUC7dbtb2SyFP09DJShAMVY&hl=en"
            },
            {
                nome: "Casa La Prímola Emporium and Restaurant",
                endereço: "Av. Adolfo Augusto Pinto, 246 - Novo Centro, Itu - SP, 13304-070",
                preço: "$$",
                fone: "(11) 4025-0872",
                img: "https://www.google.com/maps/uv?pb=!1s0x94cf4ff87b2fb00f:0x4f7e6b599fed55dd!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipNmXmYVUzMVnh9MRyE7GZ_jUZWD1FlLc-GRohEy%3Dw130-h87-n-k-no!5smelhores+restaurantes+Itu+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipNmXmYVUzMVnh9MRyE7GZ_jUZWD1FlLc-GRohEy&hl=en"
            },
            {
                nome: "A Cia Steakhouse",
                endereço: "Av. Prudente de Moraes, 101 - Vila Nova, Itu - SP, 13309-050",
                preço: "$$$",
                fone: "(11) 4024-4239",
                img: "https://www.google.com/maps/uv?pb=!1s0x94cf4fffed5f8691:0x8dc88d9977d76a35!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOgl7xxcKKcQGjfbPazyceZnBr8B1vq3roX6QYg%3Dw130-h87-n-k-no!5smelhores+restaurantes+Itu+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipOgl7xxcKKcQGjfbPazyceZnBr8B1vq3roX6QYg&hl=en"
            },
            {
                nome: "Hioki Sushi Itu",
                endereço: "Praça Lions, 88 - Brasil, Itu - SP, 13304-305",
                preço: "$$$",
                fone: "(11) 2715-2322",
                img: "https://www.google.com/maps/uv?pb=!1s0x94cf4fe28e5411b7:0x1d65257a2e9f6650!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipPI95dDkDcgk1uZhKLrPQ0xBEmdubCEuTWuJwDV%3Dw130-h87-n-k-no!5smelhores+restaurantes+Itu+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipPI95dDkDcgk1uZhKLrPQ0xBEmdubCEuTWuJwDV&hl=en"
            },
            {
                nome: "Churrascaria e Pizzaria Ituana",
                endereço: "Av. Nove de Julho, 600 - Vila Padre Bento, Itu - SP, 13313-100",
                preço: "$$",
                fone: "(11) 4023-1624",
                img: "https://www.google.com/maps/uv?pb=!1s0x94cf5047617654d7:0xc62be3dff69d7ff4!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOYVnFKmKTx60h2VKCrCaAIg-EdQd04RhzlI6So%3Dw260-h175-n-k-no!5smelhores+restaurantes+Itu+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipOYVnFKmKTx60h2VKCrCaAIg-EdQd04RhzlI6So&hl=en"
            },
            {
                nome: "China Cook & Kampai Sushi",
                endereço: "Av. Prudente de Moraes, 210 - loja 306 - Vila Nova, Itu - SP, 13309-050",
                preço: "$$$",
                fone: "(11) 4025-0040",
                img: "https://www.google.com/maps/uv?pb=!1s0x94cf45538324da73:0xf0796ddbfd2e1d8d!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOblVfeRqhlTVdR9XRdR5WLJ2uTth1iEcp7F9QN%3Dw260-h175-n-k-no!5smelhores+restaurantes+Itu+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipOblVfeRqhlTVdR9XRdR5WLJ2uTth1iEcp7F9QN&hl=en"
            },
            {
                nome: "Let's Eat Itu",
                endereço: "Av. Dr. Otaviano Pereira Mendes, 199 - Liberdade, Itu - SP, 13301-000",
                preço: "$$$",
                fone: "(11) 2715-9236",
                img: "https://www.google.com/maps/uv?pb=!1s0x94cf501dc79e1371:0x52a1a0e98125334d!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOJhX2XW2BrcdogjqbpTnMOq-GkCIAO5lQilocL%3Dw260-h175-n-k-no!5smelhores+restaurantes+Itu+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipOJhX2XW2BrcdogjqbpTnMOq-GkCIAO5lQilocL&hl=en"
            },
            {
                nome: "Hangar Burger",
                endereço: "R. José Bruni, 658 - Itu Novo Centro, Itu - SP, 13304-080",
                preço: "$$",
                fone: "(11) 97564-3306",
                img: "https://www.google.com/maps/uv?pb=!1s0x94cf4550dfcdcdbb:0x66d4cfa25f8c7676!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipNCPwNx1yOHl1YQdZj9TlwtMlKIq3VyWSZdqWRp%3Dw260-h175-n-k-no!5smelhores+restaurantes+Itu+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipNCPwNx1yOHl1YQdZj9TlwtMlKIq3VyWSZdqWRp&hl=en"
            },
        ],
        title: "Melhores restaurantes de Itu",
        events: null,
        titleEvents: "Events",
    },
    mutations: {
        SET_EVENTS(state, payload){
            state.events = payload
        }
    },
    actions: {
        fetchEvents({commit}){
            axios.get("https://agenda-balaguer.herokuapp.com/api/event")
            .then(res=>{
                const payload = res.data.values
                commit('SET_EVENTS', payload)
            })
        }
    },
    getters: {
        bigTitle(state){
            return state.titleEvents.toUpperCase()
        }
    }
})