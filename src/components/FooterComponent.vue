<script setup>

</script>

<template>
    <footer>
        <div class="content-holder">
            <p>© Festival novog zvuka 2025.</p>
            <img src="../graphics/sponzori.png" alt="Sponzori" style="width: 100%">
        </div>
    </footer>
</template>

<style scoped>
footer {
    padding-top: 5em;
    padding-bottom: 2em;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 4em;
    background-color: #000C24;

    * {
        font-family: 'Suse', sans-serif;
        color: white;
    }

    @media screen and (max-width: 1024px) {
        padding-inline: 2em;
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