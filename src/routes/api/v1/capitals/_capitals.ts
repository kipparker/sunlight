const capitals = [
  {
    country: "Abkhazia",
    capital: "Sukhumi",
    latitude: "43.001525",
    longitude: "41.023415",
  },
  {
    country: "Afghanistan",
    capital: "Kabul",
    latitude: "34.575503",
    longitude: "69.240073",
  },
  {
    country: "Aland Islands",
    capital: "Mariehamn",
    latitude: "60.1",
    longitude: "19.933333",
  },
  {
    country: "Albania",
    capital: "Tirana",
    latitude: "41.327546",
    longitude: "19.818698",
  },
  {
    country: "Algeria",
    capital: "Algiers",
    latitude: "36.752887",
    longitude: "3.042048",
  },
  {
    country: "American Samoa",
    capital: "Pago Pago",
    latitude: "-14.275632",
    longitude: "-170.702036",
  },
  {
    country: "Andorra",
    capital: "Andorra la Vella",
    latitude: "42.506317",
    longitude: "1.521835",
  },
  {
    country: "Angola",
    capital: "Luanda",
    latitude: "-8.839988",
    longitude: "13.289437",
  },
  {
    country: "Anguilla",
    capital: "The Valley",
    latitude: "18.214813",
    longitude: "-63.057441",
  },
  {
    country: "Antarctica",
    capital: "South Pole",
    latitude: "-90",
    longitude: "0",
  },
  {
    country: "Antigua and Barbuda",
    capital: "St. John's",
    latitude: "17.12741",
    longitude: "-61.846772",
  },
  {
    country: "Argentina",
    capital: "Buenos Aires",
    latitude: "-34.603684",
    longitude: "-58.381559",
  },
  {
    country: "Armenia",
    capital: "Yerevan",
    latitude: "40.179186",
    longitude: "44.499103",
  },
  {
    country: "Aruba",
    capital: "Oranjestad",
    latitude: "12.509204",
    longitude: "-70.008631",
  },
  {
    country: "Australia",
    capital: "Canberra",
    latitude: "-35.282",
    longitude: "149.128684",
  },
  {
    country: "Austria",
    capital: "Vienna",
    latitude: "48.208174",
    longitude: "16.373819",
  },
  {
    country: "Azerbaijan",
    capital: "Baku",
    latitude: "40.409262",
    longitude: "49.867092",
  },
  {
    country: "Bahamas",
    capital: "Nassau",
    latitude: "25.047984",
    longitude: "-77.355413",
  },
  {
    country: "Bahrain",
    capital: "Manama",
    latitude: "26.228516",
    longitude: "50.58605",
  },
  {
    country: "Bangladesh",
    capital: "Dhaka",
    latitude: "23.810332",
    longitude: "90.412518",
  },
  {
    country: "Barbados",
    capital: "Bridgetown",
    latitude: "13.113222",
    longitude: "-59.598809",
  },
  {
    country: "Belarus",
    capital: "Minsk",
    latitude: "53.90454",
    longitude: "27.561524",
  },
  {
    country: "Belgium",
    capital: "Brussels",
    latitude: "50.85034",
    longitude: "4.35171",
  },
  {
    country: "Belize",
    capital: "Belmopan",
    latitude: "17.251011",
    longitude: "-88.75902",
  },
  {
    country: "Benin",
    capital: "Porto-Novo",
    latitude: "6.496857",
    longitude: "2.628852",
  },
  {
    country: "Bermuda",
    capital: "Hamilton",
    latitude: "32.294816",
    longitude: "-64.781375",
  },
  {
    country: "Bhutan",
    capital: "Thimphu",
    latitude: "27.472792",
    longitude: "89.639286",
  },
  {
    country: "Bolivia",
    capital: "La Paz",
    latitude: "-16.489689",
    longitude: "-68.119294",
  },
  {
    country: "Bosnia and Herzegovina",
    capital: "Sarajevo",
    latitude: "43.856259",
    longitude: "18.413076",
  },
  {
    country: "Botswana",
    capital: "Gaborone",
    latitude: "-24.628208",
    longitude: "25.923147",
  },
  {
    country: "Bouvet Island",
    capital: "Bouvet Island",
    latitude: "-54.43",
    longitude: "3.38",
  },
  {
    country: "Brazil",
    capital: "Bras\u00edlia",
    latitude: "-15.794229",
    longitude: "-47.882166",
  },
  {
    country: "British Indian Ocean Territory",
    capital: "Camp Justice",
    latitude: "21.3419",
    longitude: "55.4778",
  },
  {
    country: "British Virgin Islands",
    capital: "Road Town",
    latitude: "18.428612",
    longitude: "-64.618466",
  },
  {
    country: "Brunei",
    capital: "Bandar Seri Begawan",
    latitude: "4.903052",
    longitude: "114.939821",
  },
  {
    country: "Bulgaria",
    capital: "Sofia",
    latitude: "42.697708",
    longitude: "23.321868",
  },
  {
    country: "Burkina Faso",
    capital: "Ouagadougou",
    latitude: "12.371428",
    longitude: "-1.51966",
  },
  {
    country: "Burundi",
    capital: "Bujumbura",
    latitude: "-3.361378",
    longitude: "29.359878",
  },
  {
    country: "Cambodia",
    capital: "Phnom Penh",
    latitude: "11.544873",
    longitude: "104.892167",
  },
  {
    country: "Cameroon",
    capital: "Yaound\u00e9",
    latitude: "3.848033",
    longitude: "11.502075",
  },
  {
    country: "Canada",
    capital: "Ottawa",
    latitude: "45.42153",
    longitude: "-75.697193",
  },
  {
    country: "Cape Verde",
    capital: "Praia",
    latitude: "14.93305",
    longitude: "-23.513327",
  },
  {
    country: "Cayman Islands",
    capital: "George Town",
    latitude: "19.286932",
    longitude: "-81.367439",
  },
  {
    country: "Central African Republic",
    capital: "Bangui",
    latitude: "4.394674",
    longitude: "18.55819",
  },
  {
    country: "Chad",
    capital: "N'Djamena",
    latitude: "12.134846",
    longitude: "15.055742",
  },
  {
    country: "Chile",
    capital: "Santiago",
    latitude: "-33.44889",
    longitude: "-70.669265",
  },
  {
    country: "China",
    capital: "Beijing",
    latitude: "39.904211",
    longitude: "116.407395",
  },
  {
    country: "Christmas Island",
    capital: "Flying Fish Cove",
    latitude: "-10.420686",
    longitude: "105.679379",
  },
  {
    country: "Cocos (Keeling) Islands",
    capital: "West Island",
    latitude: "-12.188834",
    longitude: "96.829316",
  },
  {
    country: "Colombia",
    capital: "Bogot\u00e1",
    latitude: "4.710989",
    longitude: "-74.072092",
  },
  {
    country: "Comoros",
    capital: "Moroni",
    latitude: "-11.717216",
    longitude: "43.247315",
  },
  {
    country: "Congo (DRC)",
    capital: "Kinshasa",
    latitude: "-4.441931",
    longitude: "15.266293",
  },
  {
    country: "Congo (Republic)",
    capital: "Brazzaville",
    latitude: "-4.26336",
    longitude: "15.242885",
  },
  {
    country: "Cook Islands",
    capital: "Avarua",
    latitude: "-21.212901",
    longitude: "-159.782306",
  },
  {
    country: "Costa Rica",
    capital: "San Jos\u00e9",
    latitude: "9.928069",
    longitude: "-84.090725",
  },
  {
    country: "C\u00f4te d'Ivoire",
    capital: "Yamoussoukro",
    latitude: "6.827623",
    longitude: "-5.289343",
  },
  {
    country: "Croatia",
    capital: "Zagreb ",
    latitude: "45.815011",
    longitude: "15.981919",
  },
  {
    country: "Cuba",
    capital: "Havana",
    latitude: "23.05407",
    longitude: "-82.345189",
  },
  {
    country: "Cura\u00e7ao",
    capital: "Willemstad",
    latitude: "12.122422",
    longitude: "-68.882423",
  },
  {
    country: "Cyprus",
    capital: "Nicosia",
    latitude: "35.185566",
    longitude: "33.382276",
  },
  {
    country: "Czech Republic",
    capital: "Prague",
    latitude: "50.075538",
    longitude: "14.4378",
  },
  {
    country: "Denmark",
    capital: "Copenhagen",
    latitude: "55.676097",
    longitude: "12.568337",
  },
  {
    country: "Djibouti",
    capital: "Djibouti",
    latitude: "11.572077",
    longitude: "43.145647",
  },
  {
    country: "Dominica",
    capital: "Roseau",
    latitude: "15.309168",
    longitude: "-61.379355",
  },
  {
    country: "Dominican Republic",
    capital: "Santo Domingo",
    latitude: "18.486058",
    longitude: "-69.931212",
  },
  {
    country: "Ecuador",
    capital: "Quito",
    latitude: "-0.180653",
    longitude: "-78.467838",
  },
  {
    country: "Egypt",
    capital: "Cairo",
    latitude: "30.04442",
    longitude: "31.235712",
  },
  {
    country: "El Salvador",
    capital: "San Salvador",
    latitude: "13.69294",
    longitude: "-89.218191",
  },
  {
    country: "Equatorial Guinea",
    capital: "Malabo",
    latitude: "3.750412",
    longitude: "8.737104",
  },
  {
    country: "Eritrea",
    capital: "Asmara",
    latitude: "15.322877",
    longitude: "38.925052",
  },
  {
    country: "Estonia",
    capital: "Tallinn",
    latitude: "59.436961",
    longitude: "24.753575",
  },
  {
    country: "Ethiopia",
    capital: "Addis Ababa",
    latitude: "8.980603",
    longitude: "38.757761",
  },
  {
    country: "Falkland Islands (Islas Malvinas)",
    capital: "Stanley",
    latitude: "-51.697713",
    longitude: "-57.851663",
  },
  {
    country: "Faroe Islands",
    capital: "T\u00f3rshavn",
    latitude: "62.007864",
    longitude: "-6.790982",
  },
  {
    country: "Fiji",
    capital: "Suva",
    latitude: "-18.124809",
    longitude: "178.450079",
  },
  {
    country: "Finland",
    capital: "Helsinki",
    latitude: "60.173324",
    longitude: "24.941025",
  },
  {
    country: "France",
    capital: "Paris",
    latitude: "48.856614",
    longitude: "2.352222",
  },
  {
    country: "French Guiana",
    capital: "Cayenne",
    latitude: "4.92242",
    longitude: "-52.313453",
  },
  {
    country: "French Polynesia",
    capital: "Papeete",
    latitude: "-17.551625",
    longitude: "-149.558476",
  },
  {
    country: "French Southern Territories",
    capital: "Saint-Pierre ",
    latitude: "-21.3419",
    longitude: "55.4778",
  },
  {
    country: "Gabon",
    capital: "Libreville",
    latitude: "0.416198",
    longitude: "9.467268",
  },
  {
    country: "Gambia",
    capital: "Banjul",
    latitude: "13.454876",
    longitude: "-16.579032",
  },
  {
    country: "Georgia",
    capital: "Tbilisi",
    latitude: "41.715138",
    longitude: "44.827096",
  },
  {
    country: "Germany",
    capital: "Berlin",
    latitude: "52.520007",
    longitude: "13.404954",
  },
  {
    country: "Ghana",
    capital: "Accra",
    latitude: "5.603717",
    longitude: "-0.186964",
  },
  {
    country: "Gibraltar",
    capital: "Gibraltar",
    latitude: "36.140773",
    longitude: "-5.353599",
  },
  {
    country: "Greece",
    capital: "Athens",
    latitude: "37.983917",
    longitude: "23.72936",
  },
  {
    country: "Greenland",
    capital: "Nuuk",
    latitude: "64.18141",
    longitude: "-51.694138",
  },
  {
    country: "Grenada",
    capital: "St. George's",
    latitude: "12.056098",
    longitude: "-61.7488",
  },
  {
    country: "Guadeloupe",
    capital: "Basse-Terre",
    latitude: "16.014453",
    longitude: "-61.706411",
  },
  {
    country: "Guam",
    capital: "Hag\u00e5t\u00f1a",
    latitude: "13.470891",
    longitude: "144.751278",
  },
  {
    country: "Guatemala",
    capital: "Guatemala City",
    latitude: "14.634915",
    longitude: "-90.506882",
  },
  {
    country: "Guernsey",
    capital: "St. Peter Port",
    latitude: "49.455443",
    longitude: "-2.536871",
  },
  {
    country: "Guinea",
    capital: "Conakry",
    latitude: "9.641185",
    longitude: "-13.578401",
  },
  {
    country: "Guinea-Bissau",
    capital: "Bissau",
    latitude: "11.881655",
    longitude: "-15.617794",
  },
  {
    country: "Guyana",
    capital: "Georgetown",
    latitude: "6.801279",
    longitude: "-58.155125",
  },
  {
    country: "Haiti",
    capital: "Port-au-Prince",
    latitude: "18.594395",
    longitude: "-72.307433",
  },
  {
    country: "Honduras",
    capital: "Tegucigalpa",
    latitude: "14.072275",
    longitude: "-87.192136",
  },
  {
    country: "Hong Kong",
    capital: "Hong Kong",
    latitude: "22.396428",
    longitude: "114.109497",
  },
  {
    country: "Hungary",
    capital: "Budapest",
    latitude: "47.497912",
    longitude: "19.040235",
  },
  {
    country: "Iceland",
    capital: "Reykjav\u00edk",
    latitude: "64.126521",
    longitude: "-21.817439",
  },
  {
    country: "India",
    capital: "New Delhi",
    latitude: "28.613939",
    longitude: "77.209021",
  },
  {
    country: "Indonesia",
    capital: "Jakarta",
    latitude: "-6.208763",
    longitude: "106.845599",
  },
  {
    country: "Iran",
    capital: "Tehran",
    latitude: "35.689198",
    longitude: "51.388974",
  },
  {
    country: "Iraq",
    capital: "Baghdad",
    latitude: "33.312806",
    longitude: "44.361488",
  },
  {
    country: "Ireland",
    capital: "Dublin",
    latitude: "53.349805",
    longitude: "-6.26031",
  },
  {
    country: "Isle of Man",
    capital: "Douglas",
    latitude: "54.152337",
    longitude: "-4.486123",
  },
  {
    country: "Israel",
    capital: "Tel Aviv",
    latitude: "32.0853",
    longitude: "34.781768",
  },
  {
    country: "Italy",
    capital: "Rome",
    latitude: "41.902784",
    longitude: "12.496366",
  },
  {
    country: "Jamaica",
    capital: "Kingston",
    latitude: "18.042327",
    longitude: "-76.802893",
  },
  {
    country: "Japan",
    capital: "Tokyo",
    latitude: "35.709026",
    longitude: "139.731992",
  },
  {
    country: "Jersey",
    capital: "St. Helier",
    latitude: "49.186823",
    longitude: "-2.106568",
  },
  {
    country: "Jordan",
    capital: "Amman",
    latitude: "31.956578",
    longitude: "35.945695",
  },
  {
    country: "Kazakhstan",
    capital: "Astana",
    latitude: "51.160523",
    longitude: "71.470356",
  },
  {
    country: "Kenya",
    capital: "Nairobi",
    latitude: "-1.292066",
    longitude: "36.821946",
  },
  {
    country: "Kiribati",
    capital: "Tarawa Atoll",
    latitude: "1.451817",
    longitude: "172.971662",
  },
  {
    country: "Kosovo",
    capital: "Pristina",
    latitude: "42.662914",
    longitude: "21.165503",
  },
  {
    country: "Kuwait",
    capital: "Kuwait City",
    latitude: "29.375859",
    longitude: "47.977405",
  },
  {
    country: "Kyrgyzstan",
    capital: "Bishkek",
    latitude: "42.874621",
    longitude: "74.569762",
  },
  {
    country: "Laos",
    capital: "Vientiane",
    latitude: "17.975706",
    longitude: "102.633104",
  },
  {
    country: "Latvia",
    capital: "Riga",
    latitude: "56.949649",
    longitude: "24.105186",
  },
  {
    country: "Lebanon",
    capital: "Beirut",
    latitude: "33.888629",
    longitude: "35.495479",
  },
  {
    country: "Lesotho",
    capital: "Maseru",
    latitude: "-29.363219",
    longitude: "27.51436",
  },
  {
    country: "Liberia",
    capital: "Monrovia",
    latitude: "6.290743",
    longitude: "-10.760524",
  },
  {
    country: "Libya",
    capital: "Tripoli",
    latitude: "32.887209",
    longitude: "13.191338",
  },
  {
    country: "Liechtenstein",
    capital: "Vaduz",
    latitude: "47.14103",
    longitude: "9.520928",
  },
  {
    country: "Lithuania",
    capital: "Vilnius",
    latitude: "54.687156",
    longitude: "25.279651",
  },
  {
    country: "Luxembourg",
    capital: "Luxembourg",
    latitude: "49.611621",
    longitude: "6.131935",
  },
  {
    country: "Macau",
    capital: "Macau",
    latitude: "22.166667",
    longitude: "113.55",
  },
  {
    country: "Macedonia (FYROM)",
    capital: "Skopje",
    latitude: "41.997346",
    longitude: "21.427996",
  },
  {
    country: "Madagascar",
    capital: "Antananarivo",
    latitude: "-18.87919",
    longitude: "47.507905",
  },
  {
    country: "Malawi",
    capital: "Lilongwe",
    latitude: "-13.962612",
    longitude: "33.774119",
  },
  {
    country: "Malaysia",
    capital: "Kuala Lumpur",
    latitude: "3.139003",
    longitude: "101.686855",
  },
  {
    country: "Maldives",
    capital: "Mal\u00e9",
    latitude: "4.175496",
    longitude: "73.509347",
  },
  {
    country: "Mali",
    capital: "Bamako",
    latitude: "12.639232",
    longitude: "-8.002889",
  },
  {
    country: "Malta",
    capital: "Valletta",
    latitude: "35.898909",
    longitude: "14.514553",
  },
  {
    country: "Marshall Islands",
    capital: "Majuro",
    latitude: "7.116421",
    longitude: "171.185774",
  },
  {
    country: "Martinique",
    capital: "Fort-de-France",
    latitude: "14.616065",
    longitude: "-61.05878",
  },
  {
    country: "Mauritania",
    capital: "Nouakchott",
    latitude: "18.07353",
    longitude: "-15.958237",
  },
  {
    country: "Mauritius",
    capital: "Port Louis",
    latitude: "-20.166896",
    longitude: "57.502332",
  },
  {
    country: "Mayotte",
    capital: "Mamoudzou",
    latitude: "-12.780949",
    longitude: "45.227872",
  },
  {
    country: "Mexico",
    capital: "Mexico City",
    latitude: "19.432608",
    longitude: "-99.133208",
  },
  {
    country: "Micronesia",
    capital: "Palikir",
    latitude: "6.914712",
    longitude: "158.161027",
  },
  {
    country: "Moldova",
    capital: "Chisinau",
    latitude: "47.010453",
    longitude: "28.86381",
  },
  {
    country: "Monaco",
    capital: "Monaco",
    latitude: "43.737411",
    longitude: "7.420816",
  },
  {
    country: "Mongolia",
    capital: "Ulaanbaatar",
    latitude: "47.886399",
    longitude: "106.905744",
  },
  {
    country: "Montenegro",
    capital: "Podgorica",
    latitude: "42.43042",
    longitude: "19.259364",
  },
  {
    country: "Montserrat",
    capital: "Plymouth",
    latitude: "16.706523",
    longitude: "-62.215738",
  },
  {
    country: "Morocco",
    capital: "Rabat",
    latitude: "33.97159",
    longitude: "-6.849813",
  },
  {
    country: "Mozambique",
    capital: "Maputo",
    latitude: "-25.891968",
    longitude: "32.605135",
  },
  {
    country: "Myanmar (Burma)",
    capital: "Naypyidaw",
    latitude: "19.763306",
    longitude: "96.07851",
  },
  {
    country: "Nagorno-Karabakh Republic",
    capital: "Stepanakert",
    latitude: "39.826385",
    longitude: "46.763595",
  },
  {
    country: "Namibia",
    capital: "Windhoek",
    latitude: "-22.560881",
    longitude: "17.065755",
  },
  {
    country: "Nauru",
    capital: "Yaren",
    latitude: "-0.546686",
    longitude: "166.921091",
  },
  {
    country: "Nepal",
    capital: "Kathmandu",
    latitude: "27.717245",
    longitude: "85.323961",
  },
  {
    country: "Netherlands",
    capital: "Amsterdam",
    latitude: "52.370216",
    longitude: "4.895168",
  },
  {
    country: "Netherlands Antilles",
    capital: "Willemstad ",
    latitude: "12.1091242",
    longitude: "-68.9316546",
  },
  {
    country: "New Caledonia",
    capital: "Noum\u00e9a",
    latitude: "-22.255823",
    longitude: "166.450524",
  },
  {
    country: "New Zealand",
    capital: "Wellington",
    latitude: "-41.28646",
    longitude: "174.776236",
  },
  {
    country: "Nicaragua",
    capital: "Managua",
    latitude: "12.114993",
    longitude: "-86.236174",
  },
  {
    country: "Niger",
    capital: "Niamey",
    latitude: "13.511596",
    longitude: "2.125385",
  },
  {
    country: "Nigeria",
    capital: "Abuja",
    latitude: "9.076479",
    longitude: "7.398574",
  },
  {
    country: "Niue",
    capital: "Alofi",
    latitude: "-19.055371",
    longitude: "-169.917871",
  },
  {
    country: "Norfolk Island",
    capital: "Kingston",
    latitude: "-29.056394",
    longitude: "167.959588",
  },
  {
    country: "North Korea",
    capital: "Pyongyang",
    latitude: "39.039219",
    longitude: "125.762524",
  },
  {
    country: "Northern Cyprus",
    capital: "Nicosia",
    latitude: "35.185566",
    longitude: "33.382276",
  },
  {
    country: "Northern Mariana Islands",
    capital: "Saipan",
    latitude: "15.177801",
    longitude: "145.750967",
  },
  {
    country: "Norway",
    capital: "Oslo",
    latitude: "59.913869",
    longitude: "10.752245",
  },
  {
    country: "Oman",
    capital: "Muscat",
    latitude: "23.58589",
    longitude: "58.405923",
  },
  {
    country: "Pakistan",
    capital: "Islamabad",
    latitude: "33.729388",
    longitude: "73.093146",
  },
  {
    country: "Palau",
    capital: "Ngerulmud",
    latitude: "7.500384",
    longitude: "134.624289",
  },
  {
    country: "Palestine",
    capital: "Ramallah",
    latitude: "31.9073509",
    longitude: "35.5354719",
  },
  {
    country: "Panama",
    capital: "Panama City",
    latitude: "9.101179",
    longitude: "-79.402864",
  },
  {
    country: "Papua New Guinea",
    capital: "Port Moresby",
    latitude: "-9.4438",
    longitude: "147.180267",
  },
  {
    country: "Paraguay",
    capital: "Asuncion",
    latitude: "-25.26374",
    longitude: "-57.575926",
  },
  {
    country: "Peru",
    capital: "Lima",
    latitude: "-12.046374",
    longitude: "-77.042793",
  },
  {
    country: "Philippines",
    capital: "Manila",
    latitude: "14.599512",
    longitude: "120.98422",
  },
  {
    country: "Pitcairn Islands",
    capital: "Adamstown",
    latitude: "-25.06629",
    longitude: "-130.100464",
  },
  {
    country: "Poland",
    capital: "Warsaw",
    latitude: "52.229676",
    longitude: "21.012229",
  },
  {
    country: "Portugal",
    capital: "Lisbon",
    latitude: "38.722252",
    longitude: "-9.139337",
  },
  {
    country: "Puerto Rico",
    capital: "San Juan",
    latitude: "18.466334",
    longitude: "-66.105722",
  },
  {
    country: "Qatar",
    capital: "Doha",
    latitude: "25.285447",
    longitude: "51.53104",
  },
  {
    country: "R\u00e9union",
    capital: "Saint-Denis",
    latitude: "-20.882057",
    longitude: "55.450675",
  },
  {
    country: "Romania",
    capital: "Bucharest",
    latitude: "44.426767",
    longitude: "26.102538",
  },
  {
    country: "Russia",
    capital: "Moscow",
    latitude: "55.755826",
    longitude: "37.6173",
  },
  {
    country: "Rwanda",
    capital: "Kigali",
    latitude: "-1.957875",
    longitude: "30.112735",
  },
  {
    country: "Saint Pierre and Miquelon",
    capital: "St. Pierre",
    latitude: "46.775846",
    longitude: "-56.180636",
  },
  {
    country: "Saint Vincent and the Grenadines",
    capital: "Kingstown",
    latitude: "13.160025",
    longitude: "-61.224816",
  },
  {
    country: "Samoa",
    capital: "Apia",
    latitude: "-13.850696",
    longitude: "-171.751355",
  },
  {
    country: "San Marino",
    capital: "San Marino",
    latitude: "43.935591",
    longitude: "12.447281",
  },
  {
    country: "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
    capital: "S\u00e3o Tom\u00e9",
    latitude: "0.330192",
    longitude: "6.733343",
  },
  {
    country: "Saudi Arabia",
    capital: "Riyadh",
    latitude: "24.749403",
    longitude: "46.902838",
  },
  {
    country: "Senegal",
    capital: "Dakar",
    latitude: "14.764504",
    longitude: "-17.366029",
  },
  {
    country: "Serbia",
    capital: "Belgrade",
    latitude: "44.786568",
    longitude: "20.448922",
  },
  {
    country: "Seychelles",
    capital: "Victoria",
    latitude: "-4.619143",
    longitude: "55.451315",
  },
  {
    country: "Sierra Leone",
    capital: "Freetown",
    latitude: "8.465677",
    longitude: "-13.231722",
  },
  {
    country: "Singapore",
    capital: "Singapore",
    latitude: "1.280095",
    longitude: "103.850949",
  },
  {
    country: "Slovakia",
    capital: "Bratislava",
    latitude: "48.145892",
    longitude: "17.107137",
  },
  {
    country: "Slovenia",
    capital: "Ljubljana",
    latitude: "46.056947",
    longitude: "14.505751",
  },
  {
    country: "Solomon Islands",
    capital: "Honiara",
    latitude: "-9.445638",
    longitude: "159.9729",
  },
  {
    country: "Somalia",
    capital: "Mogadishu",
    latitude: "2.046934",
    longitude: "45.318162",
  },
  {
    country: "South Africa",
    capital: "Pretoria",
    latitude: "-25.747868",
    longitude: "28.229271",
  },
  {
    country: "South Georgia and the South Sandwich Islands",
    capital: "King Edward Point",
    latitude: "-54.28325",
    longitude: "-36.493735",
  },
  {
    country: "South Korea",
    capital: "Seoul",
    latitude: "37.566535",
    longitude: "126.977969",
  },
  {
    country: "South Ossetia",
    capital: "Tskhinvali",
    latitude: "42.22146",
    longitude: "43.964405",
  },
  {
    country: "South Sudan",
    capital: "Juba",
    latitude: "4.859363",
    longitude: "31.57125",
  },
  {
    country: "Spain",
    capital: "Madrid",
    latitude: "40.416775",
    longitude: "-3.70379",
  },
  {
    country: "Sri Lanka",
    capital: "Sri Jayawardenepura Kotte",
    latitude: "6.89407",
    longitude: "79.902478",
  },
  {
    country: "St. Barth\u00e9lemy",
    capital: "Gustavia",
    latitude: "17.896435",
    longitude: "-62.852201",
  },
  {
    country: "St. Kitts and Nevis",
    capital: "Basseterre",
    latitude: "17.302606",
    longitude: "-62.717692",
  },
  {
    country: "St. Lucia",
    capital: "Castries",
    latitude: "14.010109",
    longitude: "-60.987469",
  },
  {
    country: "St. Martin",
    capital: "Marigot",
    latitude: "18.067519",
    longitude: "-63.082466",
  },
  {
    country: "Sudan",
    capital: "Khartoum",
    latitude: "15.500654",
    longitude: "32.559899",
  },
  {
    country: "Suriname",
    capital: "Paramaribo",
    latitude: "5.852036",
    longitude: "-55.203828",
  },
  {
    country: "Svalbard and Jan Mayen",
    capital: "Longyearbyen ",
    latitude: "78.062",
    longitude: "22.055",
  },
  {
    country: "Swaziland",
    capital: "Mbabane",
    latitude: "-26.305448",
    longitude: "31.136672",
  },
  {
    country: "Sweden",
    capital: "Stockholm",
    latitude: "59.329323",
    longitude: "18.068581",
  },
  {
    country: "Switzerland",
    capital: "Bern",
    latitude: "46.947974",
    longitude: "7.447447",
  },
  {
    country: "Syria",
    capital: "Damascus",
    latitude: "33.513807",
    longitude: "36.276528",
  },
  {
    country: "Taiwan",
    capital: "Taipei",
    latitude: "25.032969",
    longitude: "121.565418",
  },
  {
    country: "Tajikistan",
    capital: "Dushanbe",
    latitude: "38.559772",
    longitude: "68.787038",
  },
  {
    country: "Tanzania",
    capital: "Dodoma",
    latitude: "-6.162959",
    longitude: "35.751607",
  },
  {
    country: "Thailand",
    capital: "Bangkok",
    latitude: "13.756331",
    longitude: "100.501765",
  },
  {
    country: "Timor-Leste",
    capital: "Dili",
    latitude: "-8.556856",
    longitude: "125.560314",
  },
  {
    country: "Togo",
    capital: "Lom\u00e9",
    latitude: "6.172497",
    longitude: "1.231362",
  },
  {
    country: "Tokelau",
    capital: "Nukunonu",
    latitude: "-9.2005",
    longitude: "-171.848",
  },
  {
    country: "Tonga",
    capital: "Nuku\u02bbalofa",
    latitude: "-21.139342",
    longitude: "-175.204947",
  },
  {
    country: "Transnistria",
    capital: "Tiraspol",
    latitude: "46.848185",
    longitude: "29.596805",
  },
  {
    country: "Trinidad and Tobago",
    capital: "Port of Spain",
    latitude: "10.654901",
    longitude: "-61.501926",
  },
  {
    country: "Tristan da Cunha",
    capital: "Edinburgh of the Seven Seas",
    latitude: "-37.068042",
    longitude: "-12.311315",
  },
  {
    country: "Tunisia",
    capital: "Tunis",
    latitude: "36.806495",
    longitude: "10.181532",
  },
  {
    country: "Turkey",
    capital: "Ankara",
    latitude: "39.933364",
    longitude: "32.859742",
  },
  {
    country: "Turkmenistan",
    capital: "Ashgabat",
    latitude: "37.960077",
    longitude: "58.326063",
  },
  {
    country: "Turks and Caicos Islands",
    capital: "Cockburn Town",
    latitude: "21.467458",
    longitude: "-71.13891",
  },
  {
    country: "Tuvalu",
    capital: "Funafuti",
    latitude: "-8.520066",
    longitude: "179.198128",
  },
  {
    country: "U.S. Virgin Islands",
    capital: "Charlotte Amalie",
    latitude: "18.3419",
    longitude: "-64.930701",
  },
  {
    country: "Uganda",
    capital: "Kampala",
    latitude: "0.347596",
    longitude: "32.58252",
  },
  {
    country: "Ukraine",
    capital: "Kiev",
    latitude: "50.4501",
    longitude: "30.5234",
  },
  {
    country: "United Arab Emirates",
    capital: "Abu Dhabi",
    latitude: "24.299174",
    longitude: "54.697277",
  },
  {
    country: "United Kingdom",
    capital: "London",
    latitude: "51.507351",
    longitude: "-0.127758",
  },
  {
    country: "United States",
    capital: "Washington",
    latitude: "38.907192",
    longitude: "-77.036871",
  },
  {
    country: "Uruguay",
    capital: "Montevideo",
    latitude: "-34.901113",
    longitude: "-56.164531",
  },
  {
    country: "Uzbekistan",
    capital: "Tashkent",
    latitude: "41.299496",
    longitude: "69.240073",
  },
  {
    country: "Vanuatu",
    capital: "Port Vila",
    latitude: "-17.733251",
    longitude: "168.327325",
  },
  {
    country: "Vatican City",
    capital: "Vatican City",
    latitude: "41.902179",
    longitude: "12.453601",
  },
  {
    country: "Venezuela",
    capital: "Caracas",
    latitude: "10.480594",
    longitude: "-66.903606",
  },
  {
    country: "Vietnam",
    capital: "Hanoi",
    latitude: "21.027764",
    longitude: "105.83416",
  },
  {
    country: "Wallis and Futuna",
    capital: "Mata-Utu",
    latitude: "-13.282509",
    longitude: "-176.176447",
  },
  {
    country: "Western Sahara",
    capital: "El Aai\u00fan",
    latitude: "27.125287",
    longitude: "-13.1625",
  },
  {
    country: "Yemen",
    capital: "Sana'a",
    latitude: "15.369445",
    longitude: "44.191007",
  },
  {
    country: "Zambia",
    capital: "Lusaka",
    latitude: "-15.387526",
    longitude: "28.322817",
  },
  {
    country: "Zimbabwe",
    capital: "Harare",
    latitude: "-17.825166",
    longitude: "31.03351",
  },
];
export default capitals;
