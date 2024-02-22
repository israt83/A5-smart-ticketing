
function scrollToSection() {
    const section2 = document.getElementById('select-section');
    section2.scrollIntoView({ behavior: 'smooth' });
}


const allBtn = document.querySelectorAll('#btn-active');
let count = 0;
let decrement = 40;
const selectedContainer = document.getElementById('selected-seats');

for (const btnActive of allBtn) {
    btnActive.addEventListener('click', function (event) {
        if (!this.classList.contains('selected')) {
            const changeColor = event.target.style.backgroundColor = "green";

            count++;
            document.getElementById("seat-count").innerText = count;
            decrement--;
            document.getElementById("Seats-left").innerText = decrement;
            const selectedContainer = document.getElementById(
                "selected-seats-container"
              );
         
            if (count >= 4) {
                disableRemainingButtons();
            }

            this.classList.add('selected');

            // Add selected seat data
            const div = document.createElement("div");
            div.classList.add("selected-seats");
            div.classList.add("space-x-28");
            div.style.display = "flex";          
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const p3 = document.createElement("p");
            p1.innerText = "" + this.textContent; 
            p2.innerText = "Economy";
            p3.innerText = 550; 
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            selectedContainer.appendChild(div);
            updateTotalCost(550);
            updateGrandTotal();
            
        }
    });
}
function updateTotalCost(price) {
    const previousTotal = document.getElementById("total-cost").innerText;
    const convertedTotal = parseInt(previousTotal);
    const sum = convertedTotal + price;
    document.getElementById("total-cost").innerText = sum;
  }

 
  function updateGrandTotal(control) {
    const previousTotal = document.getElementById("total-cost").innerText;
    const convertedTotal = parseInt(previousTotal);
    const couponCode = document.getElementById("coupon-code").value;
    if (control) {
      if (couponCode == "Couple 20") {
        const discount = convertedTotal * 0.2;
        document.getElementById("grand-total").innerText =
          convertedTotal - discount;
      }else if(couponCode == "NEW 15"){
        const discount = convertedTotal * 0.15;
        document.getElementById("grand-total").innerText =
          convertedTotal - discount;
      } 
      else {
        alert("Invalid Coupon Code No Discount");
        return;
      }
    } else {
      document.getElementById("grand-total").innerText = convertedTotal;
    }
   
   
  }  


function disableRemainingButtons() {
  for (let i = 0; i < allBtn.length; i++) {
      const btn = allBtn[i];
      if (!btn.classList.contains('selected')) {
          btn.disabled = true;
      }
  }
}


