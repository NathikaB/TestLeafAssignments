let genderType="female";
function PrintGender()
{
    let color="brown"
    if(genderType=="female")
        {
         var age=30
        let color="pink"
        console.log("inside",color); 

    }
    console.log("outside",age);
    console.log("outside",color);
    
}

    PrintGender()
    console.log("genderType", genderType)
    genderType="male"
    PrintGender()
    console.log("genderType", genderType)

