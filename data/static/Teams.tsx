import Team from "./Team";
import League from "./League";
import {Allsvenskan, ChampionsLeague, LaLiga, LigatHaal, PremierLeague} from "./Leagues";
import {FootballPrimerLeague} from "@/data/navbar/navigationGroups/navigationFootballGroups";

// https://www.stickpng.com/img/icons-logos-emojis/football/spanish-football-clubs-logos/rcd-mallorca-logo
export const Alaves: Team = Team.create("football.alaves", LaLiga, "football.mendizorrotza", 'https://assets.stickpng.com/images/584ad125b519ea740933a895.png');
export const AthleticBilbao: Team = Team.create("football.athleticbilbao", [LaLiga, ChampionsLeague], "football.sanmames", 'https://assets.stickpng.com/images/584ad135b519ea740933a896.png');
export const AtleticoMadrid: Team = Team.create("football.atleticomadrid", [LaLiga, ChampionsLeague], "football.metropolitano", 'https://assets.stickpng.com/images/584a9b63b080d7616d29877a.png');
export const Barcelona: Team = Team.create("football.barcelona", [LaLiga, ChampionsLeague], "football.campnou", 'https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png');
export const CeltaVigo: Team = Team.create("football.celtavigo", LaLiga, "football.balaidos", 'https://assets.stickpng.com/images/584ad3c4b519ea740933a8df.png');
export const Elche: Team = Team.create("football.elche", LaLiga, "football.martinezvalero", 'https://assets.stickpng.com/images/584ad4e5b519ea740933a901.png');
export const Espanyol: Team = Team.create("football.espanyol", LaLiga, "football.rcdestadium", 'https://assets.stickpng.com/images/584ad3b5b519ea740933a8dd.png');
export const Getafe: Team = Team.create("football.getafe", LaLiga, "football.coliseum", 'https://assets.stickpng.com/images/584ad4b1b519ea740933a8fc.png');
export const Girona: Team = Team.create("football.girona", LaLiga, "football.montilivi", 'https://assets.stickpng.com/images/584ad4b8b519ea740933a8fd.png');
export const Levante: Team = Team.create("football.levante", LaLiga, "football.ciutatvalencia");
export const Mallorca: Team = Team.create("football.mallorca", LaLiga, "football.mallorcasonmoix", 'https://assets.stickpng.com/images/584ad3aeb519ea740933a8dc.png');
export const Osasuna: Team = Team.create("football.osasuna", LaLiga, "football.elsadar", 'https://assets.stickpng.com/images/584ad403b519ea740933a8e7.png');
export const RayoVallecano: Team = Team.create("football.rayovallecano", LaLiga, "football.vallecas");
export const RealBetis: Team = Team.create("football.realbetis", LaLiga, "football.lacartuja", 'https://assets.stickpng.com/images/584ad396b519ea740933a8d9.png');
export const RealMadrid: Team = Team.create("football.realmadrid", [LaLiga, ChampionsLeague], "football.santiagobernabeu", 'https://assets.stickpng.com/images/584a9b47b080d7616d298778.png');
export const RealOviedo = Team.create("football.realoviedo", LaLiga, "football.carlostartiere", 'https://assets.stickpng.com/images/584ad377b519ea740933a8d5.png');
export const RealSociedad: Team = Team.create("football.realsociedad", LaLiga, "football.anoeta", 'https://assets.stickpng.com/images/584ad36ab519ea740933a8d3.png');
export const Sevilla: Team = Team.create("football.sevilla", LaLiga, "football.ramonsanchezpizjuan", 'https://assets.stickpng.com/images/584ad291b519ea740933a8ba.png');
export const Valencia: Team = Team.create("football.valencia", LaLiga, "football.mestalla", 'https://assets.stickpng.com/images/584ad186b519ea740933a89e.png');
export const Villarreal: Team = Team.create("football.villarreal", [LaLiga, ChampionsLeague], "football.estadiodelaceramica", 'https://assets.stickpng.com/images/584a9b57b080d7616d298779.png');

