// Modal-ները բացելու ունիվերսալ ֆունկցիա
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

// Modal-ները փակելու ունիվերսալ ֆունկցիա
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// Ադմին գաղտնաբառի ստուգում (Լռելյայն PIN: 1234)
function checkAdminPassword() {
    const pass = document.getElementById('adminPassInput').value;
    if (pass === '1234') {
        document.getElementById('adminAuthSection').classList.add('hidden');
        document.getElementById('adminControlsSection').classList.remove('hidden');
        document.getElementById('adminTapReward').value = gameState.tapPower;
        document.getElementById('adminMaxEnergy').value = gameState.maxEnergy;
    } else {
        alert('Սխալ PIN կոդ!');
    }
}

// Կարգավորումների պահպանում
function saveAdminSettings() {
    let mult = parseInt(document.getElementById('adminTapReward').value) || 1;
    let maxE = parseInt(document.getElementById('adminMaxEnergy').value) || 1000;
    
    gameState.tapPower = mult;
    gameState.maxEnergy = maxE;
    
    localStorage.setItem('arm_tap_power', gameState.tapPower);
    localStorage.setItem('arm_max_energy', gameState.maxEnergy);
    
    closeModal('adminModal');
    updateUI();
    alert("Կարգավորումները պահպանված են:");
}
