import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  TablerIcon,
} from '@tabler/icons';

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
] as LinksGroupProps[];

export const state = {
  series: [44, 55, 41],
  options: {
    legend: {
      show: true,
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
  },
};

export const state2 = {
  series: [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
};
export const state3 = {
  series: [
    {
      name: 'Cash Flow',
      data: [
        1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07, 5.8,
        2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1,
        -39.6, -37.6, -29.4, -21.4, -2.4,
      ],
    },
  ],
  options: {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -100,
              to: -46,
              color: '#F15B46',
            },
            {
              from: -45,
              to: 0,
              color: '#FEB019',
            },
          ],
        },
        columnWidth: '80%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      title: {
        text: 'Growth',
      },
      labels: {
        formatter: function (y) {
          return y.toFixed(0) + '%';
        },
      },
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2011-01-01',
        '2011-02-01',
        '2011-03-01',
        '2011-04-01',
        '2011-05-01',
        '2011-06-01',
        '2011-07-01',
        '2011-08-01',
        '2011-09-01',
        '2011-10-01',
        '2011-11-01',
        '2011-12-01',
        '2012-01-01',
        '2012-02-01',
        '2012-03-01',
        '2012-04-01',
        '2012-05-01',
        '2012-06-01',
        '2012-07-01',
        '2012-08-01',
        '2012-09-01',
        '2012-10-01',
        '2012-11-01',
        '2012-12-01',
        '2013-01-01',
        '2013-02-01',
        '2013-03-01',
        '2013-04-01',
        '2013-05-01',
        '2013-06-01',
        '2013-07-01',
        '2013-08-01',
        '2013-09-01',
      ],
      labels: {
        rotate: -90,
      },
    },
  },
};

export const state4 = {
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ],
  options: {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'South Korea',
        'Canada',
        'United Kingdom',
        'Netherlands',
        'Italy',
        'France',
        'Japan',
        'United States',
        'China',
        'Germany',
      ],
    },
  },
};

