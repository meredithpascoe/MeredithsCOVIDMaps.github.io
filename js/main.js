 mapboxgl.accessToken =
            'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/light-v10', // style URL
            zoom: 3, // starting zoom
            center: [-100, 40] // starting center
        });

        // load data and add as layer
        async function geojsonFetch() {
            let response = await fetch('assets/USCOVIDCases_042122.geojson');
            let cb_2018_us_state_500k_Projec = await response.json();

            map.on('load', function loadingData() {
                map.addSource('cb_2018_us_state_500k_Projec', {
                    type: 'geojson',
                    data: cb_2018_us_state_500k_Projec
                });
                map.addLayer({
                    'id': 'cb_2018_us_state_500k_Projec-layer',
                    'type': 'fill',
                    'source': 'cb_2018_us_state_500k_Projec',
                    'paint': {
                        'fill-color': [
                            'step',
                            ['get', 'COVIDCases'],
                            '#FFEDA0',   // stop_output_0
                            260735,          // stop_input_0
                            '#FED976',   // stop_output_1
                            499619,          // stop_input_1
                            '#FEB24C',   // stop_output_2
                            772857,          // stop_input_2
                            '#FD8D3C',   // stop_output_3
                            1298880,         // stop_input_3
                            '#FC4E2A',   // stop_output_4
                            1599011,         // stop_input_4
                            '#E31A1C',   // stop_output_5
                            2235034,         // stop_input_5
                            '#BD0026',   // stop_output_6
                            3112315,        // stop_input_6
                            "#800026"    // stop_output_7
                        ],
                        'fill-outline-color': '#BBBBBB',
                        'fill-opacity': 0.7,
                    }
                });

                const layers = [
                    '121193-249901',
                    '260735-479077',
                    '499619-761356',
                    '772857-1235893',
                    '1298880-1480490',
                    '1599011-2019174',
                    '2235034-2803378',
                    '3112315 and more'
                ];
                const colors = [
                    '#FF573370',
                    '#FED97670',
                    '#FEB24C70',
                    '#FD8D3C70',
                    '#FC4E2A70',
                    '#E31A1C70',
                    '#BD002670',
                    '#80002670'
                ];

                // create legend
                const legend = document.getElementById('legend');
                legend.innerHTML = "<b>Total State COVID Cases<br>(as of April 2022)</b><br><br>";


                layers.forEach((layer, i) => {
                    const color = colors[i];
                    const item = document.createElement('div');
                    const key = document.createElement('span');
                    key.className = 'legend-key';
                    key.style.backgroundColor = color;

                    const value = document.createElement('span');
                    value.innerHTML = `${layer}`;
                    item.appendChild(key);
                    item.appendChild(value);
                    legend.appendChild(item);
                });
            });

            map.on('mousemove', ({point}) => {
                const state = map.queryRenderedFeatures(point, {
                    layers: ['cb_2018_us_state_500k_Projec-layer']
                });
                document.getElementById('text-escription').innerHTML = state.length ?
                    `<h3>${state[0].properties.Name}</h3><p><strong><em>${state[0].properties.COVIDCases}</strong> Total COVID Cases</em></p>` :
                    `<p>Hover over a state!</p>`;
            });
        }

        geojsonFetch();
    </script>

</body>

</html>
