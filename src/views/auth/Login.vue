<template>
    <form @click.prevent="handleSubmit">
        <h3>Login</h3>
        <input type="email" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <div v-if="error" class="error">{{ error }}</div>
        <button :disabled="isPending">
            {{ !isPending ? "Login" : "Loading" }}
        </button>
    </form>
</template>

<script>
import useLogin from "../../composables/useLogin";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
    setup() {
        const { error, login, isPending } = useLogin();
        const email = ref("");
        const password = ref("");
        const router = useRouter();

        const handleSubmit = async () => {
            const res = await login(email.value, password.value);

            if (!error.value) {
                console.log("user logged in");
                router.push({ name: "Home" });
            }
        };

        return { email, password, handleSubmit, error, isPending };
    },
};
</script>
