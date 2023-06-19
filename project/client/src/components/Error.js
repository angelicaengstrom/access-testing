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
    errors['HAAC_Application_Role_Text'] = { wcag : "4.1.2 (A)", title: "Icke-dekorativt statisk text- och bildinnehåll inom ett element med \"application\"-roll måste vara tillgängligt"}
    errors['HAAC_Aria_ErrorMessage'] = { wcag : "3.3.1 (A)", title: "Ett anpassat felmeddelande måste referera till ett giltigt \"id\"-värde och när det utlöses måste meddelandet exponeras på lämpligt sätt"}
    errors['HAAC_Aria_ImgAlt'] = { wcag : "1.1.1 (A)", title: "Ett element med rollen \"img\" måste ha en icke-tom etikett"}
    errors['HAAC_Aria_SvgAlt'] = { wcag : "1.1.1 (A)", title: "Ett element med en grafikroll måste ha en etikett som inte är tom"}
    errors['HAAC_Audio_Video_Trigger'] = { wcag : "2.1.1 (A)", title: "Media som använder <audio>- och/eller <video>-element måste ha tangentbordskontroller"}
    errors['HAAC_Canvas'] = { wcag : "1.1.1 (A), 2.1.1 (A), 2.4.7 (AA) och 4.1.2 (A)", title: "Elementet <canvas> kanske inte är tillgängligt"}
    errors['HAAC_Figure_label'] = { wcag : "1.1.1 (A)", title: "Ett <figur>-element måste ha en associerad etikett"}
    errors['HAAC_Img_UsemapAlt'] = { wcag : "1.1.1 (A)", title: "En bildkarta och varje <area>-element i en bildkarta måste ha textalternativ(er)"}
    errors['HAAC_Input_Placeholder'] = { wcag : "3.3.2 (A)", title: "HTML5 \"placeholder\"-attribut får inte användas som en synlig etikettersättning"}
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
    errors['RPT_Media_AudioTrigger'] = { wcag : "1.2.1 (A)", title: "Ljudinformation bör också finnas tillgänglig i textform"};
    errors['RPT_Media_AudioVideoAltFilename'] = { wcag : "1.1.1 (A)", title: "Ljud eller video på sidan ska ha ett kort textalternativ som beskriver medieinnehållet"}
    errors['RPT_Media_VideoObjectTrigger'] = { wcag : "1.2.4 (AA)", title: "Livemedia (strömmande video med ljud) bör ha bildtexter för ljudinnehåll"}
    errors['RPT_Media_VideoReferenceTrigger'] = {wcag : "1.2.3 (A) och 1.2.5 (AA)", title: "Förinspelade media bör ha ett ljudspår som beskriver visuell information"}
    errors['RPT_Meta_Refresh'] = { wcag : "2.2.1 (A)", title: "Sidor bör inte uppdateras automatiskt"}
    errors['RPT_Pre_ASCIIArt'] = { wcag : "1.1.1 (A)", title: "ASCII art måste ha ett textalternativ"}
    errors['RPT_Script_OnclickHTML1'] = { wcag : "1.3.1 (A)", title: "Skript bör inte användas för att emulera länkar"}
    errors['RPT_Script_OnclickHTML2'] = { wcag : "1.3.1 (A)", title: "Skript bör inte användas för att emulera länkar"}
    errors['RPT_Style_BackgroundImage'] = { wcag : "1.1.1 (A)", title: "Bilder som ingår med enbart CSS får inte förmedla viktig information"}
    errors['RPT_Style_ColorSemantics1'] = { wcag : "1.4.1 (A)", title: "Kombinera färg och beskrivande markering för att förmedla information"}
    errors['RPT_Style_HinderFocus1'] = { wcag : "2.4.7 (AA)", title: "Tangentbordsfokusindikatorn måste vara väl synlig när standardkanten eller konturen ändras av CSS"}
    errors['RPT_Style_Trigger2'] = { wcag : "1.1.1 (A)", title: "Windows högkontrastläge måste stödjas när CSS används för att inkludera, placera eller ändra icke-dekorativt innehåll"}
    errors['RPT_Table_DataHeadingsAria'] = { wcag: "1.3.1 (A)", title: "Datatabellen måste identifiera rubriker"}
    errors['RPT_Table_LayoutTrigger'] = { wcag : "1.3.1 (A)", title: "Undvik att använda tabeller för att formatera textdokument i kolumner om inte tabellen kan linjäriseras"}
    errors['RPT_Text_SensoryReference'] = { wcag : "1.3.3 (A)", title: "Instruktioner måste vara meningsfulla utan form eller platsord"}
    errors['RPT_Title_Valid'] = { wcag : "2.4.2 (A)", title: "Sidan <titel> ska vara en beskrivande titel snarare än ett filnamn"}
    errors['Rpt_Aria_ApplicationLandmarkLabel'] = { wcag : "2.4.1 (A)", title: "Ett element med rollen \"application\" måste ha en etikett som beskriver dess syfte"}
    errors['Rpt_Aria_ComplementaryLandmarkLabel_Implicit'] = { wcag : "2.4.1 (A)", title: "Varje element med \"complementary\" roll bör ha en synlig etikett som beskriver dess syfte"}
    errors['Rpt_Aria_ComplementaryRequiredLabel_Implicit'] = { wcag :"2.4.1 (A)", title: "Ett element med rollen \"complementary\" måste ha en etikett"}
    errors['Rpt_Aria_ContentinfoWithNoMain_Implicit'] = { wcag : "2.4.1 (A)", title: "Ett element med rollen \"contentinfo\" är endast tillåtet med ett element med rollen \"huvud\"."}
    errors['Rpt_Aria_EmptyPropertyValue'] = { wcag : "4.1.2 (A)", title : "När du anger ett obligatoriskt ARIA-attribut får värdet inte vara tomt"}
    errors['Rpt_Aria_EventHandlerMissingRole_Native_Host_Sematics'] = { wcag : "4.1.2 (A)", title: "Element med händelsehanterare måste ha en giltig ARIA-roll"}
    errors['Rpt_Aria_InvalidTabindexForActivedescendant'] = { wcag : "2.1.1 (A)", title: "Element som använder egenskapen 'aria-activedescendant' måste ha attributvärdet 'tabindex' inställt på 0 eller -1 för att vara åtkomligt med tangentbord"}
    errors['Rpt_Aria_MissingFocusableChild'] = { wcag : "2.1.1 (A)", title: "Användargränssnittskomponenten måste ha minst ett fokuserbart underordnat element för tangentbordsåtkomst"}
    errors['Rpt_Aria_MissingKeyboardHandler'] = { wcag : "2.1.1 (A)", title: "Interaktiva WAI_ARIA UI-komponenter måste ge tangentbordsåtkomst"}
    errors['Rpt_Aria_MultipleApplicationLandmarks'] = { wcag : "2.4.1 (A)", title: "Varje element med rollen \"application\" måste ha en unik etikett som beskriver dess syfte"}
    errors['Rpt_Aria_MultipleArticleRoles_Implicit'] = { wcag : "2.4.1 (A)", title: "Varje element med rollen \"article\" måste ha en unik etikett som beskriver dess syfte"}
    errors['Rpt_Aria_MultipleBannerLandmarks_Implicit'] = { wcag : "2.4.1 (A)", title: "Varje element med rollen \"banner\" måste ha en unik etikett som beskriver dess syfte"}
    errors['Rpt_Aria_MultipleComplementaryLandmarks_Implicit'] = { wcag : "2.4.1 (A)", title: "Varje element med \"complementary\" roll måste ha en unik etikett som beskriver dess syfte"}
    errors['Rpt_Aria_MultipleContentinfoInSiblingSet_Implicit'] = { wcag : "2.4.1 (A)", title: "En sida, ett dokument eller en applikation bör bara ha ett element med rollen \"contentinfo\"."}
    errors['Rpt_Aria_MultipleContentinfoLandmarks_Implicit'] = { wcag : "2.4.1 (A)", title: "Varje element med rollen \"contentinfo\" måste ha en unik etikett som beskriver dess syfte"}
    errors['Rpt_Aria_MultipleDocumentRoles'] = { wcag : "2.4.1 (A)", title: "Alla element med rollen \"document\" måste ha unika etiketter"}
    errors['Rpt_Aria_MultipleFormLandmarks_Implicit'] = { wcag : "2.4.1 (A)", title: "Each element with \"form\" role must have a unique label that describes its purpose"}
    errors['Rpt_Aria_MultipleMainsRequireLabel_Implicit_2'] = {wcag:"2.4.1 (A)", title: "Element med rollen \"main\" måste ha unika etiketter"}
    errors['Rpt_Aria_MultipleMainsVisibleLabel_Implicit'] = { wcag : "2.4.1 (A)", title: "Varje element med rollen \"main\" bör ha en unik synlig etikett som beskriver dess syfte"}
    errors['Rpt_Aria_MultipleNavigationLandmarks_Implicit'] = { wcag : "2.4.1 (A)", title: "Varje element med rollen \"navigation\" måste ha en unik etikett som beskriver dess syfte"}
    errors['Rpt_Aria_MultipleRegionsUniqueLabel_Implicit'] = { wcag : "2.4.1 (A)", title :"Varje element med rollen \"region\" måste ha en unik etikett"}
    errors['Rpt_Aria_MultipleSearchLandmarks'] = { wcag : "2.4.1 (A)", title: "Varje element med rollen \"search\" måste ha en unik etikett som beskriver dess syfte"}
    errors['Rpt_Aria_MultipleToolbarUniqueLabel'] = { wcag : "4.1.2 (A)", title: "Alla verktygsfältskomponenter på en sida måste ha unika etiketter specificerade"}
    errors['Rpt_Aria_OneBannerInSiblingSet_Implicit'] = { wcag : "2.4.1 (A)", title: "Det får bara finnas ett element med rollen \"banner\" på sidan"}
    errors['Rpt_Aria_RegionLabel_Implicit'] = { wcag : "2.4.1 (A)", title: "Varje element med rollen \"region\" måste ha en etikett som beskriver dess syfte"}
    errors['Rpt_Aria_RequiredChildren_Native_Host_Sematics'] = { wcag : "4.1.2 (A)", title: "Ett element med en ARIA-roll måste innehålla obligatoriska underordnade"}
    errors['Rpt_Aria_RequiredParent_Native_Host_Sematics'] = { wcag : "4.1.2 (A)", title: "Ett element med en implicit eller explicit roll måste finnas i ett giltigt element"}
    errors['Rpt_Aria_RequiredProperties'] = { wcag : "4.1.2 (A)", title: "När du använder en ARIA-roll på ett element måste de nödvändiga attributen för den rollen definieras"}
    errors['Rpt_Aria_ValidIdRef'] = { wcag : "4.1.2 (A)", title: "ARIA-egenskapen måste referera till ett icke-tomt unikt ID för ett befintligt element som är synligt"}
    errors['Rpt_Aria_ValidProperty'] = { wcag : "4.1.2 (A)", title: "ARIA-attribut måste vara giltiga för elementets roll"}
    errors['Rpt_Aria_ValidPropertyValue'] = { wcag : "4.1.2 (A)", title: "ARIA-egendomsvärden måste vara giltiga"}
    errors['Rpt_Aria_ValidRole'] = { wcag : "4.1.2 (A)", title: "Element måste ha en giltig 'roll' enligt ARIA-specifikationen"}
    errors['Rpt_Aria_WidgetLabels_Implicit'] = { wcag :"4.1.2 (A)", title: "Interaktiv komponent måste ha ett programmatiskt associerat namn"}
    errors['Valerie_Caption_HasContent'] = { wcag : "1.3.1 (A)", title: "Ett <caption>-element för ett <table>-element måste innehålla beskrivande text"}
    errors['Valerie_Caption_InTable'] = { wcag : "1.3.1 (A)", title: "Elementet <caption> måste vara kapslat inuti det associerade <table>-elementet"}
    errors['Valerie_Elem_DirValid'] = { wcag : "1.3.2 (A)", title: "'dir'-attributvärdet måste vara \"ltr\", \"rtl\" eller \"auto\""}
    errors['Valerie_Frame_SrcHtml'] = { wcag : "2.4.1 (A)", title: "En <frame> som innehåller icke-HTML-innehåll måste göras tillgänglig"}
    errors['Valerie_Label_HasContent'] = { wcag : "4.1.2 (A)", title: "Ett <label>-element måste ha icke-tom beskrivande text som identifierar syftet med den interaktiva komponenten"}
    errors['Valerie_Noembed_HasContent'] = { wcag : "1.1.1 (A)", title: "<noembed>-element bör innehålla beskrivande text"}
    errors['WCAG20_A_TargetAndText'] = { wcag : "3.2.2 (A)", title: "Användare bör varnas i förväg om deras inmatningsåtgärd kommer att öppna ett nytt fönster eller på annat sätt ändra deras sammanhang"}
    errors['WCAG20_Applet_HasAlt'] = { wcag : "1.1.1 (A)", title: "<applet>-element måste tillhandahålla ett 'alt'-attribut och en alternativ beskrivning"}
    errors['WCAG20_Area_HasAlt'] = { wcag : "1.1.1 (A)", title: "<area>-element i en bildkarta måste ha ett textalternativ"}
    errors['WCAG20_Blink_AlwaysTrigger'] = { wcag : "2.2.2 (A)", title : "Innehåll som blinkar ihållande får inte användas"}
    errors['WCAG20_Body_FirstAContainsSkipText_Native_Host_Sematics'] = { wcag : "2.4.1 (A)", title : "Beskrivningen av en hyperlänk som används för att hoppa över innehåll måste kommunicera var den länkar till"}
    errors['WCAG20_Body_FirstASkips_Native_Host_Sematics'] = { wcag : "2.4.1 (A)", title: "Sidor måste tillhandahålla ett sätt att hoppa direkt till huvudinnehållet"}
    errors['WCAG20_Doc_HasTitle'] = { wcag : "2.4.2 (A)", title: "Sidan bör ha en titel som korrekt identifierar sidans ämne"}
    errors['WCAG20_Elem_Lang_Valid'] = { wcag : "3.1.2 (A)", title: "Språket för innehållet måste vara giltigt och specificerat i enlighet med BCP 47"}
    errors['WCAG20_Elem_UniqueAccessKey'] = { wcag : "4.1.1 (A)", title: "\"accesskey\"-attributvärden på varje element måste vara unika för sidan"}
    errors['WCAG20_Embed_HasNoEmbed'] = { wcag : "1.1.1 (A)", title: "<embed>-element ska omedelbart följas av ett icke-inbäddat element"}
    errors['WCAG20_Fieldset_HasLegend'] = { wcag : "1.3.1 (A)", title: "<fieldset>-element måste ha en enda, icke-tom <legend> som etikett"}
    errors['WCAG20_Form_HasSubmit'] = { wcag : "3.2.2 (A)", title: "Ett <form>-element bör ha en skicka-knapp eller en bildknapp"}
    errors['WCAG20_Form_TargetAndText'] = { wcag : "3.2.2 (A)", title: "Användaren bör informeras i förväg när interaktion med innehåll orsakar ett ändrat sammanhang"}
    errors['WCAG20_Frame_HasTitle'] = { wcag : "2.4.1 (A)", title: "Inline-ramar måste ha ett unikt, icke-tomt \"title\"-attribut"}
    errors['WCAG20_Img_LinkTextNotRedundant'] = { wcag : "1.1.1 (A)", title: "Textalternativet för en bild i en länk bör inte upprepa länktexten eller intilliggande länktext"}
    errors['WCAG20_Img_PresentationImgHasNonNullAlt'] = { wcag :"1.1.1 (A)", title: "Bild betecknad som dekorativ måste ha 'alt=\"\""}
    errors['WCAG20_Img_TitleEmptyWhenAltNull'] = { wcag : "1.1.1 (A)", title: "När attributet 'alt' för bild är tomt måste attributet 'title' också vara tomt"}
    errors['WCAG20_Input_ExplicitLabelImage'] = { wcag : "1.1.1 (A)", title :"Elementet <input> av typen \"image\" bör ha ett textalternativ"}
    errors['WCAG20_Input_HasOnchange'] = { wcag : "3.2.2 (A)", title: "Verifiera att alla förändringar av sammanhanget förklaras i förväg för användaren"}
    errors['WCAG20_Input_InFieldSet'] = { wcag : "1.3.1 (A)", title :"Grupper av logiskt relaterade inmatningselement bör finnas i ett <fieldset>-element"}
    errors['WCAG20_Input_LabelAfter'] = { wcag : "3.3.2 (A)", title: "Kryssrutor och alternativknappar måste ha en etikett efter ingångskontrollen"}
    errors['WCAG20_Input_LabelBefore'] = { wcag : "3.3.2 (A)", title: "Textinmatningar och <select>-element måste ha en etikett före inmatningskontrollen"}
    errors['WCAG20_Input_VisibleLabel'] = { wcag : "3.3.2 (A)", title: "Ett indataelement måste ha en associerad synlig etikett"}
    errors['WCAG20_Label_RefValid'] = { wcag : "1.3.1 (A)", title: "'for'-attributet måste referera till ett icke-tomt, unikt 'id'-attribut för ett <input>-element"}
    errors['WCAG20_Meta_RedirectZero'] = { wcag : "2.2.1 (A)", title: "Sidan bör inte uppdateras automatiskt utan förvarning eller möjlighet att stänga av den eller justera tidsgränsen"}
    errors['WCAG20_Object_HasText'] = { wcag : "1.1.1 (A)", title: "<object>-element måste ha ett textalternativ för innehållet som renderas av objektet"}
    errors['WCAG20_Script_FocusBlurs'] = { wcag : "2.4.7 (AA) och 3.2.1 (A)", title: "Skript får inte ta bort fokus från innehåll som normalt får fokus"}
    errors['WCAG20_Select_HasOptGroup'] = { wcag : "1.3.1 (A)", title: "Grupper av relaterade alternativ inom en urvalslista bör grupperas med <optgroup>"}
    errors['WCAG20_Select_NoChangeAction'] = { wcag : "3.2.1 (A)", title: "Inga förändringar av sammanhang bör ske när ett urvalsvärde får fokus"}
    errors['WCAG20_Style_BeforeAfter'] = { wcag : "1.3.1 (A)", title: "Använd inte CSS '::before' och '::after' pseudoelement för att infoga icke-dekorativt innehåll"}
    errors['WCAG20_Table_CapSummRedundant'] = { wcag : "1.3.1 (A)", title: "Tabellsammanfattningen får inte duplicera bildtexten"}
    errors['WCAG20_Table_Scope_Valid'] = { wcag : "1.3.1 (A)", title: "Värdet för attributet 'scope' måste vara \"row\", \"col\", \"rowgroup\" eller \"colgroup\""}
    errors['WCAG20_Table_Structure'] = { wcag : "1.3.1 (A)", title: "Tabellelement med 'role=\"presentation\" eller 'role=\"ingen\" bör inte ha strukturella element eller attribut"}
    errors['WCAG20_Text_LetterSpacing'] = { wcag : "1.3.2 (A)", title: "Använd CSS 'letter-spacing' för att styra avståndet inom ett ord"}
    errors['WCAG21_Input_Autocomplete'] = { wcag : "1.3.5 (AA)", title: "'autocomplete'-attributets token(s) måste vara lämpliga för inmatningsformulärfältet"}
    errors['WCAG21_Label_Accessible'] = { wcag : "2.5.3 (A)", title :"Tillgängligt namn måste matcha eller innehålla den synliga etiketttexten"}
    errors['WCAG21_Style_Viewport'] = { wcag : "1.4.4 (AA)", title : "Text måste skalas upp till 200 % utan förlust av innehåll eller funktionalitet"}
    errors['aria_hidden_focus_misuse'] = { wcag : "1.3.1 (A) och 4.1.2 (A)", title : "Ett fokuserbart element bör inte vara inom underträdet till ett element med 'aria-dold' inställd på \"true\""}
    errors['aria_semantics_role'] = { wcag : "4.1.2 (A)", title: "ARIA-roller måste vara giltiga för det element som de är tilldelade"}
    errors['combobox_active_descendant'] = { wcag : "4.1.2 (A)", title: "'aria-activedescendant' måste användas för att definiera fokus i kombinationsrutan popup, förutom när du använder en dialog popup"}
    errors['combobox_autocomplete'] = { wcag : "4.1.2 (A)", title: "En kombinationsruta som stöder autokomplettering måste ha attributet 'aria-autocomplete' endast på sitt textinmatningselement med ett giltigt värde; värdet '\"inline\"' stöds inte"}
    errors['combobox_focusable_elements'] = { wcag : "4.1.2 (A)", title: "Flikfokus för kombinationsrutan får endast tillåtas på textinmatningen, förutom när du använder en dialogruta"}
    errors['combobox_haspopup'] = { wcag : "4.1.2 (A)", title: "The combobox attribute 'aria-haspopup' value must be appropriate for the role of the element referenced by 'aria-controls' (ARIA 1.2) or 'aria-owns' (ARIA 1.0)"}
    errors['combobox_popup_reference'] = { wcag : "4.1.2 (A)", title: "Attributet 'aria-controls' (för ARIA 1.2) eller 'aria-owns' (för ARIA 1.0) i den utökade kombinationsrutan måste referera till ett giltigt popup-'id'-värde"}
    errors['combobox_version'] = { wcag : "4.1.2 (A)", title: "Combobox-designmönstret måste vara giltigt för ARIA 1.2"}
    errors['group_withInputs_hasName'] = { wcag : "1.3.1 (A) och 3.3.2 (A)", title: "Grupper med kapslade indata måste ha ett unikt tillgängligt namn"}
    errors['input_haspopup_invalid'] = { wcag : "4.1.2 (A)", title: "<input>-element med attributet 'list' bör inte också använda attributet 'aria-haspopup'"}
    errors['landmark_name_unique'] = { wcag : "1.3.1 (A)", title: "Flera landmärken ska ha en unik 'aria-labelledby' eller 'aria-label' eller vara kapslade i olika överordnade regioner"}
    errors['meta_viewport_zoom'] = { wcag : "1.4.4 (AA)", title: "'meta[name=viewport]' bör inte hindra webbläsaren från att zooma in innehållet"}
    errors['style_hover_persisten'] = { wcag : "1.4.13 (AA)", title: "Pekaren ska kunna flytta över innehåll som visas när du håller muspekaren"}
    errors['table_aria_descendants'] = { wcag : "4.1.2 (A)", title: "Tabellstrukturelement kan inte ange en explicit 'roll' i tabellbehållare"}
    errors['table_headers_ref_valid'] = { wcag : "1.3.1 (A)", title: "Attributet 'headers' bör referera till en giltig cell i samma tabell"}
    errors['WCAG20_Input_ExplicitLabel'] = { wcag : "1.1.1 (A) och 4.1.2 (A)", title: "Varje formulärkontroll måste ha en tillhörande etikett"}
    errors['WCAG20_Img_HasAlt'] = { wcag : "1.1.1 (A)", title: "Bilder måste ha ett \"alt\"-attribut med ett kort textalternativ om de förmedlar mening, eller \"alt=\"\"\" om de är dekorativa"}
    errors['WCAG20_Html_HasLang'] = { wcag : "3.1.1 (A)", title: "Sidan måste identifiera dokumentets standardspråk med ett \"lang\"-attribut"}
    errors['WCAG20_A_HasText'] = { wcag : "2.4.4 (A)", title: "Hyperlänkar måste ha en textbeskrivning av deras syfte"}
    errors['Valerie_Table_DataCellRelationships'] = { wcag : "1.3.1 (A)", title: "För en komplex datatabell måste alla <th> och <td> element vara relaterade via \"header\" eller \"scope\" attribut"}
    errors['WCAG20_Input_RadioChkInFieldSet'] = { wcag : "1.3.1 (A)", title: "Relaterade uppsättningar av alternativknappar eller kryssrutor ska grupperas programmatiskt"}
    errors['a_target_warning'] = { wcag : "3.2.2 (A)", title: "Användare bör varnas i förväg om deras inmatningsåtgärd kommer att öppna ett nytt fönster eller på annat sätt ändra deras sammanhang"}
    errors['a_text_purpose'] = { wcag : "2.4.4 (A)", title: "Hyperlänkar måste ha en textbeskrivning av deras syfte"}
    errors['text_contrast_sufficient'] = { wcag : "1.4.3 (AA)", title: "Kontrastförhållandet mellan text och dess bakgrund måste uppfylla WCAG 2.1 AA-kraven"}
    errors['input_label_exists'] = { wcag : "4.1.2 (A)", title: "Varje formulärkontroll måste ha en tillhörande etikett"}
    errors['img_alt_valid'] = { wcag : "1.1.1 (A)", title: "Bilder kräver ett 'alt'-attribut med ett kort textalternativ om de förmedlar mening, eller 'alt=\"\" om de är dekorativa"}
    errors['html_lang_exists'] = { wcag : "3.1.1 (A)", title: "Sidan måste identifiera dokumentets standardspråk med ett \"lang\"-attribut"}
    errors['element_id_unique'] = { wcag : "4.1.1 (A)", title: "Elementets 'id'-attributvärden måste vara unika i ett dokument"}
    errors['aria_parent_required'] = { wcag : "4.1.2 (A)", title: "Ett element med en implicit eller explicit roll måste finnas i ett giltigt element"}
    errors['aria_content_in_landmark'] = { wcag : "2.4.1 (A)", title: "Allt innehåll måste finnas inom ett element med en landmärkesroll"}
    errors['a_text_purpose'] = { wcag : "2.4.4 (A)", title: "Hyperlänkar måste ha en textbeskrivning av deras syfte"}
    errors['style_focus_visible'] = { wcag : "2.4.7 (AA)", title: "Tangentbordsfokusindikatorn måste vara väl synlig när standardkanten eller konturen ändras av CSS"}
    errors['style_color_misuse'] = { wcag : "1.4.1 (A)", title: "Kombinera färg och beskrivande markering för att förmedla information"}
    errors['style_before_after_review'] = { wcag : "1.3.1 (A)", title: "Använd inte CSS '::before' och '::after' pseudoelement för att infoga icke-dekorativt innehåll"}
    errors['style_background_decorative'] = { wcag : "1.1.1 (A)", title: "Bilder som ingår med enbart CSS får inte förmedla viktig information"}
    errors['input_label_visible'] = { wcag : "3.3.2 (A)", title: "Ett indataelement måste ha en associerad synlig etikett"}
    errors['html_skipnav_exists'] = { wcag : "2.4.1 (A)", title: "Ge ett sätt att kringgå innehållsblock som upprepas på flera webbsidor"}
    errors['frame_src_valid'] = { wcag : "2.4.1 (A)", title: "En <frame> som innehåller icke-HTML-innehåll måste göras tillgänglig"}
    errors['aria_attribute_valid'] = { wcag : "4.1.2 (A)", title: "ARIA-attribut måste vara giltiga för elementet och ARIA-rollen som de är tilldelade"}
    errors['label_ref_valid'] = { wcag : "1.3.1 (A)", title: "'for'-attributet måste referera till ett icke-tomt, unikt 'id'-attribut för ett <input>-element"}
    errors['widget_tabbable_exists'] = { wcag : "2.4.3 (A)", title: "Komponenten måste ha minst ett flikbart element"}
    errors['aria_eventhandler_role_valid'] = { wcag : "4.1.2 (A)", title: "Element med händelsehanterare måste ha en giltig ARIA-roll"}
    errors['text_block_heading'] = { wcag : "1.3.1 (A)", title: "Rubriktext måste använda ett rubrikelement"}
    errors['script_onclick_misuse'] = { wcag : "1.3.1 (A)", title: "Skript bör inte användas för att emulera länkar"}
    errors['list_markup_review'] = { wcag : "1.3.1 (A)", title: "Använd rätt HTML-listelement för att skapa listor"}
    errors['form_submit_button_exists'] = { wcag : "3.2.2 (A)", title: "Ett <form>-element bör ha en 'submit'-knapp eller en 'image'knapp"}
    errors['skip_main_exists'] = { wcag : "2.4.1 (A)", title: "Sidor måste tillhandahålla ett sätt att hoppa direkt till huvudinnehållet"}
    errors['skip_main_described'] = { wcag : "2.4.1 (A)", title: "Beskrivningen av en hyperlänk som används för att hoppa över innehåll måste kommunicera var den länkar till"}
    
    /*https://github.com/IBMa/equal-access/tree/b0e8d1b14cc815292555b9d0df9ed10b7b2dd805/accessibility-checker-engine/src/v4/rules*/
    //https://github.com/IBMa/equal-access/blob/master/accessibility-checker-engine/src/v4/rules/
    /*Qualweb*/
    errors['QW-ACT-R2'] = { wcag : "3.1.1 (A)", title: "Denna regel kontrollerar att en HTML-sida har ett icke-tomt lang-attribut"}
    errors['QW-ACT-R9'] = { wcag : "2.4.9 (AAA)", title: "Länkar med identiska tillgängliga namn har samma syfte"}
    errors['QW-ACT-R11'] = { wcag : "4.1.2 (A)", title: "Knappen har ett icke-tomt tillgängligt namn"}
    errors['QW-ACT-R12'] = { wcag : "2.4.4 (A), 2.4.9 (AAA) och 4.1.2 (A)", title: "Denna regel kontrollerar att varje länk har ett icke-tomt tillgängligt namn"}
    errors['QW-ACT-R14'] = { wcag : "1.4.4 (A)", title: "Meta viewport tillåter zoom"}
    errors['QW-ACT-R16'] = { wcag : "4.1.2 (A)", title: "Denna regel kontrollerar att varje formulärfältelement har ett icke-tomt tillgängligt namn"}
    errors['QW-ACT-R17'] = { wcag : "1.1.1 (A)", title: "Denna regel kontrollerar att varje bild antingen har ett icke-tomt tillgängligt namn eller är markerat som dekorativt"}
    errors['QW-ACT-R18'] = { wcag : "4.1.1 (A)", title: "Id-attributvärdet är unikt"}
    errors['QW-ACT-R25'] = { wcag : "-", title: "ARIA stat eller egendom är tillåten"}
    errors['QW-ACT-R33'] = { wcag :"1.3.1 (A)", title: "Den här regeln kontrollerar att ett element med en explicit semantisk roll finns i dess nödvändiga kontext"}
    errors['QW-ACT-R37'] = { wcag : "1.4.3 (AA) och 1.4.6 (AAA)", title: "Denna regel kontrollerar att högsta möjliga kontrast för varje texttecken med dess bakgrund uppfyller kravet på minimal kontrast"}
    errors['QW-ACT-R40'] = { wcag : "1.4.4 (AA)", title: "Den här regeln kontrollerar att textnoder inte oavsiktligt klipps av av spill när en sida zoomas till 200 % på 1280 x 1024 visningsport"}
    errors['QW-ACT-R41'] = { wcag : "3.3.1 (A)", title: "Denna regel kontrollerar att textfelmeddelanden som tillhandahålls när användaren fyller i ett formulärfält med ogiltiga värden eller använder ett ogiltigt format, identifierar orsaken till felet eller hur man åtgärdar felet"}
    errors['QW-ACT-R44'] = { wcag : "2.4.4 (A) och 2.4.9 (AAA)", title: "Denna regel kontrollerar att länkar med identiska tillgängliga namn i samma sammanhang löser sig till samma eller motsvarande resurser"}
    errors['QW-ACT-R62'] = { wcag : "2.4.7 (AA)", title: "Element i sekventiell fokusordning har synligt fokus"}
    errors['QW-ACT-R63'] = { wcag : "2.4.1 (A)" , title: "Dokumentet har ett landmärke med icke-upprepat innehåll"}
    errors['QW-ACT-R64'] = { wcag : "2.4.1 (A)", title: "Dokument har rubrik för icke-upprepat innehåll"}
    errors['QW-ACT-R72'] = { wcag : "2.4.1 (A)", title: "Det första fokuserbara elementet är länk till icke-upprepat innehåll"}
    errors['QW-ACT-R73'] = { wcag : "2.4.1 (A)", title: "Block med upprepat innehåll är hopfällbart"}
    errors['QW-ACT-R74'] = { wcag : "2.4.1 (A)", title :"Dokument har ett instrument för att flytta fokus till icke-upprepat innehåll"}
    errors['QW-ACT-R75'] = { wcag : "2.4.1 (A)", title: "Den här regeln kontrollerar att varje sida har en mekanism för att kringgå upprepade innehållsblock"}
    errors['QW-ACT-R76'] = { wcag : "1.4.6 (AAA)", title: "Den här regeln kontrollerar att högsta möjliga kontrast för varje texttecken med dess bakgrund uppfyller kravet på förbättrad kontrast"}
    errors['QW-WCAG-T2'] = { wcag : "1.3.1 (A)", title: "Information, struktur, och relationer som förmedlas genom presentation måste vara automatiskt tydliggjord eller finnas som text"}
    errors['QW-WCAG-T8'] = { wcag : "1.1.1 (A) och 1.2.1 (A)", title: "Misslyckande med framgångskriterium 1.1.1 och 1.2.1 på grund av användning av textalternativ som inte är alternativ (t.ex. filnamn eller platshållartext)"}
    errors['QW-WCAG-T9'] = { wcag : "1.3.1 (A) och 2.4.10 (AAA)", title: "Organisera en sida med hjälp av rubriker"}
    errors['QW-WCAG-T12'] = { wcag : "1.3.1 (A)", title: "Information, struktur, och relationer som förmedlas genom presentation måste vara automatiskt tydliggjord eller finnas som text"}
    errors['QW-WCAG-T14'] = { wcag : "1.3.1 (A)", title: "Information, struktur, och relationer som förmedlas genom presentation måste vara automatiskt tydliggjord eller finnas som text"}
    errors['QW-WCAG-T15'] = { wcag : "2.4.5 (AA) och 2.4.8 (AAA)", title: "Använda länkelementet och navigeringsverktyg"}
    errors['QW-WCAG-T18'] = { wcag : "1.3.1 (A)", title: "Information, struktur, och relationer som förmedlas genom presentation måste vara automatiskt tydliggjord eller finnas som text"}
    errors['QW-WCAG-T19'] = { wcag : "3.2.2 (A)", title: "Tillhandahåller 'submit' knappar"}
    errors['QW-WCAG-T21'] = { wcag : "2.4.4 (A), 2.4.9 (AAA) och 4.1.2 (A)", title: "Detta feltillstånd uppstår när en länk endast innehåller icke-textinnehåll, till exempel en bild, och den länken inte kan identifieras med ett tillgängligt namn"}
    errors['QW-WCAG-T23'] = { wcag : "2.4.1 (A)", title: "Lägga till en länk högst upp på varje sida som går direkt till huvudinnehållsområdet"}
    errors['QW-WCAG-T6'] = { wcag : "2.1.1 (A)", title: "Innehåll ska kunna navigeras med tangentbord"}
    errors['QW-WCAG-T24'] = { wcag : "2.1.1 (A), 2.4.7 (AA) och 3.2.1 (A)", title: "Fel att använda skript för att ta bort fokus när fokus tas emot"}
    errors['QW-WCAG-T29'] = { wcag : "1.4.8 (AAA)", title: "Ange justering antingen till vänster eller höger i CSS"}
    errors['QW-WCAG-T31'] = { wcag : "1.4.3 (AA), 1.4.6 (AAA) och 1.4.8 (AAA)", title: "Fel att ange förgrundsfärger utan att ange bakgrundsfärger eller vice versa"}
    errors['QW-WCAG-T32'] = { wcag : "1.3.1 (A)", title: "Använda ol, ul och dl för listor eller grupper av länkar"}
    errors['QW-ACT-R39'] = { wcag : "1.3.1 (A)", title :"Den här regeln kontrollerar att varje tabellhuvud har tilldelade celler i ett tabellelement"}
    errors['QW-WCAG-T25'] = { wcag : "1.3.1 (A)", title: "Information, struktur, och relationer som förmedlas genom presentation måste vara automatiskt tydliggjord eller finnas som text"}
    errors['QW-WCAG-T28'] = { wcag : "1.4.4 (AA), 1.4.5 (AA) och 1.4.8 (AAA)", title : "Kontrollerar att värdet på CSS-egenskapen som definierar teckenstorleken är en procentsats"}
    errors['QW-WCAG-T26'] = { wcag : "4.1.2 (A)", title: "Misslyckande av framgångskriterium 4.1.2 på grund av att man använder skript för att göra div eller span till en användargränssnittskontroll i HTML utan att tillhandahålla en roll för kontrollen"}
    errors['QW-WCAG-T27'] = { wcag : "1.4.8 (AAA)", title : "Fel på grund av användning av text som är justerad (justerad till både vänster och höger marginal)"}
    
    //https://github.com/qualweb/core

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