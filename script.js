// script.js
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.href;
    let history = JSON.parse(localStorage.getItem('viewedPages')) || [];

    // 履歴にページを追加
    if (!history.includes(currentPage)) {
        history.push(currentPage);
        localStorage.setItem('viewedPages', JSON.stringify(history));
    }

    // 履歴を表示
    const historyList = document.getElementById('historyList');
    history.forEach(page => {
        const listItem = document.createElement('li');
        listItem.textContent = page;
        historyList.appendChild(listItem);
    });
});
