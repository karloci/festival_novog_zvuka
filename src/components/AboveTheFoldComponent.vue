<script setup>

</script>

<template>
    <section class="above-the-fold-container">
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
    height: 100dvh;

    @media screen and (max-width: 1024px) {
        & {
            height: 100vh;
        }
    }

    &::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        height: 80px;
        background: white;
        clip-path: polygon(
            0% 25%, 5% 20%, 10% 35%, 15% 15%,
            20% 30%, 25% 20%, 30% 40%, 35% 25%,
            40% 35%, 45% 20%, 50% 40%, 55% 25%,
            60% 35%, 65% 15%, 70% 30%, 75% 20%,
            80% 40%, 85% 25%, 90% 35%, 95% 20%,
            100% 30%, 100% 100%, 0% 100%
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
        padding-bottom: 80px;

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
        padding-bottom: 80px;

        @media screen and (max-width: 768px) {
            & {
                align-items: flex-start;
            }
        }

        h1 {
            color: white;
            font-size: 10rem;
            line-height: 1;
            letter-spacing: -20px;
            font-family: 'PaletteMosaic', sans-serif;
            max-width: 8ch;
            text-align: center;
            user-select: none;
            text-transform: uppercase;

            @media screen and (max-width: 1024px) {
                & {
                    font-size: 10vw;
                    letter-spacing: -10px;
                    margin-block: 1em;
                }
            }

            @media screen and (max-width: 768px) {
                & {
                    font-size: 18vw;
                    letter-spacing: -5px;
                }
            }
        }
    }
}
</style>