// Hãy viết một chương trình để biểu diễn hình chữ nhật, với mô tả của lớp hình chữ nhật như sau:

// Rectangle: Tên lớp
// -x: Toạ độ x
// -y: Toạ độ y
// -width: Chiều rộng
// -height: Chiều cao
// -color: Màu sắc (sử dụng max hex)
// +render(canvas): Hiển thị hình chữ nhật trên một canvas
// Hãy thực hiện các thao tác theo kịch bản sau:
// - Tạo một hình chữ nhật có toạ độ 10, 10 và kích thước rộng 200, cao 100, màu #000000
// - Hiển thị hình chữ nhật trên một canvas bằng cách sử dụng phương thức render
// Khai báo được lớp Rectangle

class Rectangle {
    constructor(width, height, x, y) {
        this.width = width
        this.height = height
        this.x = x
        this.y = y
    }

    render() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillRect(x, y, width, height);
    }

}

let rec1 = new Rectangle(10, 10, 200, 100)

rec1.render()