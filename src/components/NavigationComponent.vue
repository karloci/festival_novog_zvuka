<script setup>
import {useColorStore} from "@/stores/colorStore.js";
import {onMounted, ref, watch} from "vue";

const colorStore = useColorStore();

const underline = ref();

function goTo(sectionName) {
    const section = document.getElementById(sectionName);

    if (section) {
        let scrollValue = section.offsetTop + 20;

        if (section.classList.contains("dark")) {
            if (window.innerWidth <= 768) {
                scrollValue = scrollValue + 70;
            }
            else {
                scrollValue = scrollValue + 50;
            }
        }

        window.scrollTo({ top: scrollValue, behavior: 'smooth'});
    }
}

function updateUnderlinePosition() {
    const navigationTab = document.querySelector("nav ul li a.active");

    if (navigationTab && underline.value) {
        let width = navigationTab.offsetWidth;
        let left = navigationTab.offsetLeft;

        underline.value.style.width = `${width}px`;
        underline.value.style.left = `${left}px`;
    }
    /*else {
        underline.value.style.width = `0px`;
        underline.value.style.left = `0px`;
    }*/
}

watch(
    () => colorStore.activeColor,
    () => {
        setTimeout(updateUnderlinePosition, 0);
    }
);

onMounted(() => {
    setTimeout(updateUnderlinePosition, 0);
});
</script>

<template>
<nav :class="colorStore.activeColor">
    <div ref="underline" class="underline" v-bind:class="{'visible': colorStore.activeColor !== 'transparent' && ['pink-theme', 'purple-theme', 'orange-theme', 'green-theme'].includes(colorStore.activeColor)}"></div>
    <ul>
        <li>
            <a href="#" @click.prevent="goTo('program')" v-bind:class="{'active': colorStore.activeColor === 'pink-theme'}">Program</a>
        </li>
        <li>
            <a href="#" @click.prevent="goTo('izvodaci')" v-bind:class="{'active': colorStore.activeColor === 'purple-theme'}">Izvođači</a>
        </li>
        <li>
            <a href="#" @click.prevent="goTo('o-festivalu')" v-bind:class="{'active': colorStore.activeColor === 'orange-theme'}">O festivalu</a>
        </li>
        <li>
            <a href="#" @click.prevent="goTo('gdje-i-kada')" v-bind:class="{'active': colorStore.activeColor === 'green-theme'}">Gdje i kada</a>
        </li>
    </ul>
</nav>
</template>

<style scoped>
nav {
    position: fixed;
    width: 100%;
    height: 60px;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 4em;

    @media screen and (max-width: 1024px) {
        padding-inline: 2em;
    }

    @media screen and (max-width: 768px) {
        padding-inline: 1em;
        justify-content: center;
    }

    .underline {
        position: absolute;
        width: 0;
        height: 4px;
        border-radius: 3px;
        background-color: white;
        left: 0;
        bottom: 0.5em;
        transition: all 0.3s ease-in-out;
        opacity: 0;

        &.visible {
            opacity: 1;
        }
    }

    ul {
        list-style: none;
        width: 1024px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 3em;
        padding: 0;

        @media screen and (max-width: 1024px) {
            grid-gap: 1em;
            width: 768px;
        }

        @media screen and (max-width: 768px) {
            width: 100%;
            gap: unset;
            justify-content: space-between;
        }

        li a {
            color: white;
            display: block;
            font-size: 1em;
            font-family: 'Wellfleet', serif;
            text-decoration-line: none;

            @media screen and (max-width: 768px) {
                & {
                    font-size: 0.95em;
                    letter-spacing: -1px;
                }
            }
        }
    }

    &::before {
        position: absolute;
        z-index: -1;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: rgba(0, 12, 36, 0.1);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(26, 15, 57, 0.3);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: background-color 500ms ease-in-out, backdrop-filter 500ms ease-in-out;
        clip-path: polygon(
            0% 0%, 0% 70%, 3% 65%, 5% 80%, 7% 70%, 10% 85%,
            13% 75%, 15% 90%, 18% 65%, 20% 80%, 23% 70%,
            25% 85%, 28% 60%, 30% 75%, 33% 65%, 35% 85%,
            38% 70%, 40% 80%, 43% 60%, 45% 90%, 48% 65%,
            50% 75%, 53% 70%, 55% 85%, 58% 60%, 60% 80%,
            63% 65%, 65% 90%, 68% 70%, 70% 75%, 73% 85%,
            75% 65%, 78% 80%, 80% 60%, 83% 70%, 85% 85%,
            88% 75%, 90% 80%, 93% 65%, 95% 85%, 98% 70%,
            100% 80%, 100% 0%
        );
    }

    @media screen and (max-width: 768px) {
        &::before {
            clip-path: polygon(
                0% 0%, 0% 70%, 10% 80%, 20% 65%, 30% 85%,
                40% 70%, 50% 90%, 60% 75%, 70% 80%, 80% 65%,
                90% 85%, 100% 70%, 100% 0%
            );
        }
    }

    &.blue-theme {
        &::before {
            background: rgba(3, 88, 207, 0.75);
            border: 1px solid rgba(3, 88, 207, 0.3);
        }
    }

    &.pink-theme {
        &::before {
            background: rgba(249, 2, 156, 0.75);
            border: 1px solid rgba(249, 2, 156, 0.3);
        }
    }

    &.purple-theme {
        &::before {
            background: rgba(144, 46, 252, 0.75);
            border: 1px solid rgba(144, 46, 252, 0.3);
        }
    }

    &.orange-theme {
        &::before {
            background: rgba(254, 177, 1, 0.75);
            border: 1px solid rgba(254, 177, 1, 0.3);
        }
    }

    &.green-theme {
        &::before {
            background: rgba(3, 108, 91, 0.75);
            border: 1px solid rgba(3, 108, 91, 0.3);
        }
    }

    &.cyclamen-theme {
        &::before {
            background: rgba(128, 39, 97, 0.75);
            border: 1px solid rgba(128, 39, 97, 0.3);
        }
    }
}
</style>