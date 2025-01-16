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
        <li>
            <a href="#">Festival 2025.</a>
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
    padding-inline: 2em;

    &::before {
        position: absolute;
        z-index: -1;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background-color: transparent;
        transition: background-color 500ms ease-in-out;
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

    ul {
        list-style: none;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2em;
        padding: 0;

        li a {
            color: white;
            transition: color 500ms ease-in-out;
            display: block;
            font-size: 18px;
            font-family: 'Proxima Nova Condensed', sans-serif;
            text-decoration-line: none;
            text-transform: uppercase;
        }
    }

    &.status-orange {
        &::before {
            background-color: #FEB101;
        }

        ul li a {
            color: black;
        }
    }

    &.status-pink {
        &::before {
            background-color: #F9029C;
        }

        ul li a {
            color: black;
        }
    }

    &.status-blue {
        &::before {
            background-color: #0358CF;
        }

        ul li a {
            color: black;
        }
    }

    &.status-purple {
        &::before {
            background-color: #902EFC;
        }

        ul li a {
            color: black;
        }
    }

    &.status-green {
        &::before {
            background-color: #036C5B;
        }

        ul li a {
            color: black;
        }
    }
}
</style>