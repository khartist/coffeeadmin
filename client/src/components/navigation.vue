<template>
    <nav class="bg-blue-500 flex justify-end items-center gap-11 text-xl text-white font-bold">
        <RouteLink class="hover:text-blue-950" to="/">Trang chủ</RouteLink>
        <RouteLink class="hover:text-blue-950" to="/customer">Khách hàng</RouteLink>
        <RouteLink class="hover:text-blue-950" to="/branches">Chi nhánh</RouteLink>
        <RouteLink class="hover:text-blue-950" to="/employees">Nhân viên</RouteLink>
    </nav>
    <RouterView />
</template>

<script setup>
import { RouterView, RouterLink} from "vue-router";
</script>