<script setup>
const props = defineProps({
    theme: {
        type: String,
        required: false,
        default: 'light'
    }
})
</script>

<template>
<section :class="props.theme">
    <div class="content-holder">
        <slot/>
    </div>
</section>
</template>

<style scoped>
section {
    padding-top: 3em;
    padding-bottom: calc(4em + 60px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 4em;

    @media screen and (max-width: 1024px) {
        padding-top: 1em;
        padding-bottom: calc(2em + 60px);
        padding-inline: 2em;
    }

    @media screen and (max-width: 768px) {
        padding-top: 0;
        padding-bottom: calc(1em + 60px);
        padding-inline: 1em;
    }

    &::after {
        position: absolute;
        z-index: 1;
        content: '';
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 60px;
        clip-path: polygon(
            0% 25%, 3% 35%, 5% 20%, 7% 30%, 10% 15%,
            13% 25%, 15% 10%, 18% 35%, 20% 20%, 23% 30%,
            25% 15%, 28% 40%, 30% 25%, 33% 35%, 35% 15%,
            38% 30%, 40% 20%, 43% 40%, 45% 10%, 48% 35%,
            50% 25%, 53% 30%, 55% 15%, 58% 40%, 60% 20%,
            63% 35%, 65% 10%, 68% 30%, 70% 25%, 73% 15%,
            75% 35%, 78% 20%, 80% 40%, 83% 30%, 85% 15%,
            88% 25%, 90% 20%, 93% 30%, 95% 15%, 98% 35%,
            100% 25%, 100% 100%, 0% 100%
        );
    }

    &.light {
        background-color: white;

        &:after {
            background-color: #1A0F39;
        }

        * {
            color: #1A0F39;
        }
    }

    &.dark {
        background-color: #1A0F39;

        &:after {
            background-color: white;
        }

        * {
            color: white;
        }
    }

    .content-holder {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2em;
        width: 1024px;

        @media screen and (max-width: 1024px) {
            grid-gap: 1em;
            width: 768px;
        }

        @media screen and (max-width: 768px) {
            width: 100%;
            display: block;
        }
    }
}
</style>