import { createRouter, createWebHistory} from 'vue-router';
import Search from '../components/Search.vue';
import Home from '../components/Home.vue';
import RandomMeal from '../components/RandomMeal.vue';

const myroutes = [
    {
        path: '/Search/:idMeal',
        name: 'Search',
        component: Search
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/RandomMeal',
        name: 'RandomMeal',
        component: RandomMeal
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: myroutes
})
export default router;