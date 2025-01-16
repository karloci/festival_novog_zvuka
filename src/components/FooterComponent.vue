<script setup>

</script>

<template>
    <footer>
        <div class="content-holder">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque magnam maiores modi perspiciatis. Accusantium adipisci consectetur, ducimus error impedit inventore ipsam ipsum laudantium necessitatibus neque quasi voluptatum. Quia, saepe, veniam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque magnam maiores modi perspiciatis. Accusantium adipisci consectetur, ducimus error impedit inventore ipsam ipsum laudantium necessitatibus neque quasi voluptatum. Quia, saepe, veniam.</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    padding-top: 3em;
    padding-bottom: calc(4em + 60px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 4em;
    background-color: #1A0F39;

    * {
        color: white;
    }

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