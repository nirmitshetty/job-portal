//import React from 'react';
//import axios from 'axios';

function postProfile(){
    console.log("entered here");
    var element_id = document.getElementById("uci_netid").value;
	var element_fname = document.getElementById("first_name").value;
	var element_lname = document.getElementById("last_name").value;
	var element_g = document.getElementById("gender").value;
	var element_d = document.getElementById("disability").value;
	var element_year = document.getElementById("year").value;
	var element_major = document.getElementById("major").value;
	var element_v = document.getElementById("veteran").value;
	var element_we = document.getElementById("work").value;
	var element_skills = document.getElementById("skills").value;
	var element_wa = document.getElementById("work_authorisation").value;
	var element_race = document.getElementById("race_dropdown_container").value;
	var element_work_sponsorship=document.getElementById("work_sponsorship").value;
//    console.log(element_year);
let payload = { uci_netid : element_id,
            first_name : element_fname,
            last_name: element_lname,
            major: element_major,
            year : element_year,
            graduation_year : element_year,
            gender : element_g,
           // sex : element_g,
            ethnicity : element_race,
            disability : element_d,
            veteran : element_v,
            work_ex : element_we,
            skills : element_skills,
            //work_auth : element_wa,
            work_sponsorship : element_work_sponsorship,
        };

//console.log(element_race);
//console.log('element_fname');
//let res = await axios.post('http://127.0.0.1:5000/profile/', payload);

axios({
    url : 'http://127.0.0.1:5000/createProfile/',
    method : 'POST',
    data : payload
})
    .then(() =>{
        console.log('Data sent to server');
    })
    .catch(()=>{
        console.log('Internal server error !!');
    });;

};
