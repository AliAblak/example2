function example() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var tablo = "<tr style='background-color:#ffcccc'><th>Eğitim Seti Adı</th><th>Eğitmen Adı</th><th>Set Ücreti</th></tr>";
            var xmlvalue = request.responseXML;
            var sets = xmlvalue.getElementsByTagName("sets");
            
            for (var i = 0; i < sets.length; i++) {
                var set = sets[i];
                var content = set.getElementsByTagName("content")[0].textContent;
                var instructor = set.getElementsByTagName("instructor")[0].textContent;
                var price = set.getElementsByTagName("price")[0].textContent;

                var color = (i % 2 === 0) ? "style='background-color:#f1f1f1'" : "style='background-color:#f100e0'";
                tablo += '<tr ${color}><td>${content}</td><td>${instructor}</td><td>${price}</td></tr>';
            }

            document.getElementById("result").innerHTML = tablo;
        }
    };
    request.open("GET", "Example2.xml", true);
    request.send();
}



/*function example() {
    var request  =  new XMLHttpRequest();
    request.onreadystatechange = function() {
     if(this.readyState==4 && this.status==200){
       var tablo      = "<tr style=\"bacjground-color:#fffccc"><><th>Eğitim Seti Adı</th><th>Eğitmen Adı</th><th>Set Ücrei</th></></tr>";
       var xmlvalue   = request.responseXML;
       var tag        = xmlvalue.getElementsByTagName("sets");
       var tagname    = tag.length;
       for(var start = 0; start<tagname; start++){
        var colorControl  = start % 2;
        if(colorControl==0){
            var color    =  "style=\"background-color:#f1f1f1\"";
        }else{
            var color  =  "style=\"background-color:#F10E0E\"";
        }
        tablo+= "<tr " + color + "><td>" + 
        tag[start].getElementsByTagName("content")[0].childNodes[0].nodeValue+
        "</td><td>" + tag[start].getElementsByTagName("instructor")[0].childNodes[0].nodeValue +
        "</td><td>" + tag[start].getElementsByTagName("price")[0].childNodes[0].nodeValue +
        "</td><td>";
       }
       document.getElementById("result").innerHTML = tablo;
     }else{
        document.getElementById("result").innerHTML = "<tr><td>İstek veya Yanıt Anında Hata OLuştu.</tr></td>";
     }
    };
    request.open("GET", "Example2.xml", true);
    request.send;            
 }*/

