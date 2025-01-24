function updateAbacus() {
    let rod1 = parseInt(document.getElementById("rod1").value) || 0;
    let rod2 = parseInt(document.getElementById("rod2").value) || 0;

    if (rod1 < 0) rod1 = 0;
    if (rod2 < 0) rod2 = 0;

    let total = rod1 + rod2;

    document.getElementById("total").innerText = total;
}