export const offers = [
  {
    title: 'Qlik Sense Developer (remote)',
    street: 'Poniatowskiego 1',
    city: 'Warszawa',
    country_code: 'PL',
    address_text: 'Poniatowskiego 1, Warszawa',
    marker_icon: 'analytics',
    workplace_type: 'remote',
    company_name: 'Beecommerce.pl',
    company_url: 'https://beecommerce.pl',
    company_size: '10',
    experience_level: 'mid',
    latitude: '52.2385847',
    longitude: '21.0469691',
    published_at: '2022-09-23T17:00:09.749Z',
    remote_interview: true,
    open_to_hire_ukrainians: true,
    id: 'beecommerce-pl-qlik-sense-developer-remote',
    display_offer: true,
    employment_types: [
      {
        type: 'b2b',
        salary: {
          from: 10000,
          to: 12000,
          currency: 'pln',
        },
      },
    ],
    company_logo_url:
      'https://bucket.justjoin.it/offers/company_logos/thumb/44087058ca137ccb14c2e812c2b4c71dff9b6812.png?1661791081',
    skills: [
      {
        name: 'Google Data Studio',
        level: 3,
      },
      {
        name: 'qlik',
        level: 3,
      },
      {
        name: 'MS Excel',
        level: 3,
      },
    ],
    remote: true,
    multilocation: [
      {
        city: 'Warszawa',
        street: 'Poniatowskiego 1',
        slug: 'beecommerce-pl-qlik-sense-developer-remote',
      },
    ],
    way_of_apply: 'form',
  },
  {
    title: 'Programista - .Net / ASP.net / C# ',
    street: 'Żelazna, 28/30',
    city: 'Warszawa',
    country_code: 'PL',
    address_text: 'Żelazna, 28/30, Warszawa',
    marker_icon: 'net',
    workplace_type: 'partly_remote',
    company_name: 'ZAPA',
    company_url: 'http://www.zapa.org.pl/',
    company_size: '20-50',
    experience_level: 'mid',
    latitude: '52.2300577',
    longitude: '20.9940236',
    published_at: '2022-09-23T17:00:09.749Z',
    remote_interview: true,
    open_to_hire_ukrainians: true,
    id: 'zapa-programista-net-ms-sql',
    display_offer: true,
    employment_types: [
      {
        type: 'b2b',
        salary: {
          from: 14000,
          to: 23000,
          currency: 'pln',
        },
      },
    ],
    company_logo_url:
      'https://bucket.justjoin.it/offers/company_logos/thumb/1f04cc0c34f26450cf47512bd917c9d4c2e877fe.jpg?1632749852',
    skills: [
      {
        name: 'Telerik',
        level: 3,
      },
      {
        name: 'ASP.NET',
        level: 3,
      },
      {
        name: 'T-SQL',
        level: 3,
      },
    ],
    remote: false,
    multilocation: [
      {
        city: 'Piaseczno',
        slug: 'zapa-programista-net-asp-net-c-piaseczno',
        street: 'Centrum',
      },
      {
        city: 'Białystok',
        slug: 'zapa-programista-net-asp-net-c-bialystok',
        street: 'Centrum',
      },
      {
        city: 'Rzeszów',
        slug: 'zapa-programista-net-asp-net-c-rzeszow',
        street: 'Centrum',
      },
      {
        city: 'Kraków',
        slug: 'zapa-programista-net-asp-net-c-krakow',
        street: 'Centrum',
      },
      {
        city: 'Kielce',
        slug: 'zapa-programista-net-asp-net-c-kielce',
        street: 'Centrum',
      },
      {
        city: 'Poznań',
        slug: 'zapa-programista-net-asp-net-c-poznan',
        street: 'Centrum',
      },
      {
        city: 'Katowice',
        slug: 'zapa-programista-net-asp-net-c-katowice',
        street: 'Centrum',
      },
      {
        city: 'Łódź',
        slug: 'zapa-programista-net-asp-net-c-lodz',
        street: 'Centrum',
      },
      {
        city: 'Wrocław',
        slug: 'zapa-programista-net-asp-net-c-wroclaw',
        street: 'Centrum',
      },
      {
        city: 'Koszalin',
        slug: 'zapa-programista-net-asp-net-c-koszalin',
        street: 'Centrum',
      },
      {
        city: 'Opole',
        slug: 'zapa-programista-net-asp-net-c-opole',
        street: 'Centrum',
      },
      {
        city: 'Olsztyn',
        slug: 'zapa-programista-net-asp-net-c-olsztyn',
        street: 'Centrum',
      },
      {
        city: 'Bydgoszcz',
        slug: 'zapa-programista-net-asp-net-c-bydgoszcz',
        street: 'Centrum',
      },
      {
        city: 'Lublin',
        slug: 'zapa-programista-net-asp-net-c-lublin',
        street: 'Centrum',
      },
      {
        city: 'Gdańsk',
        slug: 'zapa-programista-net-asp-net-c',
        street: 'Centrum',
      },
      {
        city: 'Szczecin',
        slug: 'zapa-programista-net-asp-net-c-szczecin',
        street: 'Centrum',
      },
      {
        city: 'Płońsk',
        slug: 'zapa-programista-net-asp-net-c-plonsk',
        street: 'Centrum',
      },
      {
        city: 'Warszawa',
        slug: 'zapa-programista-net-ms-sql',
        street: 'Żelazna, 28/30',
      },
    ],
    way_of_apply: 'redirect',
  },
  {
    title: 'Programista - .Net / ASP.net / C# /',
    street: 'Centrum',
    city: 'Zielona Góra',
    country_code: 'PL',
    address_text: 'Centrum, Zielona Góra',
    marker_icon: 'net',
    workplace_type: 'partly_remote',
    company_name: 'ZAPA',
    company_url: 'http://www.zapa.org.pl/',
    company_size: '20-50',
    experience_level: 'mid',
    latitude: '51.9356214',
    longitude: '15.5061862',
    published_at: '2022-09-23T17:00:09.749Z',
    remote_interview: true,
    open_to_hire_ukrainians: true,
    id: 'zapa-programista-net-asp-net-c-zielona-gora',
    display_offer: true,
    employment_types: [
      {
        type: 'b2b',
        salary: {
          from: 14000,
          to: 23000,
          currency: 'pln',
        },
      },
    ],
    company_logo_url:
      'https://bucket.justjoin.it/offers/company_logos/thumb/b6127d3b1e95f815688724d5814cd50de1727883.jpg?1655800078',
    skills: [
      {
        name: 'Telerik',
        level: 3,
      },
      {
        name: 'ASP.NET',
        level: 3,
      },
      {
        name: 'T-SQL',
        level: 3,
      },
    ],
    remote: false,
    multilocation: [
      {
        city: 'Zielona Góra',
        street: 'Centrum',
        slug: 'zapa-programista-net-asp-net-c-zielona-gora',
      },
    ],
    way_of_apply: 'redirect',
  },
  {
    title: 'Business (Software) Analyst',
    street: 'Puławska 182',
    city: 'Warszawa',
    country_code: 'PL',
    address_text: 'Puławska 182, Warszawa',
    marker_icon: 'analytics',
    workplace_type: 'remote',
    company_name: 'Future Mind',
    company_url: 'https://www.futuremind.com/',
    company_size: '130+',
    experience_level: 'mid',
    latitude: '52.1816941',
    longitude: '21.0216558',
    published_at: '2022-09-23T17:00:09.749Z',
    remote_interview: true,
    open_to_hire_ukrainians: false,
    id: 'future-mind-business-software-analyst',
    display_offer: true,
    employment_types: [
      {
        type: 'b2b',
        salary: {
          from: 12000,
          to: 17000,
          currency: 'pln',
        },
      },
    ],
    company_logo_url:
      'https://bucket.justjoin.it/offers/company_logos/thumb/07e76242364573188faa20818e72854f6e98d293.jpg?1661879040',
    skills: [
      {
        name: 'Agile/Scrum',
        level: 3,
      },
      {
        name: 'English',
        level: 4,
      },
      {
        name: 'BPMN',
        level: 4,
      },
    ],
    remote: true,
    multilocation: [
      {
        city: 'Warszawa',
        street: 'Puławska 182',
        slug: 'future-mind-business-software-analyst',
      },
    ],
    way_of_apply: 'form',
  },
  {
    title: 'Senior Qlik Sense Developer (remote)',
    street: 'Poniatowskiego 1',
    city: 'Warszawa',
    country_code: 'PL',
    address_text: 'Poniatowskiego 1, Warszawa',
    marker_icon: 'analytics',
    workplace_type: 'remote',
    company_name: 'Beecommerce.pl',
    company_url: 'https://beecommerce.pl',
    company_size: '10',
    experience_level: 'senior',
    latitude: '52.2385847',
    longitude: '21.0469691',
    published_at: '2022-09-23T17:00:09.749Z',
    remote_interview: true,
    open_to_hire_ukrainians: true,
    id: 'beecommerce-pl-senior-qlik-sense-developer-remote',
    display_offer: true,
    employment_types: [
      {
        type: 'b2b',
        salary: {
          from: 13000,
          to: 17000,
          currency: 'pln',
        },
      },
    ],
    company_logo_url:
      'https://bucket.justjoin.it/offers/company_logos/thumb/bf7f804c092789be5d82f46b8a91308f8a2f8423.png?1661791373',
    skills: [
      {
        name: 'SQL',
        level: 5,
      },
      {
        name: 'qlik',
        level: 5,
      },
      {
        name: 'MS Excel',
        level: 5,
      },
    ],
    remote: true,
    multilocation: [
      {
        city: 'Warszawa',
        street: 'Poniatowskiego 1',
        slug: 'beecommerce-pl-senior-qlik-sense-developer-remote',
      },
    ],
    way_of_apply: 'form',
  },
  {
    title: 'Junior Website Administrator',
    street: 'Marynarska',
    city: 'Warszawa',
    country_code: 'PL',
    address_text: 'Marynarska, Warszawa',
    marker_icon: 'admin',
    workplace_type: 'partly_remote',
    company_name: 'LeasingTeam Professional',
    company_url: 'https://ltprofessional.pl/',
    company_size: '50',
    experience_level: 'junior',
    latitude: '52.1796518',
    longitude: '20.9949968',
    published_at: '2022-09-23T17:00:09.749Z',
    remote_interview: true,
    open_to_hire_ukrainians: false,
    id: 'leasingteam-professional-junior-website-administrator',
    display_offer: true,
    employment_types: [
      {
        type: 'permanent',
        salary: null,
      },
    ],
    company_logo_url:
      'https://bucket.justjoin.it/offers/company_logos/thumb/6c49fef7d222f05235be9045efc18b84e18e63b6.png?1663087665',
    skills: [
      {
        name: 'JS',
        level: 1,
      },
      {
        name: 'HTML',
        level: 1,
      },
      {
        name: 'CSS',
        level: 1,
      },
    ],
    remote: false,
    multilocation: [
      {
        city: 'Warszawa',
        street: 'Marynarska',
        slug: 'leasingteam-professional-junior-website-administrator',
      },
    ],
    way_of_apply: 'form',
  },
  {
    title: 'Embedded C Developer',
    street: 'Centrum',
    city: 'Warszawa',
    country_code: 'PL',
    address_text: 'Centrum, Warszawa',
    marker_icon: 'c',
    workplace_type: 'remote',
    company_name: 'Tedee',
    company_url: 'http://www.tedee.com/',
    company_size: '11-50',
    experience_level: 'mid',
    latitude: '52.2302091',
    longitude: '21.0113922',
    published_at: '2022-09-23T17:00:09.749Z',
    remote_interview: true,
    open_to_hire_ukrainians: false,
    id: 'tedee-embedded-c-developer-warszawa',
    display_offer: true,
    employment_types: [
      {
        type: 'permanent',
        salary: null,
      },
      {
        type: 'b2b',
        salary: null,
      },
    ],
    company_logo_url:
      'https://bucket.justjoin.it/offers/company_logos/thumb/e6c159070158f3917247178dc615f0b17ab19948.png?1661790205',
    skills: [
      {
        name: 'ARM',
        level: 3,
      },
      {
        name: 'BLE',
        level: 3,
      },
      {
        name: 'C/C++',
        level: 3,
      },
    ],
    remote: true,
    multilocation: [
      {
        city: 'Kraków',
        slug: 'tedee-embedded-c-developer-bd7480ab-3eeb-4546-95fc-43eac3dabb92',
        street: 'Centrum',
      },
      {
        city: 'Poznań',
        slug: 'tedee-embedded-c-developer-poznan',
        street: 'Centrum',
      },
      {
        city: 'Wrocław',
        slug: 'tedee-embedded-c-developer-0cde06e2-c808-4a69-a312-2bbad3325bb3',
        street: 'Centrum',
      },
      {
        city: 'Łódź',
        slug: 'tedee-embedded-c-developer-lodz',
        street: 'Centrum',
      },
      {
        city: 'Warszawa',
        slug: 'tedee-embedded-c-developer-warszawa',
        street: 'Centrum',
      },
    ],
    way_of_apply: 'redirect',
  },
  {
    title: 'Młodszy administrator stron www',
    street: 'Marynarska',
    city: 'Warszawa',
    country_code: 'PL',
    address_text: 'Marynarska, Warszawa',
    marker_icon: 'admin',
    workplace_type: 'partly_remote',
    company_name: 'LeasingTeam Professional',
    company_url: 'https://ltprofessional.pl/',
    company_size: '50',
    experience_level: 'junior',
    latitude: '52.1796518',
    longitude: '20.9949968',
    published_at: '2022-09-23T17:00:09.749Z',
    remote_interview: true,
    open_to_hire_ukrainians: false,
    id: 'leasingteam-professional-mlodszy-administrator-stron-www',
    display_offer: true,
    employment_types: [
      {
        type: 'permanent',
        salary: null,
      },
    ],
    company_logo_url:
      'https://bucket.justjoin.it/offers/company_logos/thumb/c04ac746b24a554d8c4d0e09513b5768a5b5a27a.png?1663087944',
    skills: [
      {
        name: 'JS',
        level: 1,
      },
      {
        name: 'CSS',
        level: 1,
      },
      {
        name: 'HTML',
        level: 1,
      },
    ],
    remote: false,
    multilocation: [
      {
        city: 'Warszawa',
        street: 'Marynarska',
        slug: 'leasingteam-professional-mlodszy-administrator-stron-www',
      },
    ],
    way_of_apply: 'form',
  },
  {
    title: 'C++ Developer/Data Engineer',
    street: 'Miedziana 3',
    city: 'Warszawa',
    country_code: 'PL',
    address_text: 'Miedziana 3, Warszawa',
    marker_icon: 'c',
    workplace_type: 'partly_remote',
    company_name: 'QED Software',
    company_url: 'http://qed.pl',
    company_size: '60',
    experience_level: 'mid',
    latitude: '52.2281583',
    longitude: '20.9908024',
    published_at: '2022-09-23T17:00:09.749Z',
    remote_interview: true,
    open_to_hire_ukrainians: false,
    id: 'qed-software-c-developer-data-engineer-warszawa',
    display_offer: true,
    employment_types: [
      {
        type: 'permanent',
        salary: {
          from: 10000,
          to: 18000,
          currency: 'pln',
        },
      },
    ],
    company_logo_url:
      'https://bucket.justjoin.it/offers/company_logos/thumb/51ea7316a73c29edb042bc3aa81802b61e55d8e6.png?1661790064',
    skills: [
      {
        name: 'Mathematics',
        level: 3,
      },
      {
        name: 'Memory&CPU optimizations',
        level: 3,
      },
      {
        name: 'C++14 and above',
        level: 4,
      },
    ],
    remote: false,
    multilocation: [
      {
        city: 'Warszawa',
        street: 'Miedziana 3',
        slug: 'qed-software-c-developer-data-engineer-warszawa',
      },
    ],
    way_of_apply: 'form',
  },
  {
    title: 'System developer',
    street: 'Wojska Polskiego 18B',
    city: 'Prabuty',
    country_code: 'PL',
    address_text: 'Wojska Polskiego 18B, Prabuty',
    marker_icon: 'net',
    workplace_type: 'office',
    company_name: 'Orbit  One',
    company_url: 'http://www.orbitone.eu',
    company_size: '700',
    experience_level: 'mid',
    latitude: '53.75608',
    longitude: '19.212509',
    published_at: '2022-09-23T17:00:09.749Z',
    remote_interview: true,
    open_to_hire_ukrainians: false,
    id: 'orbit-one-system-developer',
    display_offer: true,
    employment_types: [
      {
        type: 'permanent',
        salary: {
          from: 12000,
          to: 15000,
          currency: 'pln',
        },
      },
    ],
    company_logo_url:
      'https://bucket.justjoin.it/offers/company_logos/thumb/337e7e40967eebca49d020a2cdec211ec8a66e69.jpg?1662029739',
    skills: [
      {
        name: 'WebService',
        level: 3,
      },
      {
        name: 'Web Applications',
        level: 3,
      },
      {
        name: 'Java',
        level: 3,
      },
    ],
    remote: false,
    multilocation: [
      {
        city: 'Prabuty',
        slug: 'orbit-one-system-developer',
        street: 'Wojska Polskiego 18B',
      },
      {
        city: 'Grudziądz',
        slug: 'orbit-one-system-developer-grudziadz',
        street: 'Centrum',
      },
      {
        city: 'Kwidzyn',
        slug: 'orbit-one-system-developer-kwidzyn',
        street: 'Centrum',
      },
    ],
    way_of_apply: 'form',
  },
];
