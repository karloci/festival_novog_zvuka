<script setup>

import AboveTheFoldComponent from "@/components/AboveTheFoldComponent.vue";
import SectionHolderComponent from "@/components/SectionHolderComponent.vue";
</script>

<template>
    <AboveTheFoldComponent/>
    <SectionHolderComponent>
        <p v-for="i in 6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, est illum impedit nihil optio quibusdam ratione repudiandae sed similique veritatis! Assumenda distinctio eos eveniet excepturi laborum, optio perspiciatis quisquam vel.</p>
    </SectionHolderComponent>
    <SectionHolderComponent theme="dark">
        <p v-for="i in 10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, est illum impedit nihil optio quibusdam ratione repudiandae sed similique veritatis! Assumenda distinctio eos eveniet excepturi laborum, optio perspiciatis quisquam vel.</p>
    </SectionHolderComponent>
    <SectionHolderComponent>
        <p v-for="i in 8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, est illum impedit nihil optio quibusdam ratione repudiandae sed similique veritatis! Assumenda distinctio eos eveniet excepturi laborum, optio perspiciatis quisquam vel.</p>
    </SectionHolderComponent>
    <SectionHolderComponent theme="dark">
        <p v-for="i in 12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, est illum impedit nihil optio quibusdam ratione repudiandae sed similique veritatis! Assumenda distinctio eos eveniet excepturi laborum, optio perspiciatis quisquam vel.</p>
    </SectionHolderComponent>
</template>

<style scoped>

</style>