export const LaLigaTeams_25_26: Team[] = [
    Alaves,
    AthleticBilbao,
    AtleticoMadrid,
    Barcelona,
    CeltaVigo,
    Elche,
    Espanyol,
    Getafe,
    Girona,
    Levante,
    Mallorca,
    Osasuna,
    RayoVallecano,
    RealBetis,
    RealMadrid,
    RealOviedo,
    RealSociedad,
    Sevilla,
    Valencia,
    Villarreal
];
// -----------------------------------------------------------------------------------------------------------------
export const Arsenal: Team = Team.create("football.arsenal", [PremierLeague, ChampionsLeague], "football.emirates", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4df.png');
export const AstonVilla: Team = Team.create("football.astonvilla", [PremierLeague], "football.villapark", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e4.png');
export const Bournemouth: Team = Team.create("football.bournemouth", [PremierLeague], "football.vitality", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4de.png');
export const Brentford: Team = Team.create("football.brentford", [PremierLeague], "football.gtech");
export const Brighton: Team = Team.create("football.brighton", [PremierLeague], "football.amex");
export const Burnley: Team = Team.create("football.burnley", [PremierLeague], "football.turfmoor");
export const Chelsea: Team = Team.create("football.chelsea", [PremierLeague, ChampionsLeague], "football.stamfordbridge", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e1.png');
export const CrystalPalace: Team = Team.create("football.crystalpalace", [PremierLeague], "football.selhurst", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e2.png');
export const Everton: Team = Team.create("football.everton", [PremierLeague], "football.goodison", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e3.png');
export const Fulham: Team = Team.create("football.fulham", [PremierLeague], "football.craven");
export const LeedsUnited: Team = Team.create("football.leedsunited", [PremierLeague], "football.elland");
export const Liverpool = Team.create("football.liverpool", [PremierLeague, ChampionsLeague], "football.anfield", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e5.png');
export const ManchesterCity = Team.create("football.manchestercity", [PremierLeague, ChampionsLeague], "football.etihad", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e6.png');
export const ManchesterUnited: Team = Team.create("football.manchesterunited", [PremierLeague], "football.oldtrafford", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e7.png');
export const NewcastleUnited = Team.create("football.newcastle", [PremierLeague, ChampionsLeague], "football.stjames", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4ec.png');
export const NottinghamForest: Team = Team.create("football.nottinghamforest", [PremierLeague], "football.cityground");
export const Sunderland: Team = Team.create("football.sunderland", [PremierLeague], "football.light", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f0.png');
export const TottenhamHotspur: Team = Team.create("football.tottenhamhotspur", [PremierLeague], "football.tottenhamstadium", '<img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c4ee.png" alt="Tottenham Hotspur Logo" itemprop="contentUrl">');
export const WestHamUnited: Team = Team.create("football.westhamunited", [PremierLeague], "football.london", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f1.png');
export const Wolverhampton: Team = Team.create("football.wolverhampton", [PremierLeague], "football.molineux");

export const PremierLeagueTeams_25_26: Team[] = [
    Arsenal,
    AstonVilla,
    Bournemouth,
    Brentford,
    Brighton,
    Burnley,
    Chelsea,
    CrystalPalace,
    Everton,
    Fulham,
    LeedsUnited,
    Liverpool,
    ManchesterCity,
    ManchesterUnited,
    NewcastleUnited,
    NottinghamForest,
    Sunderland,
    TottenhamHotspur,
    WestHamUnited,
    Wolverhampton
]
// -----------------------------------------------------------------------------------------------------------------
export const Ajax = Team.create("football.ajax", ChampionsLeague, "football.johancruijffarena");
// export const Arsenal = Team.create("football.arsenal", ChampionsLeague, "football.emirates");
export const Atalanta = Team.create("football.atalanta", ChampionsLeague, "football.gewiss", 'https://assets.stickpng.com/images/584ab05530d6736bca3d6e08.png');
// export const AthleticBilbao = Team.create("football.athleticbilbao", ChampionsLeague, "football.sanmanes");
// export const AtleticoMadrid = Team.create("football.atleticomadrid", ChampionsLeague, "football.metropolitano");
// export const Barcelona = Team.create("football.barcelona", ChampionsLeague, "football.campnou");
export const BayernMunich = Team.create("football.bayernmunich", ChampionsLeague, "football.allianz", 'https://assets.stickpng.com/images/584d8683367b6a13e54477d4.png');
export const BayerLeverkusen = Team.create("football.bayerleverkusen", ChampionsLeague, "football.bayarena", 'https://assets.stickpng.com/images/584d8651367b6a13e54477d1.png');
export const BorussiaDortmund = Team.create("football.borussiadortmund", ChampionsLeague, "football.signalidunapark", 'https://assets.stickpng.com/images/584d8678367b6a13e54477d3.png');
// export const Chelsea = Team.create("football.chelsea", ChampionsLeague, "football.stamfordbridge");
export const EintrachtFrankfurt = Team.create("football.eintrachtfrankfurt", ChampionsLeague, "football.deutschebankpark", 'https://assets.stickpng.com/images/584d865b367b6a13e54477d2.png');
export const Galatasaray = Team.create("football.galatasaray", ChampionsLeague, "football.ramspark");
export const InterMilan = Team.create("football.intermilan", ChampionsLeague, "football.giuseppe", 'https://assets.stickpng.com/images/584aaf7130d6736bca3d6ded.png');
export const Juventus = Team.create("football.juventus", ChampionsLeague, "football.allianzstadium", 'https://assets.stickpng.com/images/584aaf6330d6736bca3d6deb.png');
// export const Liverpool = Team.create("football.liverpool", ChampionsLeague, "football.anfield",'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e5.png');
// export const ManchesterCity = Team.create("football.manchestercity", ChampionsLeague, "football.etihad",'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e6.png');
export const Marseille = Team.create("football.marseille", ChampionsLeague, "football.velodrome", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4d2.png');
export const Monaco = Team.create("football.monaco", ChampionsLeague, "football.louis");
export const Napoli = Team.create("football.napoli", ChampionsLeague, "football.diegomaradona", 'https://assets.stickpng.com/images/584ab0fb30d6736bca3d6e1c.png');
// export const NewcastleUnited = Team.create("football.newcastle", ChampionsLeague, "football.stjamespark",'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4ec.png');
export const Olympiacos = Team.create("football.olympiacos", ChampionsLeague, "football.karaiskakis");
export const ParisSG = Team.create("football.psg", ChampionsLeague, "football.parcdesprinces", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4d8.png');
export const PSV = Team.create("football.psv", ChampionsLeague, "football.philipsstadion");
// export const RealMadrid = Team.create("football.realmadrid", ChampionsLeague, "football.bernabeu");
export const SlaviaPrague = Team.create("football.slaviaprague", ChampionsLeague, "football.edensecurity");
export const SportingCP = Team.create("football.sportingcp", ChampionsLeague, "football.josealvalade");
export const Tottenham = Team.create("football.tottenham", ChampionsLeague, "football.tottenhamstadium", 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4ee.png');
export const UnionSG = Team.create("football.unionsg", ChampionsLeague, "football.stadion", 'https://assets.stickpng.com/images/584aa027715f776a8080c429.png');
// export const Villarreal = Team.create("football.villarreal", ChampionsLeague, "football.ceramica");

export const TBD = Team.create("football.tbd", ChampionsLeague, "football.tbd");

export const ChampionsLeagueTeams_25_26: Team[] = [
    Ajax,
    Arsenal,
    Atalanta,
    AthleticBilbao,
    AtleticoMadrid,
    Barcelona,
    BayernMunich,
    BayerLeverkusen,
    BorussiaDortmund,
    Chelsea,
    EintrachtFrankfurt,
    Galatasaray,
    InterMilan,
    Juventus,
    Liverpool,
    ManchesterCity,
    Marseille,
    Monaco,
    Napoli,
    NewcastleUnited,
    Olympiacos,
    ParisSG,
    PSV,
    RealMadrid,
    SlaviaPrague,
    SportingCP,
    Tottenham,
    UnionSG,
    Villarreal
];

// ----------------------------------------------------------------------------------
export const BeitarJerusalem: Team = Team.create("football.beitarjerusalem", [LigatHaal], "football.teddy");
export const BneiSakhnin: Team = Team.create("football.bneisakhnin", [LigatHaal], "football.dohastadium");
export const HapoelBeerSheva: Team = Team.create("football.hapoelbeersheva", [LigatHaal], "football.turner");
export const HapoelHaifa: Team = Team.create("football.hapoelhaifa", [LigatHaal], "football.samiofer");
export const HapoelJerusalem: Team = Team.create("football.hapoeljerusalem", [LigatHaal], "football.teddy");
export const HapoelPetahTikva: Team = Team.create("football.hapoelpetachtikva", [LigatHaal], "football.hamoshava");
export const HapoelTelAviv: Team = Team.create("football.hapoeltelaviv", [LigatHaal], "football.bloomfield");
export const MSAshdod: Team = Team.create("football.msashdod", [LigatHaal], "football.yudale");
export const MaccabiBneiReineh: Team = Team.create("football.maccabibneireineh", [LigatHaal], "football.greenstadium");
export const MaccabiHaifa: Team = Team.create("football.maccabihaifa", [LigatHaal], "football.samiofer");
export const MaccabiNetanya: Team = Team.create("football.maccabinetanya", [LigatHaal], "football.maryemstadium");
export const MaccabiTelAviv: Team = Team.create("football.maccabitelaviv", [LigatHaal], "football.bloomfield");
export const IroniTiberias: Team = Team.create("football.ironitiberias", [LigatHaal], "football.greenstadium");
export const IroniKiryatShmona: Team = Team.create("football.ironikiryatshmona", [LigatHaal], "football.kiryatshmona");

export const LigatHaalTeams_25_26: Team[] = {
    BeitarJerusalem,
    BneiSakhnin,
    HapoelBeerSheva,
    HapoelHaifa,
    HapoelJerusalem,
    HapoelPetahTikva,
    HapoelTelAviv,
    MSAshdod,
    MaccabiBneiReineh,
    MaccabiHaifa,
    MaccabiNetanya,
    MaccabiTelAviv,
    IroniTiberias,
    IroniKiryatShmona
}

// ---------------------------------------------------------------
export const AIK = Team.create("football.aik", [Allsvenskan], "football.strawberryarena");
export const BKHacken = Team.create("football.bkhacken", [Allsvenskan], "football.bravidaarena");
export const DegerforsIF = Team.create("football.degerfors", [Allsvenskan], "football.storavalla");
export const DjurgardensIF = Team.create("football.djurgarden", [Allsvenskan], "football.3arena");
export const GAIS = Team.create("football.gais", [Allsvenskan], "football.gamlallevi");
export const HalmstadsBK = Team.create("football.halmstad", [Allsvenskan], "football.orjansvall");
export const HammarbyIF = Team.create("football.hammarby", [Allsvenskan], "football.3arena");
export const IFBrommapojkarna = Team.create("football.brommapojkarna", [Allsvenskan], "football.grimstaip");
export const IFElfsborg = Team.create("football.elfsborg", [Allsvenskan], "football.borasarena");
export const IFKGoteborg = Team.create("football.ifkgoteborg", [Allsvenskan], "football.gamlallevi");
export const IFKNorrkoping = Team.create("football.ifknorrkoping", [Allsvenskan], "football.nyaparken");
export const IFKVarnamo = Team.create("football.ifkvarnamo", [Allsvenskan], "football.finnvedsvallen");
export const IKSirius = Team.create("football.sirius", [Allsvenskan], "football.studenternasip");
export const MalmoFF = Team.create("football.malmo", [Allsvenskan], "football.stadion");
export const MjallbyAIF = Team.create("football.mjallby", [Allsvenskan], "football.strandvallen");
export const OstersIF = Team.create("football.osters", [Allsvenskan], "football.vismaarena");

export const AllsvenskanTeams_25_26: Team[] = {
    AIK,
    BKHacken,
    DegerforsIF,
    DjurgardensIF,
    GAIS,
    HalmstadsBK,
    HammarbyIF,
    IFBrommapojkarna,
    IFElfsborg,
    IFKGoteborg,
    IFKNorrkoping,
    IFKVarnamo,
    IKSirius,
    MalmoFF,
    MjallbyAIF,
    OstersIF
}