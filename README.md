#  Unit Conversion (Chrome extension)

##  Description

Unit Conversion is a Google Chrome extension that allows you to easily convert units of measurement from the Metric system to the Imperial system. This extension is perfect for those who need to work with different units of measurement on a daily basis.


## Features
- Convert length units: meters/feet to feet/meters
- Convert weight units: kilograms/pounds to pounds/kilograms   
- Convert volume units: liters/gallons to gallons/liters   
- The ability to add your own units of measurement

## How to Use

1. Install the files
2. Open Google Chrome and open the extensions tab and then Manage extensions
3. Turn on developer mode
4. Click "Load unpacked" and upload project file
5. The extension now works locally for your Google chrome

## Technical Detail
If  you  need to use  more  units of measurement,  then  change the `units.js`  by  adding an object  there  in the format:
```
{
	unit: "Name of the unit", // Length
	metric: "Name in the metric system", // Meters
	imperial: "Name in the imperial system", // Feet
	metToImp:  The number of metric units in the imperial, // 3.28084
	impToMet:  The number of metric units in the imperial // 0.3048
} 
```

## Contributing

If you want to contribute to the project, please create a fork of the repository, make your changes and send a pool request. I will be glad to receive your suggestions and improvements!

## License

This extension is licensed under the MIT License. See the [LICENSE](https://github.com/Just-Danek/Unit-conversion/blob/main/LICENSE.txt) file for more information.
<br>
```
unit-conversion/
├── icons/
│ ├── 16-icon.png
│ ├── 32-icon.png
│ ├── 48-icon.png
│ ├── 128-icon.png
│ └── icon.png
├── popup/
│ ├── index.css
│ ├── index.html
│ └── index.js
├── scripts/
│ └── units.js
├── LICENSE.txt
├── manifest.json
└── README.md
```
