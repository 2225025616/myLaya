(function (){
    //初始化引擎
    //参数一： 屏幕宽
    //参数2: 屏幕高
    //参数三： 非必要 是否使用webgl渲染
    Laya.init(600,400,Laya.WebGL)

    // stage 舞台对象， 600*400的区域的实例
    // 屏幕缩放模式，始终全部等比显示
    Laya.stage.scaleMode=Laya.Stage.SCALE_SHOWALL // 始终缩放
    // Laya.stage.scaleMode=Laya.Stage.SCALE_NOSCALE // 不缩放

    // 水平对齐方式
    Laya.stage.alignH=Laya.Stage.ALIGN_CENTER // 水平剧中
    // 垂直对齐方式
    Laya.stage.alignV=Laya.Stage.ALIGN_MIDDLE // 垂直剧中

    // 屏幕适配——横屏或者是竖屏 
    Laya.stage.screenMode=Laya.Stage.SCREEN_NONE // 不改变


    // 实现hello world
    // 舞台 stage
    // sprite 精灵——在窗口内可见的所有的物体的顶级基础类

})(); //模块化管理