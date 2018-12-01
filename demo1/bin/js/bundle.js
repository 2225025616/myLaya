var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function () {
    var Sprite = Laya.Sprite;
    var Stage = Laya.Stage;
    var Texture = Laya.Texture;
    var Browser = Laya.Browser;
    var Handler = Laya.Handler;
    var WebGL = Laya.WebGL;
    var texture1 = "../../res/img1.png";
    var texture2 = "../../res/img7.png";
    var texture3 = "../../res/img1.png";
    var texture4 = "../../res/img7.png";
    var flag = false;
    var ape;
    (function () {
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#232628";
        Laya.loader.load([texture1, texture2], Handler.create(this, onAssetsLoaded));
    })();
    function onAssetsLoaded() {
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
        cMask.graphics.drawCircle(80, 80, 50, "#ff0000");
        //圆形所在的位置坐标
        cMask.pos(120, 50);
        //实现img显示对象的遮罩效果
        ape.mask = cMask;
    }
    function switchTexture() {
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0xheWFBaXJJREVfYmV0YS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL01haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVkEsQ0FBQyxZQUNEO0FBQ0ksUUFBSSxTQUFVLEtBQUssTUFBbkI7QUFDQSxRQUFJLFFBQVUsS0FBSyxLQUFuQjtBQUNBLFFBQUksVUFBVSxLQUFLLE9BQW5CO0FBQ0EsUUFBSSxVQUFVLEtBQUssT0FBbkI7QUFDQSxRQUFJLFVBQVUsS0FBSyxPQUFuQjtBQUNBLFFBQUksUUFBVSxLQUFLLEtBQW5CO0FBQ0EsUUFBSSxXQUFXLG9CQUFmO0FBQ0EsUUFBSSxXQUFXLG9CQUFmO0FBQ0EsUUFBSSxXQUFXLG9CQUFmO0FBQ0EsUUFBSSxXQUFXLG9CQUFmO0FBQ0EsUUFBSSxPQUFPLEtBQVg7QUFDQSxRQUFJLEdBQUo7QUFDQSxLQUFDLFlBQ0Q7QUFDSTtBQUNBLGFBQUssSUFBTCxDQUFVLFFBQVEsV0FBbEIsRUFBK0IsUUFBUSxZQUF2QyxFQUFxRCxLQUFyRDtBQUNBLGFBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsTUFBTSxZQUExQjtBQUNBLGFBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsTUFBTSxZQUExQjtBQUNBLGFBQUssS0FBTCxDQUFXLFNBQVgsR0FBdUIsU0FBdkI7QUFDQSxhQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLFNBQXJCO0FBQ0EsYUFBSyxNQUFMLENBQVksSUFBWixDQUFpQixDQUFDLFFBQUQsRUFBVyxRQUFYLENBQWpCLEVBQXVDLFFBQVEsTUFBUixDQUFlLElBQWYsRUFBcUIsY0FBckIsQ0FBdkM7QUFDSCxLQVREO0FBVUEsYUFBUyxjQUFULEdBQ0E7QUFDSSxjQUFNLElBQUksTUFBSixFQUFOO0FBQ0EsYUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixHQUFwQjtBQUNBLFlBQUksS0FBSixDQUFVLEVBQVYsRUFBYyxFQUFkO0FBQ0EsWUFBSSxHQUFKLENBQVEsR0FBUixFQUFhLEdBQWI7QUFDQTtBQUNBO0FBQ04sWUFBSSxFQUFKLENBQU8sT0FBUCxFQUFnQixJQUFoQixFQUFzQixhQUF0Qjs7QUFFQTtBQUNBLFlBQUksUUFBUSxJQUFJLE1BQUosRUFBWjtBQUNBO0FBQ0EsY0FBTSxRQUFOLENBQWUsVUFBZixDQUEwQixFQUExQixFQUE2QixFQUE3QixFQUFnQyxFQUFoQyxFQUFtQyxTQUFuQztBQUNDO0FBQ0QsY0FBTSxHQUFOLENBQVUsR0FBVixFQUFjLEVBQWQ7QUFDQztBQUNELFlBQUksSUFBSixHQUFXLEtBQVg7QUFFRztBQUNELGFBQVMsYUFBVCxHQUNBO0FBQ0ksWUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQVQsSUFBaUIsUUFBakIsR0FBNEIsUUFBN0M7QUFDQTtBQUNBO0FBQ0E7QUFDTjtBQUNBOztBQUVBO0FBQ00sWUFBSSxRQUFKLENBQWEsS0FBYjtBQUNBLFlBQUksVUFBVSxLQUFLLE1BQUwsQ0FBWSxNQUFaLENBQW1CLFVBQW5CLENBQWQ7QUFDQSxZQUFJLFFBQUosQ0FBYSxXQUFiLENBQXlCLE9BQXpCLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDO0FBQ0E7QUFDQSxZQUFJLElBQUosQ0FBUyxRQUFRLEtBQWpCLEVBQXdCLFFBQVEsTUFBaEM7QUFDSDtBQUNKLENBNUREIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbigpXHJcbntcclxuICAgIHZhciBTcHJpdGUgID0gTGF5YS5TcHJpdGU7XHJcbiAgICB2YXIgU3RhZ2UgICA9IExheWEuU3RhZ2U7XHJcbiAgICB2YXIgVGV4dHVyZSA9IExheWEuVGV4dHVyZTtcclxuICAgIHZhciBCcm93c2VyID0gTGF5YS5Ccm93c2VyO1xyXG4gICAgdmFyIEhhbmRsZXIgPSBMYXlhLkhhbmRsZXI7XHJcbiAgICB2YXIgV2ViR0wgICA9IExheWEuV2ViR0w7XHJcbiAgICB2YXIgdGV4dHVyZTEgPSBcIi4uLy4uL3Jlcy9pbWcxLnBuZ1wiO1xyXG4gICAgdmFyIHRleHR1cmUyID0gXCIuLi8uLi9yZXMvaW1nNy5wbmdcIjtcclxuICAgIHZhciB0ZXh0dXJlMyA9IFwiLi4vLi4vcmVzL2ltZzEucG5nXCI7XHJcbiAgICB2YXIgdGV4dHVyZTQgPSBcIi4uLy4uL3Jlcy9pbWc3LnBuZ1wiO1xyXG4gICAgdmFyIGZsYWcgPSBmYWxzZTtcclxuICAgIHZhciBhcGU7XHJcbiAgICAoZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIOS4jeaUr+aMgVdlYkdM5pe26Ieq5Yqo5YiH5o2i6IezQ2FudmFzXHJcbiAgICAgICAgTGF5YS5pbml0KEJyb3dzZXIuY2xpZW50V2lkdGgsIEJyb3dzZXIuY2xpZW50SGVpZ2h0LCBXZWJHTCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnblYgPSBTdGFnZS5BTElHTl9NSURETEU7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnbkggPSBTdGFnZS5BTElHTl9DRU5URVI7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBcInNob3dhbGxcIjtcclxuICAgICAgICBMYXlhLnN0YWdlLmJnQ29sb3IgPSBcIiMyMzI2MjhcIjtcclxuICAgICAgICBMYXlhLmxvYWRlci5sb2FkKFt0ZXh0dXJlMSwgdGV4dHVyZTJdLCBIYW5kbGVyLmNyZWF0ZSh0aGlzLCBvbkFzc2V0c0xvYWRlZCkpO1xyXG4gICAgfSkoKTtcclxuICAgIGZ1bmN0aW9uIG9uQXNzZXRzTG9hZGVkKClcclxuICAgIHtcclxuICAgICAgICBhcGUgPSBuZXcgU3ByaXRlKCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZChhcGUpO1xyXG4gICAgICAgIGFwZS5waXZvdCg1NSwgNzIpO1xyXG4gICAgICAgIGFwZS5wb3MoMjAwLCAyMDApO1xyXG4gICAgICAgIC8vIOaYvuekuum7mOiupOe6ueeQhlxyXG4gICAgICAgIHN3aXRjaFRleHR1cmUoKTtcclxuXHRcdGFwZS5vbihcImNsaWNrXCIsIHRoaXMsIHN3aXRjaFRleHR1cmUpOyBcclxuXHRcdFxyXG5cdFx0Ly/liJvlu7rpga7nvanlr7nosaFcclxuXHRcdHZhciBjTWFzayA9IG5ldyBTcHJpdGUoKTtcclxuXHRcdC8v55S75LiA5Liq5ZyG5b2i55qE6YGu572p5Yy65Z+fXHJcblx0XHRjTWFzay5ncmFwaGljcy5kcmF3Q2lyY2xlKDgwLDgwLDUwLFwiI2ZmMDAwMFwiKTtcclxuXHRcdFx0Ly/lnIblvaLmiYDlnKjnmoTkvY3nva7lnZDmoIdcclxuXHRcdGNNYXNrLnBvcygxMjAsNTApO1xyXG5cdFx0XHQvL+WunueOsGltZ+aYvuekuuWvueixoeeahOmBrue9qeaViOaenFxyXG5cdFx0YXBlLm1hc2sgPSBjTWFzaztcclxuXHRcdFxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3dpdGNoVGV4dHVyZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHRleHR1cmVVcmwgPSAoZmxhZyA9ICFmbGFnKSA/IHRleHR1cmUxIDogdGV4dHVyZTI7XHJcbiAgICAgICAgLy8g5pu05o2i57q555CGIDFcclxuICAgICAgICAvLyBhcGUuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAvLyBhcGUubG9hZEltYWdlKHRleHR1cmVVcmwpO1xyXG5cdFx0Ly8gdmFyIHRleHR1cmUgPSBMYXlhLmxvYWRlci5nZXRSZXModGV4dHVyZVVybCk7XHJcblx0XHQvL2VuZFxyXG5cclxuXHRcdC8vIOabtOaNoue6ueeQhiAyXHJcbiAgICAgICAgYXBlLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdmFyIHRleHR1cmUgPSBMYXlhLmxvYWRlci5nZXRSZXModGV4dHVyZVVybCk7XHJcbiAgICAgICAgYXBlLmdyYXBoaWNzLmRyYXdUZXh0dXJlKHRleHR1cmUsIDAsIDApO1xyXG4gICAgICAgIC8vIOiuvue9ruS6pOS6kuWMuuWfn1xyXG4gICAgICAgIGFwZS5zaXplKHRleHR1cmUud2lkdGgsIHRleHR1cmUuaGVpZ2h0KTtcclxuICAgIH1cclxufSkoKTsiXX0=
