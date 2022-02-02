import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '~@/store';
import index from '~@/views';
import isEmpty from 'lodash/isEmpty';
// import CustomerMain from '~@/views/customer/CustomerMain'

const _ = {
    isEmpty,
};

Vue.use(VueRouter);

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => {
        if (error.name === 'NavigationDuplicated') {
            return {
                event: 'NavigationDuplicated',
            };
        }
    });
};

const routerReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return routerReplace.call(this, location).catch(error => {
        if (error.name === 'NavigationDuplicated') {
            return {
                event: 'NavigationDuplicated',
            };
        }
    });
};

const routes = [
    // 메인(광고주) - 광고주가 기본임
    {
        path: '/',
        name: 'Index',
        component: index,
        meta: { requiresResetScrollHeight: true },
    },
    /* ====================== auth ====================== */
    // 로그인
    {
        path: '/login',
        name: 'Login',
        component: () => import('~@/views/auth/Login'),
        meta: { requiresResetScrollHeight: true },
    },
    // 아이디 찾기
    {
        path: '/find-id',
        name: 'FindId',
        component: () => import('~@/views/auth/FindId'),
        meta: { requiresResetScrollHeight: true },
    },
    // 비밀번호 찾기
    {
        path: '/find-pw',
        name: 'FindPw',
        component: () => import('~@/views/auth/FindId'),
        meta: { requiresResetScrollHeight: true },
    },
    // 요소 모음
    {
        path: '/components',
        name: 'Components',
        component: () => import('~@/views/util/Components'),
        meta: { requiresResetScrollHeight: true },
    },
];

const router = new VueRouter({
    mode: 'hash', // history, hash
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            // 페이지 히스토리에 이전 페이지의 스크롤 위치가 저장되어 있으면
            return new Promise((resolve /* reject */) => {
                setTimeout(() => {
                    resolve(savedPosition);
                }, 0);
            });
        }
    },
});

export default router;
