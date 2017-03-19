----------------
Generelt:
----------------
	CRUD:
		C
		R
		U
		D
		-"- per item
		
	Omskrive til flere views
	Begynde at bruge UI-routing istedet for angular-route.

	Features:
		search.html:
			Søgning ved tryk på enter
			Spinner ved ventetid
			
		add.html:
			Sætte værdier med datamodel i stedet for html attributter

			

----------------			
HERTIL:
----------------
https://ui-router.github.io/
	
	
	
----------------
Siden sidst:
----------------
	$http omskrevet til promises i begge services


----------------
Spørgsmål:
----------------
Kommunikation mellem directives ?
	Gennem en service, parent controller/scope eller noget tredje ?
	Bruge service pga. decoupling.

Ved fejl i query (eks. forkert apiKey) returnerer wine.com status = 200 & data.Status.ReturnCode = 300
	Hvordan bør man håndtere det ?
	API´et burde vel returnere en fejlkode i stedet for 200 ?

----------------
Næste gang
----------------
Component - altid E
Directive - Angular 2 - A

Eksempel på service - kommunikation mellem directives
https://github.com/skybrud/sky-form/blob/master/skyform-fields.service.ts


Omskrive til Angular components
	https://docs.angularjs.org/guide/component
	
	https://www.youtube.com/watch?v=AMwjDibFxno
	
	Talk om components
	
	https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.vqzo3cy8m
