import type { InternalBuilding } from '../../../typings/Building';

type Extension = InternalBuilding['extensions'][0];

const multiplyExtension = (
    extension: Extension | ((index: number) => Extension),
    amount: number
): Extension[] =>
    typeof extension === 'function'
        ? new Array(amount).fill('0').map((_, index) => extension(index))
        : new Array(amount).fill(extension);

export default {
    0: {
        caption: 'Jednostka Ratowniczo-Gaśnicza',
        color: '#bb0000',
        coins: 30,
        credits: 100_000,
        extensions: [
            {
                caption: 'Rozbudowa dla pogotowia',
                credits: 100_000,
                coins: 20,
                duration: '7 Dni',
                isVehicleExtension: true,
                unlocksVehicleTypes: [5, 31],
            },
            {
                caption: 'Ratownictwo Wodne',
                credits: 100_000,
                coins: 20,
                duration: '7 Dni',
                isVehicleExtension: true,
                unlocksVehicleTypes: [19, 20, 21, 22, 23, 24, 26],
            },
            {
                caption: 'Rozbudowa dla pojazdów proszkowych',
                credits: 150_000,
                coins: 15,
                duration: '5 Dni',
                isVehicleExtension: true,
                unlocksVehicleTypes: [44, 55, 56, 57, 58, 59, 60],
            },
            {
                caption: 'Rozbudowa dla kontenerów',
                credits: 50_000,
                coins: 20,
                duration: '7 Dni',
                isVehicleExtension: true,
                unlocksVehicleTypes: [40, 41, 42, 42, 43, 44, 45, 46, 47, 64],
                givesParkingLots: 1,
                parkingLotReservations: [
                    [40, 41, 42, 42, 43, 44, 45, 46, 47, 64],
                ],
            },
            ...multiplyExtension(
                {
                    caption: 'Rozbudowa dla kontenerów',
                    credits: 80_000,
                    coins: 20,
                    duration: '7 Dni',
                    unlocksVehicleTypes: [
                        40, 41, 42, 42, 43, 44, 45, 46, 47, 64,
                    ],
                    givesParkingLots: 1,
                    parkingLotReservations: [
                        [40, 41, 42, 42, 43, 44, 45, 46, 47, 64],
                    ],
                },
                11
            ),
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
        maxBuildings: '6.000 włącznie z Remizami',
        maxLevel: 16,
        special:
            'Przy posiadaniu powyżej 24 budynków straży pożarnej koszt budowy wzrasta według wzoru:<code>100.000+200.000*LOG<sub>2</sub>(Liczba istniejących straży pożarnej â’ 22)</code>. Cena za Monety pozostaje bez zmian!',
        startPersonnel: 10,
        startVehicles: [
            'Ciężki samochód gaśniczy',
            'Średni samochód gaśniczy',
            'GBARt',
            'Lekki samochód gaśniczy',
            'GCBARt',
            'GLBARt',
        ],
        maxBuildingsFunction: (): number => 6000,
        startParkingLots: 1,
        schoolingTypes: ['Posterunek straży pożarnej'],
    },
    1: {
        caption: 'Szkoła pożarnicza',
        color: '#992222',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            index => ({
                caption: 'Dodatkowa sala',
                credits: 400_000,
                coins: 40,
                duration: '7 Dni',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: 'Bez limitu',
        maxLevel: 0,
        special:
            'Administratorzy Finansów sojuszu mogą rozbudować szkołę z finansów sojuszu. Administratorzy Edukacji mogą rozpoczynać szkolenia',
        startClassrooms: 1,
    },
    2: {
        caption: 'Stacja Pogotowia Ratunkowego',
        color: '#ffffcc',
        coins: 35,
        credits: 200_000,
        extensions: [],
        levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
        maxBuildings: 'Bez limitu',
        maxLevel: 16,
        special: '',
        startPersonnel: 3,
        startVehicles: ['Ambulans P'],
        startParkingLots: 1,
        schoolingTypes: ['Ratownictwo'],
    },
    3: {
        caption: 'Akademia Służb Ratownictwa Medycznego',
        color: '#225522',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            index => ({
                caption: 'Dodatkowa sala',
                credits: 400_000,
                coins: 40,
                duration: '7 Dni',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: 'Bez limitu',
        maxLevel: 0,
        special:
            'Administratorzy Finansów sojuszu mogą rozbudować szkołę z finansów sojuszu. Administratorzy Edukacji mogą rozpoczynać szkolenia',
        startClassrooms: 1,
    },
    4: {
        caption: 'Szpital',
        color: '#bbe944',
        coins: 25,
        credits: 200_000,
        extensions: [
            {
                caption: 'Interna',
                credits: 10_000,
                coins: 10,
                duration: '7 Dni',
                cannotDisable: true,
            },
            {
                caption: 'Chirurg ogólny',
                credits: 10_000,
                coins: 10,
                duration: '7 Dni',
                cannotDisable: true,
            },
            {
                caption: 'Ginekologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Dni',
                cannotDisable: true,
                requiredExtensions: [1],
            },
            {
                caption: 'Urologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Dni',
                cannotDisable: true,
                requiredExtensions: [1],
            },
            {
                caption: 'Traumatologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Dni',
                cannotDisable: true,
                requiredExtensions: [1],
            },
            {
                caption: 'Neurologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Dni',
                cannotDisable: true,
                requiredExtensions: [0],
            },
            {
                caption: 'Neurochirurgia',
                credits: 70_000,
                coins: 15,
                duration: '7 Dni',
                cannotDisable: true,
                requiredExtensions: [1],
            },
            {
                caption: 'Kardiologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Dni',
                cannotDisable: true,
                requiredExtensions: [0],
            },
            {
                caption: 'Kardiochirurgia',
                credits: 70_000,
                coins: 15,
                duration: '7 Dni',
                cannotDisable: true,
                requiredExtensions: [1],
            },
        ],
        levelcost: ['1.-20. 19.000 Kredytów / 11 Monet'],
        maxBuildings: 'Bez limitu',
        maxLevel: 20,
        special:
            'Administratorzy Finansów sojuszu mogą rozbudować szpital z finansów sojuszu.',
        startBeds: 10,
    },
    5: {
        caption: 'Stacja helikopterów',
        color: '#FFFFCC',
        coins: 50,
        credits: 1_000_000,
        extensions: [],
        levelcost: [],
        maxBuildings: 'Zobacz specjalne',
        maxLevel: 0,
        special:
            'Do 125 budynku (wszystkich typów) łącznie można zbudować max 4 lądowiska. Następnie liczba wzrasta o 1 co 25 budynków (począwszy od 125.).',
        startPersonnel: 0,
        startVehicles: [],
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
        startParkingLots: 1,
        schoolingTypes: ['Ratownictwo'],
    },
    6: {
        caption: 'Komenda Policji',
        color: '#93B7FF',
        coins: 35,
        credits: 100_000,
        extensions: [
            {
                caption: 'Cela więzienna',
                credits: 25_000,
                coins: 5,
                duration: '7 Dni',
                newCells: 1,
                cannotDisable: true,
            },
            multiplyExtension(
                index => ({
                    caption: 'Dodatkowa cela',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dni',
                    newClassrooms: 1,
                    requiredExtensions: index ? [index - 1] : [],
                    cannotDisable: true,
                }),
                9
            ),
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
        maxBuildings: '1.700 włącznie z Posterunkami Policji',
        maxLevel: 16,
        special:
            'Przy posiadaniu powyżej 24 budynków policji koszt budowy wzrasta według wzoru:<code>100.000+200.000*LOG<sub>2</sub>(Liczba istniejących budynków policji â’ 22)</code>. Cena za Monety pozostaje bez zmian!',
        startPersonnel: 2,
        startVehicles: ['Radiowóz OPI'],
        maxBuildingsFunction: (): number => 1700,
        startParkingLots: 1,
        startCells: 0,
        schoolingTypes: ['Policja'],
    },
    7: {
        caption: 'Centrum Powiadamiania Ratunkowego',
        color: '#24c3ae',
        coins: 0,
        credits: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: 'Maksymalnie 1 na 25 pozostałych zbudowanych budynków',
        maxLevel: 0,
        special:
            'CPR służy m.in. do dzielenia budynków na różne obszary np. powiat.',
        isDispatchCenter: true,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            Math.floor(buildingsAmountTotal / 25) + 1,
    },
    8: {
        caption: 'Akademia Policyjna',
        color: '#225522',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            index => ({
                caption: 'Dodatkowa sala',
                credits: 400_000,
                coins: 40,
                duration: '7 Dni',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: 'Bez limitu',
        maxLevel: 0,
        special:
            'Administratorzy Finansów sojuszu mogą rozbudować szkołę z finansów sojuszu. Administratorzy Edukacji mogą rozpoczynać szkolenia',
        startClassrooms: 1,
    },
    11: {
        caption: 'Poligon Oddziału Prewencji Policji',
        color: '#93B7FF',
        coins: 50,
        credits: -1,
        extensions: [
            {
                caption: 'Rozbudowa o policyjne więźniarki',
                credits: 50_000,
                coins: 15,
                duration: '5 Dni',
            },
            {
                caption: 'Rozbudowa o stanowisko dowodzenia',
                credits: -1,
                coins: 25,
                duration: '7 Dni',
            },
        ],
        levelcost: ['1. 10.000', '2. 25.000', '3.-35. 100.000'],
        maxBuildings: 'no limit',
        maxLevel: 35,
        startPersonnel: 15,
        startVehicles: [],
        startParkingLots: 5,
        schoolingTypes: ['Policja'],
    },
    13: {
        caption: 'Stacja Helikopterów Policji',
        color: '#148423',
        coins: 50,
        credits: 1_000_000,
        extensions: [],
        levelcost: ['1. 1.000.000 Kredytów / 50 Monet'],
        maxBuildings: 'see specials',
        maxLevel: 1,
        special:
            'Na stacji można zbudować do 2 lądowisk (w wyniku rozbudowy). Do 125 budynku (wszystkich typów) łącznie można zbudować max 4 lądowiska. Następnie liczba wzrasta o 1 co 25 budynków (począwszy od 125.).',
        startPersonnel: 3,
        startVehicles: [],
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
        startParkingLots: 1,
        schoolingTypes: ['Policja'],
    },
    14: {
        caption: 'Miejsce koncentracji Sił i Środków',
        color: '#c259b5',
        coins: 0,
        credits: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: 1,
        maxLevel: 0,
        special:
            'Możesz ustawić dowolną liczbę własnych pojazdów w strefie postojowej, także członkowie sojuszu mogą z niego skorzystać. Budynek stoi przez 24 godziny, ale możesz przedłużyć czas o 24 godzin w dowolnym momencie.',
        isStagingArea: true,
        maxBuildingsFunction: (): number => 1,
    },
    15: {
        caption: 'Stacja WOPR',
        color: '#F9D74A',
        coins: 35,
        credits: 150_000,
        extensions: [],
        levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
        maxBuildings: 'Bez limitu',
        maxLevel: 5,
        special:
            'Żeby stacja poprawnie funkcjonowała potrzebujemy do każdej łodzi pojazd, który posłuży jako laweta do holowania łodzi.',
        startPersonnel: 10,
        startVehicles: ['S.WOPR'],
        startParkingLots: 1,
        schoolingTypes: ['Ratownictwo'],
    },
    16: {
        caption: 'Prison',
        color: '#00ff00',
        coins: -1,
        credits: 100_000,
        extensions: [
            {
                caption: 'Prison cell',
                credits: 25_000,
                coins: 5,
                duration: '7 Dni',
                newCells: 1,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Additional cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dni',
                    newCells: 1,
                    cannotDisable: true,
                },
                9
            ),
        ],
        levelcost: [],
        maxBuildings: 'Bez limitu',
        maxLevel: 0,
        special:
            "This building can only be built and developed by admins and finance ministers with credits from the association's treasury.The built Prison Cells are available to all members of the association.",
        startCells: 1,
    },
    18: {
        caption: 'Remiza',
        color: '#990000',
        coins: 25,
        credits: 50_000,
        extensions: [
            {
                caption: 'Rozbudowa dla pogotowia',
                credits: 100_000,
                coins: 20,
                duration: '7 Dni',
                isVehicleExtension: true,
                unlocksVehicleTypes: [5, 31],
            },
            {
                caption: 'Ratownictwo Wodne',
                credits: 100_000,
                coins: 20,
                duration: '7 Dni',
                isVehicleExtension: true,
                unlocksVehicleTypes: [19, 20, 21, 22, 23, 24, 26],
            },
            {
                caption: 'Rozbudowa dla pojazdów proszkowych',
                credits: 150_000,
                coins: 15,
                duration: '5 Dni',
                isVehicleExtension: true,
                unlocksVehicleTypes: [44, 55, 56, 57, 58, 59, 60],
            },
            {
                caption: 'Rozbudowa dla kontenerów',
                credits: 50_000,
                coins: 20,
                duration: '7 Dni',
                isVehicleExtension: true,
                unlocksVehicleTypes: [40, 41, 42, 42, 43, 44, 45, 46, 47, 64],
                givesParkingLots: 1,
                parkingLotReservations: [
                    [40, 41, 42, 42, 43, 44, 45, 46, 47, 64],
                ],
            },
            {
                caption: 'Rozbudowa dla kontenerów',
                credits: 80_000,
                coins: 20,
                duration: '7 Dni',
                isVehicleExtension: true,
                unlocksVehicleTypes: [40, 41, 42, 42, 43, 44, 45, 46, 47, 64],
                givesParkingLots: 1,
                parkingLotReservations: [
                    [40, 41, 42, 42, 43, 44, 45, 46, 47, 64],
                ],
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-5. 100.000',
            'Ulepszenie do JRG wynosi różnicę w cenie budynków',
        ],
        maxBuildings: '6.000 włącznie z JRG',
        maxLevel: 5,
        special:
            'Przy posiadaniu powyżej 24 budynków straży pożarnej koszt budowy wzrasta według wzoru:<code>50.000+100.000*LOG<sub>2</sub>(Liczba istniejących straży pożarnej â’ 22)</code>, max 1 milion kredytów. Cena za Monety pozostaje bez zmian!',
        startPersonnel: 10,
        startVehicles: [
            'Ciężki samochód gaśniczy',
            'Średni samochód gaśniczy',
            'GBARt',
            'Lekki samochód gaśniczy',
            'GCBARt',
            'GLBARt',
        ],
        maxBuildingsFunction: (): number => 6000,
        startParkingLots: 1,
        schoolingTypes: ['Posterunek straży pożarnej'],
    },
    19: {
        caption: 'Posterunek Policji',
        color: '#93B7FF',
        coins: 25,
        credits: 50_000,
        extensions: [
            {
                caption: 'Cela więzienna',
                credits: 25_000,
                coins: 5,
                duration: '7 Dni',
                newCells: 1,
                cannotDisable: true,
            },
            {
                caption: 'Dodatkowa cela',
                credits: 25_000,
                coins: 5,
                duration: '7 Dni',
                newCells: 1,
                cannotDisable: true,
                requiredExtensions: [0],
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-4. 100.000',
            'Cena przebudowy na Komendę Policji wynosi różnicę w cenach budynków ',
        ],
        maxBuildings: '1.700 włącznie z Komendami Policji',
        maxLevel: 4,
        special:
            'Przy posiadaniu powyżej 24 budynków policji koszt budowy wzrasta według wzoru:<code>50.000+100.000*LOG<sub>2</sub>(Liczba istniejących budynków policji â’ 22)</code>. Cena za Monety pozostaje bez zmian!',
        startPersonnel: 2,
        startVehicles: ['Radiowóz OPI'],
        maxBuildingsFunction: (): number => 1700,
        startParkingLots: 1,
        startCells: 0,
        schoolingTypes: ['Policja'],
    },
    20: {
        caption: 'Podstacja Pogotowia Ratunkowego',
        color: '#FFFFCC',
        coins: 25,
        credits: 100_000,
        extensions: [],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-5. 100.000',
            'Cena przebudowy na Stację Pogotowania Ratunkowego wynosi różnicę w cenach budynków ',
        ],
        maxBuildings: 'Bez limitu',
        maxLevel: 5,
        special: '',
        startPersonnel: 3,
        startVehicles: ['Ambulans P'],
        startParkingLots: 1,
        schoolingTypes: ['Ratownictwo'],
    },
    21: {
        caption: 'Duży kompleks',
        color: '#8B4513',
        coins: -1,
        credits: -1,
        extensions: [],
        levelcost: ['Zbyt drogie'],
        maxBuildings: 'Nie kupuj',
        maxLevel: 5,
        special: 'ZA DROGI, NIE KUPUJ GO, NIE ROZBUDOWUJ GO, NIE OPŁACA SIĘ',
        startPersonnel: 0,
        startVehicles: [''],
        startParkingLots: 0,
        schoolingTypes: [],
    },
    22: {
        caption: 'Mały kompleks',
        color: '#8B4513',
        coins: -1,
        credits: -1,
        extensions: [],
        levelcost: ['Zbyt drogie'],
        maxBuildings: 'Keine Grenze',
        maxLevel: 5,
        special: 'ZA DROGI, NIE KUPUJ GO, NIE ROZBUDOWUJ GO, NIE OPŁACA SIĘ',
        startPersonnel: 0,
        startVehicles: [''],
        startParkingLots: 0,
        schoolingTypes: [],
    },
    23: {
        caption: 'Poligon Oddziału Prewencji Policji',
        color: '#93B7FF',
        coins: 25,
        credits: -1,
        extensions: [],
        levelcost: ['1. 10.000', '2. 25.000', '3.-7. 100.000'],
        maxBuildings: 'no limit',
        maxLevel: 7,
        startPersonnel: 6,
        startVehicles: ['Samochód SM'],
        startParkingLots: 1,
        schoolingTypes: ['Policja'],
    },
} as Record<number, InternalBuilding>;
