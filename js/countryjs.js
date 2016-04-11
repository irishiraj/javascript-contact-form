// Countries
var country_arr = new Array("Australia", "India","Pakistan");

// States
var s_a = new Array();
s_a[0]="";
s_a[1]="Australian Capital Territory|New South Wales|Northern Territory|Queensland|South Australia|Tasmania|Victoria|Western Australia";
s_a[2]="Andaman and Nicobar Islands|Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chandigarh|Chhattisgarh|Dadra and Nagar Haveli|Daman and Diu|Delhi|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu and Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|Orissa|Pondicherry|Punjab|Rajasthan|Sikkim|Tamil Nadu|Tripura|Uttar Pradesh|Uttaranchal|West Bengal";
s_a[3]="";

function populateStates( countryElementId, stateElementId ){

	var selectedCountryIndex = document.getElementById( countryElementId ).selectedIndex;
  	var stateElement = document.getElementById( stateElementId );

	stateElement.length=0;
	stateElement.options[0] = new Option('Select State','-1');
	stateElement.selectedIndex = 0;

	var state_arr = s_a[selectedCountryIndex].split("|");

	for (var i=0; i<state_arr.length; i++) {
		stateElement.options[stateElement.length] = new Option(state_arr[i],state_arr[i]);
	}
  // console.log(stateElement.length);
  // console.log(stateElement.options[1]);
  // //alert(stateElement.length);
    if (state_arr.length <= 2)
      {
        document.getElementById('state').classList.add('remove-it');
      }
    else
      {
        document.getElementById('state').classList.remove('remove-it');
      }

    if (state_arr.length > 2)
      {
        document.getElementById('state').classList.add('add-it');
      }
    else
      {
        document.getElementById('state').classList.remove('add-it');
      }
}

function populateCountries(countryElementId, stateElementId){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var countryElement = document.getElementById(countryElementId);

	countryElement.length=0;
	countryElement.options[0] = new Option('Select Country','-1');
	countryElement.selectedIndex = 0;
	for (var i=0; i<country_arr.length; i++) {
		countryElement.options[countryElement.length] = new Option(country_arr[i],country_arr[i]);
	}
  //console.log(country_arr.length);
	// Assigned all countries. Now assign event listener for the states.

	if( stateElementId ){
		countryElement.onchange = function(){
			populateStates( countryElementId, stateElementId );
		};
	}
}
