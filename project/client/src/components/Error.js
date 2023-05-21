import React from 'react'

function get_error(id){

}

function Error(props) {
    const {id, type, engine} = props
    let wcag = "";
    let title = "";
    var errors = {};

    /*AXE-CORE*/
    errors['area-alt'] = {wcag : "4.1.2 (A) och 2.4.4 (A)", title: "<area> element kräver alternativ text"};
    errors['aria-command-name'] = {wcag : "4.1.2 (A)", title: "ARIA kommandon kräver tillgängliga namn"}
    errors['aria-allowed-attr'] = {wcag : "4.1.2 (A)", title: "Element måste använda tillåtna ARIA attribut"}
    errors['aria-hidden-body'] = { wcag : "4.1.2 (A)", title: "<body> element ska inte ha aria-hidden=\"true\""}
    errors['aria-hidden-focus'] = { wcag : "4.1.2 (A)", title: "Innehåll med aria-hidden=\"true\" ska inte vara fokuserbar"}
    errors['aria-input-field-name'] = { wcag : "4.1.2 (A)", title: "ARIA label kräver tillgängligt namn"}
    errors['aria-meter-name'] = { wcag : "1.1.1 (A)", title: "ARIA meter kräver tillgängligt namn"}
    errors['aria-progressbar-name'] = { wcag : "1.1.1 (A)", title: "ARIA progressbar kräver tillgängligt namn"}
    errors['aria-required-attr'] = { wcag : "4.1.2 (A)", title: "Obligatoriska ARIA attribut måste finnas"}
    errors['aria-required-children'] = { wcag : "1.3.1 (A)", title: "Vissa ARIA roller kräver nödvändiga barn-element"}
    errors['aria-required-parent'] = { wcag : "1.3.1 (A)", title: "Vissa ARIA roller kräver nödvändiga förälder-element"}
    errors['aria-roles'] = { wcag : "4.1.2 (A)", title: "ARIA roller måste ha giltiga värden"}
    errors['aria-toggle-field-name'] = { wcag : "4.1.2 (A)", title: "ARIA toggles måste ha tillgängligt namn"}
    errors['aria-tooltip-name'] = { wcag : "4.1.2 (A)", title: "ARIA tooltip måste ha tillgängligt namn"}
    errors['aria-valid-attr-value'] = { wcag : "4.1.2 (A)", title: "ARIA attribut måste anpassas till giltiga värden"}
    errors['aria-valid-attr'] = { wcag : "4.1.2 (A)", title: "ARIA attribut måste anpassas till giltiga namn"}
    errors['blink'] = { wcag : "2.2.2 (A)", title: "<blink> element ska inte användas"}
    errors['button-name'] = { wcag : "4.1.2 (A)", title: "Knappar har inte märkbar text"}
    errors['bypass'] = { wcag : "2.4.1 (A)", title: "Sidan kräver medel för att kringgå upprepade block"}
    errors['color-contrast'] = { wcag : "1.4.3 (AA)", title: "Element kräver tillräcklig färgkontrast"}
    errors['definition-list'] = { wcag : "1.3.1 (A)", title: "<dl> element kräver korrekt struktur"}
    errors['dlitem'] = { wcag : "1.3.1 (A)", title: "<dt> och <dd> element måste omslutas av <dl>"}
    errors['document-title'] = { wcag : "2.4.2 (A)", title: "Dokument måste ha <title>"}
    errors['duplicate-id-active'] = { wcag : "4.1.1 (A)", title: "ID av aktiva element måste vara unika"}
    errors['duplicate-id-aria'] = { wcag : "4.1.1 (A)", title: "ID av ARIA måste vara unika"}
    errors['duplicate-id'] = { wcag : "4.1.1 (A)", title: "ID av element måste vara unik"}
    errors['form-field-multiple-labels'] = { wcag : "3.3.2 (A)", title: "Formfält ska inte ha multipla etiketter"}
    errors['frame-focusable-content'] = { wcag : "2.1.1 (A)", title: "Fokuserbara frames ska inte ha tabindex=\"-1\""}
    errors['frame-title-unique'] = { wcag : "4.1.2 (A)", title: "Frames måste ha unik title"}
    errors['frame-title'] = { wcag : "4.1.2 (A)", title: "Frames måste ha tillgängligt namn"}
    errors['html-has-lang'] = { wcag : "3.1.1 (A)", title: "<html> måste ha lang attribut"}
    errors['html-lang-valid'] = { wcag : "3.1.1 (A)", title: "<html> måste ha giltigt lang attribut"}
    errors['html-xml-lang-mismatch'] = { wcag : "3.1.1 (A)", title: "Element med lang måste ha samma basspråk"}
    errors['image-alt'] = { wcag : "1.1.1 (A)", title: "Bilder måste ha alternativ text"}
    errors['input-button-name'] = {wcag : "4.1.2 (A)", title: "Inmatningsknappar måste ha märkbar text"}
    errors['input-image-alt'] = { wcag : "1.1.1 (A) och 4.1.2 (A)", title: "Bildknappar måste ha alternativ text"}
    errors['label'] = { wcag : "4.1.2 (A)", title: "Form element måste ha etiketter"}
    errors['link-in-text-block'] = { wcag : "1.4.1 (A)", title: "Länkar måste vara särskiljbar på annat sätt en färg"}
    errors['link-name'] = { wcag : "4.1.2 (A) och 2.4.4 (A)", title: "Länkar måste ha särskiljbar text"}
    errors['list'] = { wcag : "1.3.1 (A)", title: "<ul> och <ol> kräver korrekt struktur"}
    errors['listitem'] = { wcag : "1.3.1 (A)", title: "<li> måste omslutas av <ul> eller <ol>"}
    errors['marquee'] = { wcag : "2.2.2 (A)", title: "<marquee> element ska inte användas"}
    errors['meta-refresh'] = { wcag : "2.2.1 (A)", title: "Uppdatering på sida får inte göras under 20 timmar"}
    errors['meta-viewport'] = { wcag : "1.4.4 (AA)", title: "Zooming och skalning får inte inaktiveras"}
    errors['nested-interactive'] = { wcag : "4.1.2 (A)", title: "Interaktiva kontroller får inte vara nästlade"}
    errors['no-autoplay-audio'] = { wcag : "1.4.2 (A)", title: "<video> eller <audio> får inte spelas automatiskt"}
    errors['object-alt'] = { wcag : "1.1.1 (A)", title: "<object> element måste ha alternativ text"}
    errors['role-img-alt'] = { wcag : "1.1.1 (A)", title: "role=\"img\" måste ha alternativ text"}
    errors['scrollable-region-focusable'] = { wcag : "2.1.1 (A)", title: "Skrollbara delar måste ha tangentbordsåtkomst"}
    errors['select-name'] = { wcag : "4.1.2 (A)", title: "Tillvalselement måste ha tillgängliga namn"}
    errors['server-side-image-map'] = { wcag : "2.1.1 (A)", title: "Alla bildmappar måste vara på klientsidan"}
    errors['svg-img-alt'] = { wcag : "1.1.1 (A)", title: "<svg> element som bild måste ha alternativ text"}
    errors['td-headers-attr'] = { wcag : "1.3.1 (A)", title: "Tabellceller med rubrik måste referera till celler i samma tabell"}
    errors['th-has-data-cells'] = { wcag : "1.3.1 (A)", title: "Tabellrubriker i en tabell måste referera till dataceller"}
    errors['valid-lang'] = { wcag : "3.1.2 (A)", title: "lang måste ha giltigt värde"}
    errors['video-caption'] = { wcag : "1.2.2 (A)", title: "<video> element måste ha rubrik"}
    errors['autocomplete-valid'] = { wcag : "1.3.5 (AA)", title: "autocomplete måste användas korrekt"}
    errors['avoid-inline-spacing'] = { wcag : "1.4.12 (AA)", title: "Textavstånd måste vara justerbar"}
    
    /*HTML-CS*/
    errors['Principle1.Guideline1_1.1_1_1'] = { wcag : "1.1.1 (A)", title: "Icketextinnehåll måste ha alternativa texter"}
    errors['Principle1.Guideline1_2.1_2_1'] = { wcag : "1.2.1 (A)", title: "Alternativ måste finnas för ljud och video"}
    errors['Principle1.Guideline1_2.1_2_2'] = { wcag : "1.2.2 (A)", title: "Rubriker måste finnas för ljud i synkroniserad media"}
    errors['Principle1.Guideline1_2.1_2_3'] = { wcag : "1.2.3 (A)", title: "Alternativ eller beskrivning måste finnas för synkroniserad media"}
    errors['Principle1.Guideline1_2.1_2_4'] = { wcag : "1.2.4 (AA)", title: "Rubriker måste finnas för allt ljudinnehåll"}
    errors['Principle1.Guideline1_2.1_2_5'] = { wcag : "1.2.5 (AA)", title: "Ljudbeskrivning måste erbjudas för synkroniserad media"}
    errors['Principle1.Guideline1_2.1_2_6'] = { wcag : "1.2.6 (AAA)", title: "Teckenspråk måste erbjudas för synkroniserad media"}
    errors['Principle1.Guideline1_2.1_2_7'] = { wcag : "1.2.7 (AAA)", title: "Utökad ljudbeskrivning måste finnas av allt förinspelat videoinnehåll i synkroniserad media"}
    errors['Principle1.Guideline1_2.1_2_8'] = { wcag : "1.2.8 (AAA)", title: "Det måste finnas ett alternativ till tidsberoende media för videoinnehåll"}
    errors['Principle1.Guideline1_2.1_2_9'] = { wcag : "1.2.9 (AAA)", title: "Det måste finnas alternativ till tidsberoende media för ljudinnehåll"}
    errors['Principle1.Guideline1_3.1_3_1'] = { wcag : "1.3.1 (A)", title: "Information, struktur, och relationer som förmedlas genom presentation måste vara automatiskt tydliggjord eller finnas som text"}
    errors['Principle1.Guideline1_3.1_3_2'] = { wcag : "1.3.2 (A)", title: "När meningen med innehållet påverkas av ordningen det presenteras i, måste en logisk läsordning bli automatiskt tydliggjord"}
    errors['Principle1.Guideline1_3.1_3_3'] = { wcag : "1.3.3 (A)", title: "Instruktioner för att förstå och styra innehåll är inte enbart beroende av sensoriska kännetecken såsom form etc."}
    errors['Principle1.Guideline1_3.1_3_4'] = { wcag : "1.3.4 (AA)", title: "Innehåll måste kunna vara stående eller liggandes"}
    errors['Principle1.Guideline1_3.1_3_5_H98'] = { wcag : "1.3.5 (AA)", title: "Syftet av inmatningsfält ska kunna utvärderas programmatiskt"}
    errors['Principle1.Guideline1_3.1_3_6_ARIA11'] = { wcag : "1.3.6 (AAA)", title: "Komponenter med användargränssnitt ska programmatiskt kunna utvärderas"}
    errors['Principle1.Guideline1_4.1_4_1'] = { wcag : "1.4.1 (A)", title: "Information får inte enbart förmedlas med färg"}
    errors['Principle1.Guideline1_4.1_4_2'] = { wcag : "1.4.2 (A)", title: "Ljud över 3 sekunder måste kunna stoppas"}
    errors['Principle1.Guideline1_4.1_4_3'] = { wcag : "1.4.3 (AA)", title: "Elementet kräver tillräcklig färgkontrast"}
    errors['Principle1.Guideline1_4.1_4_4'] = { wcag : "1.4.4 (AA)", title: "Text måste kunna förstoras utan att information försvinner"}
    errors['Principle1.Guideline1_4.1_4_5'] = { wcag : "1.4.5 (AA)", title: "Information ska förmedlas via text och inte bilder av text"}
    errors['Principle1.Guideline1_4.1_4_6'] = { wcag : "1.4.6 (AAA)", title: "Elementet kräver tillräcklig färgkontrast"}
    errors['Principle1.Guideline1_4.1_4_7'] = { wcag : "1.4.7 (AAA)", title: "Bakgrundsljud måste kunna stängas av"}
    errors['Principle1.Guideline1_4.1_4_8'] = { wcag : "1.4.8 (AAA)", title: "Visuell presentation för textblock saknar obligatoriska metoder"}
    errors['Principle1.Guideline1_4.1_4_9'] = { wcag : "1.4.9 (AAA)", title: "Bilder av text ska enbart vara dekoration"}
    errors['Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206'] = { wcag : "1.4.10 (AA)", title: "Skrollning måste kunna utföras utan att information försvinner"}
    errors['Principle1.Guideline1_4.1_4_11_G195,G207,G18,G145,G174,F78'] = { wcag : "1.4.11 (AA)", title: "Element kräver tillräcklig färgkontrast"}
    errors['Principle1.Guideline1_4.1_4_12_C36,C35'] = { wcag : "1.4.12 (AA)", title: "Textutrymme måste kunna utföras utan att information försvinner"}
    errors['Principle1.Guideline1_4.1_4_13_F95'] = { wcag : "1.4.13 (AA)", title: "Fokuserbara eller hoverelement kräver vissa egenskaper"}
    errors['Principle2.Guideline2_1.2_1_1'] = { wcag : "2.1.1 (A)", title: "Innehåll ska kunna navigeras med tangentbord"}
    errors['Principle2.Guideline2_1.2_1_2.F10'] = {wcag : "2.1.2 (A)", title: "Inga tangentbordsfällor"}
    errors['Principle1.Guideline2_1.2_1_4'] = { wcag : "2.1.4 (A)", title: "Tantentbordsgenvägar måste kunna stängas av"}
    errors['Principle2.Guideline2_2.2_2_1'] = { wcag : "2.2.1 (A)", title: "Inga tidsbegränsningar"}
    errors['Principle2.Guideline2_2.2_2_2'] = { wcag : "2.2.2 (A)", title: "Rörande innehåll ska kunna stängas av"}
    errors['Principle2.Guideline2_2.2_2_3'] = { wcag : "2.2.3 (AAA)", title: "Tidsbegränsningar är inte avgörande"}
    errors['Principle2.Guideline2_2.2_2_4'] = { wcag : "2.2.4 (AAA)", title: "Alla avbrott måste kunna stängas av"}
    errors['Principle2.Guideline2_2.2_2_5'] = { wcag : "2.2.5 (AAA)", title: "Information ska inte försvinna om en session avslutas"}
    errors['Principle1.Guideline2_2.2_2_6'] = { wcag : "2.2.6 (AAA)", title: "Data försvinner inte på mindre än 20 timmar"}
    errors['Principle2.Guideline2_3.2_3_1'] = { wcag : "2.3.1 (A)", title: "Innehåll ska inte blinka för snabbt"}
    errors['Principle2.Guideline2_3.2_3_2'] = { wcag : "2.3.2 (AAA)", title: "Innehåll ska inte blinka för mycket"}
    errors['Principle1.Guideline2_3.2_3_3'] = { wcag : "2.3.3 (AAA)", title: "Rörelse animationer ska kunna stängas av"}
    errors['Principle2.Guideline2_4.2_4_1'] = { wcag : "2.4.1 (A)", title: "En metod/funktion måste finnas tillgänglig för att hoppa över grupperat innehåll som upprepas på flera webbsidor"}
    errors['Principle2.Guideline2_4.2_4_2'] = { wcag : "2.4.2 (A)", title: "Det måste finnas en titel som beskriver sidan"}
    errors['Principle2.Guideline2_4.2_4_3'] = { wcag : "2.4.3 (A)", title: "Fokuserbara komponenter ska få fokus i en ordning som bevarar betydelse och användning"}
    errors['Principle2.Guideline2_4.2_4_4'] = { wcag : "2.4.4 (A)", title: "Syftet med varje länk ska framgå tydligt"}
    errors['Principle2.Guideline2_4.2_4_5'] = { wcag : "2.4.5 (AA)", title: "Det ska finnas mer än ett sätt att hitta en webbsida inom en uppsättning av webbsidor"}
    errors['Principle2.Guideline2_4.2_4_6'] = { wcag : "2.4.6 (AA)", title: "Rubriker och ledtexter/etiketter beskriver ämne eller syfte"}
    errors['Principle2.Guideline2_4.2_4_7'] = { wcag : "2.4.7 (AA)", title: "Användargränssnitt som styrs via tangentbord måste ha ett sätt att visa var fokus är vid tangentbordsnavigering"}
    errors['Principle2.Guideline2_4.2_4_8'] = { wcag : "2.4.8 (AAA)", title: "Det måste finnas information om var användaren är inom en uppsättning av webbsidor"}
    errors['Principle2.Guideline2_4.2_4_9'] = { wcag : "2.4.9 (AAA)", title: "Avdelningsrubriker används för att strukturera innehållet"}
    errors['Principle1.Guideline2_5.2_5_1'] = { wcag : "2.5.1 (A)", title: "Gester måste kunna utföras med en pekare"}
    errors['Principle1.Guideline2_5.2_5_2'] = { wcag : "2.5.2 (A)", title: "Pekargester kräver vissa egenskaper"}
    errors['Principle1.Guideline2_5.2_5_3_F96'] = { wcag : "2.5.3 (A)", title: "Namnet av en etikett måste vara de som syns visuellt"}
    errors['Principle1.Guideline2_5.2_5_4'] = { wcag : "2.5.4 (A)", title: "Funktionalitet ska inte enbart kunna utföras med rörelse"}
    errors['Principle1.Guideline2_5.2_5_5'] = { wcag : "2.5.5 (AAA)", title: "Storleken av en pekare måste vara på visst sätt"}
    errors['Principle1.Guideline2_5.2_5_6'] = { wcag : "2.5.6 (AAA)", title: "Innehållet begränsar inte användningen av inmatningsmodaliteter som är tillgängliga"}
    errors['Principle3.Guideline3_1.3_1_1'] = { wcag : "3.1.1 (A)", title: "Det huvudsakliga mänskliga språket på varje webbsida måste kunna tydliggöras automatiskt"}
    errors['Principle3.Guideline3_1.3_1_2'] = { wcag : "3.1.2 (AA)", title: "Det mänskliga språket för varje avsnitt eller fras i innehållet måste automatiskt tydliggöras utom för egennamn"}
    errors['Principle3.Guideline3_1.3_1_3'] = { wcag : "3.1.3 (AAA)", title: "Det ska finnas en metod/funktion som visar specifika definitioner av ord och fraser som används på ett ovanligt eller begränsat sätt"}
    errors['Principle3.Guideline3_1.3_1_4'] = { wcag : "3.1.4 (AAA)", title: "Det ska finnas en metod/funktion som visar hela ordet/orden eller betydelsen av förkortningar"}
    errors['Principle3.Guideline3_1.3_1_5'] = { wcag : "3.1.5 (AAA)", title: "Om innehållet kräver mer avancerad läsförmåga än gymnasienivån bör kompletterande innehåll eller en alternativ version tillhandahållas"}
    errors['Principle3.Guideline3_1.3_1_6'] = { wcag : "3.1.6 (AAA)", title: "Mekanism måste vara tillgänglig för att identifiera specifikt uttal av ord där betydelsen av orden, i sammanhanget"}
    errors['Principle3.Guideline3_2.3_2_1'] = { wcag : "3.2.1 (A)", title: "Att en komponent får fokus får inte leda till en förändring av sammanhanget"}
    errors['Principle3.Guideline3_2.3_2_2'] = { wcag : "3.2.2 (A)", title: "Att ändra inställningarna för en komponent i ett användargränssnitt får inte orsaka automatiskt en förändring av sammanhanget"}
    errors['Principle3.Guideline3_2.3_2_3'] = { wcag : "3.2.3 (AA)", title: "Navigeringsmetoder/funktioner som upprepas på flera webbsidor inom en uppsättning av webbsidor måste presenteras i samma inbördes ordning varje gång de upprepas"}
    errors['Principle3.Guideline3_2.3_2_4'] = { wcag : "3.2.4 (AA)", title: "Komponenter som har samma funktionalitet inom en uppsättning av webbsidor måste identifieras konsekvent"}
    errors['Principle3.Guideline3_2.3_2_5'] = { wcag : "3.2.5 (AAA)", title: "Förändring av sammanhang initieras enbart på användarens begäran eller så ska det finnas en metod/funktion för att stänga av sådana förändringar"}
    errors['Principle3.Guideline3_3.3_3_1'] = { wcag : "3.3.1 (A)", title: "Om ett inmatningsfel upptäcks automatiskt så ska det som är fel markeras och felet beskrivas för användaren med text"}
    errors['Principle3.Guideline3_3.3_3_2'] = { wcag : "3.3.2 (A)", title: "Det ska finnas Ledtexter/etiketter eller instruktioner när innehåll kräver inmatning från användaren"}
    errors['Principle3.Guideline3_3.3_3_3'] = { wcag : "3.3.3 (AA)", title: "Om ett inmatningsfel upptäcks automatiskt och det finns kända korrigeringsförslag så ska förslag ges till användaren"}
    errors['Principle3.Guideline3_3.3_3_4'] = { wcag : "3.3.4 (AA)", title: "Webbsidor med transaktioner måste ha viss struktur"}
    errors['Principle3.Guideline3_3.3_3_5'] = { wcag : "3.3.5 (AAA)", title: "Det måste finnas sammanhangsberoende hjälp"}
    errors['Principle3.Guideline3_3.3_3_6'] = { wcag : "3.3.6 (AAA)", title: "Webbsidor med inmatning måste ha viss struktur"}
    errors['Principle4.Guideline4_1.4_1_1'] = { wcag : "4.1.1 (A)", title: "Innehåll som skapats med kodspråk (markup language) måste ha element med kompletta start- och sluttaggar"}
    errors['Principle4.Guideline4_1.4_1_2'] = { wcag : "4.1.2 (A)", title: "Status, egenskaper och värden som kan anges av användaren ska bli automatiskt tydliggjord"}
    errors['Principle1.Guideline4_1.4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23'] = { wcag : "4.1.3 (AA)", title: "Statusmeddelanden ska kunna bestämmas programmatiskt genom roll eller egenskaper"}
    
    /*IBM*/
    errors['WCAG20_Text_Emoticons'] = { wcag : "1.1.1 (A)", title: "Emoticons måste ha ett kort textalternativ som beskriver deras syfte"}
    errors['RPT_Title_Valid'] = { wcag : "2.4.2 (A)", title: "Sidan <titel> ska vara en beskrivande titel snarare än ett filnamn"}
    errors['RPT_List_UseMarkup'] = { wcag : "1.3.1 (A)", title: "Använd rätt HTML-listelement för att skapa listor"}
    errors['Rpt_Aria_OrphanedContent_Native_Host_Sematics'] = { wcag : "1.3.1 (A) och 2.4.1 (A)", title: "Allt innehåll måste finnas inom ett element med en landmärkesroll"}
    errors['HAAC_BackgroundImg_HasTextOrTitle'] = { wcag : "1.1.1 (A)", title: "Bakgrundsbilder som förmedlar viktig information ska ha ett textalternativ som beskriver bilden"}
    errors['text_whitespace_valid'] = { wcag : "1.3.2 (A)", title: "Mellanslag ska inte användas för att styra mellanrum i ett ord"}
    errors['text_quoted_correctly'] = { wcag : "1.3.1 (A)", title: "Citat ska markeras med <q> eller <blockquote> element"}
    errors['RPT_Text_SensoryReference'] = { wcag :"1.3.3 (A)", title: "Instruktioner måste vara meningsfulla utan form eller platsord"}
    errors['RPT_Headers_FewWords'] = { wcag : "1.3.1 (A)", title: "Rubrikelement får inte användas för presentation"}
    errors['HAAC_Accesskey_NeedLabel'] = { wcag : "3.3.2 (A)", title: "Ett HTML-element med ett tilldelat \"accesskey\"-attribut måste ha en associerad etikett"}
    errors['HAAC_ActiveDescendantCheck'] = { wcag : "4.1.2 (A)", title: "Egenskapen 'aria-activedescendant' måste referera till 'id' för ett icke-tomt, icke-dolt aktivt underordnat element"}
    errors['HAAC_Application_Role_Text'] = { wcag : "4.1.2 (A)", title: "Icke-dekorativt statisk text- och bildinnehåll inom ett element med \"applikations\"-roll måste vara tillgängligt"}
    errors['HAAC_Aria_ErrorMessage'] = { wcag : "3.3.1 (A)", title: "Ett anpassat felmeddelande måste referera till ett giltigt \"id\"-värde och när det utlöses måste meddelandet exponeras på lämpligt sätt"}
    errors['HAAC_Aria_ImgAlt'] = { wcag : "1.1.1 (A)", title: "Ett element med rollen \"img\" måste ha en icke-tom etikett"}
    errors['HAAC_Aria_SvgAlt'] = { wcag : "1.1.1 (A)", title: "Ett element med en grafikroll måste ha en etikett som inte är tom"}
    errors['HAAC_Audio_Video_Trigger'] = { wcag : "2.1.1 (A)", title: "Media som använder <audio>- och/eller <video>-element måste ha tangentbordskontroller"}
    errors['HAAC_Canvas'] = { wcag : "1.1.1 (A), 2.1.1 (A), 2.4.7 (AA) och 4.1.2 (A)", title: "Elementet <canvas> kanske inte är tillgängligt"}
    errors['HAAC_Figure_label'] = { wcag : "1.1.1 (A)", title: "Ett <figur>-element måste ha en associerad etikett"}
    errors['HAAC_Img_UsemapAlt'] = { wcag : "1.1.1 (A)", title: "En bildkarta och varje <area>-element i en bildkarta måste ha textalternativ(er)"}
    errors['HAAC_Input_Placeholder'] = { wcag : "3.3.2 (A)", title: "HTML5 \"platshållare\"-attribut får inte användas som en synlig etikettersättning"}
    errors['HAAC_List_Group_ListItem'] = { wcag : "4.1.2 (A)", title: "Listkomponent med \"grupp\"-roll måste begränsa barn till <listitem>-element"}
    errors['HAAC_Media_DocumentTrigger2'] = { wcag : "2.1.2 (A)", title : "Mekanismer för nedladdning av filer bör vara tangentbordsstyrda och behålla sidans fokusposition"}
    errors['HAAC_Video_HasNoTrack'] = { wcag : "1.2.2 (A)", title: "Ett <video>-element måste ha ett textalternativ för allt meningsfullt ljudinnehåll"}
    errors['IBMA_Color_Contrast_WCAG2AA'] = { wcag : "1.4.3 (AA)", title: "Kontrastförhållandet mellan text och dess bakgrund måste uppfylla WCAG 2.1 AA-kraven"}
    errors['IBMA_Color_Contrast_WCAG2AA_PV'] = { wcag : "1.4.3 (AA)", title: "Kontrastförhållandet mellan text och dess bakgrund (d.v.s. bakgrund med en färggradient eller en bakgrundsbild) måste uppfylla WCAG 2.1 AA-kraven"}
    errors['IBMA_Focus_MultiTab'] = { wcag : "2.1.1 (A)", title: "Vissa komponenter får inte ha mer än ett flikbart element"}
    errors['IBMA_Focus_Tabbable'] = { wcag : "2.1.1 (A)", title: "Komponenten måste ha minst ett flikbart element"}
    errors['RPT_Blink_CSSTrigger1'] = { wcag : "2.2.2 (A)", title: "Använd inte \"blink\"-värdet för egenskapen \"text-decoration\" längre än fem sekunder"}
    errors['RPT_Block_ShouldBeHeading'] = { wcag : "1.3.1 (A)", title: "Rubriktext måste använda ett rubrikelement"}
    errors['RPT_Blockquote_HasCite'] = { wcag : "1.3.1 (A)", title: "Använd <blockquote> endast för citat, inte indrag"}
    errors['RPT_Elem_EventMouseAndKey'] = { wcag : "2.1.1 (A)", title: "Allt interaktivt innehåll med mushändelsehanterare måste ha motsvarande tangentbordsåtkomst"}
    errors['RPT_Elem_UniqueId'] = { wcag : "4.1.1 (A)", title: "Elementets \"id\"-attributvärden måste vara unika i ett dokument"}
    errors['RPT_Embed_AutoStart'] = { wcag : "1.4.2 (A)", title: "Mekanism måste finnas tillgänglig för att pausa eller stoppa och kontrollera volymen på ljudet som spelas upp automatiskt"}
    errors['RPT_Embed_HasAlt'] = { wcag : "1.1.1 (A)", title: "Tillhandahåll alternativt innehåll för <embed>-element"}
    errors['RPT_Font_ColorInForm'] = {wcag : "1.4.1 (A)", title: "Kombinera färg och beskrivande markering för att ange obligatoriska formulärfält"}
    errors['RPT_Form_ChangeEmpty'] = { wcag : "3.2.2 (A)", title: "Ett formulär ska inte skickas in automatiskt utan att varna användaren"}
    errors['RPT_Header_HasContent'] = { wcag : "2.4.6 (AA)", title: "Rubrikelement måste ge beskrivande text"}
    errors['RPT_Headers_FewWords'] = { wcag : "1.3.1 (A)", title: "Rubrikelement får inte användas för presentation"}
    errors['RPT_Html_SkipNav'] = { wcag : "2.4.1 (A)", title: "Ge ett sätt att kringgå innehållsblock som upprepas på flera webbsidor"}
    errors['RPT_Img_AltCommonMisuse'] = { wcag : "1.1.1 (A)", title: "'alt'-attributvärdet måste vara en bra inline-ersättning för bilden"}
    errors['RPT_Img_LongDescription2'] = { wcag : "1.1.1 (A)", title: "Attributet 'longdesc' måste referera till HTML-innehåll"}
    errors['RPT_Img_UsemapValid'] = { wcag : "1.1.1 (A)", title: "Hotspots för bildkarta på serversidan måste ha dubbletter av textlänkar"}
    errors['RPT_Label_UniqueFor'] = { wcag : "1.3.1 (A)", title: "Formulärkontroller bör ha exakt en etikett"}
    errors['RPT_List_Misuse'] = { wcag : "1.3.1 (A)", title: "Listelement bör endast användas för listor över relaterade objekt"}
    errors['RPT_List_UseMarkup'] = { wcag : "1.3.1 (A)", title: "Använd rätt HTML-listelement för att skapa listor"}
    errors['RPT_Marquee_Trigger'] = { wcag : "2.2.2 (A)", title: "Elementet <marquee> är föråldrat och bör inte användas"}
    errors['RPT_Media_AltBrief'] = { wcag : "1.1.1 (A)", title: "Alternativ text i \"alt\"-attributet ska vara kort (<150 tecken)"}
    errors['WCAG20_Input_ExplicitLabel'] = { wcag : "1.1.1 (A) och 4.1.2 (A)", title: "Varje formulärkontroll måste ha en tillhörande etikett"}
    errors['WCAG20_Img_HasAlt'] = { wcag : "1.1.1 (A)", title: "Bilder måste ha ett \"alt\"-attribut med ett kort textalternativ om de förmedlar mening, eller \"alt=\"\"\" om de är dekorativa"}
    errors['WCAG20_Html_HasLang'] = { wcag : "3.1.1 (A)", title: "Sidan måste identifiera dokumentets standardspråk med ett \"lang\"-attribut"}
    errors['WCAG20_A_HasText'] = { wcag : "2.4.4 (A)", title: "Hyperlänkar måste ha en textbeskrivning av deras syfte"}
    errors['Valerie_Table_DataCellRelationships'] = { wcag : "1.3.1 (A)", title: "För en komplex datatabell måste alla <th> och <td> element vara relaterade via \"header\" eller \"scope\" attribut"}
    errors['RPT_Table_DataHeadingsAria'] = { wcag: "1.3.1 (A)", title: "Datatabellen måste identifiera rubriker"}
    errors['WCAG20_Input_RadioChkInFieldSet'] = { wcag : "1.3.1 (A)", title: "Relaterade uppsättningar av alternativknappar eller kryssrutor ska grupperas programmatiskt"}
    /*https://github.com/IBMa/equal-access/tree/b0e8d1b14cc815292555b9d0df9ed10b7b2dd805/accessibility-checker-engine/src/v4/rules*/

    /*Qualweb*/
    errors['QW-ACT-R2'] = { wcag : "3.1.1 (A)", title: "Denna regel kontrollerar att en HTML-sida har ett icke-tomt lang-attribut"}
    errors['QW-ACT-R12'] = { wcag : "2.4.4 (A), 2.4.9 (AAA) och 4.1.2 (A)", title: "Denna regel kontrollerar att varje länk har ett icke-tomt tillgängligt namn"}
    errors['QW-ACT-R16'] = { wcag : "4.1.2 (A)", title: "Denna regel kontrollerar att varje formulärfältelement har ett icke-tomt tillgängligt namn"}
    errors['QW-ACT-R17'] = { wcag : "1.1.1 (A)", title: "Denna regel kontrollerar att varje bild antingen har ett icke-tomt tillgängligt namn eller är markerat som dekorativt"}
    errors['QW-ACT-R37'] = { wcag : "1.4.3 (AA) och 1.4.6 (AAA)", title: "Denna regel kontrollerar att högsta möjliga kontrast för varje texttecken med dess bakgrund uppfyller kravet på minimal kontrast"}
    errors['QW-ACT-R76'] = { wcag : "1.4.6 (AAA)", title: "Den här regeln kontrollerar att högsta möjliga kontrast för varje texttecken med dess bakgrund uppfyller kravet på förbättrad kontrast"}
    errors['QW-WCAG-T2'] = { wcag : "1.3.1 (A)", title: "Information, struktur, och relationer som förmedlas genom presentation måste vara automatiskt tydliggjord eller finnas som text"}
    errors['QW-WCAG-T12'] = { wcag : "1.3.1 (A)", title: "Information, struktur, och relationer som förmedlas genom presentation måste vara automatiskt tydliggjord eller finnas som text"}
    errors['QW-WCAG-T14'] = { wcag : "1.3.1 (A)", title: "Information, struktur, och relationer som förmedlas genom presentation måste vara automatiskt tydliggjord eller finnas som text"}
    errors['QW-WCAG-T18'] = { wcag : "1.3.1 (A)", title: "Information, struktur, och relationer som förmedlas genom presentation måste vara automatiskt tydliggjord eller finnas som text"}
    errors['QW-WCAG-T21'] = { wcag : "2.4.4 (A), 2.4.9 (AAA) och 4.1.2 (A)", title: "Detta feltillstånd uppstår när en länk endast innehåller icke-textinnehåll, till exempel en bild, och den länken inte kan identifieras med ett tillgängligt namn"}
    errors['QW-WCAG-T6'] = { wcag : "2.1.1 (A)", title: "Innehåll ska kunna navigeras med tangentbord"}
    errors['QW-WCAG-T24'] = { wcag : "2.1.1 (A), 2.4.7 (AA) och 3.2.1 (A)", title: "Fel att använda skript för att ta bort fokus när fokus tas emot"}
    errors['QW-WCAG-T31'] = { wcag : "1.4.3 (AA), 1.4.6 (AAA) och 1.4.8 (AAA)", title: "Fel att ange förgrundsfärger utan att ange bakgrundsfärger eller vice versa"}
    errors['QW-ACT-R39'] = { wcag : "1.3.1 (A)", title :"Den här regeln kontrollerar att varje tabellhuvud har tilldelade celler i ett tabellelement"}
    errors['QW-WCAG-T25'] = { wcag : "1.3.1 (A)", title: "Information, struktur, och relationer som förmedlas genom presentation måste vara automatiskt tydliggjord eller finnas som text"}
    errors['QW-WCAG-T28'] = { wcag : "1.4.4 (AA), 1.4.5 (AA) och 1.4.8 (AAA)", title : "Kontrollerar att värdet på CSS-egenskapen som definierar teckenstorleken är en procentsats"}
    errors['QW-WCAG-T27'] = { wcag : "1.4.8 (AAA)", title : "Fel på grund av användning av text som är justerad (justerad till både vänster och höger marginal)"}
    if(engine === "HTMLCS"){
        const dots = id.split('.');
        if(errors[dots[1] + "." + dots[2] + "." + dots[3]]){
            wcag = errors[dots[1] + "." + dots[2] + "." + dots[3]].wcag;
            title = errors[dots[1] + "." + dots[2] + "." + dots[3]].title;
        }
    }else if(engine === "axe"){
        if(errors[id]){
            wcag = errors[id].wcag;
            title = errors[id].title;
        }
    }else if(engine === "ibm"){
        if(errors[id]){
            wcag = errors[id].wcag;
            title = errors[id].title;
        }
    }else if(engine === "qualweb"){
        if(errors[id]){
            wcag = errors[id].wcag;
            title = errors[id].title;
        }
    }

    return (
    <div>
        <h3>{type}: {title ? title : id}</h3>
        {wcag ? <p class="error-concern">Framgångskriterier: {wcag}</p> : <div></div>}
    </div>)
}

export default Error