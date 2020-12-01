window.onload = function doSonething() {
  let arr1 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  let arr2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  let arr3 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  let arr4 = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
  ];

  let arr5 = [
    [0, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ];

  function checkKhungGo(arr = [], i, j, x, y) {
    let result = true;
    console.log(i, j, x, y);
    for (let sub = i; sub <= y; sub++) {
      if (
        (arr[sub][j - 1] !== 1 && arr[sub][j - 1] !== 2) ||
        (arr[sub][x + 1] !== 1 && arr[sub][x + 1] !== 2)
      ) {
        result = false;
        break;
      }
    }
    for (let sub = j; sub <= x; sub++) {
      if (
        (arr[i - 1][sub] !== 1 && arr[i - 1][sub] !== 2) ||
        (arr[y + 1][sub] !== 1 && arr[y + 1][sub] !== 2)
      ) {
        result = false;
        break;
      }
    }
    return result;
  }

  function checkKhungGo2(arr, i, j, x, chieu) {
    let result = true;
    if (chieu === "doc") {
      if (arr[x + 1][j] !== 1) {
        result = false;
      } else {
        for (let sub = i; sub <= x; sub++) {
          if (arr[sub][j + 1] !== 1 || arr[sub][j - 1] !== 1) {
            result = false;
            break;
          }
        }
      }
    } else {
      if (arr[i][x + 1] !== 1) {
        result = false;
      } else {
        for (let sub = j; sub <= x; sub++) {
          if (arr[i - 1][sub] !== 1 || arr[i + 1][sub] !== 1) {
            result = false;
            break;
          }
        }
      }
    }
    return result;
  }

  function change(arr, i, j, x, y) {
    for (let sub = i; sub <= y; sub++) {
      arr[sub][j] = 4;
      arr[sub][j - 1] = 2;
      arr[sub][x] = 4;
      arr[sub][x + 1] = 2;
    }
    for (let sub = j; sub <= x; sub++) {
      arr[i][sub] = 4;
      arr[i - 1][sub] = 2;
      arr[y][sub] = 4;
      arr[y + 1][sub] = 2;
    }
    return arr;
  }

  function change2(arr, i, j, x, chieu) {
    if (chieu === "doc") {
      arr[i - 1][j] = 2;
      arr[x + 1][j] = 2;
      for (let sub = i; sub <= x; sub++) {
        arr[sub][j] = 4;
        arr[sub][j - 1] = 2;
        arr[sub][j + 1] = 2;
      }
    } else {
      arr[i][j - 1] = 2;
      arr[i][x + 1] = 2;
      for (let sub = j; sub <= x; sub++) {
        arr[i][sub] = 4;
        arr[i + 1][sub] = 2;
        arr[i - 1][sub] = 2;
      }
    }
    return arr;
  }

  function deleteGarden(arr, i, j, x, y) {
    for (let sub = i; sub <= y; sub++) {
      arr[sub][j] = 7;
      arr[sub][j + y - 2] = 7;
    }
    for (let sub = j; sub <= x; sub++) {
      arr[i][sub] = 7;
      arr[i + y - 2][sub] = 7;
    }
    return arr;
  }

  function deleteGarden2(arr, i, j, x, chieu) {
    if (chieu === "doc") {
      for (let sub = i; sub <= x; sub++) {
        arr[sub][j] = 7;
      }
    } else {
      for (let sub = j; sub <= x; sub++) {
        arr[i][sub] = 7;
      }
    }
    return arr;
  }

  function numGardens(arr = []) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 0) {
          if (
            i === 0 ||
            j === 0 ||
            i === arr.length - 1 ||
            j === arr[i].length
          ) {
            arr[i][j] = 7;
          } else if (
            (arr[i + 1][j] === 1 || arr[i + 1][j] === 2) &&
            (arr[i - 1][j] === 1 || arr[i - 1][j] === 2) &&
            (arr[i][j + 1] === 1 || arr[i][j + 1] === 2) &&
            (arr[i][j - 1] === 1 || arr[i][j - 1] === 2)
          ) {
            arr[i][j] = 4;
            arr[i + 1][j] = 2;
            arr[i - 1][j] = 2;
            arr[i][j + 1] = 2;
            arr[i][j - 1] = 2;
            count++;
            continue;
          } else if (
            arr[i + 1][j] === 0 &&
            arr[i][j + 1] === 0 &&
            (arr[i - 1][j] === 1 || arr[i - 1][j] === 2) &&
            (arr[i][j - 1] === 1 || arr[i][j - 1] === 2)
          ) {
            let x = j,
              y = i;
            let isGarden = true;
            while (arr[i][x + 1] === 0) {
              x++;
            }
            while (arr[y + 1][j] === 0) {
              y++;
            }
            for (let sub = j + 1; sub <= x; sub++) {
              if (arr[y][sub] !== 0) {
                isGarden = false;
                break;
              }
            }
            for (let sub = i + 1; sub <= y; sub++) {
              if (arr[sub][x] !== 0) {
                isGarden = false;
                break;
              }
            }
            if (isGarden) {
              if (checkKhungGo(arr, i, j, x, y)) {
                arr = change(arr, i, j, x, y);
                count++;
              } else {
                arr = deleteGarden(arr, i, j, x, y);
              }
            } else {
              for (let sub = i; sub <= y; sub++) {
                arr[sub][j] = 7;
              }
              for (let sub = j; sub <= x; sub++) {
                arr[i][sub] = 7;
              }
            }
          } else if (
            (arr[i + 1][j] === 1 || arr[i + 1][j] === 2) &&
            arr[i][j + 1] === 0 &&
            (arr[i - 1][j] === 1 || arr[i - 1][j] === 2) &&
            (arr[i][j - 1] === 1 || arr[i][j - 1] === 2)
          ) {
            let x = j;
            while (arr[i][x + 1] === 0) {
              x++;
            }
            if (checkKhungGo2(arr, i, j, x, "ngang")) {
              arr = change2(arr, i, j, x, "ngang");
              count++;
            } else {
              arr = deleteGarden2(arr, i, j, x, "ngang");
            }
          } else if (
            arr[i + 1][j] === 0 &&
            (arr[i][j + 1] === 1 || arr[i][j + 1] === 2) &&
            (arr[i - 1][j] === 1 || arr[i - 1][j] === 2) &&
            (arr[i][j - 1] === 1 || arr[i][j - 1] === 2)
          ) {
            let x = i;
            while (arr[x + 1][j] === 0) {
              x++;
            }
            if (checkKhungGo2(arr, i, j, x, "doc")) {
              arr = change2(arr, i, j, x, "doc");
              count++;
            } else {
              arr = deleteGarden2(arr, i, j, x, "doc");
            }
          } else {
            // console.log(i, j);
            arr[i][j] = 7;
          }
        }
      }
    }
    const boldGarden = document.createElement("b");
    boldGarden.innerText = count;
    boldGarden.style.fontSize = "2rem";

    while (document.getElementById("garden").firstChild) {
      document
        .getElementById("garden")
        .removeChild(document.getElementById("garden").firstChild);
    }
    document.getElementById("garden").appendChild(boldGarden);
    return count;
  }

  // console.log(arr);

  function paintGarden(arr = []) {
    const boxElement = document.getElementById("box");
    while (boxElement.firstChild) {
      boxElement.removeChild(boxElement.firstChild);
    }
    for (let i = 0; i < arr.length; i++) {
      const divNode = document.createElement("div");
      divNode.className = "one-row";
      for (let j = 0; j < arr[i].length; j++) {
        const inputNode = document.createElement("input");
        inputNode.type = "number";
        inputNode.max = 1;
        inputNode.min = 0;
        inputNode.className = "input";
        inputNode.id = `${i}-${j}`;
        switch (arr[i][j]) {
          case 4:
            inputNode.classList.add("garden");
            arr[i][j] = 0;
            break;
          case 7:
            arr[i][j] = 0;
            break;
          case 2:
            arr[i][j] = 1;
            inputNode.classList.add("rao");
            break;

          default:
            break;
        }
        inputNode.value = arr[i][j];
        divNode.appendChild(inputNode);
      }
      boxElement.appendChild(divNode);
    }
  }

  function getArrayValue() {
    const listInput = document.getElementsByClassName("input");
    let array = [];
    for (let i = 0; i < listInput.length; i++) {
      const id = listInput[i].id;
      array[parseInt(id[0])] ? null : (array[parseInt(id[0])] = []);
      array[parseInt(id[0])].push(parseInt(listInput[i].value));
    }
    return array;
  }

  function initGarden() {
    const row = document.getElementById("row"),
      column = document.getElementById("column");
    let boxElement = document.getElementById("box");
    while (boxElement.firstChild) {
      boxElement.removeChild(boxElement.firstChild);
    }
    for (let i = 0; i < parseInt(row.value); i++) {
      const divNode = document.createElement("div");
      divNode.className = "one-row";
      for (let j = 0; j < parseInt(column.value); j++) {
        const inputNode = document.createElement("input");
        inputNode.type = "number";
        inputNode.max = 1;
        inputNode.min = 0;
        inputNode.className = "input";
        inputNode.id = `${i}-${j}`;
        divNode.appendChild(inputNode);
      }
      boxElement.appendChild(divNode);
    }
  }

  const buttonCreate = document.getElementById("create");
  buttonCreate.onclick = function () {
    initGarden();
  };

  const buttonOk = document.getElementById("ok");
  buttonOk.onclick = function () {
    arr = getArrayValue();
    numGardens(arr);
    paintGarden(arr);
  };
  numGardens(arr1);
  paintGarden(arr1);

  document.getElementById("mau1").onclick = function () {
    numGardens(arr1);
    paintGarden(arr1);
  };
  document.getElementById("mau2").onclick = function () {
    numGardens(arr2);
    paintGarden(arr2);
  };
  document.getElementById("mau3").onclick = function () {
    numGardens(arr3);
    paintGarden(arr3);
  };
  document.getElementById("mau4").onclick = function () {
    numGardens(arr4);
    paintGarden(arr4);
  };
  document.getElementById("mau5").onclick = function () {
    numGardens(arr5);
    paintGarden(arr5);
  };
};
