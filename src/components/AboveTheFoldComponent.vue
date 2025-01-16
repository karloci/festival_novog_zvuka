<script setup>
import {useColorStore} from "@/stores/colorStore.js";
import {onMounted, onUnmounted, ref} from "vue";

const colorStore = useColorStore();
const sectionRef = ref(null);

let observer = null;
let lastScrollY = window.scrollY;

const observeSection = (entries) => {
    const isScrollingUp = window.scrollY < lastScrollY;
    lastScrollY = window.scrollY;

    entries.forEach((entry) => {
        const bottomPosition = entry.boundingClientRect.bottom;
        const viewportHeight = window.innerHeight;

        if (isScrollingUp) {
            if (bottomPosition >= 0 && bottomPosition >= viewportHeight * 0.5) {
                colorStore.setActiveColor('transparent');
            }
        }
    });
};

onMounted(() => {
    observer = new IntersectionObserver(observeSection, {
        root: null,
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
    });

    if (sectionRef.value) {
        observer.observe(sectionRef.value);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
    colorStore.clearVisibleSections();
});
</script>

<template>
    <section class="above-the-fold-container" ref="sectionRef">
        <div class="wallpaper-holder">
            <div class="instruments-holder">
                <img class="saxophone-image" src="../graphics/saxophone.jpg" alt="Saksofon">
                <img class="guitar-image" src="../graphics/guitar.jpg" alt="Gitara">
                <img class="violin-image" src="../graphics/violin.jpg" alt="Violina">
            </div>
        </div>
        <div class="title-holder">
            <h1>Festival novog zvuka</h1>
        </div>
    </section>
</template>

<style scoped>
.above-the-fold-container {
    position: relative;
    background-color: #010B24;
    width: 100vw;
    height: 100vh;

    &::after {
        position: absolute;
        z-index: 1;
        content: '';
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 60px;
        background: white;
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

    .wallpaper-holder {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-block: 60px;

        @media screen and (max-width: 768px) {
            & {
                align-items: flex-end;
            }
        }

        .instruments-holder {
            display: flex;
            align-items: stretch;
            justify-content: stretch;

            .saxophone-image,
            .guitar-image,
            .violin-image {
                width: calc(100% / 3);

                @media screen and (max-width: 768px) {
                    &.saxophone-image {
                        width: 90%;
                        margin: 0 auto;
                    }

                    &:not(.saxophone-image) {
                        display: none;
                    }
                }
            }
        }
    }

    .title-holder {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 60px;

        @media screen and (max-width: 768px) {
            & {
                align-items: flex-start;
            }
        }

        h1 {
            color: white;
            font-size: 10em;
            line-height: 1;
            font-family: 'Barriecito', sans-serif;
            max-width: 8ch;
            text-align: center;
            user-select: none;
            text-transform: uppercase;

            @media screen and (max-width: 1024px) {
                & {
                    font-size: 8em;
                    margin-block: 1em;
                }
            }

            @media screen and (max-width: 768px) {
                & {
                    font-size: 6em;
                }
            }
        }
    }
}
</style>