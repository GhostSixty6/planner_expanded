window.onload = function() {
    var styleSheet = document.createElement("style");

    styleSheet.textContent = "td.fc-day-sat, td.fc-day-sun, table.fc-col-header tr th:nth-child(6), table.fc-col-header tr th:nth-child(7){display: none;}.fc .fc-daygrid-day-frame {height: 220px!important;}.root-117 > .appContent > :nth-child(1) {flex: 0 0 200px;}";

    document.head.appendChild(styleSheet);
}