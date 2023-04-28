function checkEvenNumber()
{
    var  getEvenNumber = document.getElementById("evenId").value;
    if(getEvenNumber == '' || getEvenNumber == undefined)
    {
        window.alert("Bạn hãy nhập dữ liệu ");
    }
    else if(isNaN(getEvenNumber))
    {
        window.alert("Kiểu dữ liệu chưa đúng , hãy nhập kiểu số ");
    }
    else if(getEvenNumber % 2 == 0)
    {
        window.alert(getEvenNumber + " là số chẵn");
    }
    else
    {
        window.alert(getEvenNumber + " là số lẻ");
    }
}