import { Selector } from 'testcafe';
const { userVariables, baseUrl } = require('./testcafe.config.js');

const username = userVariables.email;
const password = userVariables.password;

async function tryClickButton(t) {
    const odrzucButton = Selector('span').withText('Odrzuć wszystkie');
    
    // Wait for the button to appear
    await t.expect(odrzucButton.exists).ok('Button did not appear');
    
    // Click the button
    await t.click(odrzucButton);
}

async function login(t) {
    await t
        .typeText('#kambit-sign-in_emailOrLogin', username)
        .typeText('#kambit-sign-in_password', password)
        .pressKey('enter')
}

async function closePopup(t) {
    // await t.wait(6000).click(Selector('span').withText('Odrzuć wszystkie'))
    
    // await t.wait(8000);

    // const rejectButton = Selector('span').withText('Odrzuć wszystkie');

    // if (await rejectButton.exists) {
    //     await t.click(rejectButton);
    //     const yesButton = (Selector('span').withText('Tak'))
    //     if (await yesButton.exists) {
    //         await t.click(yesButton);
    //     }
    // }


    // if (await odrzucButton2.exists) {
    //     await t.click(odrzucButton2);
    // }
    
    
    // const popup = Selector('span').withText(/.*wykonania.*/);
    // await t.click(Selector('div').withText(/.*wykonania.*/).nth(5));
    // await t.click(Selector('*').withText('Odrzuć wszystkie'));
    // await t.click(Selector('.dx-icon.dx-icon-refresh'));
    // await t.click(Selector('.dx-icon.dx-icon-close'));
    // if (await popup.exists) {
    //     await t.click(popup.find('*').withText('Odrzuć wszystkie'));
    //     await t.click(popup.find('.dx-icon.dx-icon-refresh'));
    //     await t.click(popup.find('.dx-icon.dx-icon-close'));
    // }
}

