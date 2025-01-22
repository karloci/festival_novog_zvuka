<script setup>

import AboveTheFoldComponent from "@/components/AboveTheFoldComponent.vue";
import SectionHolderComponent from "@/components/SectionHolderComponent.vue";
</script>

<template>
    <AboveTheFoldComponent/>
    <SectionHolderComponent color-class="orange-theme">
        <div class="content-part orange-theme">
            <h1 data-letter=".">O festivalu</h1>
        </div>
        <div class="content-part orange-theme">
            <p>Festival novog zvuka je platforma za istraživanje novih i drugačijih vidova glazbenog i interdisciplinarnog izražavanja, mjesto za predstavljanje novih skladbi i projekata mladih skladatelja.</p>
            <p>U dva dana festivala nizom koncerata planiramo predstaviti kompozicije mladih skladatelja njihovim kolegama i široj publici.</p>
            <p>Glavni je cilj organizatora stvoriti ugodan i razigrano-kreativan prostor koji potiče slobodu izražavanja te doprinosi razvoju nove generacije suvremenih glazbenika.</p>
            <p>Organizator festivala je udruga UPSUS, osnovana 2013. godine u Sinju s ciljem promicanja suvremene umjetnosti izvan krugova upućenih umjetnika prema široj publici i lokalnom stanovništvu.</p>
        </div>
    </SectionHolderComponent>
    <SectionHolderComponent color-class="green-theme" theme="dark">
        <div class="content-part green-theme">
            <h1 data-letter="?">Gdje i kada</h1>
            <p>Festival će se održati u siječnju 2025. godine u Sinju, živopisnom gradu bogate povijesti i kulture.</p>
            <p>Sinj pruža idealno okruženje za dva dana ispunjena glazbom, kreativnošću i druženjem. Posjetitelji će imati priliku uživati u programu koji spaja atmosferu dalmatinskog kraja i suvremenu glazbu s inovativnim umjetničkim izričajem.</p>
            <p>Program festivala odvijat će se na nekoliko pažljivo odabranih lokacija, koje će svojom akustikom i ugođajem dodatno istaknuti izvedbe. Posjetitelji mogu očekivati inspirativnu kombinaciju vrhunske glazbe i toplog gostoprimstva lokalne zajednice.</p>
        </div>
        <div class="image-holder">
            <img src="../graphics/sinj.png" alt="Grad Sinj">
        </div>
    </SectionHolderComponent>
    <SectionHolderComponent color-class="pink-theme">
        <div class="content-part pink-theme">
            <h1 data-letter=".">Program</h1>
        </div>
        <div class="content-part pink-theme">
            <p>Program festivala osmišljen je kako bi obuhvatio različite aspekte suvremene glazbe i umjetnosti.</p>
            <p>Tijekom dva dana festivala održavat će se koncerti s premijernim izvedbama novih skladbi mladih autora, uključujući kompozicije inspirirane temom festivala – Nature Amplified.</p>
            <p>Osim koncerata, na programu su i radionice za djecu i mlade, koje spajaju edukaciju s kreativnošću, te panel diskusije na temu suvremene umjetnosti. Festival je osmišljen kao prostor za inovaciju, razmjenu znanja i poticanje suradnje među umjetnicima.</p>
            <br>
            <div class="program-list">
                <h2 data-letter="23. siječnja">Četvrtak</h2>
                <ul>
                    <li>
                        <span>Digital Twin (Filip Merčep – vibrafon, Boy van Ooijen – bubanj)</span>
                        <span>20:00</span>
                    </li>
                </ul>
            </div>
            <div class="program-list">
                <h2 data-letter="24. siječnja">Petak</h2>
                <ul>
                    <li>
                        <span>Radionica suvremene improvizacije ˝Music bus˝ (Ivana Bandalo Benzon)</span>
                        <span>17:00 – 19:00</span>
                    </li>
                    <li>
                        <span>Nae kolektiv (Tomislav Oliver – elektronika, Filip Merčep – udaraljke, Vid Veljak – violončelo, Branimir Norac – klarinet)</span>
                        <span>20:00</span>
                    </li>
                </ul>
            </div>
            <div class="program-list">
                <h2 data-letter="25. siječnja">Subota</h2>
                <ul>
                    <li>
                        <span>Radionica suvremene improvizacije ˝Music bus˝</span>
                        <span>10:00 – 12:00</span>
                    </li>
                    <li>
                        <span>Radionica/izložba ˝Videoigranje s glazbom˝ (Digital Twin)</span>
                        <span>10:00 – 14:00</span>
                    </li>
                    <li>
                        <span>Impro koncert (prof. Ivan Božićević, Ines Vrdoljak, Melina Šišić, polaznici radionice suvremene improvizacije)</span>
                        <span>18:30</span>
                    </li>
                    <li>
                        <span>S/UMAS</span>
                        <span>20:00</span>
                    </li>
                </ul>
            </div>
        </div>
    </SectionHolderComponent>
    <SectionHolderComponent color-class="purple-theme" theme="dark">
        <p v-for="i in 16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, est illum impedit nihil optio quibusdam ratione repudiandae sed similique veritatis! Assumenda distinctio eos eveniet excepturi laborum, optio perspiciatis quisquam vel.</p>
    </SectionHolderComponent>
    <SectionHolderComponent color-class="blue-theme">
        <p v-for="i in 8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, est illum impedit nihil optio quibusdam ratione repudiandae sed similique veritatis! Assumenda distinctio eos eveniet excepturi laborum, optio perspiciatis quisquam vel.</p>
    </SectionHolderComponent>
</template>

<style>
.program-list {
    &:not(:last-child) {
        margin-bottom: 2em;
    }

    h2 {
        font-family: 'Wellfleet', sans-serif;
        font-size: 1.5em;
        margin-bottom: 0.25em;
        position: relative;
        color: var(--color-primary);
        user-select: none;

        &:after {
            font-size: 0.75em;
            padding-left: 0.5em;
            bottom: 0.2em;
            position: absolute;
            content: attr(data-letter);
            color: var(--color-pink);
            font-family: 'Wellfleet', sans-serif;
        }
    }

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1em;

        li {
            display: flex;
            flex-direction: column;

            span:first-child {
                font-family: 'Suse', serif;
                font-size: 1em;
                line-height: 1.25em;
                color: var(--color-primary);
            }

            span:last-child{
                font-family: 'Suse', serif;
                font-size: 0.75em;
                line-height: 1.25em;
                color: var(--color-secondary);
            }
        }
    }
}
</style>