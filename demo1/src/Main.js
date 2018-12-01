(function()
{
    var Sprite  = Laya.Sprite;
    var Stage   = Laya.Stage;
    var Texture = Laya.Texture;
    var Browser = Laya.Browser;
    var Handler = Laya.Handler;
    var WebGL   = Laya.WebGL;
    var texture1 = "../../res/img1.png";
    var texture2 = "../../res/img7.png";
    var texture3 = "../../res/img1.png";
    var texture4 = "../../res/img7.png";
    var flag = false;
    var ape;
    (function()
    {
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#232628";
        Laya.loader.load([texture1, texture2], Handler.create(this, onAssetsLoaded));
    })();
    function onAssetsLoaded()
    {
        ape = new Sprite();
        Laya.stage.addChild(ape);
        ape.pivot(55, 72);
        ape.pos(200, 200);
        // 显示默认纹理
        switchTexture();
		ape.on("click", this, switchTexture); 
		
		//创建遮罩对象
		var cMask = new Sprite();
		//画一个圆形的遮罩区域
		cMask.graphics.drawCircle(80,80,50,"#ff0000");
			//圆形所在的位置坐标
		cMask.pos(120,50);
			//实现img显示对象的遮罩效果
		ape.mask = cMask;
		
    }
    function switchTexture()
    {
        var textureUrl = (flag = !flag) ? texture1 : texture2;
        // 更换纹理 1
        // ape.graphics.clear();
        // ape.loadImage(textureUrl);
		// var texture = Laya.loader.getRes(textureUrl);
		//end

		// 更换纹理 2
        ape.graphics.clear();
        var texture = Laya.loader.getRes(textureUrl);
        ape.graphics.drawTexture(texture, 0, 0);
        // 设置交互区域
        ape.size(texture.width, texture.height);
    }
})();