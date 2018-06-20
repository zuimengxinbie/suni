
window.onload=function(){ 
    let lia=document.querySelectorAll(".topnavbox .topnav .leftnavbox1");
    let cqsmall=document.querySelectorAll(".topnavbox .topnav .leftnavbox1 ul");
    let navcon=document.querySelector(".topnavbox .topnav");
    
    navcon.onmouseenter=function(){
        cqsmall.forEach((item)=>{
            item.classList.add("tran");
        });
    }
    lia.forEach((item,index)=>{
        item.onmouseover=function(){
            if(index>2){
                return;
            }
            cqsmall[index].classList.add("active");
            if(index==0){
            	cqsmall[index].classList.add("weizi0");
                cqsmall[index].classList.add("active1");
            }            
            if(index==1){
            	cqsmall[index].classList.add("weizi1");
            }
            if(index==2){
            	cqsmall[index].classList.add("weizi2");
            }
        }
        item.onmouseout=function(){
            if(index>2){
                return;
            }
            cqsmall[index].classList.remove("active");
            cqsmall[index].classList.remove("active1");
            cqsmall.forEach((item)=>{
                item.classList.remove("tran");
            })
            cqsmall[index].classList.add("tran");

        }
    });
    //最后一个框点击实现
    let sinput1=document.querySelector(".topnav .topnavleft .leftnavcitybox .leftnavcity");
    let con2=document.querySelector(".topnavbox .topnav .leftnavcitybox .one");
    console.log(sinput1,con2);              //问题1
    let status1=true;                  //问题1
    sinput1.onclick=function(){
        status1=false;
        con2.style="display:block";

    }
    sinput1.onmouseout=function(){
        status1=true;
        con2.style="display:none";
    }
    //待解决问题
   let di1=document.querySelector(".topnavbox .topnav .leftnavcitybox");
   let one=document.querySelector(".topnavbox .topnav .leftnavcitybox .one");
    

    let lia1=document.querySelectorAll(".topnavbox .topnav .leftnavbox2");
    let cqsmall1=document.querySelectorAll(".topnavbox .topnav .leftnavbox2 ul");
    let navcon1=document.querySelector(".topnavbox .topnav");
    
    navcon1.onmouseenter=function(){
        cqsmall1.forEach((item)=>{
            item.classList.add("tran");
        });
    }
    lia1.forEach((item,index)=>{
        item.onmouseover=function(){
            if(index>3){
                return;
            }
            cqsmall1[index].classList.add("active");
            if(index==0){
            	cqsmall1[index].classList.add("weizi0");
            }            
            if(index==1){
            	cqsmall1[index].classList.add("weizi1");
            }
            if(index==2){
            	cqsmall1[index].classList.add("weizi2");
            }
            if(index==3){
            	cqsmall1[index].classList.add("weizi3");
            }
        }
        item.onmouseout=function(){
            if(index>3){
                return;
            }
            cqsmall1[index].classList.remove("active");
            cqsmall1.forEach((item)=>{
                item.classList.remove("tran");
            })
            cqsmall1[index].classList.add("tran");

        }
    });


   //轮播图
    let son = document.querySelectorAll(".son");
    console.log(son);
    //点点数组
    let btnsLi = document.querySelectorAll(".btns li");
    let t = setInterval(run,2000);
    let index = 0;

    function run(type="next"){
        if(type == "next"){
            index++;
            if(index>7){
                index = 0;
            }
        }else if(type=="prev"){
            index--;
            if(index<0){
                index = 7;
            }
        }
        
        son.forEach((item)=>{
            item.classList.remove("active");
        });
        //点点遍历
        btnsLi.forEach((item)=>{
            item.classList.remove("active");
        });
        son[index].classList.add("active");
        btnsLi[index].classList.add("active");
    } 



//放图片框大框
    let banner = document.querySelector(".banner");
    //移入暂停
    banner.onmouseenter = function(){
        clearInterval(t);
    }
    //移入继续
    banner.onmouseleave = function(){
        t = setInterval(run,2000);
    }



    //左右键
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    //右键点击
    next.onclick = function(){
        run();
    }
    //左键点击
    prev.onclick = function(){
        run("prev");    
    }




    //点点点击
    btnsLi.forEach((item,i)=>{
        item.onclick = function(){
            btnsLi.forEach((item)=>{
                item.classList.remove("active");
            })
            
            btnsLi[i].classList.add("active");
            //点击之后来到这个页面，然后继续从这个页面开始开始运行
            index = i;
            son.forEach((item)=>{
                item.classList.remove("active");
            })
            son[index].classList.add("active");
        }
    })



    //banner右侧滑动
    let blis = document.querySelectorAll(".bannerbox .banner .banner-nav .banner-nav-list li");
    let boxs = document.querySelectorAll(".bannerbox .banner .banner-nav .banner-nav-list .box");
    for(let i=0; i<blis.length; i++){
        boxs[i].style.display = 'none';
        blis[i].onmouseover = function(){
            boxs.forEach((item)=>{
                item.style.display = 'none';
            })
            boxs[i].style.display = 'block';
        }
        blis[i].onmouseout = function(){
            boxs.forEach((item)=>{
                item.style.display = 'none';
            })
        }
    }


    //搜索框
    let sinput=document.querySelector(".headsearch-top .topleft .text");
    let con=document.querySelector(".headbox .head .headsearch .headsearch-top .con");
    console.log(sinput,con)

    let status=true;                  //问题1
    sinput.onfocus=function(){
        status=false;
        con.style="display:block;"

    }
    sinput.onblur=function(){
        status=true;
        con.style="display:none"
    }

}