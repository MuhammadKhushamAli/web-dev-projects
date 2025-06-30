const output = document.getElementById('output');

window.addEventListener('keydown', (event) => {
    output.innerHTML = `
    <table>
    <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
    </tr>

    <tr>
    <td>${event.key == ' ' ? 'Space' : event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
    </tr>
    </table>
    `;
    event.preventDefault();
})