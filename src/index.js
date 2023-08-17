// import "./styles.css";

const onClickAdd = () => {
    //textboxの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    //div生成
    const div = document.createElement("div");
    div.className = "list-row";

    //p生成
    const p = document.createElement("p");
    p.className = "one-list";
    p.innerText = inputText;

    //divタグの子要素に各要素を設定
    div.appendChild(p);
    console.log(div);

    //未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(div);
};

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