fixture `all`
    .page(baseUrl)
    .httpAuth({
        username: username,
        password: password
    });

    
    test('dodawanie klienta', async t => {
        login(t);
        closePopup(t);
    
    await t
        .click('kambit-participant-main-data .dx-dropdowneditor-icon')

        .expect(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Osoba fizyczna').visible).ok()
        .click(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Osoba fizyczna'))
        
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(1), 'Michał')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(2), 'Stasiak')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(12), '85')
        
        .expect(Selector('div').withText('91-851 - Łódź - łódzkie - Łódź').nth(9).visible).ok()
        .click(Selector('div').withText('91-851 - Łódź - łódzkie - Łódź').nth(9))
        
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(16), 'Parkowa')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(17), '11')
        
        .expect(Selector('app-main-app div').withText('Zapisz').nth(5).visible).ok()
        .click(Selector('app-main-app div').withText('Zapisz').nth(5));
    });
    
    test('dodawanie istniejacego klienta', async t => {
        login(t);
        closePopup(t);

    await t
        .click('kambit-participant-main-data .dx-dropdowneditor-icon')
        
        .expect(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Osoba fizyczna').visible).ok()
        .click(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Osoba fizyczna'))
        
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(1), 'Michał')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(2), 'Stasiak')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(12), '85')
        
        .expect(Selector('div').withText('91-851 - Łódź - łódzkie - Łódź').nth(9).visible).ok()
        .click(Selector('div').withText('91-851 - Łódź - łódzkie - Łódź').nth(9))
        
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(16), 'Parkowa')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(17), '11')
        
        .expect(Selector('app-main-app div').withText('Zapisz').nth(5).visible).ok()
        .click(Selector('app-main-app div').withText('Zapisz').nth(5));
    });

    
    test('dodawanie klienta (instytucja)', async t => {
        login(t);
        closePopup(t);
    await t
        .click('kambit-participant-main-data .dx-dropdowneditor-icon')

        .expect(Selector('.dx-item.dx-list-item').find('div').withText('Instytucja').visible).ok()
        .click(Selector('.dx-item.dx-list-item').find('div').withText('Instytucja'))

        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(1), 'Instytucja test')
        .click(Selector('kambit-participant-main-data .dx-dropdowneditor-icon').nth(1))

        .expect(Selector('.dx-item.dx-list-item').nth(9).find('div').withText('Spółka komandytowa').visible).ok()
        .click(Selector('.dx-item.dx-list-item').nth(9).find('div').withText('Spółka komandytowa'))

        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(6), '7412589631')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(7), '741258963')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(8), '852963741')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(10), '52')

        .expect(Selector('.dx-item.dx-list-item').find('div').withText('91-526 - Łódź - łódzkie - Łódź').visible).ok()
        .click(Selector('.dx-item.dx-list-item').find('div').withText('91-526 - Łódź - łódzkie - Łódź'))

        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(14), 'Pabianicka')
        .click(Selector('kambit-participant-main-data label').withText('Numer domu'))
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(15), '12')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(16), '3')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(18), '654997123')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(20), 'jkmwa@o2.pl')
        .typeText('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]', 'Krótki opis')
        .typeText(Selector('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]').nth(1), 'Uwaga wstępna')

        .expect(Selector('app-main-app div').withText('Zapisz').nth(5).visible).ok()
        .click(Selector('app-main-app div').withText('Zapisz').nth(5));
    });

    test('dodawanie klienta (spolka)', async t => {
        login(t);
        closePopup(t);
    await t
        .click('kambit-participant-main-data .dx-dropdowneditor-icon')

        .expect(Selector('.dx-item.dx-list-item').nth(3).find('div').withText('Spółka').visible).ok()
        .click(Selector('.dx-item.dx-list-item').nth(3).find('div').withText('Spółka'))

        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(1), 'Spolka testowa')
        .click(Selector('kambit-participant-main-data .dx-dropdowneditor-icon').nth(1))

        .expect(Selector('.dx-item.dx-list-item').nth(6).find('div').withText('Spółka akcyjna').visible).ok()
        .click(Selector('.dx-item.dx-list-item').nth(6).find('div').withText('Spółka akcyjna'))

        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(6), '8521479630')
        .click(Selector('kambit-participant-main-data label').withText('REGON'))
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(7), '852741963')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(8), '123852753')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(10), '63')

        .expect(Selector('.dx-item.dx-list-item').find('div').withText('90-763 - Łódź - łódzkie - Łódź').visible).ok()
        .click(Selector('.dx-item.dx-list-item').find('div').withText('90-763 - Łódź - łódzkie - Łódź'))

        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(14), 'Obywatelska')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(15), '7')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(16), '5')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(18), '741258963')
        .click(Selector('kambit-participant-main-data div').withText('Opiekun').nth(2))
        .click(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(20))
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(20), 'tgb@r3.com')
        .typeText('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]', 'Opis spolki')
        .typeText(Selector('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]').nth(1), 'Uwagi spolki')

        .expect(Selector('app-main-app div').withText('Zapisz').nth(5).visible).ok()
        .click(Selector('app-main-app div').withText('Zapisz').nth(5));
    });

    
    test('dodawanie klienta (osoba prowadzaca)', async t => {
        login(t);
        closePopup(t);
        await t
            .click('kambit-participant-main-data .dx-dropdowneditor-icon')
            
            .expect(Selector('.dx-item.dx-list-item').find('div').withText('Osoba prowadząca działalność gospodarczą').visible).ok()
            .click(Selector('.dx-item.dx-list-item').find('div').withText('Osoba prowadząca działalność gospodarczą'))
            
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(1), 'Kajmar')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(2), 'Marcin')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(3), 'Boski')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(8), '85274196385')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(9), '852741753')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(10), '852741963')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(9), '0')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(11), '852741963')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(13), '84')
            
            .expect(Selector('.dx-item.dx-list-item').nth(4).find('div').withText('85-884 - Bydgoszcz - kujawsko-pomorskie - Bydgoszc').visible).ok()
            .click(Selector('.dx-item.dx-list-item').nth(4).find('div').withText('85-884 - Bydgoszcz - kujawsko-pomorskie - Bydgoszc'))
            
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(17), 'Warszawska')
            .click(Selector('kambit-participant-main-data label').withText('Numer domu'))
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(18), '8')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(19), '2')
            .click(Selector('kambit-participant-main-data div').withText('Telefon').nth(2))
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(21), '852741666')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(23), 'ghj@ew.pl')
            .typeText('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]', 'Opis')
            .typeText(Selector('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]').nth(1), 'Uwaga')
            .click(Selector('app-main-app span').withText('Zapisz'))
    });

    
    test('usuwanie klientow', async t => {
        login(t);
        closePopup(t);
        await t
            .click('app-main-app [alt="Kartoteki"]')
            .wait(2000)
            .click(Selector('app-main-app .dx-button-content').nth(8))
            .wait(2000)
            .click('[title="Usuń"] div div')
            .click(Selector('span').withText('Proszę wpisać'))
            .pressKey('t a k')
            .click(Selector('span').withText('Usuń'))
            .wait(2000)
            .click(Selector('app-main-app .dx-button-content').nth(8))
            .wait(2000)
            .click('[title="Usuń"] div div')
            .click(Selector('span').withText('Proszę wpisać'))
            .pressKey('t a k')
            .click(Selector('span').withText('Usuń'))
            .wait(2000)
            .click(Selector('app-main-app .dx-button-content').nth(8))
            .wait(2000)
            .click('[title="Usuń"] div div')
            .click(Selector('span').withText('Proszę wpisać'))
            .pressKey('t a k')
            .click(Selector('span').withText('Usuń'))
            .wait(2000)
            .click(Selector('app-main-app .dx-button-content').nth(8))
            .wait(2000)
            .click('[title="Usuń"] div div')
            .click(Selector('span').withText('Proszę wpisać'))
            .pressKey('t a k')
            .click(Selector('span').withText('Usuń'))
            .wait(2000);
    });
    
    test('pismo', async t => {
        login(t);
        closePopup(t);
    await t
        .click('kambit-participant-main-data .dx-button-content')

        // add person?
        .click(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Osoba fizyczna'))
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(1), 'Klaudia')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(2), 'Pawlikowska')
        .click(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(3))

        .click(Selector('.dx-item.dx-list-item').nth(5).find('div').withText('Osoba fizyczna'))
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(7), '02585951753')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(8), '8524569713')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(9), '632478896')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(10), '412236698')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(12), '65-')

        .click(Selector('.dx-item.dx-list-item').find('div').withText('65-911 - Zielona Góra - lubuskie - Zielona Góra'))
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(16), 'Pomorska')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(17), '4')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(18), '3')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(20), '741951753')
        .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(22), 'bvc@rt.pl')
        .typeText('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]', 'opis')
        .typeText(Selector('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]').nth(1), 'uwaga')
        .click(Selector('app-main-app div').withText('Zapisz').nth(5))

        // add case
        .click('app-main-app [alt="Sprawy"]')
        .click(Selector('app-main-app span').withText('Dodaj'))
        .click('kambit-case-edit-main-data .dx-texteditor-input.text-start')
        .click(Selector('.dx-item.dx-list-item').nth(5).find('div').withText('Podatkowa'))
        .click(Selector('kambit-case-edit-main-data [class^="dx-texteditor-input-container dx-tag-container dx-"]').nth(2))
        .click('kambit-case-edit-main-data .dx-icon.dx-icon-add')
        .typeText('#kambit-tab_name', 'Piotr')
        .typeText('#kambit-tab_surname', 'Stasiak')
        .typeText('#kambit-tab_email', 'xzs@tr.pl')
        .click('#kambit-tab_workPosition_DictID')
        .click(Selector('.dx-item.dx-list-item').nth(15).find('div').withText('Prawnik'))
        .click(Selector('#_btn-contact-person-edit-save span').withText('Zapisz'))

        .typeText(Selector('kambit-case-edit-main-data .dx-texteditor-input.text-start').nth(7), '10000', {
            caretPos: 1
        });

    // save case_number for later
    const case_number = await Selector('#kambit-case-edit-main-data_caseNumber').value;

    await t.click(Selector('kambit-case-edit-main-data span').withText('Wybierz klienta'))
        .typeText('#_name', 'Klaudia Pawlikowska')
        .click(Selector('div').withText('Filtruj').nth(13))

        .click(Selector('span').withText('Wybierz').nth(1))
        .typeText('kambit-case-edit-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]', 'opis sprawy')
        .typeText(Selector('kambit-case-edit-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]').nth(1), 'uwagi sprawy')
        .click(Selector('app-main-app span').withText('Zapisz'))

        // add task
        .click('app-main-app .img-task')
        .click('#kambit-customers-select-box_customer')
        .click(Selector('.dx-item.dx-list-item').find('div').withText('Klaudia Pawlikowska'))
        
        .click('#kambit-cases-select-box_case')
        .click(Selector('.dx-item.dx-list-item').find('div').withText(`Podatkowa ˙ ${case_number}`)) // tu numer nie musi byc 1
        .click('#kambit-tab_type')
        .click(Selector('.dx-item.dx-list-item').find('div').withText('Pismo'))
        .typeText('#kambit-tab_description', 'Pismo podatkowe')
        .click(Selector('span').withText('Pokaż na kalendarzu'))
        .click(Selector('#_btn-task-edit-save span').withText('Utwórz'))
        .click(Selector('#_btn-task-edit-save span').withText('Zapisz'));
});

