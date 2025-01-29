<script setup>

import AboveTheFoldComponent from "@/components/AboveTheFoldComponent.vue";
import SectionHolderComponent from "@/components/SectionHolderComponent.vue";
</script>

<template>
    <AboveTheFoldComponent/>
    <SectionHolderComponent color-class="pink-theme" id="program">
        <div class="content-part pink-theme">
            <h1 data-letter=".">Program</h1>
        </div>
        <div class="content-part pink-theme">
            <p>Program festivala osmišljen je kako bi obuhvatio različite aspekte suvremene glazbe i umjetnosti.</p>
            <p>Tijekom tri dana festivala održavat će se koncerti s premijernim izvedbama novih skladbi mladih autora.</p>
            <p>Osim koncerata, na programu su i radionice za djecu i mlade, koje spajaju edukaciju s kreativnošću, te panel diskusije na temu suvremene umjetnosti. Festival je osmišljen kao prostor za inovaciju, razmjenu znanja i poticanje suradnje među umjetnicima.</p>
            <br>
            <div class="part-list pink-theme">
                <h2 data-letter="23. siječnja">Četvrtak</h2>
                <ul>
                    <li>
                        <span>Digital Twin (Filip Merčep – vibrafon, Boy van Ooijen – bubanj)</span>
                        <span>20:00</span>
                    </li>
                </ul>
            </div>
            <div class="part-list pink-theme">
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
            <div class="part-list pink-theme">
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
    <SectionHolderComponent color-class="purple-theme" theme="dark" id="izvodaci">
        <div class="content-part purple-theme">
            <h1 data-letter="!">Izvođači</h1>
            <p>Ovogodišnji program festivala će biti obogaćen brojnim poznatim imenima iz moderne glazbene industrije.</p>
            <br>
            <div class="part-list purple-theme">
                <h2 class="set-color">Digital Twin</h2>
                <ul>
                    <li>
                        <span><strong>Filip Merčep</strong> svojim projektima konstantno dokazuje da je osoba te umjetnik širokog spektra interesa i djelovanja. Kao koncertni umjetnik Filip je iznimno aktivan svirajući solo te uz pratnju većinu hrvatskih orkestara na svim većim domaćim festivalima i dvoranama.</span>
                    </li>
                    <li>
                        <span><strong>Boy van Ooijen</strong> je aktivan kao bubnjar i producent u 12 različitih projekata svirajući po cijelom svijetu. Razvio je algoritam napisan u Pythonu koji prepoznaje elemente bubnjeva, da bi svirajući bubnjeve mogao pokretati razne vizuale, svjetla kroz DMX protokol ili za kontrolirati sintesajzera.</span>
                    </li>
                </ul>
            </div>
            <div class="part-list purple-theme">
                <h2 class="set-color">NAE Collective</h2>
                <ul>
                    <li>
                        <span><strong>NAE Collective</strong> je ansambl kompozitora, izvođača i umjetnika novih medija posvećen stvaranju eksperimentalne umjetnosti. Osnovan je 2022. godine sa sjedištem u Zagrebu. Osnivači su kompozitor Tomislav Oliver, violončelist Vid Veljak, udaraljkaš Filip Merčep i klarinetist Branimir Norac.</span>
                    </li>
                </ul>
            </div>
            <div class="part-list purple-theme">
                <h2 class="set-color">Ivan Božičević</h2>
                <ul>
                    <li>
                        <span><strong>Ivan Božičević</strong> je skladatelj, orguljaš, pijanist, aranžer i glazbeni producent. Studirao je i magistrirao kompoziciju na FMU u Beogradu u razredu Aleksandra Obradovića. Orgulje je studirao u Frankfurtu kod E. Krappa, a usavršavao se u Darmstadtu i Salamanci.</span>
                    </li>
                </ul>
            </div>
            <div class="part-list purple-theme">
                <h2 class="set-color">Ansambl S/UMAS</h2>
                <ul>
                    <li>
                        <span><strong>Ansambl S/UMAS</strong> osnovan je 2015. pri Umjetničkoj akademiji u Splitu, na inicijativu umjetničkog voditelja Gordana Tudora. Ovaj mladi ansambl ubrzo se nametnuo među specijaliziranim sastavima za suvremenu glazbu u Hrvatskoj kao jedan od najaktivnijih i najpropulzivnijih.</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="image-holder">
            <img src="../graphics/digital_twin.png" alt="Digital Twin">
            <img src="../graphics/nae_collective.jpg" alt="NAE Collective">
            <img src="../graphics/ivan_bozicevic.png" alt="Ivan Božičević">
            <img src="../graphics/s_umas.jpg" alt="Ansambl S/UMAS">
        </div>
    </SectionHolderComponent>
    <SectionHolderComponent color-class="orange-theme" id="o-festivalu">
        <div class="content-part orange-theme">
            <h1 data-letter=".">O festivalu</h1>
        </div>
        <div class="content-part orange-theme">
            <p>Festival novog zvuka je platforma za istraživanje novih i drugačijih vidova glazbenog i interdisciplinarnog izražavanja, mjesto za predstavljanje novih skladbi i projekata mladih skladatelja.</p>
            <p>U tri dana festivala nizom koncerata planiramo predstaviti kompozicije mladih skladatelja njihovim kolegama i široj publici.</p>
            <p>Glavni je cilj organizatora stvoriti ugodan i razigrano-kreativan prostor koji potiče slobodu izražavanja te doprinosi razvoju nove generacije suvremenih glazbenika.</p>
            <p>Organizator festivala je udruga UPSUS, osnovana 2013. godine u Sinju s ciljem promicanja suvremene umjetnosti izvan krugova upućenih umjetnika prema široj publici i lokalnom stanovništvu.</p>
            <p>Ulaz na sva događanja u sklopu festivala je besplatan.</p>
        </div>
    </SectionHolderComponent>
    <SectionHolderComponent color-class="green-theme" theme="dark" id="gdje-i-kada">
        <div class="content-part green-theme">
            <h1 data-letter="?">Gdje i kada</h1>
            <p>Festival će se održati u siječnju 2025. godine u Sinju, živopisnom gradu bogate povijesti i kulture.</p>
            <p>Sinj pruža idealno okruženje za tri dana ispunjena glazbom, kreativnošću i druženjem. Posjetitelji će imati priliku uživati u programu koji spaja atmosferu dalmatinskog kraja i suvremenu glazbu s inovativnim umjetničkim izričajem.</p>
            <p>Program festivala odvijat će se na nekoliko pažljivo odabranih lokacija, koje će svojom akustikom i ugođajem dodatno istaknuti izvedbe. Posjetitelji mogu očekivati inspirativnu kombinaciju vrhunske glazbe i toplog gostoprimstva lokalne zajednice.</p>
        </div>
        <div class="image-holder">
            <img src="../graphics/sinj.jpg" alt="Grad Sinj">
        </div>
    </SectionHolderComponent>
    <SectionHolderComponent color-class="blue-theme" id="sponzori">
        <div class="content-part blue-theme">
            <h1 data-letter=".">Sponzori</h1>
        </div>
        <div class="content-part orange-theme">
            <p>Festival novog zvuka sufinanciran je od strane Ministarstva kulture i medija RH, Zaklade Kultura nova, Hrvatskog društva skladatelja, Grada Sinja i Turističke zajednice grada Sinja.</p>
            <p>U sklopu festivala realizira se i projekt “Nature amplified” te rezidencija NAE ansambla, koji dobivaju podršku prestižne inicijative European Festival Found for Emerging Artist – EFFEA, sufinancirane od Europske unije. Ovaj projekt ostvaruje se u partnerstvu s Muzičkim Biennaleom Zagreb i KotorArt International Festivalom, čime Festival Novog Zvuka dodatno osnažuje svoju međunarodnu dimenziju. Kroz ovu suradnju festival pruža priliku za razmjenu ideja, razvoj mladih umjetnika i predstavljanje inovativnih glazbenih djela široj publici, stvarajući jedinstveno kulturno iskustvo.</p>
        </div>
    </SectionHolderComponent>
    <SectionHolderComponent color-class="cyclamen-theme" theme="dark" id="kontakt">
        <div class="content-part cyclamen-theme">
            <h1 data-letter=".">Kontakt</h1>
            <p>U slučaju dodatnih pitanja o festivalu, suradnji ili nečemu drugome, slobodno name pošaljite upit! Nastojat ćemo Vam dati što brži odgovor.</p>
        </div>
        <div class="form-holder">
            <form action="#">
                <div class="form-group">
                    <label for="full-name">Ime i prezime</label>
                    <input type="text" id="full-name" name="full-name">
                </div>
                <div class="form-group">
                    <label for="email">Adresa e-pošte</label>
                    <input type="email" id="email" name="email">
                </div>
                <div class="form-group">
                    <label for="message">Poruka</label>
                    <textarea id="message" name="message" rows="4"></textarea>
                </div>
                <p>Slanjem ove poruke suglasni ste s politikom obrade osobnih podataka navedenoj u <a href="#">politici privatnosti</a>.</p>
                <button type="submit">Pošalji</button>
            </form>
        </div>
    </SectionHolderComponent>
