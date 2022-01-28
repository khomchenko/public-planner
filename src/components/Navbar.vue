<template>
    <div class="navbar">
        <nav>
            <router-link :to="{ name: 'Home' }" class="logo">
                <img src="@/assets/planner-logo.svg" alt="Logo" />
                <span>Public Planner</span>
            </router-link>
            <div class="links">
                <template v-if="user">
                    <button @click="handleClick">Logout</button>
                </template>
                <template v-else>
                    <router-link class="btn" :to="{ name: 'Signup' }">
                        Signup
                    </router-link>
                    <router-link class="btn" :to="{ name: 'Login' }">
                        Login
                    </router-link>
                </template>
            </div>
        </nav>
    </div>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";

export default {
    setup() {
        const { user } = getUser();
        const { logout } = useLogout();
        const router = useRouter();

        const handleClick = async () => {
            await logout();
            console.log("user logged out");
            router.push({ name: "Login" });
        };

        return { handleClick, user };
    },
};
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 10px;
    margin-bottom: 60px;
    background: #fff;
}
nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
}
nav a {
    display: flex;
    align-items: center;
}
nav .logo {
    width: 200px;
}
nav a span {
    font-size: 18px;
    font-weight: 700;
}
nav .links {
    display: flex;
    align-items: center;
    margin-left: auto;
}
nav .links a,
button {
    font-size: 14px;
}
nav .links a {
    margin-right: 16px;
}
nav .links a:last-child {
    margin-right: 0;
}
nav img {
    max-height: 60px;
    margin-right: 16px;
}
</style>
