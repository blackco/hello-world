        function addRow(tableID) {

                        var table = document.getElementById(tableID);

                        var rowCount = table.rows.length;
                        var row = table.insertRow(rowCount);

                        var cell1 = row.insertCell(0);
                        var element1 = document.createElement("input");
                        element1.name = "chk[]";
                        element1.type = "checkbox";

                        cell1.appendChild(element1);

                        var cell2 = row.insertCell(1);
                        var element2 = document.createElement("input");
                        element2.name="col1[]";
                        element2.style="border:0;outline:0;display:inline-block";
                        element2.value="~";
                        cell2.appendChild(element2);

                        var cell3 = row.insertCell(2);
                        var element3 = document.createElement("input");
                        element3.name="col2[]";
                        element3.style="border:0;outline:0;display:inline-block";
                        element3.value="~";

                        cell3.appendChild(element3);

        }
     
	function deleteRow(tableID) {
                        try {
                        var table = document.getElementById(tableID);
                        var rowCount = table.rows.length;

                        for(var i=0; i<rowCount; i++) {
                                var row = table.rows[i];
                                var chkbox = row.cells[0].childNodes[0];
                                if(null != chkbox && true == chkbox.checked) {
                                        table.deleteRow(i);
                                        rowCount--;
                                        i--;
                                }


                        }
                        }catch(e) {
                                alert(e);
                        }
                }