</template>

<style>
.part-list {
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
            font-family: 'Wellfleet', sans-serif;
        }
    }

    &.pink-theme {
        h2 {
            &:after {
                color: var(--color-pink);
            }
        }
    }

    &.purple-theme {
        h2 {
            &.set-color {
                color: var(--color-purple);
            }

            &:after {
                color: var(--color-purple);
            }
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

            span:nth-child(1) {
                font-family: 'Suse', serif;
                font-size: 1em;
                line-height: 1.5em;
                color: var(--color-primary);

                strong {
                    font-weight: bold;
                }
            }

            span:nth-child(2) {
                font-family: 'Suse', serif;
                font-size: 0.85em;
                line-height: 1.5em;
                color: var(--color-secondary);
            }
        }
    }
}

.form-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 4em;

    @media screen and (max-width: 768px) {
        & {
            padding: 2em;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.5em;

        .form-group {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 0.5em;

            label {
                font-family: 'Wellfleet', sans-serif;
                color: var(--color-primary);
            }

            input,
            textarea {
                padding: 0.5em;
                min-height: 44px;
                border: 2px solid var(--color-cyclamen);
                background-color: white;
                outline: none;
                font-size: 1em;
                font-family: 'Suse', serif;
            }

            input:focus,
            textarea:focus {
                border-color: var(--color-cyclamen);
                outline: var(--color-cyclamen) auto 1px;
                outline-offset: 4px;
            }
        }

        p {
            font-family: 'Wellfleet', sans-serif;
            font-size: 0.8em;

            a {
                color: var(--color-cyclamen);

                &:hover {
                    text-decoration-line: none;
                }
            }
        }

        button {
            padding: 0.5em;
            height: 44px;
            border: 2px solid var(--color-cyclamen);
            background-color: var(--color-cyclamen);
            font-family: 'Wellfleet', sans-serif;
            text-transform: uppercase;
            color: white;
            outline: none;
        }

        button:focus {
            border-color: var(--color-cyclamen);
            outline: var(--color-cyclamen) auto 1px;
            outline-offset: 4px;
        }

        button:hover {
            cursor: pointer;
            border-color: color-mix(in srgb, var(--color-cyclamen), black 20%);
            background-color: color-mix(in srgb, var(--color-cyclamen), black 20%);
        }
    }
}
</style>