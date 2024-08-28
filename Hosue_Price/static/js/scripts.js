
    const semtler = [
            // Add all suburbs here
            'South Lake', 'Wandi', 'Camillo', 'Bellevue', 'Lockridge', 'Mount Richon', 'Hilbert', 'Waikiki', 'Hamersley', 'Bayswater', 'Carmel', 'Butler', 'Balga', 'Hammond Park', 'Wattle Grove', 'Bull Creek', 'Bullsbrook', 'Maida Vale', 'Koongamia', 'Mount Nasura', 'Forrestdale', 'Atwell', 'Ashby', 'Woodbridge', 'Bicton', 'Singleton', 'South Guildford', 'Armadale', 'Kenwick', 'Hamilton Hill', 'Port Kennedy', 'Roleystone', 'Glen Forrest', 'Secret Harbour', 'Herne Hill', 'Gwelup', 'Harrisdale', 'North Fremantle', 'Quinns Rocks', 'Spearwood', 'Parkwood', 'Tapping', 'Thornlie', 'Baldivis', 'Kensington', 'Kiara', 'Menora', 'Southern River', 'Bibra Lake', 'Swanbourne', 'The Vines', 'Stratton', 'North Beach', 'Haynes', 'Madeley', 'Wembley Downs', 'Bentley', 'Manning', 'Warwick', 'Queens Park', 'Medina', 'Kalamunda', 'Merriwa', 'Aubin Grove', 'Karrinyup', 'Gooseberry Hill', 'Darch', 'Hillarys', 'Alexander Heights', 'St James', 'Bassendean', 'Ardross', 'Bedfordale', 'Success', 'Ballajura', 'Leda', 'Bateman', 'Eglinton', 'Orelia', 'Beckenham', 'Edgewater', 'Helena Valley', 'East Cannington', 'Marmion', 'Maddington', 'Mount Claremont', 'Greenwood', 'Beechboro', 'Wembley', 'Iluka', 'Mundaring', 'Salter Point', 'Mount Pleasant', 'Warnbro', 'Byford', 'Willagee', 'Bertram', 'Mullaloo', 'Woodlands', 'Wellard', 'Rossmoyne', 'Beaconsfield', 'Brentwood', 'Carine', 'Beldon', 'Hillman', 'Swan View', 'Bennett Springs', 'Claremont', 'Mount Hawthorn', 'Ferndale', 'Boya', 'Aveley', 'Midland', 'High Wycombe', 'Kinross', 'Guildford', 'North Coogee', 'Gnangara', 'Ascot', 'Osborne Park', 'Karragullen', 'Sinagra', 'Darlington', 'Redcliffe', 'Pearsall', 'Huntingdale', 'Dayton', 'Morley', 'Balcatta', 'Kwinana Town Centre', 'City Beach', 'Two Rocks', 'Kallaroo', 'Banksia Grove', 'Noranda', 'Yangebup', 'Mindarie', 'Calista', 'Marangaroo', 'Mount Helena', 'Duncraig', 'Kewdale', 'Shoalwater', 'Melville', 'Leeming', 'Walliston', 'Kardinya', 'Landsdale', 'Serpentine', 'Brookdale', 'Coolbellup', 'Jandakot', 'Darling Downs', 'Hilton', 'Parkerville', 'Stoneville', 'Coogee', 'Mirrabooka', 'Subiaco', 'Lesmurdie', 'Jane Brook', 'Mahogany Creek', 'Middle Swan', 'Forrestfield', 'South Fremantle', 'Rockingham', 'Dalkeith', 'Cannington', 'Seville Grove', 'Safety Bay', 'Mosman Park', 'Ocean Reef', 'Jolimont', 'Carramar', 'Viveash', 'Sawyers Valley', 'Connolly', 'Joondalup', 'Nedlands', 'Ridgewood', 'Myaree', 'Applecross', 'Midvale', 'Ashfield', 'Clarkson', 'Mardella', 'Burns Beach', 'Rivervale', 'Craigie', 'Langford', 'Hocking', 'Parmelia', 'Piara Waters', 'Baskerville', 'Cooloongup', 'Nollamara', 'Palmyra', 'Waterford', 'Currambine', 'Beeliar', 'Sorrento', 'Churchlands', 'Woodvale', 'Trigg', 'Stirling', 'Alkimos', 'Dianella', 'Bickley', 'Heathridge', 'Cockburn Central', 'Mundijong', 'Willetton', 'Westminster', 'Wilson', 'Brabham', 'Booragoon', 'Caversham', 'Samson', 'Ellenbrook', 'Wanneroo', 'Orange Grove', 'Padbury', 'White Gum Valley', 'Yokine', 'Cloverdale', 'Floreat', 'Canning Vale', 'Burswood', 'North Lake', 'Koondoola', 'Kingsley', 'Karawara', 'West Perth', 'Attadale', 'Crawley', 'East Victoria Park', 'Joondanna', 'Lynwood', 'Tuart Hill', 'South Perth', 'Greenmount', 'Highgate', 'Scarborough', 'Watermans Bay', 'Inglewood', 'Cottesloe', 'Maylands', 'East Fremantle', 'Leederville', 'Shelley', 'Daglish', 'Como', 'Mount Lawley', 'Glendalough', 'Riverton', 'Murdoch', 'Eden Hill', 'Girrawheen', 'Kelmscott', 'Doubleview', 'Champion Lakes', 'West Leederville', 'Coolbinia', 'Yanchep', 'Henley Brook', 'Peppermint Grove', 'Karnup', 'Hazelmere', 'Wooroloo', 'Alfred Cove', 'Bedford', 'Jarrahdale', 'Jindalee', 'Lathlain', 'Embleton', 'Martin', 'Oakford', 'Brigadoon', 'Winthrop', 'Fremantle', 'North Perth', 'Cardup', 'Gosnells', 'Gidgegannup', 'Shenton Park', 'Innaloo', "O'Connor", 'Pickering Brook', 'Whitby', 'Golden Bay', 'West Swan', 'Hovea', 'Northbridge', 'Millendon', 'Casuarina', 'Upper Swan', 'Mariginiup', 'Victoria Park', 'Oldbury', 'Chidlow', 'Carabooda', 'Belhus', 'Belmont', 'East Perth', 'Kwinana Beach', 'Keysbrook', 'Carlisle', 'Anketell', 'Banjup', 'Jandabup', 'Wungong', 'Wattleup', 'Hopeland', 'Neerabup', 'Treeby', 'Munster', 'Hope Valley', 'Welshpool', 'Wangara', 'Naval Base'
        ];

        document.addEventListener('DOMContentLoaded', function () {
            const semtSelect = document.getElementById('semt');
            semtler.forEach(semt => {
                const option = document.createElement('option');
                option.value = semt;
                option.textContent = semt;
                semtSelect.appendChild(option);
            });
        });

      function tahminYap() {
    const form = document.getElementById('prediction-form');
    const formData = new FormData(form);
    const jsonData = {};

    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ağ hatası');
        }
        return response.json();
    })
    .then(data => {
        if (data.error) {
            document.getElementById('result').textContent = data.error;
        } else {
            document.getElementById('result').textContent = `Tahmini Fiyat: ${input_features }`;
        }
    })
    .catch(error => {
        console.error('Hata:', error);
        document.getElementById('result').textContent = 'Tahmin yapılamadı. Lütfen tekrar deneyin.';
    });
}