// popup class
// '.dx-overlay-content dx-popup-normal dx-popup-draggable dx-resizable dx-popup-flex-height'


    test('usuwanie pismo', async t => {
        login(t);
        closePopup(t);
        await t
            .wait(6000)
            .click(Selector('span').withText('Odrzuć wszystkie'))
            // .click('app-main-app [alt="Zadania i czynności"]')
            // .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            // .click(Selector('app-main-app .dx-icon.dx-icon-clear').nth(1))
            // .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            // .click(Selector('app-main-app .dx-icon.dx-icon-menu').nth(1))
            // .wait(2000)
            // .click(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Usuń'))
            // .click(Selector('div').withText('Tak').nth(9))
            .click('app-main-app [alt="Sprawy"]')
            .wait(2000)
            .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            .click(Selector('app-main-app .dx-icon.dx-icon-clear').nth(1))
            .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            .click(Selector('.dx-datagrid-table').find('.dx-button-content').nth(0))
            .wait(2000)
            .click('[title="Usuń"] div div')
            .click(Selector('div').withText('Tak').nth(9))
            .click('app-main-app [alt="Kartoteki"]')
            .click(Selector('app-main-app .dx-button-content').nth(8))
            .wait(2000)
            .click(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Usuń'))
            .typeText('#_confirm-message', 'tak')
            .click(Selector('div').withText('Usuń').nth(21));
    });
    

    test('opinia', async t => {
        login(t);
        closePopup(t);
        await t
            .click('kambit-participant-main-data .dx-dropdowneditor-icon')
            .wait(2000)
            .click(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Osoba fizyczna'))
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(1), 'Natalia')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(2), 'Grab')
            .click(Selector('kambit-participant-main-data .dx-dropdowneditor-icon').nth(1))
            .wait(2000)
            .click(Selector('.dx-item.dx-list-item').nth(5).find('div').withText('Osoba fizyczna'))
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(7), '85214796301')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(8), '8524687410')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(9), '784236951')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(10), '159357846')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(12), '23-')
            .wait(2000)
            .click(Selector('.dx-item.dx-list-item').nth(15).find('div').withText('23-440 - Frampol - lubelskie - biłgorajski'))
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(16), 'Opolska')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(17), '7')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(18), '3')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(20), '874963124')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(22), 'bhy@ws.pl')
            .typeText('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]', 'opis do czynnosci dla klienta')
            .typeText(Selector('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]').nth(1), 'uwagi do czynnosci dla klienta')
            .click(Selector('app-main-app span').withText('Zapisz'))
            .wait(3000)
            .click('app-main-app [alt="Sprawy"]')
            .click(Selector('app-main-app div').withText('Dodaj').nth(7))
            .click('kambit-case-edit-main-data .dx-dropdowneditor-icon')
            .click(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Cywilna'))
            .click(Selector('kambit-case-edit-main-data .dx-button-content').nth(4))
            .click(Selector('div').withText('Imię*').nth(6))
            .typeText('#kambit-tab_name', 'Krzysztof')
            .pressKey('tab')
            .typeText('#kambit-tab_surname', 'Rojek')
            .typeText('#kambit-tab_email', 'krkpo@e3.pl')
            .click('#kambit-tab_workPosition_DictID')
            .click(Selector('.dx-item.dx-list-item').nth(8).find('div').withText('Asystent/ka'));
        const case_number = await Selector('#kambit-case-edit-main-data_caseNumber').value;
        await t
            .click(Selector('#_btn-contact-person-edit-save span').withText('Zapisz'))
            .wait(2000)
            .click(Selector('kambit-case-edit-main-data span').withText('Wybierz klienta'))
            // .click('#_name')
            // .click('#_nipPeselKrsRego')
            // .click('#_nipPeselKrsRego', {
            //     modifiers: {
            //         ctrl: true
            //     }
            // })
            .wait(2000)
            .typeText('#_name', 'Natalia Grab')
            .click(Selector('span').withText('Filtruj'))
            .wait(2000)
            
            .click(Selector('span').withText('Wybierz').nth(1))
            .click(Selector('kambit-case-edit-main-data div').withText('Opis').nth(2))
            .typeText('kambit-case-edit-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]', 'opis sprawy')
            .typeText(Selector('kambit-case-edit-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]').nth(1), 'uwagi sprawy')
            .click(Selector('kambit-case-edit-main-data .dx-texteditor-input.text-start').nth(7), {
                caretPos: 1
            })
            .pressKey('backspace')
            .typeText(Selector('kambit-case-edit-main-data .dx-texteditor-input.text-start').nth(7), '10000', {
                caretPos: 1
            })
            .click('kambit-case-edit-main-data .dx-icon.dx-icon-add')
            .click(Selector('.dx-button-content').nth(17))
            .click(Selector('app-main-app span').withText('Zapisz'))
            .wait(2000)
            .click('app-main-app .img-activity')
            .wait(2000)
            .click('#kambit-customers-select-box_customerId')
            .wait(2000)
            .click(Selector('.dx-item.dx-list-item').find('div').withText('Natalia Grab'))
            .click('#kambit-cases-select-box_caseId')
            .wait(2000)
            .click(Selector('.dx-item.dx-list-item').find('div').withText(`Cywilna ˙ ${case_number}`))
            .click('#_type_DictID')
            .wait(2000)
            .click(Selector('div').withText('Porada prawna').nth(9))
            .typeText('#_comment', 'Uwagi do porady')
            .click(Selector('.dx-checkbox-icon').nth(4))
            .click(Selector('#_btn-activity-edit-save span').withText('Zapisz'))
            .wait(3000);
    });
    
    test('usuwanie opinia', async t => { // nie tylko opinii ale tez sprawy i natalii
        login(t);
        closePopup(t);
        await t
            .click(Selector('app-main-app .img-activity').nth(1))
            .wait(2000)
            .click(Selector('app-main-app .dx-icon.dx-icon-menu').nth(1))
            .wait(2000)
            .click('[title="Usuń"] div div')
            .click(Selector('span').withText('Tak'))
            .click('app-main-app [alt="Sprawy"]')
            .click('app-main-app [alt="Kartoteki"]')
            .click(Selector('app-main-app .dx-icon.dx-icon-menu').nth(1))
            .wait(2000)
            .click('[title="Usuń"] div div')
            .typeText('#_confirm-message', 'tak')
            .wait(2000)
            .click(Selector('span').withText('Usuń'))
            .click('app-main-app [alt="Sprawy"]')
            .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            .click(Selector('app-main-app .dx-icon.dx-icon-clear').nth(1))
            .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            .click(Selector('app-main-app .dx-icon.dx-icon-menu').nth(1))
            .click(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Usuń'))
            .click(Selector('span').withText('Tak'));
    });
    
// .expect(Selector().visible).ok()

    test('przesyłka nierejestrowana krajowa', async t => {
        login(t);
        closePopup(t);
        await t
            .click('kambit-participant-main-data .dx-dropdowneditor-icon')

            .expect(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Osoba fizyczna').visible).ok()
            .click(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Osoba fizyczna'))

            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(1), 'Szymon')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(2), 'Piekarz')
            .click(Selector('kambit-participant-main-data .dx-dropdowneditor-icon').nth(1))

            .expect(Selector('.dx-item.dx-list-item').nth(5).find('div').withText('Osoba fizyczna').visible).ok()
            .click(Selector('.dx-item.dx-list-item').nth(5).find('div').withText('Osoba fizyczna'))
            
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(7), '74585741987')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(8), '478632412')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(9), '874296385')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(8), '1')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(10), '852741789')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(12), '45-')
            
            .expect(Selector('.dx-item.dx-list-item').find('div').withText('45-859 - Opole - opolskie - Opole').visible).ok()
            .click(Selector('.dx-item.dx-list-item').find('div').withText('45-859 - Opole - opolskie - Opole'))
            
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(16), 'Bydgoska')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(17), '6')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(18), '7')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(20), '852159753')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(22), 'bvc@ew.com')
            .typeText('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]', 'opis')
            .typeText(Selector('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]').nth(1), 'uwaga')
            .click(Selector('app-main-app div').withText('Zapisz').nth(5))
            .wait(3000)
            .click('app-main-app [alt="Sprawy"]')
            .click(Selector('app-main-app div').withText('Dodaj').nth(7))
            .click('kambit-case-edit-main-data .dx-dropdowneditor-icon')
            
            .expect(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Cywilna').visible).ok()
            .click(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Cywilna'))
            .click('kambit-case-edit-main-data .dx-icon.dx-icon-add')
            .typeText('#kambit-tab_name', 'Marcin')
            .typeText('#kambit-tab_surname', 'Bolanowski')
            .typeText('#kambit-tab_email', 'ert@tg.pl')
            .click('#kambit-tab_workPosition_DictID')
            
            .expect(Selector('.dx-item.dx-list-item').nth(9).find('div').withText('Członek zarządu').visible).ok()
            .click(Selector('.dx-item.dx-list-item').nth(9).find('div').withText('Członek zarządu'))
            .click(Selector('#_btn-contact-person-edit-save span').withText('Zapisz'))
            .wait(3000)
            .typeText(Selector('kambit-case-edit-main-data .dx-texteditor-input.text-start').nth(7), '20000', {
                caretPos: 1
            })
            .click(Selector('kambit-case-edit-main-data span').withText('Wybierz klienta'))
            .wait(2000)
            // typetext
            .typeText('#_name', 'Szymon Piekarz')
            .click(Selector('div').withText('Filtruj').nth(13))
            .wait(2000)
            .click(Selector('div').withText('Wybierz').nth(27))
            .typeText('kambit-case-edit-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]', 'opis sprawy')
            .typeText(Selector('kambit-case-edit-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]').nth(1), 'uwagi sprawy')
            .click(Selector('app-main-app div').withText('Zapisz').nth(5))
            .wait(3000)
            .click(Selector('app-main-app .dx-icon-add.btn-toolbar-add').nth(2))
            .click(Selector('.dx-dropdowneditor-icon').nth(6))
            
            .expect(Selector('.dx-item.dx-list-item').nth(10).find('div').withText('Przesyłka nierejestrowana krajowa').visible).ok()
            .click(Selector('.dx-item.dx-list-item').nth(10).find('div').withText('Przesyłka nierejestrowana krajowa'))
            .click('.dx-icon.dx-icon-find')
            .click(Selector('#_btn-cases-search-popup-filter div').withText('Filtruj'))
            .wait(2000)
            .click(Selector('span').withText('Wybierz'))
            .click('#kambit-participant-picker_correspondent')
            .click(Selector('.dx-icon.dx-icon-find').nth(2))
            .click(Selector('div').withText('Filtruj').nth(13))
            .wait(2000)
            .click(Selector('span').withText('Wybierz'))
            .typeText('#kambit-tab_correspondenceContent', 'jakas tresc')
            .typeText('#kambit-tab_correspondenceSenderName', 'nadawca testowy')
            .click(Selector('#_btn-correspondence-edit-save span').withText('Utwórz'))
            .wait(2000)
            .click(Selector('#_btn-correspondence-edit-save span').withText('Zapisz'))
            .wait(3000);
    });
    
    test('usuwanie przesylka nierejestrowana krajowa', async t => {
        login(t);
        closePopup(t);
        await t
            .click('app-main-app [alt="Finanse"]')
            .click(Selector('app-main-app .dx-icon.dx-icon-menu').nth(1))
            .wait(2000)
            .click(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Usuń'))
            .click(Selector('span').withText('Tak'))
            .click('app-main-app [alt="Kartoteki"]')
            // .click(Selector('app-main-app .dx-button-content').nth(8))
            .click(Selector('app-main-app .dx-icon.dx-icon-menu').nth(1))
            .wait(2000)
            .click(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Usuń'))
            .typeText('#_confirm-message', 'tak')
            .click(Selector('div').withText('Usuń').nth(21))
            .click('app-main-app [alt="Sprawy"]')
            .click('app-main-app [alt="Kartoteki"]')
            .click('app-main-app [alt="Sprawy"]')
            .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            .click(Selector('app-main-app .dx-icon.dx-icon-menu').nth(1))
            // .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            // .click(Selector('app-main-app .dx-button-content').nth(7))
            .wait(2000)
            .click(Selector('[title="Usuń"] div').withText('Usuń'))
            .click(Selector('span').withText('Tak'));
    });
    
    test('karna', async t => {
        login(t);
        closePopup(t);
        await t
            .click('kambit-participant-main-data .dx-dropdowneditor-icon')

            .expect(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Osoba fizyczna').visible).ok()
            .click(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Osoba fizyczna'))
            
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(1), 'Jan')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(2), 'Rutowicz')
            .click(Selector('kambit-participant-main-data .dx-dropdowneditor-icon').nth(1))
            
            .expect(Selector('.dx-item.dx-list-item').nth(5).find('div').withText('Osoba fizyczna').visible).ok()
            .click(Selector('.dx-item.dx-list-item').nth(5).find('div').withText('Osoba fizyczna'))
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(7), '85369741123')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(8), '8527417410')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(9), '753954789')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(10), '874632412')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(12), '85-')
            
            .expect(Selector('.dx-item.dx-list-item').find('div').withText('85-977 - Bydgoszcz - kujawsko-pomorskie - Bydgoszc').visible).ok()
            .click(Selector('.dx-item.dx-list-item').find('div').withText('85-977 - Bydgoszcz - kujawsko-pomorskie - Bydgoszc'))
            
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(16), 'Krakowska')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(17), '1')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(18), '12')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(20), '852741412')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(22), 'asdf@re.pl')
            .typeText('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]', 'opis')
            .typeText(Selector('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]').nth(1), 'uwaga')
            .click(Selector('app-main-app div').withText('Zapisz').nth(5))
            .wait(3000)
            .click('app-main-app [alt="Sprawy"]')
            .click(Selector('app-main-app div').withText('Dodaj').nth(7))
            .click('kambit-case-edit-main-data .dx-dropdowneditor-icon')
            .wait(2000)
            .click(Selector('.dx-item.dx-list-item').nth(2).find('div').withText('Karna'))
            .click('kambit-case-edit-main-data .dx-icon.dx-icon-add')
            .typeText('#kambit-tab_name', 'Jakub')
            .pressKey('tab')
            .typeText('#kambit-tab_surname', 'Laszczyk')
            .typeText('#kambit-tab_email', 'fght@ew.com')
            .click('#kambit-tab_workPosition_DictID')

            .expect(Selector('.dx-item.dx-list-item').nth(8).find('div').withText('Asystent/ka').visible).ok()
            .click(Selector('.dx-item.dx-list-item').nth(8).find('div').withText('Asystent/ka'))
            
            .wait(3000)
            .click(Selector('#_btn-contact-person-edit-save span').withText('Zapisz'))
            .wait(3000)
            .typeText(Selector('kambit-case-edit-main-data .dx-texteditor-input.text-start').nth(7), '10000', {
                caretPos: 1
            })
            .click(Selector('kambit-case-edit-main-data span').withText('Wybierz klienta'))
            .click('#_nipPeselKrsRego')
            .click(Selector('div').withText('Filtruj').nth(13))
            .click(Selector('span').withText('Wybierz').nth(1))
            .typeText('kambit-case-edit-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]', 'opis sprawy')
            .typeText(Selector('kambit-case-edit-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]').nth(1), 'uwaga sprawy')
            .click(Selector('app-main-app span').withText('Zapisz'))
            .wait(3000);
    });
    
    test('usuwanie karna', async t => {
        login(t);
        closePopup(t);
        await t
            .click('app-main-app [alt="Sprawy"]')
            .click('app-main-app [alt="Kartoteki"]')
            .wait(2000)
            .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            .click(Selector('#kambit-customers-index_btn-customers-index-clear'))
            .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            .click(Selector('app-main-app .dx-icon.dx-icon-menu').nth(1))
            .wait(2000)
            .click(Selector('.dx-item.dx-list-item').nth(1).find('.dx-item-content.dx-list-item-content'))
            .typeText('#_confirm-message', 'tak')
            .click(Selector('span').withText('Usuń'))

            .click('app-main-app [alt="Sprawy"]')
            .click('app-main-app [alt="Kartoteki"]')
            .click('app-main-app [alt="Sprawy"]')
            .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            .click(Selector('app-main-app .dx-icon.dx-icon-menu').nth(1))
            // .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            // .click(Selector('app-main-app .dx-button-content').nth(7))
            .expect(Selector('[title="Usuń"] div').withText('Usuń').visible).ok()
            .click(Selector('[title="Usuń"] div').withText('Usuń'))
            .click(Selector('span').withText('Tak'));
            // .click('app-main-app [alt="Sprawy"]')
            // .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            // .click(Selector('app-main-app .dx-icon.dx-icon-clear').nth(1))
            // .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            // .click(Selector('app-main-app .dx-button-content').nth(7))
            // .wait(2000)
            // .click(Selector('[title="Usuń"] div').withText('Usuń'))
            // .click(Selector('span').withText('Tak'));
    });
    
    
