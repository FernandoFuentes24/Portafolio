import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProjectsPage from '../views/ProjectsPage.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/proyectos', component: ProjectsPage },
    { path: '/contacto', component: ContactPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
