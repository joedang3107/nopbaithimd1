// Viết hàm kiểm tra xem 1 chuỗi có nằm trong chuỗi còn lại không. Với đầu vào là 2 chuỗi (str1,str2) trong đó sẽ kiểm tra str1 có nằm trong str2 không, nếu có trả về true và ngược lại false.(không được dùng hàm có sẵn để tìm)


let str1 = "hom"

let str2 = "hom nay la 1 ngay dep troi"



function findStr1(str1, str2) {
    
    let myArr = str2.split(" ")

    for (let index = 0; index < myArr.length; index++) {
        if (myArr[index] == str1) {
            alert("str1 có nằm trong str2")
            break;
        }
        else {
            alert("str1 ko nằm trong str2")
            break;
        }
        
    }
}

findStr1(str1, str2)