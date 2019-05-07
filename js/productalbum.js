//搜索框的文字变化
// 搜索框中3个文本框
let input_sec = document.getElementsByClassName("input_sec");
// 搜索框中 span文字变化
let span_conta = document.getElementsByClassName("span_conta")[0].firstElementChild
for (let i = 0; i < input_sec.length; i++) {
    input_sec[i].oninput = function () {
        if (input_sec[i].value != "") {
            span_conta.style.display = "none";
        } else {
            span_conta.style.display = "inline-block";
        }
    }
}

// 搜索栏上的选项卡


//商品ul下的li
let seek_liDom = document.getElementById("seek_top_uls").children
// 热门的第二个ul
let display_none = document.getElementsByClassName("display_none")[0]
// 热门的第一个ul
let sec_hot = document.getElementsByClassName("sec_hot")[0].children[1];
console.log(seek_liDom)
for (let i = 0; i < seek_liDom.length; i++) {
    seek_liDom[0].className = "cur";
    input_sec[0].style.display = "block";
    seek_liDom[i].index = i;
    seek_liDom[i].onclick = function () {
        for (var j = 0; j < seek_liDom.length - 1; j++) {
            seek_liDom[j].className = ''
            input_sec[j].style.display = "none";
        }
        this.className = 'cur'
        input_sec[seek_liDom[i].index].style.display = "block";
        if (i == 1 || i == 2) {
            sec_hot.style.display = "none";
            display_none.style.display = "block";
        } else {
            display_none.style.display = "none";
            sec_hot.style.display = "block";
        }
    }
}

// 导航栏字体颜色
let ulsArr = ["#f63132", "#ee258b", "#5d53e0"];
let nav_uls = document.getElementById("nav_uls");
// 调用长条效果
strip(nav_uls);
let nav_uls_lisDom = nav_uls.children;
for (let i = 0; i < nav_uls_lisDom.length; i++) {
    for (let j = 0; j < ulsArr.length; j++) {
        if (i == 1 || i == 2) {
            nav_uls_lisDom[i].children[0].style.color = ulsArr[i - j];
        } else if (i == 3 || i == 5 || i == 7) {
            nav_uls_lisDom[i].children[0].style.color = ulsArr[j - 1];
        } else if (i == 4 || i == 6) {
            nav_uls_lisDom[i].children[0].style.color = ulsArr[j];
        }
    }
}
// 导航栏滑过效果引用函数
let stripTimer = null;

function strip(obj) {
    let objTar = obj.children;
    for (let i = 0; i < objTar.length; i++) {
        objTar[i].onmouseover = function () {
            objTar[i].firstElementChild.children[0].style.cssText = `position:absolute;
                                                                height: 2px;
                                                                left: 50%;
                                                                width: 0%;
                                                                top:24px;
                                                                background: #fb4d4f;
                                                                display:block;`;
            let width = 0;
            let left1 = 50;
            clearInterval(stripTimer);
            stripTimer = setInterval(function () {
                left1 -= 2
                width += 4
                objTar[i].firstElementChild.children[0].style.width = width + "%";
                objTar[i].firstElementChild.children[0].style.left = left1 + "%";
                if (width == 80) {
                    clearInterval(stripTimer);
                }
            }, 10)
        }
        objTar[i].onmouseout = function () {
            objTar[i].firstElementChild.children[0].style.display = "none";
        }
    }
}

// 闪电发货
let menu_news_uls = document.getElementById("menu_news_uls")
strip(menu_news_uls)

// 排行榜
let menu_right_uls = document.getElementById("menu_right_uls")
strip(menu_right_uls)


// 商品列表选项卡
let seven = new tabSwitch('allList_uls', 'allList_right_menu')

