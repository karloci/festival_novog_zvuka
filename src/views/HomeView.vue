<script setup>

import AboveTheFoldComponent from "@/components/AboveTheFoldComponent.vue";
import SectionHolderComponent from "@/components/SectionHolderComponent.vue";
</script>

<template>
    <AboveTheFoldComponent/>
    <SectionHolderComponent color-class="status-orange">
        <p v-for="i in 10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, est illum impedit nihil optio quibusdam ratione repudiandae sed similique veritatis! Assumenda distinctio eos eveniet excepturi laborum, optio perspiciatis quisquam vel.</p>
    </SectionHolderComponent>
    <SectionHolderComponent theme="dark" color-class="status-pink">
        <p v-for="i in 14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, est illum impedit nihil optio quibusdam ratione repudiandae sed similique veritatis! Assumenda distinctio eos eveniet excepturi laborum, optio perspiciatis quisquam vel.</p>
    </SectionHolderComponent>
    <SectionHolderComponent color-class="status-green">
        <p v-for="i in 12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, est illum impedit nihil optio quibusdam ratione repudiandae sed similique veritatis! Assumenda distinctio eos eveniet excepturi laborum, optio perspiciatis quisquam vel.</p>
    </SectionHolderComponent>
    <SectionHolderComponent theme="dark" color-class="status-purple">
        <p v-for="i in 16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, est illum impedit nihil optio quibusdam ratione repudiandae sed similique veritatis! Assumenda distinctio eos eveniet excepturi laborum, optio perspiciatis quisquam vel.</p>
    </SectionHolderComponent>
    <SectionHolderComponent color-class="status-blue">
        <p v-for="i in 8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, est illum impedit nihil optio quibusdam ratione repudiandae sed similique veritatis! Assumenda distinctio eos eveniet excepturi laborum, optio perspiciatis quisquam vel.</p>
    </SectionHolderComponent>
</template>

<style scoped>
p {
    font-family: 'Tisa Sans', sans-serif;
}
</style>