test('koszt', async t => {
        login(t);
        closePopup(t);
        await t
            .wait(2000)
            .click('kambit-participant-main-data .dx-dropdowneditor-icon')
            .expect(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Osoba fizyczna').visible).ok()
            .click(Selector('.dx-item.dx-list-item').nth(1).find('div').withText('Osoba fizyczna'))
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(1), 'Jan')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(2), 'Rutowicz')
            .click(Selector('kambit-participant-main-data .dx-dropdowneditor-icon').nth(1))
            .expect(Selector('.dx-item.dx-list-item').nth(5).find('div').withText('Osoba fizyczna').visible).ok()
            .click(Selector('.dx-item.dx-list-item').nth(5).find('div').withText('Osoba fizyczna'))
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(7), '85369741123')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(8), '8527417410')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(9), '753954789')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(10), '874632412')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(12), '85-')
            .wait(2000)
            .click(Selector('.dx-item.dx-list-item').find('div').withText('85-977 - Bydgoszcz - kujawsko-pomorskie - Bydgoszc'))
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(16), 'Krakowska')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(17), '1')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(18), '12')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(20), '852741412')
            .typeText(Selector('kambit-participant-main-data .dx-texteditor-input.text-start').nth(22), 'asdf@re.pl')
            .typeText('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]', 'opis')
            .typeText(Selector('kambit-participant-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]').nth(1), 'uwaga')
            .click(Selector('app-main-app div').withText('Zapisz').nth(5))
            .wait(1000)
            .click('app-main-app [alt="Sprawy"]')
            .click(Selector('app-main-app div').withText('Dodaj').nth(7))
            .click('kambit-case-edit-main-data .dx-dropdowneditor-icon')

            .expect(Selector('.dx-item.dx-list-item').nth(2).find('div').withText('Karna').visible).ok()
            .click(Selector('.dx-item.dx-list-item').nth(2).find('div').withText('Karna'))
            
            .click('kambit-case-edit-main-data .dx-icon.dx-icon-add')
            .typeText('#kambit-tab_name', 'Jakub')
            .typeText('#kambit-tab_surname', 'Laszczyk')
            .typeText('#kambit-tab_email', 'fght@ew.com')
            .click('#kambit-tab_workPosition_DictID')
            
            .expect(Selector('.dx-item.dx-list-item').nth(8).find('div').withText('Asystent/ka').visible).ok()
            .click(Selector('.dx-item.dx-list-item').nth(8).find('div').withText('Asystent/ka'))

            const case_number = await Selector('#kambit-case-edit-main-data_caseNumber').value;

            await t
            .click(Selector('#_btn-contact-person-edit-save span').withText('Zapisz'))
            .wait(3000)
            .typeText(Selector('kambit-case-edit-main-data .dx-texteditor-input.text-start').nth(7), '10000', {
                caretPos: 1
            })
            .click(Selector('kambit-case-edit-main-data span').withText('Wybierz klienta'))
            // .click('#_nipPeselKrsRego')
            .typeText('#_name', 'Jan Rutowicz')
            .click(Selector('div').withText('Filtruj').nth(13))
            .click(Selector('span').withText('Wybierz').nth(1))
            .typeText('kambit-case-edit-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]', 'opis sprawy')
            .pressKey('tab')
            .typeText(Selector('kambit-case-edit-main-data [class^="dx-texteditor-input dx-texteditor-input-auto-resiz"]').nth(1), 'uwaga sprawy')
            .click(Selector('app-main-app span').withText('Zapisz'))
            .wait(500)
            .click('app-main-app .img-income')
            .wait(1000)
            .click('#_customerId .dx-dropdowneditor-icon')
            .expect(Selector('.dx-item.dx-list-item').find('div').withText('Jan Rutowicz').visible).ok()
            .click(Selector('.dx-item.dx-list-item').find('div').withText('Jan Rutowicz'))
            
            .click('#kambit-cases-select-box_caseId')
            .expect(Selector('.dx-item.dx-list-item').find('div').withText(`Karna ˙ ${case_number}`).visible).ok()
            .click(Selector('.dx-item.dx-list-item').find('div').withText(`Karna ˙ ${case_number}`))
            
            .click('#_product')
            .wait(500)
            .click(Selector('.dx-list-item-content').nth(-1))
            
            .click('#_quantity', {
                caretPos: 2
            })
            .click('#_netValue')
            .pressKey('backspace')
            .pressKey('backspace')
            .typeText('#_netValue', '500', {
                caretPos: 1
            })
            .typeText('#_description', 'opis kosztu')
            .click(Selector('#_btn-position-save div').withText('Zapisz'))
            .wait(3000)
    });
    
    
    test('usuwanie koszt', async t => {
        login(t);
        closePopup(t);
        await t
            .click('app-main-app [alt="Sprawy"]')
            .click('app-main-app [alt="Kartoteki"]')
            .wait(2000)
            .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            .click(Selector('#kambit-customers-index_btn-customers-index-clear'))
            .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            .click(Selector('app-main-app .dx-button-content').nth(8))
            .wait(2000)
            .click('[title="Usuń"] div div')
            .click(Selector('span').withText('Proszę wpisać'))
            .pressKey('t a k')
            .click(Selector('span').withText('Usuń'))
            .click('app-main-app [alt="Sprawy"]')
            .click('app-main-app [alt="Kartoteki"]')
            .click('app-main-app [alt="Sprawy"]')
            .click(Selector('app-main-app div').withText('Filtruj').nth(7))
            .click(Selector('app-main-app .dx-icon.dx-icon-menu').nth(1))
            .expect(Selector('[title="Usuń"] div').withText('Usuń').visible).ok()
            .click(Selector('[title="Usuń"] div').withText('Usuń'))
            .click(Selector('span').withText('Tak'));
    });