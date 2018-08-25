function studentsname(array){
    for(i = 0; i < array.length; i++){
        console.log(array[i]["name"] , array[i]["cohort"]);
    }
}

//  studentsname([
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ]);

function empmana(dict){
   
   for(var item in dict){
       console.log(item);
    
        for(var i = 0; i < dict[item].length; i++){
            var NameLength = dict[item][i].last_name.length+dict[item][i].first_name.length;
           
            console.log(i+1, dict[item][i].first_name , dict[item][i].last_name, NameLength);
        }
    
    }
}

empmana(
    {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 }
)


