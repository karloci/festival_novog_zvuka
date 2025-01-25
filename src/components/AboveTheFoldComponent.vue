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
            <div class="title-wrap">
                <h1>Festival novog zvuka</h1>
                <span>23. - 25. siječnja - Sinj</span>
            </div>
        </div>
    </section>
</template>

<style scoped>
.above-the-fold-container {
    position: relative;
    background-color: var(--color-primary);
    height: 100vh;

    .wallpaper-holder {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: 60px;

        @media screen and (max-width: 768px) {
            align-items: flex-end;
            justify-content: center;
        }

        .instruments-holder {
            display: flex;
            align-items: stretch;
            justify-content: flex-end;
            width: 1024px;

            @media screen and (max-width: 1024px) {
                width: 768px;
            }

            @media screen and (max-width: 768px) {
                width: 100%;
            }

            .saxophone-image,
            .guitar-image,
            .violin-image {
                width: calc(100% / 3);

                @media screen and (max-width: 1280px) {
                    &.saxophone-image {
                        display: none;
                    }
                }

                @media screen and (max-width: 768px) {
                    &.saxophone-image {
                        display: block;
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
        position: relative;
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
                justify-content: center;
                align-items: flex-start;
            }
        }

        .title-wrap {
            display: flex;
            flex-direction: column;
            gap: 1em;
            width: 1024px;

            @media screen and (max-width: 1024px) {
                & {
                    grid-gap: 1em;
                    width: 768px;
                }
            }

            @media screen and (max-width: 768px) {
                & {
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                }
            }

            h1 {
                color: white;
                font-size: 8em;
                line-height: 1;
                font-family: 'Barriecito', sans-serif;
                max-width: 8ch;
                text-align: left;
                user-select: none;
                text-transform: uppercase;

                @media screen and (max-width: 1024px) {
                    & {
                        font-size: 7em;
                        margin-top: 1em;
                    }
                }

                @media screen and (max-width: 768px) {
                    & {
                        font-size: 5em;
                        text-align: center;
                    }
                }
            }

            span {
                color: white;
                font-size: 1em;
                line-height: 1;
                font-family: 'Wellfleet', serif;
                text-align: left;
                user-select: none;

                @media screen and (max-width: 768px) {
                    & {
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>