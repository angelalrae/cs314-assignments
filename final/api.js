//when button is submitted
let button = document.getElementById("button");
button.addEventListener("click", () => {
    $('form').submit();
});
$('form').submit((event) => {
    event.preventDefault();
    //get + verify show title
    let showTitle = document.getElementById("title").value;
    if (showTitle == "") {
        document.getElementById("title-error").style.display = "inline";
    } else { //if title entered, get shows
        let showsPanel = document.getElementById("shows-list");
        showsPanel.innerHTML = "";
        $(function() {
            $.ajax({
                url: "http://api.tvmaze.com/search/shows?q=" + showTitle,
                type: "GET",
                success: function(data) {
                    makeList(data);
                }
            });
        });
    }
});

function makeList(data) {
    let showsPanel = document.getElementById("shows-list");
    let showsList = document.createElement("ol");
    showsList.className = "list";
    let index = 0;
    while (index < 10) {
        let show = data[index].show;
        let showLi = document.createElement("li");
        showLi.innerHTML = show.name;
        //when a list item is clicked, show details about that show
        showLi.addEventListener("click", () => {
            let detailsPanel = document.getElementById("show-details");
            detailsPanel.innerHTML = "";
            let title = document.createElement("p");
            title.innerHTML = "Title: " + show.name;

            let network = document.createElement("p");
            network.innerHTML = "Network: " + show.network.name;

            let premiereDate = document.createElement("p");
            premiereDate.innerHTML = "Premiered: " + show.premiered;

            let summary = document.createElement("p");
            summary.className = "summary";
            summary.innerHTML = show.summary;

            detailsPanel.append(title)
            detailsPanel.append(network);
            detailsPanel.append(premiereDate);
            detailsPanel.append(summary);
        });
        showsList.append(showLi);
        index++;
    }
    showsPanel.append(showsList);
}