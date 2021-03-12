
fuction onloaderFunc()
{
    $(".seatStructu/+0re*").prop("disabled", true);
    $("displayBoxes*").prop("disabled", true);


}
fuction takeData()
{
    if (( $("#username").val().length== 0 ) ||(
        $("#Numbers").val().length == 0 ))
        {
            alert("enter name and number of the seat");

        }
        else
        {
            $(".inputForm*").prop("disabled",true);
            $(".seatStructure*").prop("disabled",false);
            document.getElementById("notification").innerHTML="<b"
            style='margin-bottom:0px;background:yellow;'>"Please Select your Seats Now!</b>";
        }
    )
}
function updateTextArea() {
    if ($("input:checked").length==($("Numseats").val()))
    {
        $(".seatStructure*").prop("disabled", true);
        var allNumberVals = [];
        var allNumberVals = [];
        var allseatsVals = [];
        allNumbeVals.push($("username").val());
        allNumberVals.push($("Numseats").val());
        $('seatsBlock :cheaked').each(functions() {
             allSeatsVals.push($(this ).val());
        });
        _


    }

}