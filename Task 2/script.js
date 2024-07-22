document.addEventListener("DOMContentLoaded", () => {
    const data = [
        {
            "title": "Item 1",
            "description": "Description for item 1",
            "image": "images.jpeg"
        },
        {
            "title": "Item 2",
            "description": "Description for item 2",
            "image": "download.jpeg"
        },
        {
            "title": "Item 3",
            "description": "Description for item 3",
            "image": "download (1).jpeg"
        }
    ];

    const itemList = document.getElementById("itemList");
    const itemDetails = document.getElementById("itemDetails");
    const itemTitle = document.getElementById("itemTitle");
    const itemDescription = document.getElementById("itemDescription");
    const itemImage = document.getElementById("itemImage");

    data.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item.title;
        li.addEventListener("click", () => {
            itemTitle.textContent = item.title;
            itemDescription.textContent = item.description;
            itemImage.src = item.image;
            itemDetails.style.display = "block";
        });
        itemList.appendChild(li);
    });
});
