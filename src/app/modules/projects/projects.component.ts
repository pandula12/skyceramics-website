import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects = [
    { name: 'VIYATHPURA – UDA PANNIPITIYA', image: 'VIYATHPURA-UDA-PANNIPITIYA.jpg' },
    { name: 'VIYATHPURA – UDA KOTTAWA', image: 'VIYATHPURA-UDA-KOTTAWA.jpg' },
    { name: 'LUXE HIGHWAY RESI HOMELAND', image: 'LUXE-HIGHWAY-RESI-HOMELAND.jpg' },
    { name: 'THE BEACH FRONT PRIME LAND', image: 'THE-BEACH-FRONT-PRIME-LAND.jpg' },
    { name: '616 PRIME ETHULKOTTE', image: '616-PRIME-ETHULKOTTE.jpg' },
    { name: '306 PRIME NUGEGODA', image: '306-PRIME-NUGEGODA.jpg' },
    { name: '65 PRIME NAWALA', image: '65-PRIME-NAWALA.jpg' },
    { name: '298 PRIME NUGEGODA', image: '298-PRIME-NUGEGODA.jpg' },
    { name: 'PRIME LIBRA KOSWATTE', image: 'PRIME-LIBRA-KOSWATTE.jpg' },
    { name: 'PRIME ETHULKOTTE', image: 'PRIME-ETHULKOTTE.jpg' },
    { name: 'PRIME RESIDENCIES PAGODA', image: 'PRIME-RESIDENCIES-PAGODA.jpg' },
    { name: 'TEMPLER’S SQUARE KELSEY HOMES', image: 'TEMPLERS-SQUARE-KELSEY-HOMES.jpg' },
    { name: 'PRIME RESIDENCIES PANADURA', image: 'PRIME-RESIDENCIES-PANADURA.jpg' },
    { name: '194 PRIME NUGEGODA', image: '194-PRIME-NUGEGODA.jpg' },
    { name: 'PRIME RESIDENCIES CASTLE STREET', image: 'PRIME-RESIDENCIES-CASTLE-STREET.jpg' },
    { name: 'PRIME WRENDALE RAJAGIRIYA', image: 'PRIME-WRENDALE-RAJAGIRIYA.jpg' },
    { name: 'PRIME SPLENDOR RAJAGIRIYA', image: 'PRIME-SPLENDOR-RAJAGIRIYA.jpg' },
    { name: 'TREASURE TROVE HOMELANDS', image: 'TREASURE-TROVE-HOMELANDS.jpg' },
    { name: 'PRIME RESIDENCIES MAHABAGE', image: 'PRIME-RESIDENCIES-MAHABAGE.jpg' },
    { name: 'PRIME RESIDENCIES KANDEWATTE', image: 'PRIME-RESIDENCIES-KANDEWATTE.jpg' },
    { name: 'PRIME VILLAS MAHARAGAMA', image: 'PRIME-VILLAS-MAHARAGAMA.jpg' },
    { name: 'PRIME RESIDENCIES HABARAKADA', image: 'PRIME-RESIDENCIES-HABARAKADA.jpg' },
    { name: 'PRIME RESIDENCIES PELAWATTA', image: 'PRIME-RESIDENCIES-PELAWATTA.jpg' },
    { name: 'PRIME RESIDENCIES THALAWATHUGODA', image: 'PRIME-RESIDENCIES-THALAWATHUGODA.jpg' },
    { name: 'PRIME RESIDENCIES PALLEKELE', image: 'PRIME-RESIDENCIES-PALLEKELE.jpg' },
    { name: 'PRIME BAUDDHALOKA MW - COLOMBO 7', image: 'PRIME-BAUDDHALOKA-MW-COLOMBO-7.jpg' },
    { name: 'PRIME RESIDENCIES MALABE', image: 'PRIME-RESIDENCIES-MALABE.jpg' },
    { name: 'K100 PRIME KIRIBATHGODA', image: 'K100-PRIME-KIRIBATHGODA.jpg' },
    { name: 'ARIYANA RESORT HOMELAND', image: 'ARIYANA-RESORT-HOMELAND.jpg' },
    { name: 'HIGHNESS HOMELAND RAJAGIRIYA', image: 'HIGHNESS-HOMELAND-RAJAGIRIYA.jpg' },
    { name: 'ARALIYA RED HOTEL NUWARA ELIYA', image: 'ARALIYA-RED-HOTEL-NUWARA-ELIYA.jpg' },
    { name: 'ARALIYA HOTEL & RESORT UNAWATUNA', image: 'ARALIYA-HOTEL-&-RESORT-UNAWATUNA.jpg' },
    { name: 'HEAVEN SEVEN HOTEL NUWARA ELIYA', image: 'HEAVEN-SEVEN-HOTEL-NUWARA-ELIYA.jpg' },
    { name: 'LABEEMA HOSPITAL MATARA', image: 'LABEEMA-HOSPITAL-MATARA.jpg' },
    { name: 'MARKET CITY CENTER KURUNEGALA - SATHUTA', image: 'MARKET-CITY-CENTER-KURUNEGALA-SATHUTA.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
