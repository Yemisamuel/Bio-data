 const data = [ {
    id:1,
    name: "Tobi Joseph",
    age: 10,
    gender: "male",
    grade: 2,
    nationality: "Nigerian"
    },

{
id:2,
name: "Lizzy William",
age: 14,
gender: "female",
grade: 6,
nationality: "American"
},

{
id:3,    
name: "Oluwatobi Courage",
age: 12,
gender: "male",
grade: 2,
nationality: "Nigerian"
},
{
id:4,    
name: "Mary Sanni",
age: 8,
gender: "female",
grade: 2,
nationality: "Nigerian"
},

{
id:5, 
name: "Jack Wallow",
age: 13,
gender: "male",
grade: 4,
nationality: "American"
},

{
id:6,    
name: "Susan Hannon",
age: 10,
gender: "female",
grade: 2,
nationality: "Congolesse"
},

{
id:7,
name: "Mike Emmanuel",
age: 10,
gender: "male",
grade: 4,
nationality: "Nigerian"
},

{
id:8,
name: "Jane Mary",
age: 11,
gender: "male",
grade: 3,
nationality: "Gambian"
},

{
id:9,    
name: "Mommodu Gija",
age: 14,
gender: "male",
grade: 6,
nationality: "Gambian"
},

{
id:10,    
name: "Josephine Rina",
age: 10,
gender: "female",
grade: 2,
nationality: "Sierra leonean"
},

{
id:11,    
name: "Mark Jameson",
age: 12,
gender: "male",
grade: 4,
nationality: "Jamican"
},

{
id:12,    
name: "Luaren William",
age: 10,
gender: "female",
grade: 2,
nationality: "canadian"
},

{
id:13,    
name: "Chris Morgan",
age: 14,
gender: "male",
grade: 6,
nationality: "Canadian"
},

{
id:14,    
name: "Sara Nelson",
age: 13,
gender: "female",
grade: 6,
nationality: "Ghanian"
},
{
id:15,    
name: "Kelvin Smith",
age: 11,
gender: "male",
grade: 6,
nationality: "Nigerian"
},
    
]

const profiles = profileIterator(data);


showProfile();

function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: ()=>{
        return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done:false}: 
            {done:true}; 
        },

    }
}    
document.querySelector('#next',).addEventListener('click',showProfile)



function showProfile(){  
  let currentProfile = profiles.next().value
  currentProfile = profiles.prev().value  
if(currentProfile !== undefined){
  document.querySelector('#profileDisplay').innerHTML=`
  <ul class="list-group">
    <li class="list-group-item">ID: ${currentProfile.id}</li>
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    <li class="list-group-item">Grade: ${currentProfile.grade}</li>
    <li class="list-group-item">Nationality: ${currentProfile.nationality}</li>
  </ul>
  `
}else{
  window.location.reload()
}
}