// function tabSwitch(id, cla) {
//     var oBox = document.getElementById(id)
//     this.aBtn = oBox.children
//     this.aDiv = document.getElementsByClassName(cla)
//     var _this = this //对象
//     let shadeTimer = null;
//     document.getElementsByClassName('allList_ul')[0].onmouseover = function (event) {
//         let e = event || window.event;
//         let Dom = [...e.path];
//         for (let i = 0; i < Dom.length; i++) {
//             if (Dom[i].className === 'allList_item') {
//                 // console.log([].indexOf.call(oBox.children,Dom[i]));
//                 // $('.allList_right_menu').css({})
//
//                 let index = [].indexOf.call(oBox.children, Dom[i]);
//                 oBox.nextElementSibling.style.display = 'block';
//                 // $(oBox.nextElementSibling.children).css({'display': 'none'});
//                 oBox.nextElementSibling.children[index].style.display = 'block';
//                 Dom[i].onmouseout = function () {
//                     console.log(this)
//                     oBox.nextElementSibling.children[index].style.display = 'none';
//                 };
//                 // Dom[i].onmouseout = function (){
//                 //     this.lastElementChild.style.display = 'none';
//                 // };
//                 // Dom[i].lastElementChild.style.display = 'block';
//                 return;
//             }
//         }
//     };
//     document.getElementById('show-menu').onmouseleave = function () {
//         this.style.display = "none";
//         // this.lastElementChild.children[index].style.display = 'none';
//     };
// }

function tabSwitch(id, cla) {
    var oBox = document.getElementById(id)
    this.aBtn = oBox.children
    this.aDiv = document.getElementsByClassName(cla)
    var _this = this //对象
    let shadeTimer = null;
    for (var i = 0; i < this.aBtn.length; i++) {
        let shade = this.aBtn[i].lastElementChild.firstElementChild
        this.aBtn[i].index = i
        this.aBtn[i].onmouseenter = function (event) {
            _this.tab(this)
            let e = event || event;
            let pageX = e.pageX;
            let pageY = e.pageY;
            let parentLeft = $("#allList_uls").offset();
            let parentWidth = $("#allList_uls").width()
            let parentHeight = $("#allList_uls").height()
            // console.log(parentLeft.top + parentHeight)
            if (pageX < parentLeft.left || pageX > parentLeft.left) {
                let width = 0;
                shade.style.display = "block";
                if (this.className == "cur") {
                    shade.style.display = "block";
                    clearInterval(shadeTimer);
                    shadeTimer = setInterval(function () {
                        width += 20;
                        if (width >= 700) {
                            width = 700;
                            clearInterval(shadeTimer);
                        }
                        shade.style.width = width + "px";
                        shade.style.overflow = "hidden";
                    }, 10)
                }
                return;
            } else if (pageY > parentLeft.top + parentHeight || pageY == parentLeft.top || pageY < parentLeft.top) {
                let width = 0;
                shade.style.display = "block";
                if (this.className == "cur") {
                    shade.style.display = "block";
                    clearInterval(shadeTimer);
                    shadeTimer = setInterval(function () {
                        width += 20;
                        if (width >= 700) {
                            width = 700;
                            clearInterval(shadeTimer);
                        }
                        shade.style.width = width + "px";
                        shade.style.overflow = "hidden";
                    }, 10)
                }
            } else {
                shade.style.display = "block";
            }
            // 遮罩层
            // let mask = $(".allList_right_menu").css('display');
            // if (mask === "block") {
            //     shade.style.width = 700 + "px";
            //     return;
            // }
            console.log(shade)
        }
        this.aBtn[i].onmouseleave = function () {
            _this.aDiv[this.index].style.display = "none";
            shade.style.display = "none";
            this.className = "";
        }
    }
}

tabSwitch.prototype.tab = function (abtn) {
    for (let j = 0; j < this.aBtn.length; j++) {
        this.aBtn[j].className = ''
        this.aDiv[j].style.display = 'none'
    }
    abtn.className = 'cur'
    this.aDiv[abtn.index].style.display = 'block'
}


// 轮播图

window.onload = function () {
    let banner = new BannerPic({
        "boxDom": document.getElementsByClassName("banner")[0],
        "height": "404",
        "imgs": ['../img/index/4757198b-63e7-484b-9038-49c8fcbe858c.png',
            '../img/index/0ca40a50-8d7c-42eb-b77d-6bf50e4ae158.jpg',
            '../img/index/0f2482ae-6475-4347-b300-977de6287348.jpg',
            '../img/index/1be26b7c-1062-44f9-8e1c-a018514de7f6.jpg',
            '../img/index/6d63c0d1-4850-454e-b340-6b236a127b2e.jpg',
            '../img/index/e6c6edb1-75ca-4027-9d5a-901eb7cfa97a.jpg',
            '../img/index/044d4b73-5d72-439f-b197-cb48e149a8c0.jpg',
            '../img/index/704a98d6-d331-4ab9-a68f-127a533a96d1.jpg',
            '../img/index/091242ca-af92-4581-9cf4-36aabed5af49.jpg',
            '../img/index/104780e1-f52b-4faf-87d7-0e15f88ea129.jpg',
            '../img/index/a940cbb1-0b32-427d-b44d-61cb92591efa.jpg',
            '../img/index/e6c6edb1-75ca-4027-9d5a-901eb7cfa97a.jpg',
            '../img/index/9fc07361-016a-4e05-8c28-cf49f44d30a9.jpg'],
        "douSize": 15,
        "douSpace": 5,
        "douColor": "url(../img/index/btn_listFocus.png) no-repeat",
        "douHighColor": "url(../img/index/focus_selected.png) no-repeat",
        "douIsCircle": true,
        "timeSpace": 6000,
    });
}


