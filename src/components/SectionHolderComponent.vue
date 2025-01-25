<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useColorStore } from '@/stores/colorStore';

const props = defineProps({
    theme: {
        type: String,
        required: false,
        default: 'light',
    },
    colorClass: {
        type: String,
        required: false,
        default: 'transparent',
    },
});

const colorStore = useColorStore();
const sectionRef = ref(null);

let observer = null;
let lastScrollY = window.scrollY;

const observeSection = (entries) => {
    const isScrollingDown = window.scrollY > lastScrollY;
    lastScrollY = window.scrollY;

    entries.forEach((entry) => {
        const topPosition = entry.boundingClientRect.top;
        const bottomPosition = entry.boundingClientRect.bottom;
        const viewportHeight = window.innerHeight;

        if (isScrollingDown) {
            if (topPosition >= 0 && topPosition <= viewportHeight * 0.5) {
                colorStore.setActiveColor(props.colorClass);
            }
        }
        else {
            if (bottomPosition >= 0 && bottomPosition <= viewportHeight * 0.5) {
                colorStore.setActiveColor(props.colorClass);
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
    <section :class="props.theme" ref="sectionRef">
        <div class="content-holder">
            <slot />
        </div>
    </section>
</template>

<style>
section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 4em;

    @media screen and (max-width: 1024px) {
        padding-inline: 2em;
    }

    @media screen and (max-width: 768px) {
        padding-inline: 0;
    }

    &:last-of-type:after {
        background-color: #000C24;
    }

    .content-holder {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        grid-column-gap: 2em;
        width: 1024px;
        padding-block: 2em;

        @media screen and (max-width: 1024px) {
            grid-gap: 1em;
            width: 768px;
        }

        @media screen and (max-width: 768px) {
            width: 100%;
            grid-template-columns: 1fr;
            padding-block: 6em 2em;
        }

        .content-part {
            @media screen and (max-width: 768px) {
                & {
                    padding-inline: 2em;
                }
            }

            h1 {
                font-family: 'Wellfleet', sans-serif;
                font-size: 2.25em;
                margin-bottom: 0.5em;
                position: relative;
                color: var(--color-primary);
                user-select: none;

                &:after {
                    position: absolute;
                    content: attr(data-letter);
                    font-family: 'Wellfleet', sans-serif;
                }
            }

            &.blue-theme {
                h1 {
                    &:after {
                        color: var(--color-blue);
                    }
                }
            }

            &.pink-theme {
                h1 {
                    &:after {
                        color: var(--color-pink);
                    }
                }
            }

            &.purple-theme {
                h1 {
                    &:after {
                        color: var(--color-purple);
                    }
                }
            }

            &.orange-theme {
                h1 {
                    &:after {
                        color: var(--color-orange);
                    }
                }
            }

            &.green-theme {
                h1 {
                    &:after {
                        color: var(--color-green);
                    }
                }
            }

            p {
                font-family: 'Suse', serif;
                font-size: 1em;
                line-height: 1.5em;
                color: var(--color-primary);

                &:not(:last-child) {
                    margin-bottom: 1em;
                }
            }
        }

        .image-holder {
            display: flex;
            flex-direction: column;
            gap: 0;

            @media screen and (max-width: 768px) {
                & {
                    position: relative;
                }

                &::before {
                    background-color: #eeecf1;
                    position: absolute;
                    z-index: 1;
                    content: '';
                    top: -1px;
                    left: 0;
                    width: 100%;
                    height: 60px;
                    clip-path: polygon(
                        0% 80%, 5% 70%, 10% 85%, 15% 65%, 20% 90%,
                        25% 60%, 30% 85%, 35% 70%, 40% 80%, 45% 65%,
                        50% 90%, 55% 60%, 60% 85%, 65% 70%, 70% 80%,
                        75% 65%, 80% 90%, 85% 60%, 90% 85%, 95% 70%,
                        100% 80%, 100% 0%, 0% 0%
                    );
                }

                @media screen and (max-width: 768px) {
                    &::before {
                        clip-path: polygon(
                            0% 80%, 10% 70%, 20% 85%, 30% 65%, 40% 80%,
                            50% 60%, 60% 85%, 70% 70%, 80% 80%, 90% 65%,
                            100% 80%, 100% 0%, 0% 0%
                        );
                    }
                }

            }

            img {
                max-width: 100%;
                min-width: 100%;
                height: 100%;
                object-fit: cover;
                filter: grayscale(85%);
            }
        }
    }

    &.light {
        background-color: white;

        &::before {
            background-color: white;
            position: absolute;
            z-index: 1;
            content: '';
            top: -59px;
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

        @media screen and (max-width: 768px) {
            &::before {
                clip-path: polygon(
                    0% 25%, 10% 20%, 20% 35%, 30% 15%, 40% 30%,
                    50% 25%, 60% 40%, 70% 20%, 80% 35%, 90% 15%,
                    100% 25%, 100% 100%, 0% 100%
                );
            }
        }

        &::after {
            background-color: white;
            position: absolute;
            z-index: 1;
            content: '';
            bottom: -59px;
            left: 0;
            width: 100%;
            height: 60px;
            clip-path: polygon(
                0% 75%, 3% 65%, 5% 80%, 7% 70%, 10% 85%,
                13% 75%, 15% 90%, 18% 65%, 20% 80%, 23% 70%,
                25% 85%, 28% 60%, 30% 75%, 33% 65%, 35% 85%,
                38% 70%, 40% 80%, 43% 60%, 45% 90%, 48% 65%,
                50% 75%, 53% 70%, 55% 85%, 58% 60%, 60% 80%,
                63% 65%, 65% 90%, 68% 70%, 70% 75%, 73% 85%,
                75% 65%, 78% 80%, 80% 60%, 83% 70%, 85% 85%,
                88% 75%, 90% 80%, 93% 70%, 95% 85%, 98% 65%,
                100% 75%, 100% 0%, 0% 0%
            );
        }

        @media screen and (max-width: 768px) {
            &::after {
                clip-path: polygon(
                    0% 75%, 10% 80%, 20% 65%, 30% 85%, 40% 70%,
                    50% 90%, 60% 75%, 70% 80%, 80% 65%, 90% 85%,
                    100% 75%, 100% 0%, 0% 0%
                );
            }
        }

        .content-part {
            padding-block: 4em;

            @media screen and (max-width: 768px) {
                & {
                    padding-block: 0;
                }
            }
        }
    }

    &.dark {
        background-color: #eeecf1;

        &:after {
            background-color: white;
        }

        .content-part {
            margin-block: 60px;
            padding-block: 4em;

            @media screen and (max-width: 768px) {
                & {
                    margin-block: 0;
                    padding-block: 0;
                }

                &:first-child {
                    margin-top: 80px;
                }

                &:last-child {
                    margin-bottom: 80px;
                }
            }
        }
    }
}
</style>