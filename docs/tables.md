## Funkcje fragmentów tabel

1. **tableColumns**:
	( a ) `title`, `dataIndex`, `align` - dane tekstowe generowane ze zmiennych (obecnie w obiektach);
	( b ) `render` - metody generujące elementy DOM na podstawie danych wejściowych.
2. **tableData** - metoda mapująca dane z bazy, zwracająca je w formie wykorzystywanej zgodnie w punkcie 1.

ad. 1 
		
		{
				// columns structure (static) - (a)
			title: col_name.title,
			dataIndex: col_name.dataIndex,
			align: col_name.align,
				
				// tableData (dynamic) - (b)
			render: name => (<p>name</p>)
		}

Schemat układu:
		
		(a) Table.js
			- API (GET),
			- renderData() <=> map() => tableData,
			- <Table> => tableData + columnsData;
		(b) DataGenerators.js
			- generate() <=> DOM
			- columnsStructure = [{ }] => columnsData
		(c) GeneralData.js => DataGenerators.js 
			(pomocnicze zmienne)
		
		- źródło danych - (a)
		- struktura tabeli - (b)
		- składanie tabeli - (a)

// Szkic schematu