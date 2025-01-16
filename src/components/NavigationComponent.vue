<script setup>
import {useColorStore} from "@/stores/colorStore.js";

const colorStore = useColorStore();

</script>

<template>
<nav :class="colorStore.activeColor">
    <ul>
        <li>
            <a href="/">Početna</a>
        </li>
        <li>
            <a href="#">Novosti</a>
        </li>
        <li>
            <a href="#">Galerija</a>
        </li>
        <li>
            <a href="#">Kontakt</a>
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

    ul {
        list-style: none;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 3em;
        padding: 0;

        @media screen and (max-width: 768px) {
            & {
                gap: unset;
                justify-content: space-between;
                width: 100%;
                padding-inline: 2em;
            }
        }

        li a {
            color: white;
            display: block;
            font-size: 18px;
            font-family: 'Proxima Nova Condensed', sans-serif;
            text-decoration-line: none;
            text-transform: uppercase;
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
        background: rgba(26, 15, 57, 0.2);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(10px);
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

    &.background-blue {
        &::before {
            background: rgba(3, 88, 207, 0.5);
            border: 1px solid rgba(3, 88, 207, 0.3);
        }
    }

    &.background-pink {
        &::before {
            background: rgba(249, 2, 156, 0.5);
            border: 1px solid rgba(249, 2, 156, 0.3);
        }
    }

    &.background-purple {
        &::before {
            background: rgba(144, 46, 252, 0.5);
            border: 1px solid rgba(144, 46, 252, 0.3);
        }
    }

    &.background-orange {
        &::before {
            background: rgba(254, 177, 1, 0.5);
            border: 1px solid rgba(254, 177, 1, 0.3);
        }
    }

    &.background-green {
        &::before {
            background: rgba(3, 108, 91, 0.5);
            border: 1px solid rgba(3, 108, 91, 0.3);
        }
    }
}
</style>