// $(".shopPrice").mouseenter(function () {
//     $(".op-uls").css({
//         "transform":"translateY(-264px)",
//         "transition":"all 1s"
//     })
//     $(".shopPrice").mouseleave(function () {
//         $(".op-uls").css({
//             "transform":"translateY(0px)",
//             "transition":"all 1s"
//         })
//     })
// })

let upload = document.getElementsByClassName("upload")
let uploadingTimer = null;
uploading(upload)

function uploading(up) {
    clearInterval(uploadingTimer)
    for (let i = 0; i < up.length; i++) {
        up[i].onmouseenter = function () {
            let height = 0;
            this.lastElementChild.style.display = "block";
            clearInterval(uploadingTimer)
            uploadingTimer = setInterval(() => {
                height += 15
                if (height >= 256) {
                    height = 256
                    clearInterval(uploadingTimer)
                }
                this.lastElementChild.style.height = height + "px";
            }, 10)
        }
        up[i].onmouseleave = function () {
            let height = 256
            clearInterval(uploadingTimer)
            uploadingTimer = setInterval(() => {
                height -= 15
                if (height <= 0) {
                    height = 0
                    clearInterval(uploadingTimer)
                }
                this.lastElementChild.style.height = height + "px";
            }, 10)
        }
    }
}

let showImg = document.getElementsByClassName("shop-img")
let topLine = document.getElementsByClassName("topLine")
let rightLine = document.getElementsByClassName("rightLine")
let bottomLine = document.getElementsByClassName("bottomLine")
let leftLine = document.getElementsByClassName("leftLine")
effects(showImg, topLine, rightLine, bottomLine, leftLine, "width", "height")
let effectsTimer = null;

function effects(obj, topLine, rightLine, bottomLine, leftLine, ap, op) {
    for (let i = 0; i < obj.length; i++) {
        obj[i].onmouseenter = function () {
            let offStyles = 0
            clearInterval(effectsTimer)
            effectsTimer = setInterval(function () {
                offStyles += 10.5
                if (offStyles >= 222) {
                    offStyles = 222
                    clearInterval(effectsTimer)
                }
                topLine[i].style.cssText = `${ap}:${offStyles}px;
                                       background:#da3a4c;
                                       overflow:hidden;`
                bottomLine[i].style.cssText = `${ap}:${offStyles}px;
                                       background:#da3a4c;
                                       overflow:hidden;`
                rightLine[i].style.cssText = `${op}:${offStyles}px;
                                               background:#da3a4c;
                                               overflow:hidden;`
                leftLine[i].style.cssText = `${op}:${offStyles}px;
                                               background:#da3a4c;
                                               overflow:hidden;`
            }, 10)
        }
        obj[i].onmouseleave = function () {
            clearInterval(effectsTimer)
            let offStyles = 222
            effectsTimer = setInterval(function () {
                offStyles -= 10.5
                if (offStyles <= 0) {
                    offStyles = 0
                    clearInterval(effectsTimer)
                }
                topLine[i].style.cssText = `${ap}:${offStyles}px;
                                       background:#da3a4c;
                                       overflow:hidden;`
                bottomLine[i].style.cssText = `${ap}:${offStyles}px;
                                       background:#da3a4c;
                                       overflow:hidden;`
                rightLine[i].style.cssText = `${op}:${offStyles}px;
                                               background:#da3a4c;
                                               overflow:hidden;`
                leftLine[i].style.cssText = `${op}:${offStyles}px;
                                               background:#da3a4c;
                                               overflow:hidden;`
            }, 10)
        }
    }
}

// 样式兼容
// function getSty(domObj, attr) {
//     if (domObj.currentStyle) {
//         return domObj.currentStyle[attr]
//     } else {
//         return window.getComputedStyle(domObj)[attr]
//     }
// }



