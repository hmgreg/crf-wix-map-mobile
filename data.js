mapboxgl.accessToken = 'pk.eyJ1IjoiaGFwcHltb25kYXkiLCJhIjoiY21kZXpjNGx2MDhmOTJrb3Bja2ViMW5qcyJ9.rrWtPNbSr1AXBiGQl8AY6A';

const registries = [
    {
    name: "Anguilla Financial Services Commission",
    country: "Anguilla",
    website: "http://www.commercialregistry.ai/acorn-welcome.html",
    coords: [-63.053, 18.217],
    logo: "Anguilla.png"
    },
    {
    name: "Australian Registry Business Services",
    country: "Australia",
    website: "https://register.business.gov.au/",
    coords: [144.9632, -37.8142],
    logo: "Australia.png"
    },
    {
    name: "State Tax Service under the Ministry of Economy of the Republic of Azerbaijan",
    country: "Azerbaijan",
    website: "http://www.taxes.gov.az/index.php",
    coords: [49.8671, 40.4093],
    logo: "Azerbaijan.png"
    },
    {
    name: "Registrar of Joint Stock Companies and Firms, Ministry of Commerce",
    country: "Bangladesh",
    website: "http://roc.gov.bd",
    coords: [90.3953, 23.7509],
    logo: "Bangladesh.png"
    },
    {
    name: "Belize Financial Services Commission",
    country: "Belize",
    website: "https://www.belizefsc.org.bz/",
    coords: [-88.768, 17.2479],
    logo: "Belize.png"
    },
    {
    name: "Registrar of Companies",
    country: "Bermuda",
    website: "http://www.roc.gov.bm/",
    coords: [-64.7821, 32.2953],
    logo: "Bermuda.png"
    },
    {
    name: "Companies and Intellectual Property Authority (CIPA)",
    country: "Botswana",
    website: "http://www.cipa.co.bw/home",
    coords: [25.9088, -24.6581],
    logo: "Botswana.png"
    },
    {
    name: "BVI Financial Services Commission",
    country: "British Virgin Islands",
    website: "http://www.bvifsc.vg",
    coords: [-64.6147, 18.4305],
    logo: "British-Virgin-Islands.png"
    },
    {
    name: "Registry Agency, Republic of Bulgaria",
    country: "Bulgaria",
    website: "https://portal.registryagency.bg",
    coords: [23.3606, 42.6802],
    logo: "Bulgaria.png"
    },
    {
    name: "Business Registration Department – Ministry of Commerce",
    country: "Cambodia",
    website: "http://www.businessregistration.moc.gov.kh",
    coords: [104.8784, 11.556],
    logo: "Cambodia.png"
    },
    {
    name: "Corporations Canada",
    country: "Canada",
    website: "https://www.ic.gc.ca/eic/site/cd-dgc.nsf/eng/home",
    coords: [-75.7129, 45.4240],
    logo: "Canada.png"
    },
    {
    name: "Financial Supervisory Commission",
    country: "Cook Islands",
    website: "https://www.fsc.gov.ck/cookIslandsFscApp/content/home",
    coords: [-159.7708, -21.2075],
    logo: "Cook-Islands.png"
    },
    {
    name: "Bundesanzeiger Verlag GmbH",
    country: "Germany",
    website: "https://www.unternehmensregister.de/ureg/?submitaction=language&language=en",
    coords: [6.97048282963874, 50.97011431933766],
    logo: "Germany-Bundesanzeiger-Verlag-GmbH.png"
    },
    {
    name: "Ministry of Justice of North Rhine-Westphalia",
    country: "Germany",
    website: "https://www.justiz.nrw.de/WebPortal_en_Relaunch/index.php",
    coords: [6.781569, 51.223832],
    logo: "Germany-North-Rhine-Westphalia.png"
    },
    {
    name: "Office of the Registrar of Companies",
    country: "Ghana",
    website: "https://egovonline.gegov.gov.gh",
    coords: [-0.2059, 5.6148],
    logo: "Ghana.png"
    },
    {
    name: "Companies House Gibraltar",
    country: "Gibraltar",
    website: "http://www.companieshouse.gi/index.html",
    coords: [-5.3532, 36.1373],
    logo: "Gibraltar.png"
    },
    {
    name: "Guernsey Registry",
    country: "Guernsey",
    website: "http://guernseyregistry.com",
    coords: [-2.5374, 49.4542],
    logo: "Guernsey.png"
    },
    {
    name: "Companies Registry",
    country: "Hong Kong, China",
    website: "https://www.cr.gov.hk/en/home/index.htm",
    coords: [114.171, 22.2783],
    logo: "Hong-Kong.png"
    },
    {
    name: "Ministry of Corporate Affairs",
    country: "India",
    website: "https://www.mca.gov.in/",
    coords: [77.215, 28.6164],
    logo: "India.png"
    },
    {
    name: "Companies Registration Office",
    country: "Ireland",
    website: "http://www.cro.ie",
    coords: [-6.2603, 53.3498],
    logo: "Ireland.png"
    },
    {
    name: "The Israeli Corporations Authority (ICA), Ministry of Justice",
    country: "Israel",
    website: "http://www.justice.gov.il/En/Units/IsraeliCorporations/Pages/default.aspx",
    coords: [35.2137, 31.7683],
    logo: "Israel.png"
    },
    {
    name: "Jersey Financial Services Commission",
    country: "Jersey",
    website: "http://www.jerseyfsc.org/registry/",
    coords: [-2.1066, 49.1868],
    logo: "Jersey.png"
    },
    {
    name: "Astana Financial Services Authority (AFSA)",
    country: "Kazakhstan",
    website: "http://www.afsa.kz",
    coords: [71.4304, 51.128],
    logo: "Kazakhstan.png"
    },
    {
    name: "Business Registration Service – Office of the Attorney General and the Department of Justice",
    country: "Kenya",
    website: "http://www.statelaw.go.ke",
    coords: [36.8249, -1.287],
    logo: "Kenya.png"
    },
    {
    name: "Ministry of Trade and Industry",
    country: "Lesotho",
    website: "http://www.obfc.org.ls/home/",
    coords: [27.4833, -29.3142],
    logo: "Lesotho.png"
    },
    {
    name: "Companies Commission of Malaysia (SSM)",
    country: "Malaysia",
    website: "http://www.ssm.com.my",
    coords: [101.6865, 3.1333],
    logo: "Malaysia.png"
    },
    {
    name: "Labuan Financial Services Authority (Labuan FSA)",
    country: "Malaysia - Labuan",
    website: "https://www.labuanibfc.com/default.aspx",
    coords: [115.2417, 5.2775],
    logo: "Malaysia-Labuan.png"
    },
    {
    name: "Ministry of Economic Development",
    country: "Maldives",
    website: "http://www.trade.gov.mv",
    coords: [73.5093, 4.1755],
    logo: "Maldives.png"
    },
    {
    name: "Corporate and Business Registration Department",
    country: "Mauritius",
    website: "http://companies.govmu.org/English/Pages/default.aspx",
    coords: [57.5012, -20.1609],
    logo: "Mauritius.png"
    },
    {
    name: "Ministry of National Planning and Economic Development – Directorate of Investment and Company Administration",
    country: "Myanmar",
    website: "http://dica.gov.mm",
    coords: [96.1735, 16.8281],
    logo: "Myanmar.png"
    },
    {
    name: "The Netherlands Chamber of Commerce",
    country: "Netherlands",
    website: "https://www.kvk.nl/english/",
    coords: [5.1187, 52.0957],
    logo: "Netherlands.png"
    },
    {
    name: "Companies Office",
    country: "New Zealand",
    website: "http://www.business.govt.nz/companies/",
    coords: [174.7633, -36.8485],
    logo: "New-Zealand.png"
    },
    {
    name: "Central Register of Republic of North Macedonia",
    country: "North Macedonia (Republic of)",
    website: "http://www.crm.com.mk/DS/default.aspx",
    coords: [21.4254, 41.9981],
    logo: "North-Macedonia.png"
    },
    {
    name: "Investment Promotion Authority",
    country: "Papua New Guinea",
    website: "https://www.ipa.gov.pg/",
    coords: [147.1803, -9.4438],
    logo: "Papua-New-Guinea.png"
    },
    {
    name: "Securities and Exchange Commission",
    country: "Philippines",
    website: "http://www.sec.gov.ph",
    coords: [120.9842, 14.5995],
    logo: "Philippines.png"
    },
    {
    name: "Qatar Financial Centre Companies Registration Office",
    country: "Qatar Financial Centre",
    website: "http://www.qfc.qa/en/Operate/CRO/Pages/PublicRegister.aspx",
    coords: [51.531, 25.2854],
    logo: "Qatar.png"
    },
    {
    name: "The National Trade Register Office, The Ministry of Justice",
    country: "Romania",
    website: "https://www.onrc.ro/index.php/en/",
    coords: [26.0963, 44.4336],
    logo: "Romania.png"
    },
    {
    name: "Ministry of Commerce, Industry and Labour",
    country: "Samoa - MCIL",
    website: "https://www.businessregistries.gov.ws",
    coords: [-171.7667, -13.8333],
    logo: "Samoa-MCIL.png"
    },
    {
    name: "Samoa International Finance Authority",
    country: "Samoa - SIFA",
    website: "https://www.sifa.ws",
    coords: [-171.769, -13.8335],
    logo: "Samoa-SIFA.png"
    },
    {
    name: "Accounting & Corporate Regulatory Authority",
    country: "Singapore",
    website: "https://www.acra.gov.sg/home/",
    coords: [103.8447, 1.3143],
    logo: "Singapore.png"
    },
    {
    name: "Agency of the Republic of Slovenia for Public Legal Records and Related Services, AJPES",
    country: "Slovenia (Republic of)",
    website: "https://www.ajpes.si/",
    coords: [14.5085, 46.0511],
    logo: "Slovenia.png"
    },
    {
    name: "Companies and Intellectual Property Commission (CIPC)",
    country: "South Africa",
    website: "http://www.cipc.co.za/za/",
    coords: [28.2293, -25.7482],
    logo: "South-Africa.png"
    },
    {
    name: "Land and Mercantile Registrars Association of Spain",
    country: "Spain",
    website: "http://www.registradores.org",
    coords: [-3.678, 40.4281],
    logo: "Spain.png"
    },
    {
    name: "Department of Registrar of Companies",
    country: "Sri Lanka",
    website: "http://www.drc.gov.lk",
    coords: [79.8609, 6.9176],
    logo: "Sri-Lanka.png"
    },
    {
    name: "Department of Business Development, Ministry of Commerce",
    country: "Thailand",
    website: "http://www.dbd.go.th/dbdweb_en/main.php?filename=index",
    coords: [100.514, 13.8597],
    logo: "Thailand.png"
    },
    {
    name: "Ministry of Commerce, Tourism and Labour",
    country: "Tonga",
    website: "https://www.businessregistries.gov.to",
    coords: [-175.2043, -21.1393],
    logo: "Tonga.png"
    },
    {
    name: "National Center for Business Register",
    country: "Tunisia",
    website: "https://www.registre-entreprises.tn/rne-public/#/",
    coords: [10.1846, 36.8008],
    logo: "Tunisia.png"
    },
    {
    name: "Ministry of Trade of Türkiye",
    country: "Türkiye",
    website: "https://www.trade.gov.tr/",
    coords: [32.8321, 39.9275],
    logo: "Türkiye.png"
    },
    {
    name: "Uganda Registration Services Bureau",
    country: "Uganda",
    website: "http://www.ursb.go.ug",
    coords: [32.5825, 0.3136],
    logo: "Uganda.png"
    },
    {
    name: "Abu Dhabi Global Market Registration Authority",
    country: "United Arab Emirates",
    website: "http://www.adgm.com",
    coords: [54.372, 24.489],
    logo: "United-Arab-Emirates-Abu-Dhabi-Global-Market-Registration-Authority.png"
    },
    {
    name: "Abu Dhabi Department of Economic Development",
    country: "United Arab Emirates",
    website: "http://www.ded.abudhabi.ae",
    coords: [54.396, 24.45],
    logo: "United-Arab-Emirates-Abu-Dhabi-Department-of-Economic-Development.png"
    },
    {
    name: "Companies House",
    country: "United Kingdom",
    website: "http://www.companieshouse.gov.uk/",
    coords: [-3.1771, 51.4862],
    logo: "United-Kingdom.png"
    },
    {
    name: "Department of Licensing & Consumer Protection",
    country: "United States of America, (Washington)",
    website: "https://dlcp.dc.gov/",
    coords: [-77.0211, 38.8816],
    logo: "USA-Washington.png"
    },
    {
    name: "Vanuatu Financial Services Commission",
    country: "Vanuatu",
    website: "http://www.vfsc.vu",
    coords: [168.3168, -17.7389],
    logo: "Vanuatu.png"
    },
    {
    name: "Agency for Business Registration – Ministry of Planning and Investment",
    country: "Vietnam",
    website: "https://dangkykinhdoanh.gov.vn/Default.aspx?tabid=101&language=en-GB",
    coords: [105.8328, 21.0385],
    logo: "Vietnam.png"
    }
];