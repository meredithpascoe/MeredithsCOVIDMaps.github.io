## COVID-19 Web Map Applications

Two web maps were created for this lab; one depicting the total number of COVID-19 cases for each US state, and one depicting the rate of COVID-19 cases for each US state. 

![map1](img/Map1.PNG)
![map2](img/Map2.PNG)

Both maps were created using ArcGIS Pro and ArcGIS Online. In order to make map 1, an excel file listing the total number COVID-19 cases for each US state as of April 2022 was acquired from the New York Times. This excel spreadsheet was exported as a CSV file and joined to a US state feature class based on state name in ArcGIS Pro. The map was then symbolized with graduated colors using the "Total COVID-19 Cases" field and shared to arcgis online where it was saved as a webmap. Lastly, an html was created using ArcGIS Online's "Embed in Website" option.
