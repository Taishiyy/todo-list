// import "./styles.css";

const onClickAdd = () => {
    //text boxの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    //li生成
    const li = document.createElement("li");

    //div生成
    const div = document.createElement("div");
    div.className = "list-row";

    //p生成
    const p = document.createElement("p");
    p.className = "one-list";
    p.innerText = inputText;

    //BUTTON(完了)タグ生成 BUTTON(削除)作成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        //押された完了ボタンの親の親タグ(li)を完了リストに移動
        const backTarget = completeButton.parentNode.parentNode;

        const li = document.createElement("li");

        //div生成
        const div = document.createElement("div");
        div.className = "list-row";

        //p生成
        const p = document.createElement("p");
        p.className = "one-list";
        p.innerText = completeButton.parentNode.firstElementChild.innerText;

        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            const deleteTarget = backButton.parentNode.parentNode;
            document.getElementById("incomplete-list").appendChild(backTarget);
            document.getElementById("complete-list").removeChild(deleteTarget);
        })

        //liタグの子要素に各要素を設定
        div.appendChild(p);
        div.appendChild(backButton);
        li.appendChild(div);
        console.log(li);
    
        //未完了のリストに追加
        document.getElementById("complete-list").appendChild(li);    

        document.getElementById("incomplete-list").removeChild(backTarget);
    })

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        //押された削除ボタンの親タグ（li）を未完了リストから削除
        const deleteTarget = deleteButton.parentNode.parentNode;
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    })

    //liタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    //未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(li);
};

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
