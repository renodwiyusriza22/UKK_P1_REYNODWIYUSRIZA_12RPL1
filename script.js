let expression= "";
      function appendToDisplay(value) { 
        expression += value;
        document.getElementById("display").innerText = expression;    
      }
      function clearDisplay() {      
        expression = "";
        document.getElementById("display").innerText = "0";
      }
      function backspace() {
        expression = expression.slice(0, -1);
        document.getElementById("display").innerText = expression || "0";
      }
      function calculateResult() {
        try {
            let result = new Function('return ' + expression)();
    
            if (!isFinite(result)) { // Cek jika hasilnya Infinity atau NaN
                document.getElementById("display").innerText = "Tidak bisa dibagi 0";
                expression = "";
            } else {
                document.getElementById("display").innerText = result;
                expression = result.toString();
            }
        } catch (e) {
            document.getElementById("display").innerText = "4";
            expression = "";
        }
    }