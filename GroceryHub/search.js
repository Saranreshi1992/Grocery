document.getElementById("searchBox").addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        const searchKeyword = e.target.value.trim().toLowerCase();

        if (["apple", "banana", "onion", "tomato"].some(p => searchKeyword.includes(p))) {
            localStorage.setItem("searchProduct", JSON.stringify({
                name: searchKeyword,
                category: "fruits"
            }));
            window.location.href = "fruits.html";
        } else if (["7 up", "buttermilk", "boost", "tea"].some(p => searchKeyword.includes(p))) {
            localStorage.setItem("searchProduct", JSON.stringify({
                name: searchKeyword,
                category: "drinks"
            }));
            window.location.href = "drinks.html";
        } else if (["chicken", "mutton", "prawn", "fish"].some(p => searchKeyword.includes(p))) {
            localStorage.setItem("searchProduct", JSON.stringify({
                name: searchKeyword,
                category: "meat"
            }));
            window.location.href = "meat.html";
        } else if (["surf excel", "vim", "lizol", "comfort"].some(p => searchKeyword.includes(p))) {
            localStorage.setItem("searchProduct", JSON.stringify({
                name: searchKeyword,
                category: "cleaning"
            }));
            window.location.href = "cleaning.html";
        } else if (["paneer", "egg", "aavin", "bread"].some(p => searchKeyword.includes(p))) {
            localStorage.setItem("searchProduct", JSON.stringify({
                name: searchKeyword,
                category: "bread"
            }));
            window.location.href = "bread.html";
        } else if (["atta", "oil", "dal", "rice"].some(p => searchKeyword.includes(p))) {
            localStorage.setItem("searchProduct", JSON.stringify({
                name: searchKeyword,
                category: "atta"
            }));
            window.location.href = "atta.html";
            
        }
        else {
            alert("Product not found in our categories.");
        }
    }
});