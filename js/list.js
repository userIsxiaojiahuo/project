// function switchover(obj, up, next) {
//     let lisDom = obj.children;
//     console.log(lisDom[0].offsetWidth)
//     let index = 0;
//     up.onclick = function () {
//         for (let i = 0; i < lisDom.length; i++) {
//             console.log(lisDom[i])
//         }
//     }
// }
//
//
// let menu_show_uls = document.getElementById("menu_show_uls");
// let menu_up = document.getElementsByClassName("menu_up")[0]
// let menu_next = document.getElementsByClassName("menu_next")[0]
// switchover(menu_show_uls, menu_up, menu_next)
//
// function slideInOut(domInObj, domOutObj, timeLong, func) {
//
//     let timeSpace = 10;//时间间隔 = 总时间/步子数
//     let stepCount = timeLong / timeSpace; //步子数 = 总时间/时间间隔
//     let step = domInObj.offsetWidth / stepCount;//步长 = 路程/步子数
//
//
//     let currLeft = 0;
//     let myTimer = setInterval(() => {
//
//         currLeft -= step;
//
//         if (currLeft <= -1 * domInObj.offsetWidth) {
//             currLeft = -1 * domInObj.offsetWidth;
//             clearInterval(myTimer);
//             func && func();
//         }
//
//         domInObj.style.left = (currLeft + domInObj.offsetWidth) + "px";
//         domOutObj.style.left = currLeft + "px";
//     }, timeSpace);
// }
class Switchover {
    constructor(obj) {
        this.obj = obj;
        this.lisDom = this.obj.children;
        this.pieceBtn = this.obj.parentNode.previousElementSibling.children[0];
        this.nextBtn = this.obj.parentNode.nextElementSibling.children[0];
        this.timer = null;
        this.index = 0;
        this.addEvent();
    }

    addEvent() {
        this.pieceBtn.onclick = () => {
            this.mover(-1, this.lisDom.length / 2)
        }
        this.nextBtn.onclick = () => {
            this.mover(1, this.lisDom.length / 2)
        }
    }

    mover(direction, index) {
        let left = this.obj.offsetLeft
        console.log(left)
        let changeLeft = 0;
        // let speedCount = 1000 / 10
        // let speed = (index * 130) / speedCount
        if (this.obj.style.transform != "" || this.obj.style.transform % 650 != 0) {
            return;
        } else {
            this.index += direction;
            if (this.index + 1 > this.obj.offsetWidth / 650) {
                this.index = 0
            } else if (this.index < 0) {
                this.index = this.obj.offsetWidth / 650
            }
            this.timer = setInterval(() => {
                left += 5 * direction;
                changeLeft += 5;
                if (changeLeft >= 650 + this.obj.offsetLeft) {
                    clearInterval(this.timer)
                }
                this.obj.style.transform = 'translateX(' + left + 'px)';
                for (let i = 0; i < this.lisDom.length; i++) {
                    
                }
            }, 10)
        }
    }
}

let uls = document.getElementById("menu_show_uls")
let list = new Switchover(uls)