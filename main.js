var images=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg"];
var names=["Family Book","Sunil Kumar","Neetu Dhar","Niyati Kumar"];
var i=0;
function update(){
    i++;
    var number_of_family=3;
    if(i>3){
        i=0;
              }
              var updated_image=images[i];
              var updated_names=names[i];
              document.getElementById("Family").src=updated_image;
              document.getElementById("home").src=updated_names;
}