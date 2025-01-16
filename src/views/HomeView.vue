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
        </div>
    </SectionHolderComponent>
    <SectionHolderComponent color-class="purple-theme" theme="dark">
        <p v-for="i in 16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, est illum impedit nihil optio quibusdam ratione repudiandae sed similique veritatis! Assumenda distinctio eos eveniet excepturi laborum, optio perspiciatis quisquam vel.</p>
    </SectionHolderComponent>
    <SectionHolderComponent color-class="blue-theme">
        <p v-for="i in 8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, est illum impedit nihil optio quibusdam ratione repudiandae sed similique veritatis! Assumenda distinctio eos eveniet excepturi laborum, optio perspiciatis quisquam vel.</p>
    </SectionHolderComponent>
</template>

<style scoped>

</style>