// IPアドレスを取得する関数
async function fetchIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('IPアドレスの取得に失敗しました:', error);
        return null;
    }
}

// 履歴をローカルストレージに保存する関数
function saveToHistory(ip) {
    const history = JSON.parse(localStorage.getItem('ipHistory')) || [];
    history.push(ip);
    localStorage.setItem('ipHistory', JSON.stringify(history));
}

// 履歴を表示する関数
function displayHistory() {
    const history = JSON.parse(localStorage.getItem('ipHistory')) || [];
    const historyContainer = document.getElementById('history');
    historyContainer.innerHTML = history.map(ip => `<li>${ip}</li>`).join('');
}

// メインの処理
async function main() {
    displayHistory();

    document.getElementById('fetch-ip').addEventListener('click', async () => {
        const ip = await fetchIP();
        if (ip) {
            saveToHistory(ip);
            displayHistory();
        }
    });
}

// ページが読み込まれたときに実行
window.onload = main;
