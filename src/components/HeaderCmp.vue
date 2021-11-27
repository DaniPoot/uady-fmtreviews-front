<script>
export default {
    name: 'HeaderCmp'
}
</script>

<template>
    <header class="bg-green-300 w-full py-5 px-2 lg:px-10 flex items-center justify-start">
        <img class="w-30 lg:w-60" alt="Vue logo" src="@/assets/logo.png" />
        <nav class="lg:ml-15 ml-5 mt-1">
            <ul class="flex">
                <li class="mx-2 lg:mx-4">
                    <router-link :to="{name: 'teachers'}" class="text-green-800 font-bold hover:underline hover:text-green-600">
                        Profesores
                    </router-link>
                </li>
                <li class="mx-2 lg:mx-4">
                    <router-link :to="{name: 'subjects'}" class="text-green-800 font-bold hover:underline hover:text-green-600">
                        Asignaturas
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
</style>